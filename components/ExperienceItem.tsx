"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05
                }
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-4 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="bg-black-200 p-4 flex flex-col md:flex-row justify-between items-center hover:bg-black-300 rounded-xl cursor-pointer  mb-4"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col justify-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-purple hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05
        }
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Coaching Freelance",
    title: "Backend Developer & Mentor",
    src: "/freelance.jpg",
    ctaText: "View Details",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          As a Backend Developer & Mentor, I specialize in designing and
          implementing scalable, high-performance backend solutions, primarily
          using Java and Spring Boot. I have extensive experience in creating
          RESTful APIs, microservices architectures, and ensuring robust
          integrations with various databases (SQL and NoSQL).
          <br /> My work emphasizes clean code practices, optimization, and
          adherence to industry standards like SOLID principles and Agile
          methodologies.
          <br /> In my mentoring role, I guide individuals in mastering backend
          development, focusing on modern frameworks.
        </p>
      );
    }
  },
  {
    description: "Escienza",
    title: "Analista de Sistemas",
    src: "/edsuite.png",
    ctaText: "View Details",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          <b>Remote Connection via Twingate: </b>
          Utilized Twingate to establish secure and seamless remote connections,
          enabling efficient configuration and management of backend services.
          <br />
          <b>Code Refactoring for the EDSuite PTS System: </b>Led significant
          code refactoring efforts for the EDSuite PTS system to improve
          maintainability, readability, and overall performance.
          <br />
          <b>Initiative for Early-Stage Code Modularization: </b>
          Proactively initiated a modularization strategy for the EDSuite PTS
          system to transition from a monolithic architecture to a
          microservices-based structure.
          <br />
          <b>Task Management with Jira: </b> Leveraged Jira for comprehensive
          task management and collaboration, ensuring transparency,
          prioritization, and progress tracking.
        </p>
      );
    }
  },

  {
    description: "Agrokasa",
    title: "Information assistant",
    src: "/agrokasa.png",
    ctaText: "View Details",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Document Management. <br />
          Support in Administrative Tasks. <br />
          Production Reports. <br />
          Production Schedules and Progress. <br />
          Machine Availability Report for Maf Roda. <br />
          Data Analysis. <br />
          Visualization of Indicators using Power BI.
        </p>
      );
    }
  },
  {
    description: "Strategic Partners",
    title: "Information security administrator",
    src: "/information.png",
    ctaText: "View Details",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Analysis of information security risks in the IT area. Definition of
          policies and a security plan for the management of information
          security in the company.
        </p>
      );
    }
  }
];
