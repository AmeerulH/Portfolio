"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type DialModel = { id: string; title: string; number: string };

const ARC = 270; // degrees of travel, centred on top
const START = -ARC / 2;

/**
 * The signature interaction. A rotary selector for the catalogue:
 * - rotates with scroll position (transform only)
 * - drag it, or use arrow keys, to step through models with detents
 * - the index beside it jumps to a model
 */
export function Dial({ models }: { models: DialModel[] }) {
  const n = models.length;
  const step = n > 1 ? ARC / (n - 1) : 0;
  const [active, setActive] = useState(0);
  const [dragAngle, setDragAngle] = useState<number | null>(null);
  const dragging = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (i: number) => {
      const el = document.getElementById(models[i]?.id);
      if (!el) return;
      // Instant: dial input is a repeated, direct manipulation, so no smooth scroll.
      el.scrollIntoView({ block: "start", behavior: "auto" });
      setActive(i);
    },
    [models],
  );

  // Scroll position drives the dial.
  useEffect(() => {
    const els = models.map((m) => document.getElementById(m.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (dragging.current) return;
        for (const e of entries) {
          if (e.isIntersecting) setActive(els.indexOf(e.target as HTMLElement));
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [models]);

  const angleFromPointer = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const a = (Math.atan2(dx, -dy) * 180) / Math.PI;
    return Math.max(START, Math.min(-START, a));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 || dragging.current) return; // ignore extra touch points
    dragging.current = true;
    ref.current!.setPointerCapture(e.pointerId);
    setDragAngle(angleFromPointer(e));
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const a = angleFromPointer(e);
    setDragAngle(a);
    if (step) {
      const i = Math.round((a - START) / step);
      if (i !== active) goTo(i);
    }
  };
  const end = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    dragging.current = false;
    ref.current?.releasePointerCapture(e.pointerId);
    setDragAngle(null); // snaps to the detent
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const next = { ArrowRight: active + 1, ArrowUp: active + 1, ArrowLeft: active - 1, ArrowDown: active - 1, Home: 0, End: n - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    goTo(Math.max(0, Math.min(n - 1, next)));
  };

  const angle = dragAngle ?? START + active * step;

  return (
    <div className="dial-wrap">
      <div
        ref={ref}
        className="dial"
        role="slider"
        tabIndex={0}
        aria-label="Model selector"
        aria-valuemin={1}
        aria-valuemax={n}
        aria-valuenow={active + 1}
        aria-valuetext={models[active]?.title}
        data-dragging={dragAngle !== null}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={end}
        onPointerCancel={end}
        onKeyDown={onKeyDown}
      >
        <svg viewBox="0 0 160 160" aria-hidden>
          {models.map((m, i) => {
            const a = ((START + i * step) * Math.PI) / 180;
            const r1 = 68, r2 = 78;
            return (
              <line
                key={m.id}
                className="tick"
                data-on={i === active}
                x1={80 + r1 * Math.sin(a)}
                y1={80 - r1 * Math.cos(a)}
                x2={80 + r2 * Math.sin(a)}
                y2={80 - r2 * Math.cos(a)}
                strokeWidth={i === active ? 3 : 1.5}
                strokeLinecap="round"
              />
            );
          })}
          <g className="knob" style={{ transform: `rotate(${angle}deg)`, transformOrigin: "80px 80px" }}>
            <circle cx="80" cy="80" r="58" fill="var(--color-plate)" />
            <circle cx="80" cy="80" r="58" fill="none" stroke="var(--color-ink)" strokeOpacity="0.14" />
            <circle cx="80" cy="80" r="46" fill="none" stroke="var(--color-ink)" strokeOpacity="0.1" />
            <circle cx="80" cy="80" r="34" fill="none" stroke="var(--color-ink)" strokeOpacity="0.07" />
            <line x1="80" y1="30" x2="80" y2="52" stroke="var(--color-signal)" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <nav className="model-index" aria-label="Models">
        {models.map((m, i) => (
          <a key={m.id} href={`#${m.id}`} aria-current={i === active ? "true" : undefined} onClick={() => setActive(i)}>
            <span className="num">{m.number}</span>
            <span>{m.title}</span>
            <span className="tag" aria-hidden />
          </a>
        ))}
      </nav>
    </div>
  );
}
