"use client";
import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "./ServiceCard";
import { servicesData, whatsappConfig } from "../../data/services";
import { BsWhatsapp, BsArrowRight } from "react-icons/bs";
import { backgroundEffects, sectionDivider, animationStyles } from "../../styles/theme";

const Services = () => {
  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="services"
      className="relative min-h-screen pt-[4vh] pb-10 flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-black"
    >
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <SectionHeader
          badge="What I Offer"
          title="My"
          highlightText="Services"
          description="Professional services tailored to bring your digital vision to life"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onBookNow={openWhatsApp}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center animate-fadeInUp animation-delay-900">
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
            <p className="text-lg text-gray-300 mb-3">
              Don't see what you're looking for?
            </p>
            <button
              onClick={() => openWhatsApp(whatsappConfig.defaultMessage)}
              className="group relative px-6 py-2.5 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-2 text-white font-semibold text-sm">
                <BsWhatsapp className="w-4 h-4" />
                Get Custom Quote
                <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {sectionDivider}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default Services;