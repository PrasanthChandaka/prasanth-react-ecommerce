import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import {
  AlignRight,
  Moon,
  Search,
  ShoppingCart,
  SunMoon,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, []);

  const toggleDarkTheme = () => {
    setMode(!mode);
    if (mode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="sticky top-0 backdrop-blur-lg z-[9999] max-w-7xl mx-auto">
      <div className="mx-auto relative flex py-2 px-6 items-center justify-between gap-2 dark:bg-neutral-950 dark:text-white">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-28 sm:w-36" />
        </Link>
        <div className="hidden md:flex gap-6 uppercase items-center">
          <NavLink className="relative" to="/">
            Home
            <p className="hidden h-[2px] rounded-full absolute top-6 w-full mx-auto bg-black dark:bg-white"></p>
          </NavLink>
          <NavLink className="relative" to="/collection">
            Collection
            <p className="hidden h-[2px] rounded-full absolute top-6 w-full mx-auto bg-black dark:bg-white"></p>
            <p className="hidden h-[2px] rounded-full absolute top-6 w-full mx-auto bg-black dark:bg-white"></p>
          </NavLink>
          <NavLink className="relative" to="/about">
            About
            <p className="hidden h-[2px] rounded-full absolute top-6 w-full mx-auto bg-black dark:bg-white"></p>
          </NavLink>
          <NavLink className="relative" to="/contact">
            Contact
            <p className="hidden h-[2px] rounded-full absolute top-6 w-full mx-auto bg-black dark:bg-white"></p>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={toggleDarkTheme}
            className="hover:bg-neutral-300 cursor-pointer rounded-full p-2 transition duration-300"
          >
            {mode ? <SunMoon size={18} /> : <Moon size={18} />}
          </div>
          <div className="hover:bg-neutral-300 transition duration-300 cursor-pointer rounded-full w-fit h-fit p-2">
            <Search size={18} />
          </div>
          <div className="hover:bg-neutral-300 transition duration-300 cursor-pointer rounded-full w-fit h-fit p-2">
            <User size={18} />
          </div>
          <div className="hover:bg-neutral-300 transition duration-300 cursor-pointer relative rounded-full w-fit h-fit p-2">
            <NavLink to="/cart">
              <ShoppingCart size={18} />
              <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-white font-bold text-xs content-center pl-[2px]">
                55
              </div>
            </NavLink>
          </div>
          <div
            ref={ref}
            onClick={() => setToggleNav(!toggleNav)}
            className="hover:bg-neutral-300 cursor-pointer rounded-full p-2 transition duration-300"
          >
            {toggleNav ? <X size={18} /> : <AlignRight size={18} />}
          </div>
        </div>
      </div>
      {toggleNav && (
        <div
          ref={ref}
          className="bg-white dark:bg-neutral-900 rounded-b-2xl dark:text-white shadow-xl absolute w-full top-114 left-0 py-16 z-[999]"
        >
          <div className="flex flex-col gap-4">
            <NavLink
              onClick={() => setToggleNav(false)}
              className="py-2 px-5 hover:bg-neutral-300"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(false)}
              className="py-2 px-5 hover:bg-neutral-300"
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(false)}
              className="py-2 px-5 hover:bg-neutral-300"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setToggleNav(false)}
              className="py-2 px-5 hover:bg-neutral-300"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
