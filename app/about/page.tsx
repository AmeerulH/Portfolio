import Image from "next/image";
import Link from "next/link";
import { name, avatar } from "lib/info";
import { getBlogViews, getTweetCount, getStarCount } from "lib/metrics";

export default async function AboutPage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={150}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
            className="flex items-center gap-2"
          >
            {`${tweetCount.toLocaleString()} tweets all time`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/leerob"
            className="flex items-center gap-2"
          >
            {`${starCount.toLocaleString()} stars on this repo`}
          </a>
          <Link href="/blog" className="flex items-center">
            {`${views.toLocaleString()} blog views all time`}
          </Link>
        </div>
      </div>
    </section>
  );
}
