"use client";
import React from "react";
import { BsStars } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt, FaFigma, FaBootstrap, } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiRedux, SiFirebase, SiExpress, SiJira, SiOpenai, } from "react-icons/si";
import { skillsData } from "@/constant/constant";
import { backgroundEffects, sectionDivider, animationStyles } from "@/constant/theme";

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
        className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 hover:scale-105"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <div className="relative space-y-4">
          {/* Icon & Name */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-white group-hover:text-[#FFBBE1] transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-400">Proficiency</p>
            </div>
            <div className="text-2xl font-black bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
              {skill.percentage}%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] rounded-full transition-all duration-1000 ease-out group-hover:animate-gradient-x bg-[length:200%_200%]"
              style={{ width: `${skill.percentage}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/20">
            <BsStars className="w-3 h-3 text-[#FFBBE1]" />
            <span className="text-xs font-bold text-gray-300">
              {skill.percentage >= 85 ? "Expert" : skill.percentage >= 70 ? "Advanced" : "Intermediate"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative min-h-screen pt-[4vh] pb-16 flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-black">
      {/* Background Effects */}
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/30 mb-6">
            <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
              My Skills
            </span>
          </div>

          <h1 className="text-4xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
            <span className="text-white">Technical </span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] blur-2xl opacity-40"></span>
              <span className="relative bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,187,225,0.6)] animate-gradient-x bg-[length:200%_200%]">
                Expertise
              </span>
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Expert Skills */}
        <div className="mb-10 animate-fadeInUp animation-delay-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-full"></div>
            <h2 className="text-3xl font-black text-white">Core Skills</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.expert.map((skill, index) => renderSkillCard(skill, index))}
          </div>
        </div>

        {/* Familiar Skills */}
        <div className="animate-fadeInUp animation-delay-600">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-12 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] rounded-full"></div>
            <h2 className="text-3xl font-black text-white">Additional Skills</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#FFBBE1] to-transparent rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.familiar.map((skill, index) => renderSkillCard(skill, index))}
          </div>
        </div>

            <div className="h-1 flex-1 bg-gradient-to-r from-[#FFBBE1] to-transparent rounded-full mt-8"></div>
        {/* Overall Summary */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp animation-delay-900">
          {[
            { label: "Total Skills", value: `${skillsData.expert.length + skillsData.familiar.length}+`, color: "from-[#FFBBE1] to-[#DD7BDF]" },
            { label: "Expert Level", value: `${skillsData.expert.length}`, color: "from-[#DD7BDF] to-[#FFBBE1]" },
            { label: "Years Experience", value: "1+", color: "from-[#FFBBE1] to-[#DD7BDF]" },
            { label: "Projects Done", value: "10+", color: "from-[#DD7BDF] to-[#FFBBE1]" },
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl px-6 py-8 border border-white/10 group-hover:border-[#DD7BDF]/30 transition-all duration-300 text-center">
                <p className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      {sectionDivider}

      {/* Animations */}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default Skills;