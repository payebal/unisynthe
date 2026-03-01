import { Link } from "react-router-dom";
import {
  KeyRound,
  ShieldAlert,
  Bell,
  Activity,
  Code2,
  Repeat2,
  Webhook,
  ArrowRight,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";

const features = [
  {
    icon: <KeyRound className="h-6 w-6" />,
    title: "User Authentication",
    description:
      "Secure login flows, one-time codes for authentication events, and account recovery workflows.",
  },
  {
    icon: <ShieldAlert className="h-6 w-6" />,
    title: "Security Alerts",
    description:
      "Automated notifications about suspicious logins, account changes, and anomalous session activity.",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "System Notifications",
    description:
      "Application-generated alerts triggered by internal events such as status changes and transactional confirmations.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Login Risk Signals",
    description:
      "Suspicious login detection, session risk scoring, and IP-based account protection.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Application Security &amp; Notification APIs for Developers
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            UniSynthe provides APIs for authentication events, account security,
            and operational notifications. One integration point for login
            flows, account protection, and application event processing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-access"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Apply for Integration
            </Link>
            <Link
              to="/developers"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
            >
              View Developer Docs
            </Link>
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Early access available for qualified integrations.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="How it works" />
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Applications send structured events to UniSynthe (for example:
              login from new device, password reset requested, account settings
              changed). UniSynthe processes each event and returns the
              appropriate response or triggers the configured action within the
              application workflow.
            </p>
            <p>
              Some application events may result in a user-facing notification
              (for example, a login alert or a password reset notice). UniSynthe
              coordinates these notifications as part of the application
              workflow.
            </p>
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
            <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
              Your Application
            </div>
            <ArrowRight className="mx-auto h-4 w-4 text-slate-400" />
            <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
              UniSynthe API
            </div>
            <ArrowRight className="mx-auto h-4 w-4 text-slate-400" />
            <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
              Output Channel
            </div>
            <ArrowRight className="mx-auto h-4 w-4 text-slate-400" />
            <div className="rounded-lg border border-slate-200 p-3 text-sm font-medium text-slate-700">
              Application User
            </div>
          </div>

          <p className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600">
            Example: A project management SaaS detects a login from a new
            browser. The application triggers a security event through
            UniSynthe, which processes it and notifies the user about the
            new sign-in.
          </p>
        </div>
      </section>

      <section className="py-20">
        <SectionHeading
          title="Who uses UniSynthe"
          subtitle="UniSynthe is designed for applications where users maintain an ongoing account relationship with the service and need reliable authentication and operational notifications."
        />
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="mb-2 font-semibold text-slate-900">SaaS dashboards</h3>
            <p className="text-sm text-slate-600">
              Business software where employees log in to manage projects, data,
              or customer records.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="mb-2 font-semibold text-slate-900">Customer portals</h3>
            <p className="text-sm text-slate-600">
              Web applications where users access subscriptions, services, or
              account information.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="mb-2 font-semibold text-slate-900">
              Internal company systems
            </h3>
            <p className="text-sm text-slate-600">
              Administrative tools, employee portals, and operational management
              interfaces.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="mb-2 font-semibold text-slate-900">
              Online service platforms
            </h3>
            <p className="text-sm text-slate-600">
              Applications that require persistent accounts and reliable service
              updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <SectionHeading
          title="Built for Application Workflows"
          subtitle="APIs designed for developers who need to add account security and event-driven notifications to their applications."
        />
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      <section className="py-20">
        <SectionHeading
          title="Sample Event Log"
          subtitle="Example event records from a production-style application workflow."
        />
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm">
          <div className="hidden sm:grid sm:grid-cols-[2fr_2fr_1fr_1fr_1fr_2fr] border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <span>Event</span>
            <span>Application</span>
            <span>User ID</span>
            <span>Type</span>
            <span>Status</span>
            <span>Timestamp (UTC)</span>
          </div>
          {[
            { event: "login_new_device", app: "proj_mgmt_dashboard", uid: "84219", type: "auth", status: "processed", ts: "2026-02-18 14:03:22", color: "text-emerald-700" },
            { event: "password_reset", app: "customer_portal", uid: "33107", type: "account", status: "processed", ts: "2026-02-18 14:11:09", color: "text-emerald-700" },
            { event: "email_changed", app: "internal_admin", uid: "55902", type: "account", status: "queued", ts: "2026-02-18 14:14:37", color: "text-amber-700" },
          ].map((row, i) => (
            <div
              key={i}
              className={`grid gap-x-2 px-5 py-3 text-slate-700 sm:grid-cols-[2fr_2fr_1fr_1fr_1fr_2fr] ${i < 2 ? "border-b border-slate-100" : ""}`}
            >
              <span className="font-medium truncate">{row.event}</span>
              <span className="truncate">{row.app}</span>
              <span>{row.uid}</span>
              <span>{row.type}</span>
              <span className={row.color}>{row.status}</span>
              <span className="tabular-nums">{row.ts}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl rounded-xl border border-slate-200 bg-white px-6 py-5 text-center text-sm text-slate-600">
          Event-driven architecture. Structured API responses. Idempotent event
          processing. Webhook-based status updates.
        </div>
      </section>

      <section className="py-20">
        <SectionHeading
          title="Developer Experience"
          subtitle="Built for integration teams that need predictable behavior in production workflows."
        />
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <Code2 className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="text-base font-semibold text-slate-900">
                Predictable API behavior
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Consistent response formats and status codes across endpoints.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <Repeat2 className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="text-base font-semibold text-slate-900">
                Retry-safe requests
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Idempotent event processing keeps retries safe and predictable.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <Webhook className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="text-base font-semibold text-slate-900">
                Event status webhooks
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Webhook callbacks for event outcomes and processing results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Ready to integrate?</h2>
          <p className="mb-8 text-slate-600">
            Tell us about your application and we'll get back to you within one
            business day.
          </p>
          <Link
            to="/request-access"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Apply for Integration
          </Link>
        </div>
      </section>
    </>
  );
}
