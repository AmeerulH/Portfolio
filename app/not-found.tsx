import Button from "components/button";
import "../styles/not-found.scss";

const Error404 = () => {
  return (
    <div className="absolute bg-[#111010] top-0 left-0">
      <div className="not-found flex flex-col items-center justify-center h-screen w-screen">
        <div className="not-found__blob" />
        <div className="not-found__blob one" />
        <div className="not-found__blob two" />
        <div className="flex flex-col items-center relative mb-4 z-10">
          <h1 className="font-serif font-bold text-[12rem] max-sm:text-[8rem] text-neutral-800">
            Error
          </h1>
          <div className="absolute flex flex-row items-center top-[6.5rem] max-sm:top-[5rem] font-serif font-bold text-[8rem] max-sm:text-[5rem]">
            <h1>40</h1>
            <h1 className="rotate-180 pb-[2rem] max-sm:pb-[1.4rem]">4</h1>
          </div>
        </div>
        <h1 className="font-serif font-bold text-[1rem] max-sm:text-[0.7rem] text-center my-[1rem] z-10">
          The page you were looking for was removed or doesn't exist.
        </h1>
        <Button text="Return Home" link="/" />
      </div>
    </div>
  );
};

export default Error404;
