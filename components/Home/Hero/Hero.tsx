"use client";
import React from "react";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { FaHeart, FaCode, FaRocket } from "react-icons/fa";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

// Lazy load particles
const ParticlesHero = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative min-h-screen pt-[18vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900"
    >
      {backgroundEffects}
      <ParticlesHero />

      {/* Floating Icons */}
      <FaHeart className="absolute top-40 left-20 w-8 h-8 text-[#FFBBE1]/40 animate-float" />
      <FaCode className="absolute top-60 right-32 w-10 h-10 text-[#DD7BDF]/40 animate-float animation-delay-1000" />
      <FaRocket className="absolute bottom-40 left-40 w-9 h-9 text-[#FFBBE1]/40 animate-float animation-delay-2000" />
      <BsStars className="absolute top-1/3 right-20 w-7 h-7 text-[#FFBBE1]/50 animate-float animation-delay-3000" />

      <div className="relative z-10 flex flex-col items-center px-4 max-w-7xl mx-auto">
        <HeroImage />

        {/* Name */}
        <div className="mt-6 animate-fadeInUp animation-delay-300">
          <p className="text-3xl sm:text-4xl md:text-5xl font-black text-center relative">
            <span className="relative inline-block bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent">
              Tasneem
            </span>{" "}
            <span className="text-white">Abdelrazek</span>
          </p>
        </div>

        {/* Headline */}
        <h1 className="w-full lg:w-[70%] mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center font-black leading-tight animate-fadeInUp animation-delay-600 text-white">
          Turning{" "}
          <span className="bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent">
            imagination
          </span>{" "}
          into interactive experiences that{" "}
          <span className="text-[#FFBBE1]/90">captivate and connect</span>
        </h1>

        {/* Typewriter */}
        <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl font-black flex flex-wrap justify-center gap-3 animate-fadeInUp animation-delay-900">
          A passionate
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1]">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "React Developer"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h2>

        {/* Button */}
        <button
          onClick={scrollToProjects}
          className="group mt-5 px-10 py-4 relative cursor-pointer rounded-full text-lg font-black text-white overflow-hidden transform hover:scale-110 transition-all duration-500 animate-fadeInUp animation-delay-1200"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] animate-gradient-x"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
          <span className="relative flex items-center gap-3 drop-shadow-2xl">
            See my work
            <BsArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
          </span>
        </button>

        <HeroStats />
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </div>
  );
};

export default Hero;
