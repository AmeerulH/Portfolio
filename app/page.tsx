import { Suspense } from "react";
import { getExperience, getFeaturedProjects, getSettings } from "@/sanity/lib/queries";

async function Debug() {
  const [s, e, p] = await Promise.all([getSettings(), getExperience(), getFeaturedProjects()]);
  return (
    <pre>{JSON.stringify({ name: s?.name, jobs: e.map((x) => x.company), featured: p.map((x) => x.title) }, null, 1)}</pre>
  );
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={null}>
        <Debug />
      </Suspense>
    </main>
  );
}
