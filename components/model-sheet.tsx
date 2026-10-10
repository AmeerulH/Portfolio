import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/sanity/types";
import type { RepoStats } from "@/lib/github";
import { monthYear, kindLabel } from "@/lib/format";
import { Plate } from "./plate";

export function ModelSheet({ project, number, stats, priority }: { project: Project; number: string; stats?: RepoStats; priority?: boolean }) {
  const href = `/work/${project.slug}`;
  return (
    <article id={`m-${project.slug}`} className="sheet reveal">
      <Link href={href} aria-label={`${project.title}, case study`} tabIndex={-1}>
        <Plate project={project} number={number} priority={priority} />
      </Link>
      <div className="sheet-head">
        <h3><Link href={href}>{project.title}</Link></h3>
        <span className="label">{number}</span>
      </div>
      <p className="summary measure">{project.summary}</p>
      <dl className="spec">
        {project.role && <Row k="Role">{project.role}</Row>}
        <Row k="Type">{kindLabel[project.kind]}</Row>
        {!!project.stack?.length && <Row k="Stack">{project.stack.map((t) => t.name).join(", ")}</Row>}
        {project.metrics?.map((m) => <Row key={m._key} k={m.label}>{m.value}</Row>)}
        {stats && (
          <Row k="Source">
            <a className="link" href={stats.url} target="_blank" rel="noopener noreferrer">{stats.nameWithOwner}</a>
            <span className="sep">·</span>{stats.stars} stars
            {stats.language && <><span className="sep">·</span>{stats.language.name}</>}
            <span className="sep">·</span>last push {monthYear(stats.pushedAt)}
          </Row>
        )}
        {project.liveUrl && (
          <Row k="Live">
            <a className="link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              {project.liveUrl.replace(/^https?:\/\//, "")} <ArrowUpRight size={14} aria-hidden style={{ display: "inline", verticalAlign: "-2px" }} />
            </a>
          </Row>
        )}
      </dl>
    </article>
  );
}

function Row({ k, children }: { k: string; children: React.ReactNode }) {
  return <div><dt>{k}</dt><dd>{children}</dd></div>;
}
