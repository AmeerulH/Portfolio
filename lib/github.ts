import { cacheLife, cacheTag } from "next/cache";

export type RepoStats = {
  nameWithOwner: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
  language: { name: string; color: string | null } | null;
  pushedAt: string;
};

export type ContributionDay = { date: string; count: number };

export type GithubData = {
  repos: Record<string, RepoStats>;
  contributions: { total: number; weeks: ContributionDay[][] } | null;
};

const EMPTY: GithubData = { repos: {}, contributions: null };

const alias = (nameWithOwner: string, i: number) => {
  const [owner, name] = nameWithOwner.split("/");
  return `r${i}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {
    nameWithOwner description url stargazerCount forkCount pushedAt
    primaryLanguage { name color }
  }`;
};

async function query(token: string, body: string) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: body }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`GitHub ${res.status}`);
  const json = await res.json();
  if (!json.data) throw new Error("GitHub returned no data");
  return json.data;
}

/**
 * One GraphQL request for every repo referenced from Sanity plus the contribution
 * calendar. Cached for an hour. Any failure (missing token, rate limit, network)
 * resolves to empty data so pages render from Sanity alone.
 */
export async function getGithubData(repos: string[], login = "AmeerulH"): Promise<GithubData> {
  "use cache";
  cacheLife("hours");
  cacheTag("github");

  const token = process.env.GITHUB_TOKEN;
  if (!token) return EMPTY;

  const unique = [...new Set(repos.filter((r) => /^[\w.-]+\/[\w.-]+$/.test(r)))];
  const repoFields = unique.map(alias).join("\n");
  const body = `query {
    user(login: ${JSON.stringify(login)}) {
      contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } }
    }
    ${repoFields}
  }`;

  try {
    const data = await query(token, body);
    const out: GithubData = { repos: {}, contributions: null };
    unique.forEach((key, i) => {
      const r = data[`r${i}`];
      if (!r) return;
      out.repos[key] = {
        nameWithOwner: r.nameWithOwner,
        description: r.description,
        url: r.url,
        stars: r.stargazerCount,
        forks: r.forkCount,
        language: r.primaryLanguage,
        pushedAt: r.pushedAt,
      };
    });
    const cal = data.user?.contributionsCollection?.contributionCalendar;
    if (cal) {
      out.contributions = {
        total: cal.totalContributions,
        weeks: cal.weeks.map((w: any) =>
          w.contributionDays.map((d: any) => ({ date: d.date, count: d.contributionCount })),
        ),
      };
    }
    return out;
  } catch {
    return EMPTY;
  }
}
