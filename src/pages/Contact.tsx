import { Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="mb-10 text-3xl font-bold text-slate-900">Get in Touch</h1>

        <div className="grid gap-12 md:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-slate-900">Email</p>
                <a
                  href="mailto:support@unisynthe.com"
                  className="text-sm text-slate-600 transition-colors hover:text-primary"
                >
                  support@unisynthe.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-slate-900">Location</p>
                <p className="text-sm text-slate-600">Remote-first team, San Francisco Bay Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
