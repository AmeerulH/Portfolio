"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import { jobs } from "lib/jobs";
import { MdArrowRight } from "react-icons/md";
import "../styles/animations.scss";

export default function JobPicker() {
  const [active_job, setActiveJob] = useState("Deriv");

  return (
    <LayoutGroup>
      <div className="flex flex-row">
        <div className="flex flex-col">
          {jobs.map((job) => {
            const { name } = job;
            const isActive = name === active_job;
            return (
              <div
                className={clsx(
                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle w-[10rem] cursor-pointer mr-[2rem]",
                  {
                    "text-neutral-500 border-[#ffffff98] border-l-2": !isActive,
                    "font-bold": isActive,
                  }
                )}
                onClick={() => setActiveJob(name)}
              >
                <span className="relative py-[1rem] px-[2rem] w-[10rem] ">
                  {name}
                  {isActive ? (
                    <motion.div
                      className="absolute inset-0 border-[#5F8D4E] border-l-2 bg-[#5f8d4e25] z-[-1]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
              </div>
            );
          })}
        </div>
        {jobs.map((job) => {
          const { name, position, timeline, website, bullets } = job;
          const isActive = name === active_job;
          return (
            <div className="flex flex-row relative">
              {isActive ? (
                <div className="">
                  <h1 className="text-2xl font-bold">
                    {position}{" "}
                    <a
                      className="hover-underline"
                      href={website}
                      target="_blank"
                    >
                      @ {name}
                    </a>
                  </h1>
                  <h2 className="text-sm text-neutral-500 my-[0.5rem]">
                    {timeline}
                  </h2>
                  <ul className="ml-[-0.7rem] space-y-4 text-gray-500 list-inside dark:text-gray-400 mt-[1.5rem]">
                    {bullets.map((bullet_point: string) => {
                      return (
                        <li className="flex">
                          <span className="mt-[-0.2rem]">
                            <MdArrowRight size={32} color="#5F8D4E" />
                          </span>
                          <span className="w-[100%]">{bullet_point}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
