import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

type TProjectCardTypes = {
  body_text: string;
  github_link: string;
  hashtags: Array<string>;
  project_name: string;
  website_link: string;
};

const ProjectCard = ({
  body_text,
  github_link,
  hashtags,
  project_name,
  website_link,
}: TProjectCardTypes) => {
  return (
    <div className="bg-[#5F8D4E] hover:bg-[#5c9447] w-[20rem] h-[20rem] rounded overflow-hidden shadow-lg">
      <div className="px-6 pt-4 flex items-center justify-between">
        <AiOutlineFolder color="#0a0a0a" size={40} />
        <div className="flex items-center ">
          <a href={github_link} target="_blank">
            <FiGithub className="cursor-pointer" color="#0a0a0a" size={25} />
          </a>
          <a href={website_link} target="_blank">
            <BiLinkExternal
              className="cursor-pointer"
              color="#0a0a0a"
              size={25}
            />
          </a>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-neutral-800 font-bold text-xl mb-2">
          {project_name}
        </div>
        <p className="text-gray-700 text-base">{body_text}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {hashtags.map((hashtag: string) => {
          return (
            <span className="inline-block text-neutral-300 bg-neutral-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              {hashtag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
