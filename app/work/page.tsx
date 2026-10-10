import type { Metadata } from "next";
import { getProjects } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { kindLabel, modelNumber } from "@/lib/format";
import { WorkIndex } from "@/components/work-index";

export const metadata: Metadata = {
  title: "Work",
  description: "Products, client websites and side projects by Ameerul Hady.",
};

export default async function WorkPage() {
  const projects = await getProjects();
  const items = projects.map((p, i) => ({
    slug: p.slug,
    number: modelNumber(i),
    title: p.title,
    summary: p.summary,
    kind: p.kind,
    kindLabel: kindLabel[p.kind],
    stack: (p.stack ?? []).slice(0, 4).map((t) => t.name).join(", "),
    cover: p.cover?.asset ? urlFor(p.cover).width(640).height(400).fit("crop").url() : undefined,
  }));

  return (
    <main className="wrap case">
      <div className="case-head">
        <p className="label">Catalogue</p>
        <h1 className="display">All work</h1>
        <p className="measure" style={{ color: "var(--color-ink-2)" }}>
          {projects.length} models: products, client websites and side projects. Open one for the spec sheet.
        </p>
      </div>
      <WorkIndex items={items} />
    </main>
  );
}
