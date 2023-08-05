import clsx from "clsx";
import { jobs } from "lib/jobs";
import { MdArrowRight } from "react-icons/md";
import "../../styles/skeleton.scss";

const SkeletonExperience = () => {
  const bullets = [1, 2, 3];
  return (
    <>
      <div className="skeleton mb-8 h-[3rem] w-[10rem]"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-col max-md:overflow-scroll max-md:mb-[1rem]">
          {jobs.map((job, index) => {
            const { name } = job;
            const is_default = index === 0;
            return (
              <div
                className={clsx(
                  "transition-all flex align-middle w-[10rem] md:mr-[2rem]",
                  {
                    "text-neutral-500 border-[#ffffff98] max-md:border-b-2 md:border-l-2":
                      !is_default,
                  }
                )}
                key={name}
              >
                <span className="flex items-center relative px-[1.5rem] py-[1rem] md:py-[1rem] md:px-[2rem] md:w-[10rem]">
                  <div className="skeleton w-[6rem]" />
                  {is_default ? (
                    <div className="absolute inset-0 border-[#5F8D4E] max-md:border-b-2 md:border-l-2 bg-[#5f8d4e25] z-[-1]" />
                  ) : null}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row relative w-[100%]">
          <div className="w-[100%]">
            <div className="skeleton h-[2rem] w-[20rem]" />
            <div className="my-[0.5rem]">
              <div className="skeleton w-[8rem]" />
            </div>
            <ul className="ml-[-0.7rem] space-y-4 text-gray-500 list-inside dark:text-gray-400 mt-[1.5rem]">
              {bullets.map((key) => {
                return (
                  <li className="flex flex-row items-center" key={key}>
                    <span className="mt-[-0.2rem]">
                      <MdArrowRight size={32} color="#5F8D4E" />
                    </span>
                    <div className="flex flex-col w-[100%]">
                      <div className="skeleton mt-5 w-[90%]" />
                      <div className="skeleton mt-2 w-[85%]" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonExperience;
