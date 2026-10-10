import { getSettings } from "@/sanity/lib/queries";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Ameerul Hady, product engineer";

export default async function Image() {
  const s = await getSettings();
  return ogCard({ eyebrow: s?.role ?? "Portfolio", title: s?.name ?? "Ameerul Hady", line: s?.headline });
}
