"use client";
import React from "react";
import { BsStars, BsBriefcase, BsLightningFill } from "react-icons/bs";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import {
  backgroundEffects,
  sectionDivider,
  animationStyles,
} from "@/constant/theme";

const About = () => {
  const trainings = [
    {
      title: "ITI - Frontend & Cross Platform",
      organization: "Information Technology Institute",
      period: "July 2025 - Nov 2025",
      icon: FaLaptopCode,
      color: "from-[#FFBBE1] to-[#DD7BDF]",
    },
    {
      title: "EFE Egypt - Full Stack",
      organization: "Education for Employment Egypt",
      period: "Mar 2025 - May 2025",
      icon: FaAward,
      color: "from-[#DD7BDF] to-[#FFBBE1]",
    },
    {
      title: "UI/UX Design",
      organization: "Assiut Oil Refining Company",
      period: "Jan 2025 - Mar 2025",
      icon: FaAward,
      color: "from-[#FFBBE1] to-[#DD7BDF]",
    },
    {
      title: "Frontend - React.js",
      organization: "Digital Egypt Pioneers Initiative",
      period: "Oct 2024 - May 2025",
      icon: FaAward,
      color: "from-[#DD7BDF] to-[#FFBBE1]",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-8 bg-gradient-to-br from-gray-900 via-purple-950 to-black overflow-hidden"
    >
      {backgroundEffects}

      {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-4"> */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/30 mb-4">
            <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
              About Me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-2">
            <span className="text-white">Design and </span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] blur-2xl opacity-40"></span>
              <span className="relative bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,187,225,0.6)] animate-gradient-x bg-[length:200%_200%]">
                Develop
              </span>
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Frontend Developer passionate about crafting dynamic, responsive, and visually appealing websites using React and modern design frameworks.
          </p>
        </div>

        {/* Hero Stats Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 animate-fadeInUp animation-delay-300">
          {[
            {
              icon: FaGraduationCap,
              label: "Degree",
              value: "BIS",
              subtitle: "Business Information Systems",
              color: "from-[#FFBBE1] to-[#DD7BDF]",
            },
            {
              icon: FaAward,
              label: "Trainings",
              value: "4+",
              subtitle: "Professional Programs",
              color: "from-[#DD7BDF] to-[#FFBBE1]",
            },
            {
              icon: FaCertificate,
              label: "Certified",
              value: "IBM",
              subtitle: "Web Development",
              color: "from-[#FFBBE1] to-[#DD7BDF]",
            },
            {
              icon: FaLaptopCode,
              label: "Projects",
              value: "10+",
              subtitle: "Completed Works",
              color: "from-[#DD7BDF] to-[#FFBBE1]",
            },
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 group-hover:border-[#DD7BDF]/30 transition-all duration-300 text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-white" />
                <p
                  className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                >
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs font-semibold">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid - Compact Version */}
        <div className="grid lg:grid-cols-12 gap-6 animate-fadeInUp animation-delay-600">
          {/* Left Column - Education & Certificate */}
          <div className="lg:col-span-4 space-y-5">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-8 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-full"></div>

                <h2 className="text-2xl font-extrabold text-white">
                  Education
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-[#DD7BDF]/40 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-xl flex items-center justify-center">
                      <FaGraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Bachelor's Degree
                      </h3>
                      <p className="text-[#FFBBE1] text-md font-semibold">
                        Business Information Systems (BIS)
                      </p>
                      <p className="text-gray-400 text-sm">
                        Assiut University • 2024
                      </p>
                      <p className="text-gray-400 text-sm">Grade • Very Good</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Foundation in IT, programming, database management, and
                    business technology integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Certificate */}
            <div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-[#DD7BDF]/40 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-[#DD7BDF] to-[#FFBBE1] rounded-xl flex items-center justify-center">
                      <FaCertificate className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">
                        Professional Certificate
                      </h3>
                      <p className="text-[#FFBBE1] text-md font-semibold">
                        Web Development Fundamentals
                      </p>
                      <p className="text-gray-400 text-sm">
                        IBM SkillsBuild • 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Trainings & Experience */}
          <div className="lg:col-span-8 space-y-6">
            {/* Trainings */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-8 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-full"></div>
                <h2 className="text-2xl font-extrabold text-white">
                  Trainings
                </h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {trainings.map((training, index) => (
                  <div key={index} className="relative group">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${training.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`}
                    ></div>
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 group-hover:border-[#DD7BDF]/40 transition-all duration-300 hover:scale-[1.02] h-full">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${training.color} rounded-lg flex items-center justify-center`}
                        >
                          <training.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-white leading-tight mb-1">
                            {training.title}
                          </h3>
                          <p className="text-[#FFBBE1] text-sm font-semibold mb-1">
                            {training.organization}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {training.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-8 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] rounded-full"></div>
                <h2 className="text-2xl font-extrabold text-white">
                  Experience
                </h2>
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
                        Freelance Frontend Developer
                      </h3>
                      <p className="text-[#FFBBE1] text-md font-semibold mb-1">
                        Self-employed
                      </p>
                      <p className="text-gray-400 text-md mb-2">
                        November 2025 – Present
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        Building responsive, user-friendly web interfaces using
                        React.js and modern web technologies with focus on
                        performance and design.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React.js",
                          "Next.js",
                          "TypeScript",
                          "Tailwind CSS",
                          "Bootstrap",
                          "HTML5",
                          "CSS3",
                          "JavaScript",
                        ].map((tech, i) => (
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
          </div>
        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default About;
