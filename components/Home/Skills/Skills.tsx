"use client";
import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import SkillCard from "./SkillCard";
import { skillsData } from "../../data/skills";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-8 md:py-10 bg-gradient-to-br from-gray-900 via-purple-950 to-black overflow-hidden"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <SectionHeader
          badge="My Skills"
          title="Technical"
          highlightText="Skills"
          description="A concise overview of my core and additional technical skills."
        />

        <div className="animate-fadeInUp animation-delay-300 md:flex md:gap-6">
          {/* Core Skills */}
          <div className="md:flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-full"></div>
              <h2 className="text-2xl font-black text-white">Core Skills</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.expert.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px bg-white/20 mx-3"></div>

          {/* Additional Skills */}
          <div className="md:flex-1 mt-8 md:mt-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] rounded-full"></div>
              <h2 className="text-2xl font-black text-white">Additional Skills</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-[#FFBBE1] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.familiar.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default Skills;

