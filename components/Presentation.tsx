import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Cover } from "./ui/Cover";

const Presentation = () => {
  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-90 top-18 h-[90vh] w-[55vw]"
          fill="#40E0D0"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute top-0 left-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-lg text-center text-blue-100 max-w-100">
              <Cover>Welcome to My Portfolio</Cover>
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Hi, I’m Jack, a Backend Developer"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              This is my space to share projects and ideas as I grow as a
              developer, currently learning how to build complete fullstack
              applications. Thanks for stopping by!
            </p>

            <div className="flex flex-wrap gap-2 justify-center items-center sm:flex-nowrap sm:flex-row">
              <a
                href="https://www.linkedin.com/in/jacksilveriocieza/"
                target="_blank"
              >
                <MagicButton
                  title="LinkedIn"
                  icon={<FaLinkedin />}
                  position="left"
                />
              </a>
              <a href="https://github.com/JackSilverioC" target="_blank">
                <MagicButton
                  title="GitHub"
                  icon={<FaGithub />}
                  position="left"
                />
              </a>
              <a
                href="mailto:silveriocieza.jackanibal@gmail.com"
                target="_blank"
              >
                <MagicButton
                  title="Correo"
                  icon={<IoMdMail />}
                  position="left"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
