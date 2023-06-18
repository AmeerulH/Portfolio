import { bigName, bio, job, title } from "lib/info";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const revalidate = 60;

export default function HomePage() {
  return (
    <section>
      <p className="my-2 max-w-[500px] text-neutral-800 dark:text-neutral-200">
        {title()}
      </p>
      <h1 className="my-4 font-bold text-5xl">{bigName()}</h1>
      <h1 className="my-5 font-bold text-5xl font-serif">{job()}</h1>
      <p className="mt-10 max-w-[550px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className="flex flex-col md:flex-row mt-12 space-x-0 md:space-x-4 space-y-2 md:space-y-0">
        <a
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          href="https://github.com/AmeerulH"
          target="_blank"
        >
          <FaGithub />
          <p className="pl-2">GitHub</p>
        </a>
        <a
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          href="https://www.linkedin.com/in/ameerul-h/"
          target="_blank"
        >
          <FaLinkedin />
          <p className="pl-2">LinkedIn</p>
        </a>
      </div>
    </section>
  );
}
