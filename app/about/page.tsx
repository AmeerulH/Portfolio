import { MdArrowRight } from "react-icons/md";
import { paragraphs, technologies, technologies_list } from "lib/info";
import SkeletonAbout from "./loading";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <div className="flex items-start md:items-center mt-8 flex-col md:flex-row">
        <div>
          {paragraphs.map((paragraph, key) => (
            <p
              className="text-neutral-700 dark:text-neutral-300 mt-2 mb-4"
              key={key}
            >
              {paragraph()}
            </p>
          ))}
        </div>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-4">
        {technologies()}
      </p>
      <div className="flex items-start md:items-center flex-col md:flex-row">
        <ul className="max-w-md mr-[5rem] ml-[-0.7rem] space-y-1 text-gray-500 list-inside dark:text-gray-400">
          {technologies_list.slice(0, 3).map((technology) => (
            <li className="flex items-center" key={technology}>
              <MdArrowRight size={32} color="#5F8D4E" />
              {technology}
            </li>
          ))}
        </ul>
        <ul className="max-w-md space-y-1 max-sm:ml-[-0.7rem] text-gray-500 list-inside dark:text-gray-400">
          {technologies_list.slice(3, 6).map((technology) => (
            <li className="flex items-center" key={technology}>
              <MdArrowRight size={32} color="#5F8D4E" />
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
