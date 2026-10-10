import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getExperience, getFeaturedProjects, getSettings } from "@/sanity/lib/queries";
import { getGithubData } from "@/lib/github";
import { availabilityLabel, modelNumber, period } from "@/lib/format";
import { Dial } from "@/components/dial";
import { ModelSheet } from "@/components/model-sheet";
import { Contrib } from "@/components/contrib";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return { description: settings?.summary ?? undefined };
}

export default async function Home() {
  const [settings, projects, jobs] = await Promise.all([getSettings(), getFeaturedProjects(), getExperience()]);
  const gh = await getGithubData(projects.map((p) => p.repo).filter(Boolean) as string[]);
  const models = projects.map((p, i) => ({ id: `m-${p.slug}`, title: p.title, number: modelNumber(i) }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: settings?.name,
    jobTitle: settings?.role,
    email: settings?.email ? `mailto:${settings.email}` : undefined,
    sameAs: settings?.socials?.map((x) => x.url),
    description: settings?.headline,
  };

  return (
    <main className="wrap catalogue">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <aside className="intro">
        <div className="enter" style={{ display: "grid", gap: "1.5rem" }}>
          <h1 className="display">{settings?.headline}</h1>
          {settings?.summary && <p className="measure" style={{ color: "var(--color-ink-2)" }}>{settings.summary}</p>}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
            {settings?.email && (
              <a className="btn press" href={`mailto:${settings.email}`}>Get in touch</a>
            )}
            {settings?.availability && (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                <span className="lamp" data-state={settings.availability} aria-hidden />
                {settings.availabilityNote ?? availabilityLabel[settings.availability]}
              </span>
            )}
          </div>
          {models.length > 0 && <Dial models={models} />}
        </div>
      </aside>

      <div style={{ display: "grid", gap: "clamp(4rem, 8vw, 7rem)" }}>
        <section className="models" aria-labelledby="models-h">
          <h2 id="models-h" className="sr-only">Selected work</h2>
          {projects.map((p, i) => (
            <ModelSheet key={p._id} project={p} number={modelNumber(i)} stats={p.repo ? gh.repos[p.repo] : undefined} priority={i === 0} />
          ))}
          <Link href="/work" className="link" style={{ justifySelf: "start", display: "inline-flex", gap: "0.375rem", alignItems: "center" }}>
            All work <ArrowUpRight size={16} aria-hidden />
          </Link>
        </section>

        {!!settings?.capabilities?.length && (
          <section className="section reveal" aria-labelledby="specs">
            <h2 id="specs" className="h2">Specifications</h2>
            <dl className="spec">
              {settings.capabilities.map((c) => (
                <div key={c._key}><dt style={{ color: "var(--color-ink)", fontSize: "0.9375rem" }}>{c.title}</dt><dd style={{ color: "var(--color-ink-2)" }}>{c.description}</dd></div>
              ))}
            </dl>
          </section>
        )}

        {jobs.length > 0 && (
          <section id="experience" className="section" aria-labelledby="exp">
            <h2 id="exp" className="h2">Revision history</h2>
            <div className="revisions">
              {jobs.map((j) => (
                <article key={j._id} className="revision reveal">
                  <div className="when">{period(j.startDate, j.endDate)}</div>
                  <div>
                    <h3>
                      {j.website ? <a className="link" href={j.website} target="_blank" rel="noopener noreferrer">{j.company}</a> : j.company}
                      <span style={{ color: "var(--color-ink-2)", fontWeight: 400 }}> · {j.role}</span>
                    </h3>
                    {j.summary && <p style={{ marginTop: "0.5rem", color: "var(--color-ink-2)" }}>{j.summary}</p>}
                    {!!j.highlights?.length && <ul>{j.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
                    {!!j.stack?.length && <p className="label" style={{ marginTop: "0.875rem" }}>{j.stack.map((t) => t.name).join(" / ")}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {gh.contributions && (
          <section className="section reveal" aria-labelledby="act">
            <h2 id="act" className="h2">Activity</h2>
            <p style={{ color: "var(--color-ink-2)" }}>{gh.contributions.total} contributions on GitHub in the last year.</p>
            <Contrib weeks={gh.contributions.weeks} />
          </section>
        )}

        <section id="contact" className="section contact-close reveal" aria-labelledby="contact-h">
          <h2 id="contact-h" className="h2">Contact</h2>
          {settings?.email && <a className="mail link" href={`mailto:${settings.email}`}>{settings.email}</a>}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {settings?.socials?.map((s) => (
              <a key={s._key} className="btn ghost press" href={s.url} target="_blank" rel="noopener noreferrer">{s.label} <ArrowUpRight size={16} aria-hidden /></a>
            ))}
            <Link className="btn ghost press" href="/resume">Resume</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
