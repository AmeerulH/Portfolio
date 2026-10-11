import { defineQuery } from "next-sanity";
import { fetchPublished } from "./live";
import type { Experience, Project, SiteSettings } from "../types";

const IMG = `{ ..., alt, caption, asset->{ _id, metadata { lqip, dimensions } } }`;

const PROJECT_FIELDS = `
  _id, title, "slug": slug.current, kind, featured, order, year, summary, role,
  metrics[]{ _key, label, value },
  liveUrl, repo, showOnResume,
  "stack": stack[]->{ _id, name, category },
  cover ${IMG}
`;

const SETTINGS_QUERY = defineQuery(`*[_id == "siteSettings"][0]{ ..., seoImage ${IMG} }`);
const EXPERIENCE_QUERY = defineQuery(`
  *[_type == "experience"] | order(startDate desc){
    _id, company, role, website, location, startDate, endDate, summary, highlights, showOnResume,
    "stack": stack[]->{ _id, name, category }
  }`);
const PROJECTS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)] | order(order asc, title asc){ ${PROJECT_FIELDS} }`);
const FEATURED_QUERY = defineQuery(`*[_type == "project" && featured == true && defined(slug.current)] | order(order asc){ ${PROJECT_FIELDS}, gallery[] ${IMG} }`);
const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  ${PROJECT_FIELDS},
  gallery[] ${IMG},
  caseStudy[]{ ..., _type == "image" => ${IMG} }
}`);
const SLUGS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`);

export const getSettings = (): Promise<SiteSettings | null> => fetchPublished(SETTINGS_QUERY);
export const getExperience = (): Promise<Experience[]> => fetchPublished(EXPERIENCE_QUERY);
export const getProjects = (): Promise<Project[]> => fetchPublished(PROJECTS_QUERY);
export const getFeaturedProjects = (): Promise<Project[]> => fetchPublished(FEATURED_QUERY);
export const getProject = (slug: string): Promise<Project | null> => fetchPublished(PROJECT_QUERY, { slug });
export const getProjectSlugs = (): Promise<{ slug: string; _updatedAt: string }[]> => fetchPublished(SLUGS_QUERY);
