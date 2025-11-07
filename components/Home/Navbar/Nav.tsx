"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = ({ toggleMobileNav }: { toggleMobileNav: () => void }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : ""
      } duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl font-bold text-cyan-200">T.S</h1>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-base hover:text-cyan-300 transition-all font-medium duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-8 py-3 text-sm cursor-pointer rounded-lg bg-[#4b0082] hover:bg-blue-900 transition-all duration-300 flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>

          {/* Burger Menu */}
          <HiBars3BottomRight
            className="w-8 h-8 lg:hidden cursor-pointer"
            onClick={toggleMobileNav}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

