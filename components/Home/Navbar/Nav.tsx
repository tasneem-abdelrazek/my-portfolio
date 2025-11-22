"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { navLinks } from "../../data/navigation";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { BsStars, BsLightningChargeFill } from "react-icons/bs";

interface NavProps {
  toggleMobileNav: () => void;
}

const Nav: React.FC<NavProps> = ({ toggleMobileNav }) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);

      const sections = navLinks.map((link) => link.path.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`transition-all ${
        navBg
          ? "bg-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/30 border-b border-purple-500/30"
          : "bg-slate-950/70 backdrop-blur-lg border-b border-white/5"
      } duration-700 h-[13vh] z-[1000] fixed w-full top-0`}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px]">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70 animate-pulse"></div>
      </div>

      <div className="flex items-center h-full justify-between w-[92%] xl:w-[88%] 2xl:w-[85%] mx-auto">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center space-x-4 group cursor-pointer relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-pink-600 via-purple-600 to-fuchsia-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
            <div className="relative w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <FaCode className="w-7 h-7 text-white drop-shadow-lg" />
              <BsStars className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-pulse" />
              <BsLightningChargeFill className="absolute -bottom-1 -left-1 w-3 h-3 text-yellow-400 opacity-80" />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
              T.S
            </h1>
            <p className="text-[10px] font-semibold text-purple-300/80 tracking-widest uppercase -mt-1">
              Developer
            </p>
          </div>
        </button>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.path)}
              className={`relative px-6 py-3 text-base xl:text-lg font-bold transition-all duration-300 group ${
                activeSection === link.path.replace("#", "")
                  ? "text-[#FFBBE1]"
                  : "text-white/80 hover:text-white"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/30 to-fuchsia-500/0 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm"></span>
              <span className="relative z-10 drop-shadow-lg">{link.name}</span>
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-400 rounded-full shadow-lg shadow-purple-500/50 transition-all duration-300 ${
                  activeSection === link.path.replace("#", "")
                    ? "w-3/4"
                    : "w-0 group-hover:w-3/4"
                }`}
              ></span>
              <span
                className={`absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-fuchsia-400 rounded-full shadow-lg shadow-pink-500/50 transition-all duration-300 ${
                  activeSection === link.path.replace("#", "")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 xl:space-x-4">
          {/* Download CV */}
          <a
            href="/Tasneem-Abdelrazek-Resume.pdf"
            download="Tasneem-Abdelrazek-Resume"
            className="group relative px-6 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base xl:text-lg font-black cursor-pointer rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-fuchsia-600 hover:from-pink-500 hover:via-purple-500 hover:to-fuchsia-500 transition-all duration-500 flex items-center space-x-2 xl:space-x-3 text-white shadow-2xl shadow-purple-600/60 hover:shadow-pink-500/80 hover:scale-105 overflow-hidden border-2 border-white/20"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <span className="absolute inset-0 bg-white/10 rounded-2xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            <BiDownload className="w-5 h-5 xl:w-6 xl:h-6 relative z-10 group-hover:animate-bounce drop-shadow-lg" />
            <span className="relative z-10 hidden sm:inline drop-shadow-lg">Download CV</span>
            <span className="relative z-10 sm:hidden drop-shadow-lg">CV</span>
            <BsStars className="absolute top-1 right-1 w-3 h-3 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          </a>

          {/* Burger Menu */}
          <button onClick={toggleMobileNav} className="lg:hidden relative group p-2">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-2 rounded-xl border border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-300">
              <HiBars3BottomRight className="relative w-8 h-8 xl:w-9 xl:h-9 text-pink-300 group-hover:text-white transition-colors duration-300 group-hover:rotate-90 transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Animated Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-[slide_3s_ease-in-out_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default Nav;
