import { useState } from "react";

const useCaseOptions = [
  "User Authentication",
  "Security Alerts",
  "System Events",
  "IP Geolocation & Risk Signals",
  "General Inquiry",
  "Other",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [volume, setVolume] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: `[${useCase}] Vol: ${volume || "N/A"}\n\n${message}` }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setUseCase("");
        setVolume("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-medium text-emerald-800">Thank you!</p>
        <p className="mt-1 text-sm text-emerald-600">We'll review your request and respond within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} placeholder="you@company.com" />
      </div>

      <div>
        <label htmlFor="useCase" className="mb-1 block text-sm font-medium text-slate-700">Use Case</label>
        <select id="useCase" value={useCase} onChange={(e) => setUseCase(e.target.value)} required className={inputClass}>
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
        <input type="text" id="volume" value={volume} onChange={(e) => setVolume(e.target.value)} className={inputClass} placeholder="e.g. 5,000 requests/month" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Message</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className={inputClass} placeholder="Describe your application and integration needs..." />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button type="submit" disabled={status === "sending"} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-50">
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
