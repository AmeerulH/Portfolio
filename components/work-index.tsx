"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export type WorkItem = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  kind: string;
  kindLabel: string;
  stack: string;
  cover?: string;
};

export function WorkIndex({ items }: { items: WorkItem[] }) {
  const kinds = [...new Map(items.map((i) => [i.kind, i.kindLabel])).entries()];
  const [filter, setFilter] = useState<string>("all");
  const [hover, setHover] = useState<WorkItem | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const shown = filter === "all" ? items : items.filter((i) => i.kind === filter);

  // Pointer-follow preview: transform only, fine pointers only (the element is hidden otherwise).
  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !preview.current) return;
    preview.current.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 80}px, 0)`;
  };

  return (
    <div onPointerMove={move}>
      <div className="filters" role="group" aria-label="Filter by type">
        {[["all", "All"], ...kinds].map(([value, label]) => (
          <button key={value} className="filter press" aria-pressed={filter === value} onClick={() => setFilter(value)}>
            {label}
          </button>
        ))}
      </div>

      <div className="index-rows" style={{ marginTop: "2rem" }}>
        {shown.map((i) => (
          <Link
            key={i.slug}
            href={`/work/${i.slug}`}
            className="index-row"
            onPointerEnter={(e) => e.pointerType === "mouse" && setHover(i)}
            onPointerLeave={() => setHover(null)}
            onFocus={() => setHover(null)}
          >
            <span className="num">{i.number}</span>
            <span className="t">{i.title}</span>
            <span className="s">{i.stack}</span>
            <span className="y">{i.kindLabel}</span>
          </Link>
        ))}
        {!shown.length && <p style={{ padding: "1.5rem 0", color: "var(--color-ink-2)" }}>Nothing in this category yet.</p>}
      </div>

      <div ref={preview} className="hover-preview hidden md:block" data-on={!!hover?.cover} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {hover?.cover && <img src={hover.cover} alt="" />}
      </div>
    </div>
  );
}
