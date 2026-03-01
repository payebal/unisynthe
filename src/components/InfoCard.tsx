import type { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function InfoCard({ icon, label, value, href }: InfoCardProps) {
  const content = href ? (
    <a href={href} className="text-sm text-slate-600 transition-colors hover:text-primary">
      {value}
    </a>
  ) : (
    <p className="text-sm text-slate-600">{value}</p>
  );

  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-primary">{icon}</div>
      <div>
        <p className="text-sm font-medium text-slate-900">{label}</p>
        {content}
      </div>
    </div>
  );
}
