import { getProject, getProjectSlugs } from "@/sanity/lib/queries";
import { kindLabel } from "@/lib/format";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getProjectSlugs()).map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProject(slug);
  return ogCard({ eyebrow: p ? kindLabel[p.kind] : "Work", title: p?.title ?? "Work", line: p?.summary });
}
