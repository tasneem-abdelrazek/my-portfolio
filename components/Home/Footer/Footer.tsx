"use client";
import React from "react";
import { NavLinks } from "@/constant/constant";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaCode,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { BsStars, BsArrowUp } from "react-icons/bs";
import { animationStyles } from "@/constant/theme";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,187,225,0.1),transparent_70%)]"></div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(221,123,223,0.15),transparent_50%)] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,187,225,0.1),transparent_50%)] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Floating Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-full blur-[120px] opacity-15 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#DD7BDF] to-[#FFBBE1] rounded-full blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>

      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#FFBBE1] to-transparent opacity-60"></div>
      </div>

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 animate-fadeInUp">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                {/* Rotating Rings */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-all duration-500 animate-spin-slow"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#FFBBE1] to-[#DD7BDF] rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaCode className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent drop-shadow-lg">
                  T.S
                </h3>
                <p className="text-xs text-gray-500 font-semibold">Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turning imagination into interactive experiences that captivate
              and connect.
            </p>
            <div className="flex items-center gap-2 text-sm animate-pulse">
              <BsStars className="w-4 h-4 text-[#FFBBE1] drop-shadow-lg" />
              <span className="text-gray-500 font-semibold">
                Available for freelance <br /> and full-time jobs
              </span>
            </div>
          </div>

          {/* Quick Links + Services in same row on small screens */}
          <div className="flex flex-wrap justify-between gap-8 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div className="flex-1 min-w-[160px] space-y-4 animation-delay-200">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                Quick Links
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]"></div>
              </h4>
              <ul className="space-y-2">
                {NavLinks.map((link, index) => (
                  <li
                    key={link.name}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => scrollToSection(link.path)}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#FFBBE1] transition-all duration-300"
                    >
                      <span className="w-0 h-[2px] bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] group-hover:w-4 transition-all duration-300 shadow-lg shadow-[#FFBBE1]/50"></span>
                      <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex-1 min-w-[160px] space-y-4 animation-delay-400">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                Services
                <div className="h-[2px] w-8 bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1]"></div>
              </h4>
              <ul className="space-y-2">
                {["Web Development", "UI/UX Design", "Mobile Apps"].map(
                  (service, index) => (
                    <li
                      key={service}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="group flex items-center gap-2 text-gray-400 hover:text-[#DD7BDF] transition-all duration-300 cursor-pointer">
                        <span className="w-0 h-[2px] bg-gradient-to-r from-[#DD7BDF] to-[#FFBBE1] group-hover:w-4 transition-all duration-300 shadow-lg shadow-[#DD7BDF]/50"></span>
                        <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg">
                          {service}
                        </span>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 animation-delay-600">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              Get in Touch
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF]"></div>
            </h4>

            {/* Whatsapp */}
            <a
              href="https://wa.me/201030354268"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-400 hover:text-[#FFBBE1] transition-all duration-300"
            >
              <div className="relative p-2 bg-white/5 rounded-lg group-hover:bg-[#FFBBE1]/10 transition-all duration-300 border border-white/10 group-hover:border-[#FFBBE1]/30">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <FaWhatsapp className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium drop-shadow-lg">
                +201030354268
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:tasneem.ar.work@gmail.com"
              className="group flex items-center gap-3 text-gray-400 hover:text-[#FFBBE1] transition-all duration-300"
            >
              <div className="relative p-2 bg-white/5 rounded-lg group-hover:bg-[#FFBBE1]/10 transition-all duration-300 border border-white/10 group-hover:border-[#FFBBE1]/30">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <FaEnvelope className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium drop-shadow-lg">
                tasneem.ar.work@gmail.com
              </span>
            </a>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm text-gray-500 font-semibold flex items-center gap-2">
                <BsStars className="w-3 h-3 text-[#FFBBE1]" />
                Follow me:
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/tasneem-abdelrazek",
                    color: "from-[#FFBBE1] to-[#DD7BDF]",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/tasneem-abdelrazek",
                    color: "from-[#DD7BDF] to-[#FFBBE1]",
                  },
                  {
                    icon: FaFacebook,
                    href: "https://www.facebook.com/share/16UCBD2riV/",
                    color: "from-[#FFBBE1] to-[#DD7BDF]",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/tasneem.abdelrazek?igsh=ZzBvYjB1N3FtNWVx",
                    color: "from-[#FFBBE1] to-[#DD7BDF]",
                  },
                  {
                    icon: FaTiktok,
                    href: "https://www.tiktok.com/@tasneem_abdelrazek?_r=1&_t=ZS-91E8r4r5Vm3",
                    color: "from-[#FFBBE1] to-[#DD7BDF]",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-[#DD7BDF]/40 transition-all duration-300 hover:scale-110"
                  >
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-all duration-500 animate-spin-slow`}
                    ></div>
                    <social.icon className="relative w-5 h-5 text-gray-400 group-hover:text-[#FFBBE1] transition-colors duration-300 drop-shadow-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative my-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4">
            <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse-fast drop-shadow-lg" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-fadeInUp animation-delay-900">
          {/* Copyright */}
          <p className="text-sm text-gray-500 flex items-center gap-2 flex-wrap justify-center">
            <span>© 2025 Tasneem Abdelrazek.</span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <FaHeart className="w-4 h-4 text-[#FFBBE1] animate-pulse drop-shadow-lg" />
            </span>
            <span>All rights reserved.</span>
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group relative px-6 py-3 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 group-hover:from-[#FFBBE1]/20 group-hover:to-[#DD7BDF]/20 transition-all duration-300"></div>
            <div className="absolute inset-0 border border-[#DD7BDF]/30 group-hover:border-[#DD7BDF]/60 rounded-xl transition-colors duration-300"></div>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2 text-sm font-bold text-[#FFBBE1] drop-shadow-lg">
              Back to Top
              <BsArrowUp className="w-4 h-4 group-hover:-translate-y-1 group-hover:scale-125 transition-all duration-300" />
            </span>
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{animationStyles}</style>
    </footer>
  );
};

export default Footer;
