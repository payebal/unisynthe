interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-3 text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-slate-600">{subtitle}</p>}
    </div>
  );
}
