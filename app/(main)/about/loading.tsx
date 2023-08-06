import React from "react";
import { MdArrowRight } from "react-icons/md";
import "styles/skeleton.scss";

const SkeletonAbout = () => {
  const paragraphs = [1, 2, 3, 4];
  const arrows = [1, 2, 3];

  return (
    <div className="flex flex-col">
      <div className="skeleton-black mb-10 header" />
      {paragraphs.map((key) => (
        <div className="my-2" key={key}>
          <div className="skeleton-black mb-2 w-[100%]" />
          <div className="skeleton-black mb-2 w-[95%]" />
          <div className="skeleton-black mb-2 w-[80%]" />
        </div>
      ))}
      <div className="skeleton-black w-[7rem mt-2 mb-4" />
      <div className="flex items-start md:items-center flex-col md:flex-row">
        <ul className="max-w-md mr-[5rem] ml-[-0.7rem] space-y-1 list-inside">
          {arrows.map((key) => (
            <li className="flex items-center" key={key}>
              <MdArrowRight size={32} color="#7be056" />
              <div className="skeleton-black w-[7rem]" />
            </li>
          ))}
        </ul>
        <ul className="max-w-md space-y-1 max-sm:ml-[-0.7rem] list-inside">
          {arrows.map((key) => (
            <li className="flex items-center" key={key}>
              <MdArrowRight size={32} color="#7be056" />
              <div className="skeleton-black w-[7rem]" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkeletonAbout;
