export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="text-sm font-medium tracking-wide uppercase text-slate-500">The permit layer Canada has been missing.</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Canada’s First AI-Powered Construction Permit Infrastructure and Operating System
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-7 text-slate-700">
            Built for contractors first — launching in BC and expanding nationwide.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm ring-1 ring-slate-900/10 hover:shadow-md transition"
            >
              Request Early Access
            </a>
            <span className="text-sm text-slate-500">Pilot access prioritized for BC contractors.</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Permitting in Canada Is Fragmented, Slow, and Unpredictable</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            Each municipality has its own rules, forms, and approval logic — with no unified infrastructure. Contractors are forced to
            navigate inconsistent requirements, unclear documentation, and manual workflows that waste time and create bottlenecks.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["Every city = a different process","No standardization or visibility","Rejections caused by guesswork","Lost billable hours","Homeowners left confused and dependent"].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-900"></span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-slate-700">Permits are not a building issue — they are a <span className="font-semibold">process</span> issue.</p>
        </div>
      </section>

      {/* SOLUTION */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">From Manual Obstacle to Intelligent, Automated Workflow</h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            PermitWave guides, interprets, and prepares permit applications end‑to‑end — not as a consultant, but as a
            <span className="font-semibold"> digital operating layer</span> that executes the process on behalf of the contractor. Instead of outsourcing confusion, PermitWave eliminates it.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">How It Works</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {title: "Describe the Project", body: "Input scope, address, and basic details. We infer municipal context automatically."},
              {title: "Get the Requirements", body: "AI interprets local rules and builds a tailored checklist and forms."},
              {title: "Auto‑Build the Package", body: "We standardize documents and validate pre‑submission to prevent rejections."},
              {title: "Submit & Track", body: "Sync the workflow with the municipality and reduce delay cycles."},
            ].map((card) => (
              <div key={card.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
                <h4 className="text-base font-semibold">{card.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI LAYER */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">AI That Doesn’t Just Advise — It Executes</h3>
          <p className="mt-4 max-w-3xl text-slate-700">
            Our intelligence layer learns municipal rules, interprets requirements, and prevents rejections before they happen — improving with every permit outcome. This isn’t a chatbot; it’s applied intelligence and institutional memory.
          </p>
        </div>
      </section>

      {/* OS LAYER */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Infrastructure, Not Paperwork</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Standardizes documentation","Builds compliant packages automatically","Validates before submission","Synchronizes workflow steps","Reduces delay cycles with municipalities","Makes permitting repeatable and predictable"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOAT */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Defensibility: Triple Moat</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {title: "Tech Moat", body: "AI + execution automation — far beyond UI or form-fillers."},
              {title: "Data Moat", body: "Evolving municipal rule logic and case knowledge that compounds."},
              {title: "Network Moat", body: "Contractor adoption locks in demand; switching becomes unlikely."},
            ].map((m) => (
              <div key={m.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5">
                <h4 className="text-base font-semibold">{m.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANSION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Expansion Strategy</h3>
          <ol className="mt-6 list-decimal pl-6 text-slate-700 space-y-2">
            <li><span className="font-medium">BC First (Residential):</span> capture demand and learn deeply at the municipal level.</li>
            <li><span className="font-medium">Canada Next:</span> standardize multi-city rule logic and compound the data moat.</li>
            <li><span className="font-medium">Commercial Future:</span> extend workflows for high‑value projects.</li>
          </ol>
        </div>
      </section>

      {/* CTAs */}
      <section id="request">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm ring-1 ring-slate-900/10 hover:shadow-md transition"
            >
              Apply for Pilot Access
            </a>
            <span className="text-sm text-slate-500">Early contractors get prioritized onboarding in BC.</span>
          </div>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} PermitWave. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#apply" className="hover:underline">Pilot Access</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
