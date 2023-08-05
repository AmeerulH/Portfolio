import { FaGithub, FaLinkedin } from "react-icons/fa";
import { bigName, bio, job, title } from "lib/info";
import Button from "components/button";

export default function HomePage() {
  return (
    <section>
      <p className="my-2 max-w-[500px] text-xl text-[#5F8D4E]">{title()}</p>
      <h1 className="my-4 font-bold text-5xl max-sm:text-4xl">{bigName()}</h1>
      <h1 className="my-5 font-bold text-5xl max-sm:text-4xl font-serif">
        {job()}
      </h1>
      <p className="mt-10 max-w-[550px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className="flex flex-row mt-12 space-x-0 max-sm:justify-between">
        <Button
          icon={<FaGithub />}
          link="https://github.com/AmeerulH"
          text="Github"
        />
        <Button
          icon={<FaLinkedin />}
          link="https://www.linkedin.com/in/ameerul-h/"
          text="LinkedIn"
        />
      </div>
    </section>
  );
}
