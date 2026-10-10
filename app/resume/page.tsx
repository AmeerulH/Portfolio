import type { Metadata } from "next";
import { Download } from "lucide-react";
import { getExperience, getProjects, getSettings } from "@/sanity/lib/queries";
import { period } from "@/lib/format";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience, projects and education of Ameerul Hady.",
};

export default async function ResumePage() {
  const [s, jobs, projects] = await Promise.all([getSettings(), getExperience(), getProjects()]);
  const roles = jobs.filter((j) => j.showOnResume !== false);
  const picked = projects.filter((p) => p.showOnResume);

  return (
    <main className="wrap case" style={{ maxWidth: "56rem" }}>
      <div className="case-head">
        <div className="no-print" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a className="btn press" href="/resume.pdf" download>
            <Download size={16} aria-hidden /> Download PDF
          </a>
        </div>
        <h1 className="display">{s?.name}</h1>
        <p style={{ fontSize: "1.125rem" }}>{s?.role}</p>
        <p className="label">
          {[s?.email, s?.location, ...(s?.socials ?? []).map((x) => x.url.replace(/^https?:\/\/(www\.)?/, ""))].filter(Boolean).join("  /  ")}
        </p>
      </div>

      {s?.summary && (
        <section className="section" aria-labelledby="r-sum">
          <h2 id="r-sum" className="h2">Profile</h2>
          <p className="measure">{s.summary}</p>
        </section>
      )}

      <section className="section" aria-labelledby="r-exp">
        <h2 id="r-exp" className="h2">Experience</h2>
        <div className="revisions">
          {roles.map((j) => (
            <article key={j._id} className="revision">
              <div className="when">{period(j.startDate, j.endDate)}</div>
              <div>
                <h3>{j.company}<span style={{ color: "var(--color-ink-2)", fontWeight: 400 }}> · {j.role}</span></h3>
                {j.summary && <p style={{ marginTop: "0.5rem", color: "var(--color-ink-2)" }}>{j.summary}</p>}
                {!!j.highlights?.length && <ul>{j.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
                {!!j.stack?.length && <p className="label" style={{ marginTop: "0.875rem" }}>{j.stack.map((t) => t.name).join(" / ")}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {!!picked.length && (
        <section className="section" aria-labelledby="r-proj">
          <h2 id="r-proj" className="h2">Selected projects</h2>
          <div className="revisions">
            {picked.map((p) => (
              <article key={p._id} className="revision">
                <div className="when">{p.year}</div>
                <div><h3>{p.title}</h3><p style={{ marginTop: "0.5rem", color: "var(--color-ink-2)" }}>{p.summary}</p></div>
              </article>
            ))}
          </div>
        </section>
      )}

      {!!s?.education?.length && (
        <section className="section" aria-labelledby="r-edu">
          <h2 id="r-edu" className="h2">Education</h2>
          <dl className="spec">
            {s.education.map((e) => (
              <div key={e._key}><dt>{e.period}</dt><dd>{e.institution}{e.qualification ? `, ${e.qualification}` : ""}</dd></div>
            ))}
          </dl>
        </section>
      )}

      {!!s?.certifications?.length && (
        <section className="section" aria-labelledby="r-cert">
          <h2 id="r-cert" className="h2">Certifications</h2>
          <ul>{s.certifications.map((c) => <li key={c}>{c}</li>)}</ul>
        </section>
      )}
    </main>
  );
}
