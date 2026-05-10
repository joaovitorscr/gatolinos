import type { ReactNode } from "react";

type MetricCardProps = {
  label: string;
  value: string;
  detail?: string;
  progress: number;
  accentClassName: string;
  icon: ReactNode;
};

export function MetricCard({
  label,
  value,
  detail,
  progress,
  accentClassName,
  icon,
}: MetricCardProps) {
  return (
    <article className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="font-label text-[0.68rem] font-bold uppercase tracking-[0.28em] text-primary-fixed">
          {label}
        </p>
        {icon}
      </div>
      <p className="font-headline text-4xl font-bold text-white">{value}</p>
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${accentClassName}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {detail ? (
        <p className="mt-4 text-sm leading-7 text-[rgba(201,232,240,0.76)]">{detail}</p>
      ) : null}
    </article>
  );
}
