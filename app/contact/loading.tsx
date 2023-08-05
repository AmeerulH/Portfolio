import React from "react";
import "../../styles/skeleton.scss";

const SkeletonContact = () => {
  return (
    <div className="flex flex-col">
      <div className="skeleton mb-8 h-[3rem] w-[10rem]" />
      <div className="my-2 sm:w-[75%]">
        <div className="my-2">
          <div className="skeleton mb-2 w-[90%]" />
          <div className="skeleton mb-2 w-[85%]" />
          <div className="skeleton mb-2 w-[80%]" />
          <div className="skeleton mb-2 w-[60%]" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-[1rem] space-x-0">
        <div className="flex flex-row max-sm:justify-between mr-2">
          <div className="skeleton mr-[0.5rem] h-[2.3rem] w-[6.5rem] max-sm:w-[50%]" />
          <div className="skeleton h-[2.3rem] w-[8rem] max-sm:w-[50%]" />
        </div>
        <div className="max-sm:pt-[0.5rem">
          <div className="skeleton h-[2.3rem] w-[8rem] max-sm:w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonContact;
