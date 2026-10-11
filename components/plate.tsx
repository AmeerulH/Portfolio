import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Project, SanityImage } from "@/sanity/types";

function portrait(image?: SanityImage) {
  const dims = image?.asset?.metadata?.dimensions;
  return !!dims && dims.height > dims.width * 1.15;
}

/** The cover plate. Phone products share the landscape frame, several screens across. */
export function Plate({ project, number, priority }: { project: Pick<Project, "title" | "cover" | "gallery" | "slug">; number: string; priority?: boolean }) {
  const cover = project.cover;
  const phone = portrait(cover);
  const shots = (phone ? [cover, ...(project.gallery ?? [])] : [cover]).filter((image): image is SanityImage => !!image?.asset && (!phone || portrait(image))).slice(0, 3);
  return (
    <span className="plate" data-orient={phone ? "portrait" : undefined} style={{ viewTransitionName: `plate-${project.slug}` }}>
      {shots.length > 0 ? (
        shots.map((image, i) => {
          const dims = image.asset?.metadata?.dimensions;
          return (
            <Image
              key={image.asset?._ref ?? image.alt ?? i}
              src={phone ? urlFor(image).width(900).url() : urlFor(image).width(1600).height(1000).fit("crop").url()}
              alt={image.alt ?? project.title}
              width={dims?.width ?? 1600}
              height={dims?.height ?? 1000}
              sizes={phone ? "(min-width: 64rem) 18vw, 30vw" : "(min-width: 64rem) 60vw, 100vw"}
              placeholder={image.asset?.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={image.asset?.metadata?.lqip}
              priority={priority && i === 0}
            />
          );
        })
      ) : (
        <>
          <span className="stamp-ring" aria-hidden />
          <span className="stamp" aria-hidden data-n={number} />
        </>
      )}
    </span>
  );
}
