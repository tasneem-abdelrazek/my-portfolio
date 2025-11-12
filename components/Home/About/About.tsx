"use client";
import React from "react";
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
        <SectionHeader
          badge="About Me"
          title="Design and"
          highlightText="Develop"
          description="Frontend Developer passionate about crafting dynamic, responsive, and
            visually appealing websites using React and modern design frameworks"
        />

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