import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Project } from "@/sanity/types";

/** The cover plate. Uses the Sanity cover when present; otherwise an authored stamp plate. */
export function Plate({ project, number, priority }: { project: Pick<Project, "title" | "cover" | "slug">; number: string; priority?: boolean }) {
  const cover = project.cover;
  return (
    <span className="plate" style={{ viewTransitionName: `plate-${project.slug}` }}>
      {cover?.asset ? (
        <Image
          src={urlFor(cover).width(1600).height(1000).fit("crop").url()}
          alt={cover.alt ?? project.title}
          width={1600}
          height={1000}
          sizes="(min-width: 64rem) 60vw, 100vw"
          placeholder={cover.asset.metadata?.lqip ? "blur" : "empty"}
          blurDataURL={cover.asset.metadata?.lqip}
          priority={priority}
        />
      ) : (
        <>
          <span className="stamp-ring" aria-hidden />
          <span className="stamp" aria-hidden data-n={number} />
        </>
      )}
    </span>
  );
}
