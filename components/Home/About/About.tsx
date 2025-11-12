"use client";
import React from "react";
import { BsStars } from "react-icons/bs";
import SectionHeader from "@/components/common/SectionHeader";
import StatsCards from "./StatsCards";
import EducationCard from "./EducationCard";
import CertificateCard from "./CertificateCard";
import TrainingCard from "./TrainingCard";
import ExperienceCard from "./ExperienceCard";
import { trainings } from "../../data/about";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-8 bg-gradient-to-br from-gray-900 via-purple-950 to-black overflow-hidden"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Section Header */}
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
            Frontend Developer passionate about crafting dynamic, responsive, and
            visually appealing websites using React and modern design frameworks.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 animate-fadeInUp animation-delay-600">
          {/* Left Column - Education & Certificate */}
          <div className="lg:col-span-4 space-y-5">
            <EducationCard />
            <CertificateCard />
          </div>

          {/* Right Column - Trainings & Experience */}
          <div className="lg:col-span-8 space-y-6">
            {/* Trainings */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-8 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-full"></div>
                <h2 className="text-2xl font-extrabold text-white">Trainings</h2>
                <div className="h-1 flex-1 bg-gradient-to-r from-[#DD7BDF] to-transparent rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {trainings.map((training, index) => (
                  <TrainingCard
                    key={index}
                    training={training}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Experience */}
            <ExperienceCard />
          </div>
        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default About;