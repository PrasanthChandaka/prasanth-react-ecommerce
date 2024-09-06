import { useEffect } from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="py-10 flex flex-col items-center mx-auto max-w-5xl">
      <h1 className="heading mb-10">
        About <span className="span">us</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full">
          <img
            className="w-full object-contain rounded-lg overflow-hidden"
            src={assets.about_img}
            alt="ablout-img"
          />
        </div>
        <div className="flex flex-col justify-center text-left gap-5">
          <p className="para">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="para">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h2 className="heading2">Our Mission</h2>
          <p className="para">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
