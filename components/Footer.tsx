import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center mb-40 gap-2 md:gap-0">
        <h1 className="heading lg:max-w-[45vw]">
          Designed and developed by <span className="text-purple">Jack</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-0 text-center">
          Want to collaborate? Reach out at:
        </p>
        <a
          href="mailto:silveriocieza.jackanibal@gmail.com"
          className="w-full flex items-center justify-center"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClases="w-80"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2024 Jack. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
