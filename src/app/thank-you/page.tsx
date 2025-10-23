// src/app/thank-you/page.tsx  یا app/thank-you/page.tsx
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-8">
      <h1 className="text-3xl font-bold">Thank you!</h1>
      <p className="mt-4 text-slate-600">We received your submission.</p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm ring-1 ring-slate-900/10 hover:shadow-md transition"
      >
        Back to home
      </Link>
    </main>
  );
}
