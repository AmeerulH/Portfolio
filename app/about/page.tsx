import {
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  technologies,
} from "lib/info";
import { MdArrowRight } from "react-icons/md";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <div className="flex items-start md:items-center mt-8 flex-col md:flex-row">
        <div>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-4">
            {firstParagraph()}
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-4">
            {secondParagraph()}
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-4">
            {thirdParagraph()}
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-4">
            {fourthParagraph()}
          </p>
        </div>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-4">
        {technologies()}
      </p>
      <div className="flex items-start md:items-center flex-col md:flex-row">
        <ul className="max-w-md mr-[5rem] ml-[-0.7rem] space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <li className="flex items-center">
            <MdArrowRight size={32} color="#5F8D4E" />
            JavaScript (ES6+)
          </li>
          <li className="flex items-center">
            <MdArrowRight size={32} color="#5F8D4E" />
            TypeScript
          </li>
          <li className="flex items-center">
            <MdArrowRight size={32} color="#5F8D4E" />
            Node.js
          </li>
        </ul>
        <ul className="max-w-md space-y-1 max-sm:ml-[-0.7rem] text-gray-500 list-inside dark:text-gray-400">
          <li className="flex items-center">
            <MdArrowRight size={32} color="#5F8D4E" />
            React
          </li>
          <li className="flex items-center">
            <MdArrowRight size={32} color="#5F8D4E" />
            MobX
          </li>
          <li className="flex items-center">
            <MdArrowRight size={32} color="#5F8D4E" />
            Jest, React Testing Library
          </li>
        </ul>
      </div>
    </section>
  );
}
