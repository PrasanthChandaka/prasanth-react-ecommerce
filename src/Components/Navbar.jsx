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
import { useContext } from "react";
import { Store } from "../ContextProvider/context";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const ref = useRef(null);
  const { cartItems } = useContext(Store);

  useEffect(() => {
    const visible = () => {
      if (window.innerWidth > 1024) {
        setToggleNav(false);
      }
    };
    window.addEventListener("resize", visible);
    return () => window.removeEventListener("resize", visible);
  }, []);

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
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [toggleNav]);

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
      <div className="mx-auto relative w-full flex py-2 px-4 sm:px-6 items-center justify-between gap-2 dark:bg-neutral-950 dark:text-white">
        <Link to="/">
          <h1 className="font-serif uppercase font-bold text-2xl bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
            flyers
          </h1>
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
            className="active:bg-neutral-500 cursor-pointer rounded-full p-2 transition duration-300"
          >
            {mode ? <SunMoon size={18} /> : <Moon size={18} />}
          </div>
          <div className="active:bg-neutral-500 transition duration-300 cursor-pointer rounded-full w-fit h-fit p-2">
            <Search size={18} />
          </div>
          <div className="group active:bg-neutral-500 transition duration-300 cursor-pointer rounded-full w-fit h-fit p-2">
            <User size={18} />
            <div className="hidden group-hover:block absolute right-8 top-10 bg-black dark:bg-white z-[9999999] text-white dark:text-black p-3 rounded-md">
              <Link to="/signin">Logout</Link>
            </div>
          </div>
          <div
            className={`active:bg-neutral-500 transition duration-300 cursor-pointer relative rounded-full w-fit h-fit p-2 4 ${
              cartItems.length > 0 &&
              "scale-75 animate-spin transition-all duration-200"
            }
            }`}
          >
            <NavLink to="/cart">
              <ShoppingCart size={18} />
              <div className="absolute top-0 right-0 w-5 h-5 bg-orange-500 rounded-full text-white font-bold text-xs text-center">
                {cartItems.length}
              </div>
            </NavLink>
          </div>
          <div
            ref={ref}
            onClick={() => setToggleNav(!toggleNav)}
            className="active:bg-neutral-500 block lg:hidden cursor-pointer rounded-full p-2 transition duration-300"
          >
            {toggleNav ? <X size={18} /> : <AlignRight size={18} />}
          </div>
        </div>
      </div>
      {/* {toggleNav && ( */}
      <div
        ref={ref}
        className={`bg-white dark:bg-neutral-900 rounded-b-2xl dark:text-white shadow-xl absolute transition duration-200 ease-linear w-full top-114 left-0 ${
          toggleNav ? "translate-x-0" : "translate-x-[-100vw]"
        } py-16 z-[999]`}
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
      {/* )} */}
    </div>
  );
};

export default Navbar;
