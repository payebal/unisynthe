import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: {updatedAt}</p>
        <div className="space-y-6 text-slate-600 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-lg font-semibold text-slate-900">{children}</h2>;
}

export function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-1 pl-6">{children}</ul>;
}
