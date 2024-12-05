import React from "react";
import { skills, skills_2, skills_3 } from "@/data";
import { AnimatedTooltip } from "./ui/Animated-tooltip";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="heading">
        My <span className="text-purple">skills</span>
      </h1>
      <div
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
        style={{ transform: "scale(0.9)" }}
      >
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mb-4 ">
          <AnimatedTooltip items={skills} />
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mb-4 ">
          <AnimatedTooltip items={skills_2} />
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center mb-4 ">
          <AnimatedTooltip items={skills_3} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
