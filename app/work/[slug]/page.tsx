import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getProject, getProjects, getProjectSlugs } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { getGithubData } from "@/lib/github";
import { kindLabel, modelNumber, monthYear } from "@/lib/format";
import { Plate } from "@/components/plate";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const dims = value.asset.metadata?.dimensions;
      return (
        <figure>
          <Image
            src={urlFor(value).width(1400).url()}
            alt={value.alt ?? ""}
            width={dims?.width ?? 1400}
            height={dims?.height ?? 900}
            sizes="(min-width: 64rem) 66ch, 100vw"
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
};

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const [project, all] = await Promise.all([getProject(slug), getProjects()]);
  if (!project) notFound();

  const index = all.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? all[index - 1] : undefined;
  const next = index < all.length - 1 ? all[index + 1] : undefined;
  const gh = project.repo ? (await getGithubData([project.repo])).repos[project.repo] : undefined;
  const number = modelNumber(Math.max(index, 0));

  return (
    <main className="wrap case">
      <div className="case-head">
        <p className="label">{number} / {kindLabel[project.kind]}</p>
        <h1 className="display">{project.title}</h1>
        <p className="measure" style={{ fontSize: "1.1875rem", color: "var(--color-ink-2)" }}>{project.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {project.liveUrl && (
            <a className="btn press" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Visit site <ArrowUpRight size={16} aria-hidden />
            </a>
          )}
          {gh && (
            <a className="btn ghost press" href={gh.url} target="_blank" rel="noopener noreferrer">
              Source on GitHub <ArrowUpRight size={16} aria-hidden />
            </a>
          )}
        </div>
      </div>

      <Plate project={project} number={number} priority />

      {!!project.metrics?.length && (
        <dl className="metrics">
          {project.metrics.map((m) => (
            <div key={m._key}><dt>{m.label}</dt><dd>{m.value}</dd></div>
          ))}
        </dl>
      )}

      <dl className="spec">
        {project.role && <div><dt>Role</dt><dd>{project.role}</dd></div>}
        {!!project.stack?.length && <div><dt>Stack</dt><dd>{project.stack.map((t) => t.name).join(", ")}</dd></div>}
        {gh && (
          <div>
            <dt>Source</dt>
            <dd>
              {gh.nameWithOwner}<span className="sep"> · </span>{gh.stars} stars
              {gh.language && <><span className="sep"> · </span>{gh.language.name}</>}
              <span className="sep"> · </span>last push {monthYear(gh.pushedAt)}
            </dd>
          </div>
        )}
      </dl>

      {!!project.caseStudy?.length && (
        <div className="prose"><PortableText value={project.caseStudy} components={components} /></div>
      )}

      {!!project.gallery?.length && (
        <section className="gallery" aria-label="Gallery">
          {project.gallery.map((g, i) =>
            g.asset ? (
              <figure key={i} style={{ margin: 0 }}>
                <Image
                  src={urlFor(g).width(1200).url()}
                  alt={g.alt ?? ""}
                  width={g.asset.metadata?.dimensions?.width ?? 1200}
                  height={g.asset.metadata?.dimensions?.height ?? 800}
                  sizes="(min-width: 64rem) 33vw, 100vw"
                />
              </figure>
            ) : null,
          )}
        </section>
      )}

      <nav className="pager" aria-label="More work">
        {prev ? <Link href={`/work/${prev.slug}`}><span className="label">Previous</span><span>{prev.title}</span></Link> : <span />}
        {next ? <Link href={`/work/${next.slug}`}><span className="label">Next</span><span>{next.title}</span></Link> : <span />}
      </nav>
    </main>
  );
}
