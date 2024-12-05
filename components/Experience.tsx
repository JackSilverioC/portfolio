"use client";
import React from "react";
import { ExpandableCardDemo } from "./ExperienceItem";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="heading">
        My <span className="text-purple">experience</span>
      </h1>
      <div className="mt-10 py-20">
        <ExpandableCardDemo />
      </div>
    </div>
  );
};

export default Experience;
