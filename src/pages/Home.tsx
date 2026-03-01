import { Link } from "react-router-dom";
import { MessageSquare, MapPin, Code, ShieldCheck } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Messaging & Voice",
    description: "Send SMS, make calls, 2FA via programmable APIs.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location Intelligence",
    description: "Accurate IP-to-city/country lookup and fraud prevention.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer-First",
    description: "RESTful endpoints, clear docs, code examples.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Secure & Compliant",
    description: "GDPR/CCPA ready, consent-based flows.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            UniSynthe — Unified APIs for Messaging &amp; Location Intelligence
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            Add SMS alerts, voice calls, phone verification and IP geolocation to your apps in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Get Started
            </Link>
            <a
              href="#"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>
    </>
  );
}
