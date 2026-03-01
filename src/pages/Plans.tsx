import SectionHeading from "../components/SectionHeading";

export default function Plans() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Plans"
          subtitle="Structured access for development, production operations, and advanced integration needs."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">
              Starter (Development)
            </h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Sandbox access</li>
              <li>Limited event volume</li>
              <li>Test notifications</li>
              <li>Integration testing</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">
              Production (Approved Integration)
            </h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Production event processing</li>
              <li>Monitoring</li>
              <li>Event status webhooks</li>
              <li>Operational support</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">Enterprise</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Dedicated review</li>
              <li>Higher event limits</li>
              <li>SLA coordination</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          Production access is issued only after application integration review.
        </p>
      </div>
    </section>
  );
}
