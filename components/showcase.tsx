"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

export type ShowcaseFrame = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** One product stage. Frames slide as a single track; reduced motion jumps. */
export function Showcase({ frames, label, name }: { frames: ShowcaseFrame[]; label: string; name?: string }) {
  const count = frames.length;
  const portrait = frames.every((item) => item.height > item.width * 1.15);
  const per = portrait ? 3 : 1;
  const last = Math.max(0, count - per);
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const stage = useRef<HTMLDivElement>(null);

  const go = useCallback((next: number) => {
    setIndex(Math.min(last, Math.max(0, next)));
    setDrag(0);
  }, [last]);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (count < 2 || event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    startX.current = event.clientX;
    setDragging(true);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    let dx = event.clientX - startX.current;
    if ((index === 0 && dx > 0) || (index === last && dx < 0)) dx *= 0.35;
    setDrag(dx);
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    const dx = event.clientX - startX.current;
    const width = stage.current?.clientWidth ?? 1;
    setDragging(false);
    if (Math.abs(dx) > Math.min(72, width * 0.16)) go(index + (dx < 0 ? 1 : -1));
    else setDrag(0);
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  }

  const frame = frames[index];
  const end = Math.min(count, index + per);
  const counter = per > 1 && end > index + 1
    ? `${String(index + 1).padStart(2, "0")}–${String(end).padStart(2, "0")}`
    : String(index + 1).padStart(2, "0");

  return (
    <section className="showcase" data-orient={portrait ? "portrait" : undefined} style={{ ["--per" as string]: per }} aria-roledescription="carousel" aria-label={label} onKeyDown={onKeyDown}>
      <div
        ref={stage}
        className="showcase-stage"
        style={name ? { viewTransitionName: name } : undefined}
        data-dragging={dragging || undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="showcase-track" style={{ transform: `translate3d(calc(${(-index * 100) / per}% + ${drag}px), 0, 0)` }}>
          {frames.map((item, i) => (
            <figure key={item.src} className="showcase-frame" aria-hidden={i < index || i >= index + per || undefined}>
              <Image
                src={item.src}
                alt={i === index ? item.alt : ""}
                width={item.width}
                height={item.height}
                sizes={portrait ? "(min-width: 64rem) 22rem, 30vw" : "(min-width: 64rem) 72rem, 100vw"}
                priority={i < per}
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="showcase-bar">
          <p className="label">
            {counter}
            <span className="sep"> / </span>
            {String(count).padStart(2, "0")}
          </p>
          <p className="showcase-caption" key={index} aria-live="polite">{frame.alt}</p>
          <div className="showcase-nav">
            <button type="button" className="showcase-btn" aria-label="Previous frame" onMouseDown={(event) => event.preventDefault()} onClick={() => go(index - 1)} disabled={index === 0}>
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button type="button" className="showcase-btn" aria-label="Next frame" onMouseDown={(event) => event.preventDefault()} onClick={() => go(index + 1)} disabled={index === last}>
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>
          <div className="showcase-rail" aria-hidden>
            <span style={{ transform: `scaleX(${(index + 1) / count})` }} />
          </div>
        </div>
      )}
    </section>
  );
}
