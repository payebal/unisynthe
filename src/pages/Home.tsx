import { Link } from "react-router-dom";
import {
  MessageSquare, MapPin, Code, ShieldCheck, Phone, KeyRound,
  Globe, AlertTriangle, Server, Gauge, LifeBuoy, Briefcase,
} from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import SectionHeading from "../components/SectionHeading";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Messaging & Voice",
    description: "Send transactional SMS, make programmable voice calls, and deliver two-factor authentication codes through a single REST API.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location Intelligence",
    description: "Resolve any IPv4/IPv6 address to city, region, country, and ISP. Detect proxies, VPNs, and high-risk traffic in real time.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer-First",
    description: "RESTful JSON endpoints, webhook callbacks, client libraries for Python, Node.js, and Go. Sandbox environment included.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure & Compliant",
    description: "GDPR and CCPA ready. All messaging is consent-based. TLS 1.2+ in transit, AES-256 at rest.",
  },
];

const useCases = [
  { icon: <KeyRound className="h-5 w-5" />, title: "OTP & 2FA", desc: "Deliver one-time passwords via SMS for login verification, payment confirmation, and account recovery." },
  { icon: <AlertTriangle className="h-5 w-5" />, title: "Transactional Alerts", desc: "Send order confirmations, shipping updates, appointment reminders, and fraud alerts to your users." },
  { icon: <Phone className="h-5 w-5" />, title: "Voice & Support", desc: "Programmatic outbound calls for appointment confirmations, support callbacks, and phone verification flows." },
  { icon: <Globe className="h-5 w-5" />, title: "IP Geolocation & Fraud", desc: "Detect account fraud, enforce geo-restrictions, and personalize content based on visitor location and risk signals." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Unified APIs for Messaging &amp; Location Intelligence
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            Add SMS alerts, voice calls, phone verification, and IP geolocation
            to your applications in minutes — not months.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-access"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Request API Access
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <SectionHeading
          title="What We Do"
          subtitle="UniSynthe provides unified API infrastructure for two critical capabilities: programmable messaging and IP-based intelligence."
        />
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-slate-50 py-20">
        <SectionHeading
          title="Use Cases"
          subtitle="Built for teams that need reliable communication and location intelligence without managing carrier relationships or IP databases."
        />
        <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-2">
          {useCases.map((uc) => (
            <div key={uc.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {uc.icon}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">{uc.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Safety */}
      <section className="py-20">
        <SectionHeading
          title="Compliance & Safety"
          subtitle="We take messaging compliance seriously. Every message sent through UniSynthe follows industry best practices and carrier requirements."
        />
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <Briefcase className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold text-slate-900">Consent-Based Messaging</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                All SMS and voice communications require explicit end-user consent before delivery.
                We do not support unsolicited marketing, cold outreach, or lead-generation messaging by default.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <ShieldCheck className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold text-slate-900">STOP / HELP Compliance</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                All messaging campaigns must honor STOP and HELP keywords. Opt-out requests
                are processed automatically. Non-compliance results in immediate suspension.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <AlertTriangle className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold text-slate-900">Abuse Monitoring</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                We monitor traffic patterns for spam, phishing, and fraud. Suspicious activity
                triggers automatic rate-limiting and manual review. Violations are reported and accounts terminated.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <Globe className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold text-slate-900">Regulatory Compliance</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                TCPA, GDPR, CCPA, and CAN-SPAM compliant. We support 10DLC registration,
                A2P sender verification, and maintain records for audit purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability */}
      <section className="bg-slate-50 py-20">
        <SectionHeading
          title="Reliability & Infrastructure"
          subtitle="Production-grade infrastructure designed for consistent uptime and predictable performance."
        />
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <Server className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold text-slate-900">99.9%</p>
              <p className="text-sm text-slate-600">Uptime SLA target</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <Gauge className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold text-slate-900">60 req/s</p>
              <p className="text-sm text-slate-600">Default rate limit per API key</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <LifeBuoy className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="text-2xl font-bold text-slate-900">&lt; 4h</p>
              <p className="text-sm text-slate-600">Incident response time</p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Higher rate limits available on request. For incidents or urgent issues, contact{" "}
            <a href="mailto:support@unisynthe.com" className="text-primary hover:underline">
              support@unisynthe.com
            </a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Ready to integrate?</h2>
          <p className="mb-8 text-slate-600">
            Tell us about your use case and we'll provision API credentials within one business day.
          </p>
          <Link
            to="/request-access"
            className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Request API Access
          </Link>
        </div>
      </section>
    </>
  );
}
