import { Parallax } from "react-parallax";

const Cover = ({ bgImage, heading, headingText }) => {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bgImage}
        bgImageAlt="Cover photo"
        strength={-200}
        className="px-14 md:px-28"
      >
        <section className="bg-[#3d5cab80] bg-opacity-50 my-28 md:my-52 py-20 max-w-6xl mx-auto rounded-xl">
          <div className="px-8 md:px-12 lg:px20 text-white text-center space-y-3">
            <h1 className="text-2xl md:text-7xl font-bold font-Cinzel uppercase">
              {heading}
            </h1>
            <p className="max-w-3xl mx-auto uppercase">{headingText}</p>
          </div>
        </section>
      </Parallax>
    </>
  );
};
export default Cover;
