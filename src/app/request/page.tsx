export default function Request() {
  return (
    <main className="min-h-screen bg-white text-slate-900 p-8">
      <h1 className="text-3xl font-bold">Request Early Access</h1>
      <p className="mt-2 text-slate-600">We’re onboarding contractors in BC first.</p>

      <form
        className="mt-8 max-w-md space-y-4"
        action="https://formspree.io/f/mqayvjda"  // ← Formspree ID خودت
        method="POST"
      >
        <input name="name" placeholder="Full name" className="w-full rounded border p-3" required />
        <input name="email" type="email" placeholder="Work email" className="w-full rounded border p-3" required />
        <input name="phone" placeholder="Phone (optional)" className="w-full rounded border p-3" />
        <textarea name="notes" placeholder="What are you building?" className="w-full rounded border p-3 h-28" />
        <button className="rounded-2xl px-6 py-3 font-semibold shadow ring-1 ring-slate-900/10">Submit</button>
      </form>
    </main>
  );
}
