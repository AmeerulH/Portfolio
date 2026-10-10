import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/sanity/lib/queries";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ameerulh.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getProjectSlugs();
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.6 },
    ...slugs.map((s) => ({ url: `${base}/work/${s.slug}`, lastModified: s._updatedAt, priority: 0.7 })),
  ];
}
