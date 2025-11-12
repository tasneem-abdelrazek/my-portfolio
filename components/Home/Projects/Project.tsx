"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsStars, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaShoppingBag, FaUserAstronaut, FaFilm, FaUserTie, FaHospitalAlt, FaTasks, FaChartBar, FaGraduationCap, FaMagic, FaCoffee } from "react-icons/fa";
import {
  backgroundEffects,
  sectionDivider,
  animationStyles,
} from "@/constant/theme";

const projects = [
  {
    id: 1,
    title: "Forever E-Commerce Platform",
    description: "Modern online shopping website with smooth UX.",
    image: "/images/forever-screen.png",
    tags: ["React.js", "Tailwind"],
    github: "https://github.com/tasneem-abdelrazek/forever-e-commerce",
    demo: "https://forever-e-commerce-six.vercel.app/",
    icon: FaShoppingBag,
  },
  {
    id: 2,
    title: "Creative Portfolio",
    description: "Personal portfolio with animations and 3D effects.",
    image: "/images/portfolio-screen.png",
    tags: ["Next.js", "Animations", "3D"],
    github: "https://github.com/tasneem-abdelrazek/my-portfolio",
    demo: "https://my-portfolio-nu-snowy-64.vercel.app/",
    icon: FaUserAstronaut,
  },
  {
    id: 3,
    title: "Movie Website",
    description: "Movie app with API, search, and dark mode.",
    image: "/images/movie-screen.png",
    tags: ["React.js", "Redux", "3D"],
    github: "https://github.com/tasneem-abdelrazek/movie-app",
    demo: "https://movie-app-lemon-xi-44.vercel.app/",
    icon: FaFilm,
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Classic portfolio built with React class components.",
    image: "/images/portfolio-class-screen.png",
    tags: ["React.js", "Class Component", "Bootstrap"],
    github: "https://github.com/tasneem-abdelrazek/portfolio",
    demo: "https://portfolio-six-delta-82.vercel.app/",
    icon: FaUserTie,
  },
  {
    id: 5,
    title: "Hosto",
    description: "Landing page with clean design and quality acheived.",
    image: "/images/hosto-screen.png",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/tasneem-abdelrazek/hosto",
    demo: "https://tasneem-abdelrazek.github.io/hosto/",
    icon: FaHospitalAlt,
  },
  {
    id: 6,
    title: "ToTasky",
    description: "Landing page for a task management tool.",
    image: "/images/totasky-screen.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/tasneem-abdelrazek/totasky-landing-page",
    demo: "https://tasneem-abdelrazek.github.io/totasky-landing-page/",
    icon: FaTasks,
  },
  {
    id: 7,
    title: "Dashboard Template",
    description: "Admin dashboard with charts and stats.",
    image: "/images/dashboard-screen.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Chart.js"],
    github: "https://github.com/tasneem-abdelrazek/dashboard-template",
    demo: "https://tasneem-abdelrazek.github.io/dashboard-template/",
    icon: FaChartBar,
  },
  {
    id: 8,
    title: "Monac",
    description: "Simple e-learning website.",
    image: "/images/monac-screen.png",
    tags: ["HTML5", "CSS3"],
    github: "https://github.com/tasneem-abdelrazek/monac",
    demo: "https://tasneem-abdelrazek.github.io/monac/",
    icon: FaGraduationCap,
  },
  {
    id: 9,
    title: "WizardZ",
    description: "Creative agency landing page with animation.",
    image: "/images/wizard-screen.png",
    tags: ["HTML5", "CSS3", "Animations"],
    github: "https://github.com/tasneem-abdelrazek/wizardz",
    demo: "https://tasneem-abdelrazek.github.io/wizardz/",
    icon: FaMagic,
  },
  {
    id: 10,
    title: "Coffee",
    description: "Coffee shop landing page with grid layout.",
    image: "/images/coffee-screen.png",
    tags: ["HTML5", "CSS3", "Grid CSS"],
    github: "https://github.com/tasneem-abdelrazek/coffee-shop",
    demo: "https://tasneem-abdelrazek.github.io/coffee-shop/",
    icon: FaCoffee,
  },
];

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
  };

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
                applications — designed for performance and crafted with care.
              </p>
            </div>

            {/* Current Project */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-[#DD7BDF]/40 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-xl flex items-center justify-center">
                    {React.createElement(projects[currentSlide].icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {projects[currentSlide].title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-snug">
                    {projects[currentSlide].description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {projects[currentSlide].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-lg text-xs font-semibold text-[#FFBBE1] border border-[#DD7BDF]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between gap-4 mt-6 w-full">
                {/* GitHub Button */}
                <a
                  href={projects[currentSlide].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-[#FFBBE1]/10 hover:border-[#FFBBE1]/40 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.09-.746.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.76-1.604-2.665-.305-5.466-1.334-5.466-5.933 0-1.31.468-2.383 1.236-3.222-.124-.304-.536-1.527.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.042.137 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.656 1.649.244 2.872.12 3.176.77.839 1.234 1.912 1.234 3.222 0 4.61-2.804 5.625-5.476 5.923.43.372.823 1.1.823 2.219v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                {/* Demo Button */}
                <a
                  href={projects[currentSlide].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 border border-[#DD7BDF]/30 rounded-lg text-white font-medium hover:from-[#FFBBE1]/20 hover:to-[#DD7BDF]/20 hover:border-[#FFBBE1]/50 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M14 3v2h3.59L10 12.59 11.41 14 19 6.41V10h2V3z" />
                    <path d="M5 5h5V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2v5H5V5z" />
                  </svg>
                  Demo
                </a>
              </div>
            </div>
          </div>

          {/* Right - Slider */}
          <div className="relative animate-fadeInRight">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative h-full rounded-3xl overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-500">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fit"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <BsChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <BsChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-10 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                ></button>
              ))}
            </div>

            {/* Sparkles */}
            <BsStars className="absolute -top-4 -right-4 w-8 h-8 text-[#FFBBE1] animate-pulse-fast drop-shadow-lg" />
            <BsStars className="absolute -bottom-0 -left-4 w-6 h-6 text-[#DD7BDF] animate-pulse-fast animation-delay-1000 drop-shadow-lg" />
          </div>
        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </div>
  );
};

export default Project;
