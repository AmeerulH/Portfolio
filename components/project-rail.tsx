import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/sanity/types";
import { modelNumber } from "@/lib/format";
import { Plate } from "./plate";

/** Phones only: the catalogue as one swipeable row, so every model is a thumb away. */
export function ProjectRail({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;
  return (
    <nav className="rail" aria-label="Selected work">
      {projects.map((p, i) => (
        <Link key={p._id} href={`/work/${p.slug}`} className="rail-card">
          <Plate project={p} number={modelNumber(i)} max={2} />
          <span className="rail-meta">
            <span className="label">{modelNumber(i)}</span>
            <span className="rail-title">{p.title}</span>
          </span>
          <span className="rail-sum">{p.summary}</span>
        </Link>
      ))}
      <Link href="/work" className="rail-card rail-all">
        <span className="rail-title">All work</span>
        <ArrowRight size={18} aria-hidden />
      </Link>
    </nav>
  );
}
