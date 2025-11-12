"use client";
import React from "react";
import Image from "next/image";
import { BsStars } from "react-icons/bs";

const HeroImage = () => {
  return (
    <div className="relative group animate-fadeInScale">
      {/* Rings & Glow */}
      <div className="absolute -inset-8 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-1000 animate-spin-slow"></div>
      <div className="absolute -inset-6 bg-gradient-to-r from-[#DD7BDF] via-[#FFBBE1] to-[#DD7BDF] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-1000 animate-spin-slower"></div>
      <div className="absolute -inset-4 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-all duration-1000 animate-pulse"></div>

      {/* Image Wrapper */}
      <div className="relative transform transition-all duration-700 group-hover:scale-110 rounded-full overflow-hidden border-[6px] border-white shadow-[0_0_60px_rgba(255,187,225,0.5)] group-hover:shadow-[0_0_80px_rgba(221,123,223,0.6)]">
        <Image
          src="/images/profile-1.png"
          alt="Tasneem Abdelrazek"
          width={180}
          height={180}
          className="object-cover w-[180px] h-[180px]"
          priority
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
  );
};

export default HeroImage;