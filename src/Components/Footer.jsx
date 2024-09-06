import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="max-w-7xl p-5 mx-auto pointer-events-none dark:text-white overflow-hidden">
      <p className="h-[0.5px] bg-neutral-300 w-full my-5"></p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="max-w-[400px]">
          <h1 className="font-serif uppercase font-bold text-2xl bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent">
            flyers
          </h1>
          <p className="text-neutral-700 text-sm dark:text-neutral-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-between">
          <div>
            <h1 className="mb-3 font-semibold">COMPANY</h1>
            {["Home", "About us", "Delivery", "Privacy policy"].map((each) => (
              <div
                key={each}
                className="flex flex-col gap-2 text-sm dark:text-neutral-400"
              >
                {each}
              </div>
            ))}
          </div>
          <div>
            <h1 className="mb-3 font-semibold">GET IN TOUCH</h1>
            <div className="flex flex-col gap-2 text-sm">
              {["+1-000-000-0000", "greatstackdev@gmail.com", "Instagram"].map(
                (each) => (
                  <p key={each} className=" dark:text-neutral-400 text-wrap">
                    {each}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="h-[0.5px] bg-neutral-300 w-full my-5"></p>
      <p className="text-sm text-center">
        Copyright 2024@ greatstack.dev - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
