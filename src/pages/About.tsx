import { Mail, ShieldCheck, AlertTriangle } from "lucide-react";
import InfoCard from "../components/InfoCard";

export default function About() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">About UniSynthe</h1>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            UniSynthe is a developer infrastructure platform that provides application
            notification and account security tooling.
          </p>
          <p>
            Modern applications need reliable ways to authenticate users, notify them about
            important events, and detect suspicious activity. UniSynthe offers a single
            API layer that applications integrate into their authentication and event workflows.
          </p>
          <p>
            The platform is typically connected to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>User registration and login flows</li>
            <li>Password recovery</li>
            <li>Account activity monitoring</li>
            <li>System status notifications</li>
          </ul>
          <p>
            Developers integrate UniSynthe to handle authentication-related events without
            building their own event processing and account security infrastructure.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">How it works</h2>
          <p>
            Applications send structured events (for example: user registered, login from
            new device, password reset requested). UniSynthe processes the event and returns
            the appropriate response or triggers the configured action — which may include
            notifying the application&apos;s user — within the application workflow.
          </p>
          <p>
            UniSynthe operates as a background component inside application logic. Typical
            integrations include SaaS dashboards, online services, and internal business
            systems that require reliable user authentication and operational event handling.
          </p>
          <p>
            Our focus is reliability, predictable API behavior, and clear integration
            patterns for developers building account-based applications.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">Security</h2>
          <p>
            All API traffic is encrypted via TLS 1.2+. Credentials and sensitive data are
            encrypted at rest using AES-256. API authentication uses bearer tokens with
            automatic expiration. Rate limiting and anomaly detection run on all endpoints.
          </p>
        </div>

        {/* Company & Contacts */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="mb-6 text-lg font-semibold text-slate-900">Company & Contacts</h2>
          <div className="space-y-4">
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              label="General Support"
              value="support@unisynthe.com"
              href="mailto:support@unisynthe.com"
            />
            <InfoCard
              icon={<ShieldCheck className="h-5 w-5" />}
              label="Compliance & Legal"
              value="compliance@unisynthe.com"
              href="mailto:compliance@unisynthe.com"
            />
            <InfoCard
              icon={<AlertTriangle className="h-5 w-5" />}
              label="Abuse Reports"
              value="abuse@unisynthe.com"
              href="mailto:abuse@unisynthe.com"
            />
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Remote-first team · San Francisco Bay Area · United States
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Service Operator
          </p>
          <p className="mt-1 text-sm font-medium text-slate-900">Daniel K.</p>
          <a
            href="mailto:operations@unisynthe.com"
            className="mt-1 inline-block text-sm text-primary hover:underline"
          >
            operations@unisynthe.com
          </a>
        </div>
      </div>
    </section>
  );
}
