"use client";

import { AiOutlineFolder } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

type TProjectCardTypes = {
  body_text: string;
  github_link: string;
  hashtags: Array<string>;
  key: string;
  project_name: string;
  website_link: string;
};

const ProjectCard = ({
  body_text,
  github_link,
  hashtags,
  key,
  project_name,
  website_link,
}: TProjectCardTypes) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: [null, 1.2, 1.1] }}
      transition={{ duration: 0.3 }}
      key={key}
    >
      <div className="relative bg-[#67bc48] hover:bg-[#7be056] w-[20rem] max-sm:w-[100%] h-[20rem] rounded overflow-hidden shadow-lg">
        <div className="px-6 pt-4 flex items-center justify-between">
          <AiOutlineFolder color="#dbfdcf" size={40} />
          <div className="flex items-center">
            <a href={github_link} target="_blank">
              <FiGithub className="cursor-pointer" color="#dbfdcf" size={25} />
            </a>
            {website_link && (
              <a className="pl-[0.3rem]" href={website_link} target="_blank">
                <BiLinkExternal
                  className="cursor-pointer"
                  color="#dbfdcf"
                  size={25}
                />
              </a>
            )}
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="text-neutral-800 font-bold text-xl mb-2">
            {project_name}
          </div>
          <p className="text-gray-700 text-base">{body_text}</p>
        </div>
        <div className="absolute px-6 pt-4 bottom-[0.8rem]">
          {hashtags.map((hashtag: string) => {
            return (
              <span className="inline-block text-neutral-300 bg-neutral-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                {hashtag}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
