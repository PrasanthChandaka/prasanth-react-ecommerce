import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-black p-10 grid grid-cols-1 sm:grid-cols-2 gap-5 rounded-xl my-2 ">
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white my-auto text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex bg-white rounded-full px-4 py-2 gap-2 items-center">
            <Mail size={18} />
            <input
              className="h-full w-full flex-1 outline-none"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <button
            className="bg-white rounded-full py-2 px-4 font-semibold hover:scale-[0.95] transition-all duration-200 "
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
