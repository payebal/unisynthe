import { Link } from "react-router-dom";

const legalLinks = [
  { to: "/developers", label: "Developers" },
  { to: "/plans", label: "Plans" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/acceptable-use", label: "Acceptable Use" },
  { to: "/messaging-policy", label: "Notification Policy" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-4 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <div>
            <p>&copy; 2026 UniSynthe Inc. All rights reserved.</p>
            <p className="mt-1 text-xs text-slate-400">
              Event-driven developer infrastructure for application security and notifications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {legalLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="transition-colors hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
