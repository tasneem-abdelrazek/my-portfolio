"use client";
import React from "react";
import Image from "next/image";
import { BsStars, BsArrowRight, BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import { servicesData } from "@/constant/constant";
import { backgroundEffects, sectionDivider, animationStyles } from "@/constant/theme";

const Services = () => {
  const openWhatsApp = (message: string) => {
    const phoneNumber = "201030354268";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="services" className="relative min-h-screen pt-[4vh] pb-10 flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-black">
      {/* Background Effects */}
      {backgroundEffects}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/30 mb-6">
            <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
              What I Offer
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
            <span className="text-white">My </span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] blur-2xl opacity-40"></span>
              <span className="relative bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,187,225,0.6)] animate-gradient-x bg-[length:200%_200%]">
                Services
              </span>
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional services tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-[#DD7BDF]/30 transition-all duration-500 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Service Number Badge */}
                  <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-full flex items-center justify-center font-black text-white text-xl shadow-2xl">
                    {String(service.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#FFBBE1] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <BsCheckCircleFill className="w-4 h-4 text-[#FFBBE1] flex-shrink-0" />
                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => openWhatsApp(service.whatsappMessage)}
                    className="group/btn relative w-full px-6 py-4 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] transition-all duration-300"></div>
                    
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-500"></div>
                    
                    {/* Shine Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></span>
                    
                    {/* Content */}
                    <span className="relative flex items-center justify-center gap-3 text-white font-black drop-shadow-2xl">
                      <BsWhatsapp className="w-5 h-5" />
                      Book Now
                      <BsArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center animate-fadeInUp animation-delay-900">
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <p className="text-xl text-gray-300 mb-4">
              Don't see what you're looking for?
            </p>
            <button
              onClick={() => openWhatsApp("Hello, I need a custom application.")}
              className="group relative px-8 py-3 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <span className="relative flex items-center gap-2 text-white font-black drop-shadow-2xl">
                <BsWhatsapp className="w-5 h-5" />
                Get Custom Quote
                <BsArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      {sectionDivider}

      {/* Animations */}
      <style jsx>{animationStyles}</style>
    </section>
  );
};

export default Services;