import { useState } from "react";

const useCaseOptions = [
  "Account Verification (OTP, registration)",
  "Security Alerts (login, account changes)",
  "System Notifications (status, transactional)",
  "IP Geolocation & Fraud Detection",
  "Other",
];

export default function RequestAccess() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  if (sent) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10">
            <h1 className="mb-3 text-2xl font-bold text-emerald-800">Request Received</h1>
            <p className="text-sm leading-relaxed text-emerald-700">
              Thank you for your interest in UniSynthe. Our team will review your integration
              request and respond within one business day with next steps or follow-up questions.
            </p>
            <p className="mt-4 text-sm text-emerald-600">
              If you need immediate assistance, email{" "}
              <a href="mailto:support@unisynthe.com" className="font-medium underline">
                support@unisynthe.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-lg px-6">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">Request API Access</h1>
        <p className="mb-10 text-slate-600">
          Tell us about your application. Every integration is reviewed to ensure it aligns with
          our platform's transactional and security-related use cases.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-700">
              Company Name
            </label>
            <input type="text" id="company" required className={inputClass} placeholder="Acme Inc." />
          </div>

          <div>
            <label htmlFor="website" className="mb-1 block text-sm font-medium text-slate-700">
              Website
            </label>
            <input type="url" id="website" required className={inputClass} placeholder="https://example.com" />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
              Contact Email
            </label>
            <input type="email" id="email" required className={inputClass} placeholder="you@company.com" />
          </div>

          <div>
            <label htmlFor="usecase" className="mb-1 block text-sm font-medium text-slate-700">
              Primary Use Case
            </label>
            <select id="usecase" required className={inputClass}>
              <option value="">Select a use case</option>
              {useCaseOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="volume" className="mb-1 block text-sm font-medium text-slate-700">
              Estimated Monthly API Requests <span className="text-slate-400">(optional)</span>
            </label>
            <input type="text" id="volume" className={inputClass} placeholder="e.g. 10,000 requests/month" />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
              Additional Details
            </label>
            <textarea id="message" rows={4} className={inputClass} placeholder="Describe your application and how you plan to use the API..." />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
