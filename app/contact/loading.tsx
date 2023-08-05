import React from "react";
import "../../styles/skeleton.scss";

const SkeletonContact = () => {
  return (
    <div className="flex flex-col">
      <div className="skeleton-black header mb-8" />
      <div className="my-2 sm:w-[75%]">
        <div className="my-2">
          <div className="skeleton-black mb-2 w-[90%]" />
          <div className="skeleton-black mb-2 w-[85%]" />
          <div className="skeleton-black mb-2 w-[80%]" />
          <div className="skeleton-black mb-2 w-[60%]" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-[1rem] space-x-0">
        <div className="flex flex-row max-sm:justify-between mr-2">
          <div className="skeleton button mr-[0.5rem] max-sm:w-[50%]" />
          <div className="skeleton button--wide max-sm:w-[50%]" />
        </div>
        <div className="max-sm:pt-[0.5rem]">
          <div className="skeleton button--wide max-sm:w-[10rem]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonContact;
