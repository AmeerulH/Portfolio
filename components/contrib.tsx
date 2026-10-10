import type { ContributionDay } from "@/lib/github";

export function Contrib({ weeks }: { weeks: ContributionDay[][] }) {
  const max = Math.max(1, ...weeks.flat().map((d) => d.count));
  const level = (c: number) => (c === 0 ? 0 : Math.min(4, Math.ceil((c / max) * 4)));
  return (
    <div className="contrib" role="img" aria-label="Contribution activity over the last year">
      {weeks.map((w, i) => (
        <div className="week" key={i}>
          {w.map((d) => <i key={d.date} data-l={level(d.count)} title={`${d.count} on ${d.date}`} />)}
        </div>
      ))}
    </div>
  );
}
