import { Mail, ShieldCheck, AlertTriangle } from "lucide-react";
import InfoCard from "../components/InfoCard";

export default function About() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">About UniSynthe</h1>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <h2 className="text-lg font-semibold text-slate-900">Our Mission</h2>
          <p>
            UniSynthe was founded in 2025 to simplify two of the most common integration challenges
            in modern software: programmable communications (SMS, voice, phone verification) and
            IP-based intelligence (geolocation, fraud detection, risk scoring).
          </p>
          <p>
            We provide a unified API layer that abstracts the complexity of carrier relationships,
            number provisioning, and IP database licensing — so engineering teams can focus on
            their product, not infrastructure.
          </p>

          <h2 className="text-lg font-semibold text-slate-900">What We Do</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Messaging & Voice:</strong> Transactional SMS (OTP, alerts, notifications),
              programmable voice calls, and phone number verification. We partner with licensed
              carriers to provide reliable domestic and international delivery.
            </li>
            <li>
              <strong>Location Intelligence:</strong> IP-to-location resolution (city, region, country, ISP),
              proxy/VPN detection, and fraud risk scoring. Powered by continuously updated geolocation databases.
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900">What We Don't Do</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>We do not provide marketing or promotional messaging services.</li>
            <li>We do not sell or share end-user data with third parties for advertising.</li>
            <li>We do not support unsolicited bulk messaging of any kind.</li>
            <li>We do not offer consumer-facing products — UniSynthe is strictly B2B.</li>
          </ul>

          <h2 className="text-lg font-semibold text-slate-900">Security & Compliance</h2>
          <p>
            All API traffic is encrypted via TLS 1.2+. Credentials and sensitive data are encrypted
            at rest using AES-256. We maintain compliance with TCPA, GDPR, CCPA, and CAN-SPAM
            regulations. All messaging requires documented end-user consent.
          </p>
          <p>
            We conduct regular security reviews and maintain an incident response process.
            Abuse reports are investigated within 24 hours.
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
            Remote-first team • San Francisco Bay Area • United States
          </p>
        </div>
      </div>
    </section>
  );
}
