import { Suspense } from "react";
import { getProjects } from "@/sanity/lib/queries";
import { getGithubData } from "@/lib/github";

async function Debug() {
  const projects = await getProjects();
  const gh = await getGithubData(projects.map((p) => p.repo).filter(Boolean) as string[]);
  return <pre>{JSON.stringify({ repos: Object.values(gh.repos).map((r) => [r.nameWithOwner, r.stars, r.language?.name]), total: gh.contributions?.total, weeks: gh.contributions?.weeks.length }, null, 1)}</pre>;
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
