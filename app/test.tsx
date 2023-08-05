import React from "react";
import "../styles/skeleton.scss";

const SkeletonHome = () => {
  return (
    <div className="flex flex-col">
      <div className="skeleton-black my-2 h-[1.5rem] w-[9rem]" />
      <div className="skeleton-black my-4 h-[3rem] w-[20rem] max-sm:w-[15rem]" />
      <div className="skeleton-black my-5 h-[3rem] w-[40rem] max-sm:w-[20rem]" />
      <div className="skeleton-black mt-10 mb-2 w-[34rem] max-sm:w-[20rem]" />
      <div className="skeleton-black mb-2 w-[34rem] max-sm:w-[20rem]" />
      <div className="skeleton-black mb-2 w-[34rem] max-sm:w-[20rem]" />
      <div className="skeleton-black mb-2 w-[34rem] max-sm:w-[20rem]" />
      <div className="flex flex-row mt-12 space-x-0 max-sm:justify-between">
        <div className="skeleton mr-[0.5rem] h-[2.3rem] w-[6.5rem] max-sm:w-[50%]" />
        <div className="skeleton h-[2.3rem] w-[6.5rem] max-sm:w-[50%]" />
      </div>
    </div>
  );
};

export default SkeletonHome;
