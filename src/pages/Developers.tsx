import SectionHeading from "../components/SectionHeading";

const authRequestExample = `{
  "event_type": "login_new_device",
  "application_user_id": "usr_82a1f",
  "metadata": {
    "ip": "203.0.113.42",
    "user_agent": "Mozilla/5.0..."
  }
}`;

const authResponseExample = `{
  "event_id": "evt_9k2mX4pL",
  "status": "processed",
  "timestamp": "2026-03-01T14:22:08Z"
}`;

const notificationRequestExample = `{
  "event_type": "subscription_renewed",
  "application_user_id": "usr_82a1f",
  "template": "renewal_confirmation"
}`;

const notificationResponseExample = `{
  "event_id": "evt_Lm8nR3qW",
  "status": "queued",
  "timestamp": "2026-03-01T14:23:11Z"
}`;

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm leading-relaxed text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function Developers() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Developer Documentation"
          subtitle="UniSynthe exposes a REST API for structured application events."
        />
        <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 space-y-2">
          <p>
            The API is event-based: the integrating application sends an
            application event associated with its own user account, and
            UniSynthe processes the event as part of that application workflow.
          </p>
          <p>
            Depending on application configuration, certain events may produce
            a user-facing notification.
          </p>
        </div>

        <div className="mb-12 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
          <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
            Your Application
          </div>
          <span className="text-slate-400">→</span>
          <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
            UniSynthe API
          </div>
          <span className="text-slate-400">→</span>
          <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
            Output Channel
          </div>
          <span className="text-slate-400">→</span>
          <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
            Application User
          </div>
        </div>

        <div className="space-y-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">
              POST /v1/events/authentication
            </h2>
            <p className="mb-6 text-sm text-slate-600">
              Submit authentication events such as suspicious logins, new-device
              sign-ins, and account recovery attempts.
            </p>
            <div className="space-y-5">
              <CodeBlock title="Request" code={authRequestExample} />
              <CodeBlock title="Response (200 OK)" code={authResponseExample} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">
              POST /v1/events/notification
            </h2>
            <p className="mb-6 text-sm text-slate-600">
              Submit application notification events tied to account or service
              activity.
            </p>
            <div className="space-y-5">
              <CodeBlock title="Request" code={notificationRequestExample} />
              <CodeBlock
                title="Response (200 OK)"
                code={notificationResponseExample}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p>
              All requests require a Bearer token issued during integration
              approval.
            </p>
            <p className="mt-2">
              UniSynthe posts event status updates to your configured webhook
              URL.
            </p>
            <p className="mt-2">
              Full API reference and SDK libraries are available after
              integration approval.
            </p>
          </div>
          <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
            UniSynthe is designed for applications where users maintain an
            ongoing account relationship with the service.
          </p>
        </div>
      </div>
    </section>
  );
}
