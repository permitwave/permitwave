export default function Dashboard() {
  return (
    <main style={{maxWidth:720, margin:"48px auto", padding:"0 20px", color:"#e2e8f0"}}>
      <h1>Dashboard (Preview)</h1>
      <p style={{opacity:.85}}>
        Your workspace will appear here. We’re onboarding pilot users now.
      </p>
      <ul style={{lineHeight:1.8, opacity:.9}}>
        <li>Create projects</li>
        <li>Upload documents</li>
        <li>Track permit status</li>
      </ul>
      <p style={{marginTop:24}}>
        Email us:{" "}
        <a href="mailto:support@permitwave.com?subject=Pilot%20Access%20Request"
           style={{textDecoration:"underline", color:"#93c5fd"}}>
          support@permitwave.com
        </a>
      </p>
    </main>
  );
}
