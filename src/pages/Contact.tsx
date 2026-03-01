import { Mail, MapPin, ShieldCheck, AlertTriangle } from "lucide-react";
import ContactForm from "../components/ContactForm";
import InfoCard from "../components/InfoCard";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="mb-10 text-3xl font-bold text-slate-900">Get in Touch</h1>

        <div className="grid gap-12 md:grid-cols-2">
          <ContactForm />

          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-4 font-semibold text-slate-900">Contact Channels</h2>
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
                <InfoCard
                  icon={<MapPin className="h-5 w-5" />}
                  label="Location"
                  value="Remote-first team, San Francisco Bay Area"
                />
              </div>
            </div>

            <p className="text-sm text-slate-500">
              Typical response time: within one business day.
              For abuse or compliance issues, we respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
