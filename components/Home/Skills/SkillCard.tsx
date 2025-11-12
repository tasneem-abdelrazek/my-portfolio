import React from "react";
import ProgressBar from "@/components/common/ProgressBar";
import { Skill } from "../../data/skills";
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

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const Icon = iconMap[skill.icon];

  return (
    <div
      className="group relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="relative space-y-3">
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
          </div>
          <div className="text-lg font-black bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
            {skill.percentage}%
          </div>
        </div>

        <ProgressBar percentage={skill.percentage} />
      </div>
    </div>
  );
};

export default SkillCard;