"use client";
import React from "react";
import { BsStars, BsBriefcase, BsCalendar3 } from "react-icons/bs";
import { FaGraduationCap, FaLaptopCode, FaHeart, FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { backgroundEffects, sectionDivider, animationStyles } from "@/constant/theme";

const About = () => {
  const scholarships = [
    {
      title: "ITI - Frontend & Cross Platform",
      organization: "Information Technology Institute",
      period: "July 2025 - Nov 2025",
      track: "Frontend and Cross Platform Mobile Development",
      icon: FaLaptopCode,
      color: "from-[#FFBBE1] to-[#DD7BDF]"
    },
    {
      title: "EFE Egypt - Full Stack",
      organization: "Education for Employment Egypt & Amit Learning",
      period: "Mar 2025 - May 2025",
      track: "Full Stack Node.js Development",
      icon: FaAward,
      color: "from-[#DD7BDF] to-[#FFBBE1]"
    },
    {
      title: "UI/UX Design",
      organization: "Assiut Oil Refining Company",
      period: "Jan 2025 - Mar 2025",
      track: "User Interface & Experience Design",
      icon: FaAward,
      color: "from-[#FFBBE1] to-[#DD7BDF]"
    },
    {
      title: "Frontend - React.js",
      organization: "Digital Egupt Pioneers Initiative",
      period: "Oct 2024 - May 2025",
      track: "Frontend Development Track",
      icon: FaAward,
      color: "from-[#DD7BDF] to-[#FFBBE1]"
    },
  ];

  const workExperience = [
    {
      title: "Accountant",
      company: "Pharmaceutical Company",
      period: "Nov 2024 - Oct 2025",
      description: "Financial accounting and reporting while learning frontend development",
      icon: MdWorkOutline,
      color: "from-[#DD7BDF] to-[#FFBBE1]"
    },
    {
      title: "Accountant",
      company: "Hospital",
      period: "July 2024 - Oct 2024",
      description: "Started professional career while beginning my journey into web development",
      icon: MdWorkOutline,
      color: "from-[#FFBBE1] to-[#DD7BDF]"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen pt-[4vh] pb-8 flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-black">
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/30 mb-6">
            <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
              About Me
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
            <span className="text-white">Business and </span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] blur-2xl opacity-40"></span>
              <span className="relative bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,187,225,0.6)] animate-gradient-x bg-[length:200%_200%]">
                Coding
              </span>
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A passionate Frontend Developer with a unique journey from finance to technology. 
            Combining analytical skills with creative problem-solving to build stunning web experiences.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 animate-fadeInUp animation-delay-300">
          {[ 
            { icon: FaGraduationCap, label: "Education", value: "B.Sc", color: "from-[#FFBBE1] to-[#DD7BDF]" },
            { icon: FaAward, label: "Scholarships", value: "5+", color: "from-[#DD7BDF] to-[#FFBBE1]" },
            { icon: BsBriefcase, label: "Experience", value: "1+ Year", color: "from-[#FFBBE1] to-[#DD7BDF]" },
            { icon: FaLaptopCode, label: "Projects", value: "10+", color: "from-[#DD7BDF] to-[#FFBBE1]" }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 group-hover:border-[#DD7BDF]/30 transition-all duration-300 text-center">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 text-white`} />
                <p className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-8 animate-fadeInUp animation-delay-600">
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="w-8 h-8 text-[#FFBBE1]" />
            <h2 className="text-3xl font-black text-white">Education</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#FFBBE1] to-transparent rounded-full"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 group">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-xl flex items-center justify-center">
                  <FaGraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-2">Bachelor's Degree in Business Information Systems (BIS)</h3>
                <p className="text-[#FFBBE1] font-semibold mb-2 text-lg">Assiut University</p>
                <div className="flex justify-center sm:justify-start items-center gap-4 text-gray-400 mb-3 text-sm">
                  <BsCalendar3 className="w-4 h-4" />
                  <span>Graduated: June 2024</span>
                  <span className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="hidden sm:block">Grade: Very Good</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Graduated with very good, laying a strong foundation in business principles, IT, and software development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarships & Training */}
        <div className="mb-8 animate-fadeInUp animation-delay-900">
          <div className="flex items-center gap-3 mb-6">
            <FaAward className="w-8 h-8 text-[#DD7BDF]" />
            <h2 className="text-3xl font-black text-white">Professional Training & Scholarships</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 group hover:scale-105"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="relative">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${scholarship.color} rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300`}></div>
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${scholarship.color} rounded-xl flex items-center justify-center`}>
                      <scholarship.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-white mb-1">{scholarship.title}</h3>
                    <p className="text-[#FFBBE1] font-semibold text-sm mb-2">{scholarship.organization}</p>
                    <div className="flex justify-center sm:justify-start items-center gap-2 text-xs text-gray-400 mb-2">
                      <BsCalendar3 className="w-3 h-3" />
                      <span>{scholarship.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{scholarship.track}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16 animate-fadeInUp animation-delay-1200">
          <div className="flex items-center gap-3 mb-8">
            <BsBriefcase className="w-8 h-8 text-[#FFBBE1]" />
            <h2 className="text-3xl font-black text-white">Work Experience</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#FFBBE1] to-transparent rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {workExperience.map((job, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 group hover:scale-105"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                  <div className="relative">
                    <div className={`absolute -inset-2 bg-gradient-to-r ${job.color} rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300`}></div>
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center`}>
                      <job.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-1">{job.title}</h3>
                    <p className="text-[#FFBBE1] font-semibold mb-2">{job.company}</p>
                    <div className="flex justify-center sm:justify-start items-center gap-2 text-sm text-gray-400 mb-3">
                      <BsCalendar3 className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Highlight */}
        <div className="bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 backdrop-blur-xl rounded-2xl p-8 border border-[#DD7BDF]/30 animate-fadeInUp animation-delay-1500">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <FaHeart className="w-8 h-8 text-[#FFBBE1] animate-pulse flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-black text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                My path to becoming a Frontend Developer has been unconventional yet rewarding. 
                Starting with a degree in BIS, I gained valuable professional experience 
                in accounting, which taught me attention to detail and analytical thinking.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                While working full-time, I pursued my passion for web development through intensive 
                training programs and scholarships. This dual experience has given me a unique perspective: 
                combining business acumen with technical expertise to create solutions that truly matter.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Today, I'm focused on building modern, responsive web applications using React, Next.js, 
                and the latest frontend technologies. My goal is to create digital experiences that are 
                not only beautiful but also solve real-world problems.
              </p>
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
