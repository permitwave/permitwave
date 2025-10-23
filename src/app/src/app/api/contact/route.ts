// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

// انتخاب Provider با ENV: "formspree" | "resend" | "mailchannels"
const PROVIDER = process.env.CONTACT_PROVIDER || "formspree";

// Formspree
const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

// Resend (برای آینده)
const RESEND_API_KEY = process.env.RESEND_API_KEY;

// اختیاری: گیرنده ایمیل (برای resend/mailchannels)
const CONTACT_TO = process.env.CONTACT_TO || "support@permitwave.com";

export async function POST(req: NextRequest) {
  try {
    // سعی کن داده‌ها را به صورت formData بگیری؛ اگر نشد JSON را به FormData تبدیل کن
    const form = await req.formData().catch(async () => {
      const json = await req.json();
      const fd = new FormData();
      Object.entries(json || {}).forEach(([k, v]) => fd.append(k, String(v ?? "")));
      return fd;
    });

    // ضداسپم ساده (honeypot)
    if ((form.get("_hp") as string)?.length) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (form.get("name") as string) || "";
    const email = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const message = (form.get("message") as string) || "";

    if (!name || !email) {
      return NextResponse.json({ error: "name/email required" }, { status: 400 });
    }

    // ---- Formspree (پیشنهادی برای شروع) ----
    if (PROVIDER === "formspree") {
      if (!FORMSPREE_ENDPOINT) {
        return NextResponse.json({ error: "FORMSPREE_ENDPOINT missing" }, { status: 500 });
      }
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => ({}));
      return NextResponse.json({ ok: res.ok, provider: "formspree", data }, { status: res.ok ? 200 : 500 });
    }

    // ---- Resend (برای بعداً) ----
    if (PROVIDER === "resend") {
      if (!RESEND_API_KEY) {
        return NextResponse.json({ error: "RESEND_API_KEY missing" }, { status: 500 });
      }
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Permitwave <no-reply@permitwave.com>",
          to: [CONTACT_TO],
          subject: "New contact from Permitwave",
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      return NextResponse.json({ ok: res.ok, provider: "resend", data }, { status: res.ok ? 200 : 500 });
    }

    // ---- MailChannels (Cloudflare-friendly) ----
    if (PROVIDER === "mailchannels") {
      const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: CONTACT_TO }] }],
          from: { email: "no-reply@permitwave.com", name: "Permitwave" },
          subject: "New contact from Permitwave",
          content: [
            {
              type: "text/html",
              value: `
                <h3>New Contact</h3>
                <p><b>Name:</b> ${escapeHtml(name)}</p>
                <p><b>Email:</b> ${escapeHtml(email)}</p>
                <p><b>Phone:</b> ${escapeHtml(phone)}</p>
                <p><b>Message:</b><br>${escapeHtml(message).replace(/\n/g,"<br/>")}</p>
              `,
            },
          ],
        }),
      });
      const data = await res.json().catch(() => ({}));
      return NextResponse.json({ ok: res.ok, provider: "mailchannels", data }, { status: res.ok ? 200 : 500 });
    }

    return NextResponse.json({ error: "unknown provider" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

// کمک‌تابع برای جلوگیری از اینجکشن HTML
function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
