import "../../styles/skeleton.scss";

const SkeletonPortfolio = () => {
  const cards = [1, 2, 3, 4];
  const hashtags = [1, 2, 3];
  return (
    <>
      <div className="skeleton mb-8 h-[3rem] w-[10rem]"></div>
      <div className="grid gap-y-[3rem] sm:grid-cols-2">
        {cards.map((card) => (
          <div
            className="bg-[#5F8D4E] w-[20rem] h-[20rem] rounded overflow-hidden shadow-lg"
            key={card}
          >
            <div className="mt-1 px-6 pt-4 flex items-center justify-between">
              <div className="skeleton-black rounded-full h-[2.5rem] w-[2.5rem]" />
              <div className="flex items-center">
                <div className="skeleton-black rounded-full h-[2rem] w-[2rem]" />
                <div className="skeleton-black rounded-full h-[2rem] w-[2rem] ml-2" />
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="skeleton-black text-xl mt-3 mb-2 h-[2rem] w-[8rem]" />
              <div>
                <div className="skeleton-black  w-[100%]" />
                <div className="skeleton-black  w-[95%]" />
                <div className="skeleton-black  w-[95%]" />
                <div className="skeleton-black  w-[50%]" />
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              {hashtags.map((hashtag) => {
                return (
                  <span
                    className="skeleton-black rounded-full px-3 py-1 mr-2 mb-2 h-[1.75rem] w-[4rem]"
                    key={hashtag}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkeletonPortfolio;
