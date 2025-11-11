import React from "react";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { BsLightningChargeFill, BsStars } from "react-icons/bs";
import { FaCode, FaSignOutAlt } from "react-icons/fa";

const MobileNav = ({ closeMobileNav }: { closeMobileNav: () => void }) => {
  return (
    <div className="lg:hidden">
      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000]"
        onClick={closeMobileNav}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-[80%] sm:w-[60%] md:w-[45%] bg-gradient-to-b from-gray-900 via-[#1a0d2e] to-gray-900 z-[1001] shadow-xl transition-transform duration-500 animate-slideIn overflow-y-auto">
        {/* Close Button - Fixed at top right */}
        <button
          onClick={closeMobileNav}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
        >
          <CgClose className="w-6 h-6 text-white" />
        </button>

        {/* Header with Profile Image */}
        <div className="flex flex-col items-center px-6 pt-8 pb-6 border-b border-[#DD7BDF]/20">
          {/* Profile Image with Effects */}
          <div className="relative group mb-4">
            {/* Rotating Glow Rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-spin-slow"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-[#DD7BDF] via-[#FFBBE1] to-[#DD7BDF] rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-all duration-500 animate-spin-slower"></div>
            
            {/* Image Container */}
            <div className="relative transform transition-all duration-500 group-hover:scale-105">
              <Image
                src="/images/profile-1.png"
                alt="Tasneem Profile"
                width={100}
                height={100}
                className="relative rounded-full border-4 border-white shadow-[0_0_30px_rgba(255,187,225,0.5)] group-hover:shadow-[0_0_40px_rgba(221,123,223,0.6)] transition-all duration-500"
              />
            </div>

            {/* Online Status Badge */}
            <span className="absolute bottom-1 right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-[3px] border-white shadow-lg shadow-emerald-500/50 animate-pulse-slow">
              <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping"></span>
            </span>

            {/* Floating Sparkles */}
            <BsStars className="absolute -top-2 -right-2 w-5 h-5 text-[#FFBBE1] animate-pulse-fast drop-shadow-lg" />
            <BsStars className="absolute -bottom-1 -left-1 w-4 h-4 text-[#DD7BDF] animate-pulse-fast animation-delay-1000 drop-shadow-lg" />
          </div>

          {/* Name and Title */}
          <div className="text-center">
            <h2 className="text-2xl font-black bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent mb-1 drop-shadow-lg">
              Tasneem Abdelrazek
            </h2>
            <p className="text-sm text-gray-400 font-semibold">Frontend Developer</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FFBBE1]/20 to-[#DD7BDF]/20 rounded-lg flex items-center justify-center border border-[#DD7BDF]/30">
                <FaCode className="w-4 h-4 text-[#FFBBE1]" />
              </div>
              <span className="text-xs text-gray-500">Portfolio</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-3 px-6 py-3">
          {NavLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={closeMobileNav}
              className="group relative flex items-center justify-between px-5 py-2 rounded-xl hover:bg-gradient-to-r hover:from-[#FFBBE1]/10 hover:to-[#DD7BDF]/10 transition-all border border-transparent hover:border-[#DD7BDF]/30 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Shine Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
              
              <span className="relative text-lg text-gray-200 font-bold group-hover:text-[#FFBBE1] transition-colors drop-shadow-lg">
                {link.name}
              </span>
              <BsLightningChargeFill className="relative w-5 h-5 text-[#FFBBE1] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              
              {/* Bottom Line Indicator */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] group-hover:w-4/5 transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        {/* <div className="px-6 pb-4">
          <button 
            onClick={() => {
              // logout logic 
              console.log("Logout clicked");
              closeMobileNav();
            }}
            className="group relative w-full flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 transition-all border border-red-400/30 hover:border-red-400/50 overflow-hidden"
          >
            {/* Shine Effect */}
            {/* <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span> */}
            
            {/* Icon */}
            {/* <FaSignOutAlt className="relative w-5 h-5 text-red-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 drop-shadow-lg" /> */}
            
            {/* Text */}
            {/* <span className="relative text-lg text-red-300 font-bold group-hover:text-red-200 transition-colors drop-shadow-lg">
              Logout
            </span> */}

            {/* Glow Effect */}
            {/* <span className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 rounded-xl transition-all duration-300"></span>
          </button>
        </div>  */}

        {/* Footer */}
        <div className="mt-auto px-6 py-4 border-t border-[#DD7BDF]/20">
          <div className="text-center">
            <p className="text-sm bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent font-bold drop-shadow-lg">
              Made with 💜 by Tasneem
            </p>
            <p className="text-xs text-gray-500 mt-1">© 2025 All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default MobileNav;