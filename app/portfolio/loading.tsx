import "../../styles/skeleton.scss";

const SkeletonPortfolio = () => {
  const cards = [1, 2, 3, 4];
  const hashtags = [1, 2, 3];
  return (
    <>
      <div className="skeleton-black header mb-8"></div>
      <div className="grid gap-y-[3rem] sm:grid-cols-2">
        {cards.map((card) => (
          <div
            className="bg-[#6d7c68] w-[20rem] h-[20rem] rounded overflow-hidden shadow-lg"
            key={card}
          >
            <div className="mt-1 px-6 pt-4 flex items-center justify-between">
              <div className="skeleton-black card__icon--big" />
              <div className="flex items-center">
                <div className="skeleton-black card__icon " />
                <div className="skeleton-black card__icon ml-2" />
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="skeleton-black header--small text-xl mt-3 mb-2" />
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
                    className="skeleton-black card__hashtags mr-2 mb-2"
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
