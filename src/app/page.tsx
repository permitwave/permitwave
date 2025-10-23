// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main style={{fontFamily:"ui-sans-serif,system-ui", color:"#e2e8f0", background:"#0a0f1c"}}>
      {/* Hero */}
      <section style={{maxWidth:980, margin:"0 auto", padding:"80px 20px 56px", textAlign:"center"}}>
        <h1 style={{fontSize:44, lineHeight:1.15, margin:"0 0 16px"}}>
          Streamlined Building Permit Management — All in One Place
        </h1>
        <p style={{opacity:.9, fontSize:18, margin:"0 0 24px"}}>
          Upload required documents, track status, and submit permit applications to your municipality — without paperwork chaos.
        </p>
        <div style={{display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap"}}>
          <Link href="/dashboard" style={btnPrimary}>Open Dashboard (Preview)</Link>
          <a
            href="mailto:support@permitwave.com?subject=Demo%20Request&body=Hi%20Permitwave%20Team%2C%0A%0AI%27d%20like%20a%20demo.%20Here%20are%20my%20details%3A%0A-%20Name%3A%0A-%20Company%3A%0A-%20City%3A%0A-%20Permit%20type(s)%3A%0A%0AThanks!"
            style={btnSecondary}
          >
            Request a Demo
          </a>
        </div>
      </section>

      {/* Value strip */}
      <section style={{borderTop:"1px solid #132036", borderBottom:"1px solid #132036", background:"#0f172a"}}>
        <div style={{maxWidth:980, margin:"0 auto", padding:"12px 20px", textAlign:"center", opacity:.8, fontSize:14}}>
          Building • Electrical • Plumbing • HVAC • Signage
        </div>
      </section>

      {/* Features */}
      <section style={{maxWidth:1040, margin:"0 auto", padding:"48px 20px"}}>
        <h2 style={h2}>Why Permitwave?</h2>
        <div style={grid}>
          <Card title="Smart Document Checklist">
            Automatically generates requirements by permit type and municipality.
          </Card>
          <Card title="Centralized File Storage">
            Upload drawings, reports, revisions, and approvals — organized and searchable.
          </Card>
          <Card title="Live Status Tracking">
            Draft, Submitted, Under Review, Approved — always know where you stand.
          </Card>
          <Card title="Team Collaboration">
            Share secure access with contractors, engineers, and homeowners.
          </Card>
          <Card title="Municipal Integrations (Soon)">
            Send and manage submissions directly to cities.
          </Card>
          <Card title="Analytics & History">
            KPIs, timelines, and full audit history across projects.
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section style={{maxWidth:1040, margin:"0 auto", padding:"8px 20px 48px"}}>
        <h2 style={h2}>How It Works</h2>
        <ol style={{lineHeight:1.8, opacity:.9, margin:0, paddingLeft:18}}>
          <li>Create a project and select jurisdiction</li>
          <li>Upload required documents via the smart checklist</li>
          <li>Submit to the city (manual for now — automated later)</li>
          <li>Track reviews, upload revisions, and receive approvals</li>
        </ol>
      </section>

      {/* Pilot CTA */}
      <section style={{maxWidth:1040, margin:"0 auto", padding:"32px 20px"}}>
        <div style={{border:"1px solid #1f2a44", background:"#0b1220", borderRadius:12, padding:24, textAlign:"center"}}>
          <h3 style={{marginTop:0, fontSize:22}}>Join the Pilot (Early Access)</h3>
          <p style={{opacity:.9, marginTop:8}}>
            We’re onboarding a small group of contractors and professionals in BC. Pilot users get free access and direct influence on the roadmap.
          </p>
          <a
            href="mailto:support@permitwave.com?subject=Pilot%20Program%20Application&body=Hi%20Permitwave%20Team%2C%0A%0AI%27d%20like%20to%20join%20the%20pilot.%20Details%3A%0A-%20Name%3A%0A-%20Company%3A%0A-%20City%3A%0A-%20Permit%20type(s)%3A%0A-%20Expected%20volume%3A%0A%0AThanks!"
            style={btnPrimary}
          >
            Apply for Pilot
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{maxWidth:760, margin:"0 auto", padding:"48px 20px"}}>
        <h2 style={h2}>Contact / Request a Demo</h2>
        <p style={{opacity:.85, marginTop:0}}>Leave your details and we’ll get back within 24 hours.</p>

        {/* If you don't have Formspree yet, the email link below covers it. */}
        <form action="https://formspree.io/f/mqayvjda" method="POST" style={{display:"grid", gap:12}}>
          <input className="input" name="name" placeholder="Full name" required />
          <input className="input" name="email" type="email" placeholder="Work email" required />
          <input className="input" name="phone" placeholder="Phone (optional)" />
          <textarea className="input" name="message" placeholder="Tell us about your project or permitting needs…" rows={5} />
          <button className="btn" type="submit">Send</button>
        </form>

        <p style={{marginTop:12}}>
          Prefer email? Write to{" "}
          <a href="mailto:support@permitwave.com?subject=Contact%20from%20website"
             style={{textDecoration:"underline", color:"#93c5fd"}}>
            support@permitwave.com
          </a>
        </p>

        <p style={{opacity:.7, fontSize:13, marginTop:8}}>
          By submitting this form, you agree to be contacted about Permitwave. You can opt out anytime.
        </p>
      </section>

      {/* Footer */}
      <footer style={{borderTop:"1px solid #132036", padding:"18px 20px", textAlign:"center", opacity:.7}}>
        © {new Date().getFullYear()} Permitwave — Beta
      </footer>
    </main>
  );
}

const h2: React.CSSProperties = { fontSize:28, margin:"0 0 16px" };

const btnPrimary: React.CSSProperties = {
  background:"#2563eb", color:"#fff", padding:"10px 14px",
  borderRadius:8, border:"1px solid #1d4ed8"
};

const btnSecondary: React.CSSProperties = {
  background:"#0f172a", color:"#e2e8f0", padding:"10px 14px",
  borderRadius:8, border:"1px solid #1e293b"
};

const grid: React.CSSProperties = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",
  gap:12
};

function Card({title, children}:{title:string, children:React.ReactNode}) {
  return (
    <div style={{border:"1px solid #1f2a44", background:"#0b1220", padding:16, borderRadius:12}}>
      <div style={{fontWeight:600, marginBottom:6}}>{title}</div>
      <div style={{opacity:.9}}>{children}</div>
    </div>
  );
}
