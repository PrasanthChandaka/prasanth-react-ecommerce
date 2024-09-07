import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    <div className="bg-neutral-300 rounded-lg overflow-hidden my-10 dark:bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col justify-center gap-5 text-center items-center py-10 px-2">
          <h1 className="main-heading uppercase text-balance dark:text-white">
            Discover Your Perfect Find
          </h1>
          <p className="text-sm sm:text-lg text-neutral-900 text-pretty max-w-[80%] pointer-events-none dark:text-neutral-400">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to="/collection">
            <button
              type="button"
              className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full w-fit text-nowrap hover:scale-[0.95] transition-all duration-100 font-bold"
            >
              Shop Now
            </button>
          </Link>
        </div>
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
