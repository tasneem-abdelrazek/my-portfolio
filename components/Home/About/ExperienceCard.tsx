"use client";
import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { experience } from "../../data/about";

const ExperienceCard = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-1 w-8 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] rounded-full"></div>
        <h2 className="text-2xl font-extrabold text-white">Experience</h2>
        <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-[#DD7BDF]/40 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-lg flex items-center justify-center">
              <MdWorkOutline className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">
                {experience.title}
              </h3>
              <p className="text-[#FFBBE1] text-md font-semibold mb-1">
                {experience.company}
              </p>
              <p className="text-gray-400 text-md mb-2">{experience.period}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/5 rounded-md text-xs font-bold text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;