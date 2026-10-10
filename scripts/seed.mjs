// Bootstrap seed. Create-if-missing only: never overwrites editor changes.
// Usage: npm run seed            (writes)
//        DRY_RUN=1 npm run seed  (prints what would be created)
import { createClient } from "@sanity/client";
import { mkdirSync, writeFileSync } from "node:fs";

const dry = !!process.env.DRY_RUN;
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: "2026-02-01",
  useCdn: false,
});

// 1. Backup everything first
mkdirSync("backups", { recursive: true });
const existingDocs = await client.fetch(`*[!(_type match "system.*") && !(_type match "sanity.*")]`);
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
writeFileSync(`backups/${stamp}.json`, JSON.stringify(existingDocs, null, 2));
console.log(`Backed up ${existingDocs.length} documents to backups/${stamp}.json`);

const log = (m) => console.log(dry ? `[dry] ${m}` : m);
const slug = (s) => ({ _type: "slug", current: s });

// 2. Tech
const techList = [
  ["React", "frontend"], ["TypeScript", "frontend"], ["JavaScript", "frontend"], ["Next.js", "frontend"],
  ["Tailwind CSS", "frontend"], ["CSS", "frontend"], ["SCSS", "frontend"], ["MobX", "frontend"],
  ["Angular", "frontend"], ["Flutter", "frontend"], ["React Router", "frontend"],
  ["Node.js", "backend"], ["Express", "backend"], ["Python", "backend"], ["C#", "backend"], ["REST APIs", "backend"],
  ["MySQL", "data"], ["PostgreSQL", "data"], ["Firebase", "data"], ["pandas", "data"],
  ["AWS", "infrastructure"], ["Vercel", "infrastructure"],
  ["Jest", "testing"], ["React Testing Library", "testing"], ["Scriptcase", "tooling"],
];

const techId = {};
for (const [name, category] of techList) {
  const found = await client.fetch(`*[_type=="tech" && name==$name][0]._id`, { name });
  if (found) { techId[name] = found; continue; }
  log(`create tech ${name}`);
  if (!dry) {
    const doc = await client.create({ _type: "tech", name, category });
    techId[name] = doc._id;
  } else techId[name] = `dry-${name}`;
}
const refs = (names) =>
  names.map((n, i) => ({ _type: "reference", _key: `t${i}`, _ref: techId[n] }));
const keyed = (arr) => arr.map((v, i) => ({ _key: `k${i}`, ...v }));

// 3. Experience (source: previous site, commit be8e49c lib/jobs.tsx)
const experience = [
  {
    company: "Deriv", role: "Senior Frontend Developer", website: "https://deriv.com/", startDate: "2022-04-01",
    highlights: [
      "Maintained and improved the Deriv P2P codebase with React, TypeScript, SCSS, MobX and Node.js.",
      "Shipped P2P features including star ratings for trade partners, a block-users feature, and a trade-partner list on the My Profile page.",
      "Led the separation of P2P from the Cashier project, removing dependencies and refactoring components so P2P could stand alone.",
      "Implemented routing in P2P with react-router-dom for buy/sell, orders, my-ads and my-profile, including dynamic routes by advertiser or order ID.",
      "Ongoing: refactoring P2P into pages and components, migrating to TypeScript and adding tests for each component.",
    ],
    stack: ["React", "TypeScript", "SCSS", "MobX", "Node.js", "React Router", "Jest", "React Testing Library"],
  },
  {
    company: "BeSquare", role: "BeSquare Graduate Program", website: "https://deriv.com/careers/besquare/",
    startDate: "2021-09-01", endDate: "2022-03-01",
    highlights: [
      "Rotated through frontend, product design, mobile, backend and QA teams for a full view of the software lifecycle.",
      "Won the Product Design module competition with a design-sprint prototype and was recognised as one of the best presenters.",
      "Built a React app on public APIs and a superhero website in a mini hackathon.",
      "Built a small Flutter app that reads data from an API.",
      "Built backend applications with MySQL, Node.js and Express, and completed the AWS Cloud Practitioner Essentials course.",
    ],
    stack: ["React", "Flutter", "Node.js", "Express", "MySQL", "AWS"],
  },
  {
    company: "Doctor2U", role: "Software Developer", website: "https://www.doctor2u.my/home/",
    startDate: "2019-06-01", endDate: "2019-08-01",
    highlights: [
      "Built a Python web crawler that extracted patient data from PERKESO and produced highlighted CSV reports with pandas.",
      "Added colour-coded payment status and test type columns so staff could triage patient records quickly.",
      "Built the staff web portal with Angular, TypeScript and a C# backend, using Angular Material.",
    ],
    stack: ["Python", "pandas", "Angular", "TypeScript", "C#"],
  },
  {
    company: "Crops For The Future", role: "Software Developer", website: "https://cropsforthefutureuk.org/",
    startDate: "2018-10-01", endDate: "2019-05-01",
    highlights: [
      "Merged multiple plant databases (GBIF, USDA, NCBI, EcoCrop) into one database using Python, PostgreSQL and MySQL, resolving inconsistent data and column names.",
      "Built a card-based interface with Scriptcase for browsing, searching and editing plant records.",
      "Built a companion interface with pgAdmin that could be embedded in the organisation's website.",
    ],
    stack: ["Python", "PostgreSQL", "MySQL", "Scriptcase"],
  },
];

for (const e of experience) {
  const found = await client.fetch(`*[_type=="experience" && company==$c && startDate==$s][0]._id`, { c: e.company, s: e.startDate });
  if (found) continue;
  log(`create experience ${e.company}`);
  const { highlights, stack, ...rest } = e;
  if (!dry) await client.create({ _type: "experience", showOnResume: true, ...rest, highlights, stack: refs(stack) });
}

// 4. Projects (source: commit be8e49c lib/projects.tsx)
const projects = [
  { title: "Wedding of Ameerul & Zebo", slug: "wedding-invitation", featured: true, order: 1,
    summary: "A wedding invitation website for Ameerul and Zebo.", repo: "AmeerulH/wedding-invitation",
    liveUrl: "https://wedding-ameerul-zebo.vercel.app", stack: ["React", "Tailwind CSS", "TypeScript"] },
  { title: "Portfolio", slug: "portfolio", featured: true, order: 2,
    summary: "This website: a Next.js portfolio whose content is edited in Sanity and whose repo stats come live from GitHub.",
    repo: "AmeerulH/Portfolio", liveUrl: "https://portfolio-ameerulh.vercel.app", stack: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Superheroes", slug: "superheroes", featured: false, order: 3,
    summary: "Look up your favourite heroes, compare them and find out who comes out on top. Built in a BeSquare mini hackathon.",
    repo: "AmeerulH/besquare-hackathon", liveUrl: "https://sphero.vercel.app", stack: ["React", "CSS", "JavaScript", "REST APIs"] },
  { title: "Weather App", slug: "weather-app", featured: false, order: 4,
    summary: "A weather app built on WeatherAPI with MobX for state management.",
    repo: "AmeerulH/weather-mobx", liveUrl: "https://weather-mobx.vercel.app", stack: ["React", "SCSS", "JavaScript", "MobX", "REST APIs"] },
  { title: "Midicode", slug: "midicode", featured: false, order: 5,
    summary: "Plug in a MIDI keyboard and create interactive music in the browser. Final year project.",
    repo: "AmeerulH/FYP", stack: ["Angular", "CSS", "JavaScript", "Firebase"] },
];

for (const p of projects) {
  const found = await client.fetch(`*[_type=="project" && slug.current==$s][0]._id`, { s: p.slug });
  if (found) continue;
  log(`create project ${p.title}`);
  const { slug: s, stack, ...rest } = p;
  if (!dry) await client.create({ _type: "project", kind: "openSource", showOnResume: false, ...rest, slug: slug(s), stack: refs(stack) });
}

// 5. Site settings singleton (only if missing). Copy is a starting point, to be rewritten.
const settings = await client.fetch(`*[_id=="siteSettings"][0]._id`);
if (!settings) {
  log("create siteSettings");
  if (!dry)
    await client.createIfNotExists({
      _id: "siteSettings", _type: "siteSettings",
      name: "Ameerul Hady",
      role: "Senior Frontend Developer at Deriv",
      headline: "Product engineer. I ship whole products end to end, with frontend craft as the edge.",
      summary:
        "I have been coding since I was 15. I work in React and TypeScript at Deriv, where I maintain and extend the P2P trading product, and I build full-stack projects on the side. [PLACEHOLDER: rewrite after LinkedIn import.]",
      availability: "open",
      email: "ameerulzhbusiness@gmail.com",
      socials: keyed([
        { _type: "social", label: "GitHub", url: "https://github.com/AmeerulH" },
        { _type: "social", label: "LinkedIn", url: "https://www.linkedin.com/in/ameerul-h/" },
      ]),
      capabilities: keyed([
        { _type: "capability", title: "Frontend architecture", description: "[PLACEHOLDER] React, TypeScript, state management, testing." },
        { _type: "capability", title: "APIs and data", description: "[PLACEHOLDER] Node.js, SQL, REST." },
        { _type: "capability", title: "Infrastructure", description: "[PLACEHOLDER] Deployment, CI, cloud basics." },
      ]),
    });
}

console.log(dry ? "Dry run complete. Nothing written." : "Seed complete.");
