import { defineLive, type StrictDefinedFetchType } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  strict: true,
});

// The app's single 'use cache' boundary for Sanity data. Published content only,
// no stega: this is a public site with no draft preview.
export const cachedSanity: StrictDefinedFetchType = async (options) => {
  "use cache";
  return sanityFetch(options);
};

export async function fetchPublished<const Q extends string>(query: Q, params: Record<string, unknown> = {}) {
  const { data } = await cachedSanity({ query, params, perspective: "published", stega: false });
  return data as any;
}
