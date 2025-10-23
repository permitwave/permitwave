export default function ThankYou() {
  return (
    <main style={{ fontFamily: "ui-sans-serif,system-ui", color: "#e2e8f0", background: "#0a0f1c" }}>
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>✅ Thanks — we got your message!</h1>
        <p style={{ opacity: .9, marginTop: 12 }}>
          Our team will reach out within 24 hours. If it’s urgent, email{" "}
          <a href="mailto:support@permitwave.com" style={{ color: "#93c5fd", textDecoration: "underline" }}>
            support@permitwave.com
          </a>.
        </p>
        <p style={{ marginTop: 24 }}>
          <a href="/" style={{ color: "#93c5fd", textDecoration: "underline" }}>← Back to home</a>
        </p>
      </section>
    </main>
  );
}
