"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { FaHeart, FaCode, FaRocket } from "react-icons/fa";
import ParticlesHero from "./ParticleBackground";
import {
  backgroundEffects,
  sectionDivider,
  animationStyles,
} from "@/constant/theme";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="relative min-h-screen pt-[18vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900"
    >
      {/* Background Effects */}
      {backgroundEffects}

      {/* Particle Background */}
      <ParticlesHero />

      {/* Floating Icons */}
      <FaHeart className="absolute top-40 left-20 w-8 h-8 text-[#FFBBE1]/40 animate-float" />
      <FaCode className="absolute top-60 right-32 w-10 h-10 text-[#DD7BDF]/40 animate-float animation-delay-1000" />
      <FaRocket className="absolute bottom-40 left-40 w-9 h-9 text-[#FFBBE1]/40 animate-float animation-delay-2000" />
      <BsStars className="absolute top-1/3 right-20 w-7 h-7 text-[#FFBBE1]/50 animate-float animation-delay-3000" />

      <div className="relative z-10 flex flex-col items-center px-4 max-w-7xl mx-auto">
        {/* Image Container */}
        <div className="relative group animate-fadeInScale">
          {/* Rings & Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-1000 animate-spin-slow"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-[#DD7BDF] via-[#FFBBE1] to-[#DD7BDF] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-1000 animate-spin-slower"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-all duration-1000 animate-pulse"></div>

          {/* Image Wrapper */}
          <div className="relative transform transition-all duration-700 group-hover:scale-110 rounded-full overflow-hidden border-[6px] border-white shadow-[0_0_60px_rgba(255,187,225,0.5)] group-hover:shadow-[0_0_80px_rgba(221,123,223,0.6)]">
            <Image
              src="/images/profile-1.png"
              alt="heroimage"
              width={180}
              height={180}
              className="object-cover w-[180px] h-[180px]"
            />
          </div>

          {/* Online Status */}
          <span className="absolute bottom-3 right-3 w-7 h-7 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-[5px] border-white shadow-2xl shadow-emerald-500/50 animate-pulse-slow">
            <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping"></span>
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-emerald-300 to-green-400"></span>
          </span>

          {/* Sparkles */}
          <BsStars className="absolute -top-4 -right-4 w-10 h-10 text-[#FFBBE1] animate-pulse-fast drop-shadow-[0_0_15px_rgba(255,187,225,0.8)]" />
          <BsStars className="absolute -bottom-2 -left-2 w-7 h-7 text-[#DD7BDF] animate-pulse-fast animation-delay-1000 drop-shadow-[0_0_15px_rgba(221,123,223,0.8)]" />
          <BsStars className="absolute top-1/2 -right-6 w-6 h-6 text-[#FFBBE1] animate-pulse-fast animation-delay-2000 drop-shadow-[0_0_15px_rgba(255,187,225,0.8)]" />
        </div>
      
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 text-center font-black leading-tight animate-fadeInUp animation-delay-600 text-white">
          Turning{" "}    
          <span className="bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent">
            imagination
          </span>{" "}
          into interactive <br /> experiences that{" "}
          <span className=" text-[#FFBBE1]/90">
            captivate and connect
          </span>
        </h1>

        {/* Typewriter */}
        <h2 className="mt-8 text-lg sm:text-2xl md:text-3xl font-black flex flex-wrap justify-center gap-3 animate-fadeInUp animation-delay-900">
          A passionate
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1]">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer.",
                  "React Developer.",
                  "React Native Developer.",
                  "Web Developer.",
                  "UI/UX Enthusiast.",
                ],
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
          className="group mt-10 px-10 py-4 relative cursor-pointer rounded-full text-lg font-black text-white overflow-hidden transform hover:scale-110 transition-all duration-500 animate-fadeInUp animation-delay-1200"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] animate-gradient-x"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
          <span className="relative flex items-center gap-3 drop-shadow-2xl">
            See my work
            <BsArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
          </span>
        </button>

        {/* Stats */}
        <div className="mt-12 mb-6 flex gap-4 flex-wrap justify-center animate-fadeInUp animation-delay-1500">
          {[
            {
              icon: FaCode,
              text: "1+ Years",
              color: "from-[#FFBBE1] to-[#DD7BDF]",
            },
            {
              icon: FaRocket,
              text: "10+ Projects",
              color: "from-[#DD7BDF] to-[#FFBBE1]",
            },
            {
              icon: FaHeart,
              text: "100% Quality",
              color: "from-[#FFBBE1] to-[#DD7BDF]",
            },
          ].map((badge, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${badge.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>
              <div className="relative flex items-center gap-2">
                <badge.icon
                  className={`w-5 h-5 bg-gradient-to-r ${badge.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300 text-white`}
                />
                <p className="text-white font-bold text-base">{badge.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      {sectionDivider}

      {/* Animations */}
      <style jsx>{animationStyles}</style>
    </div>
  );
};

export default Hero;
