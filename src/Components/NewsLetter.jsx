import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-transparent dark:text-white border border-neutral-300 dark:border-neutral-700  shadow-lg p-5 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5 rounded-xl my-2 ">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black my-auto text-left">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>

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
          <button className="btn-primary h-[40px]" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
