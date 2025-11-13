"use client";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import ProjectSlider from "./ProjectSlider";
import { projects } from "../../data/projects";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

const Project = () => {
  // const [currentSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      id="projects"
      className="relative py-8 md:py-10 flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-black"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fadeInLeft">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/30">
              <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
                Featured Projects
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] blur-xl opacity-40"></span>
                  <span className="relative bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                    Digital Vision
                  </span>
                </span>
                <br />
                <span className="text-white">Into Reality</span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                Explore my collection of modern, high-performance web
                applications - designed for performance and crafted with care.
              </p>
            </div>

            {/* Project info updated with current slide */}
            <ProjectCard project={projects[currentSlide]} />
          </div>

          {/* Pass control to slider */}
          <ProjectSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </div>
  );
};

export default Project;