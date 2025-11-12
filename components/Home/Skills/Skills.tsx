"use client";
import React from "react";
import { BsStars } from "react-icons/bs";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiExpress,
  SiJira,
  SiOpenai,
} from "react-icons/si";
import { skillsData } from "@/constant/constant";
import {
  backgroundEffects,
  sectionDivider,
  animationStyles,
} from "@/constant/theme";

const iconMap: Record<string, any> = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJsSquare,
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  bootstrap: FaBootstrap,
  nodejs: FaNode,
  express: SiExpress,
  git: FaGitAlt,
  figma: FaFigma,
  firebase: SiFirebase,
  jira: SiJira,
  ai: SiOpenai,
  mongodb: SiMongodb,
  redux: SiRedux,
};

const Skills = () => {
  const renderSkillCard = (skill: any, index: number) => {
    const Icon = iconMap[skill.icon];

    return (
      <div
        key={index}
        className="group relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 hover:scale-105"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

        <div className="relative space-y-3">
          {/* Icon & Name */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-black text-white group-hover:text-[#FFBBE1] transition-colors duration-300">
                {skill.name}
              </h3>
              {/* <p className="text-xs text-gray-400">Proficiency</p> */}
            </div>
            <div className="text-lg font-black bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
              {skill.percentage}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] rounded-full transition-all duration-1000 ease-out group-hover:animate-gradient-x bg-[length:200%_200%]"
              style={{ width: `${skill.percentage}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="relative py-8 md:py-10 bg-gradient-to-br from-gray-900 via-purple-950 to-black overflow-hidden"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/30 mb-4">
            <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
              My Skills
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-2">
            <span className="text-white">Technical </span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] blur-2xl opacity-40"></span>
              <span className="relative bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,187,225,0.6)] animate-gradient-x bg-[length:200%_200%]">
                Skills
              </span>
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            A concise overview of my core and additional technical skills.
          </p>
        </div>

        {/* Two Columns Layout */}
        <div className="animate-fadeInUp animation-delay-300 md:flex md:gap-6">
          {/* Core Skills */}
          <div className="md:flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-full"></div>
              <h2 className="text-2xl font-black text-white">Core Skills</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.expert.map((skill, index) =>
                renderSkillCard(skill, index)
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/20 mx-3"></div>

          {/* Additional Skills */}
          <div className="md:flex-1 mt-8 md:mt-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] rounded-full"></div>
              <h2 className="text-2xl font-black text-white">
                Additional Skills
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-[#FFBBE1] to-transparent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.familiar.map((skill, index) =>
                renderSkillCard(skill, index)
              )}
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

