"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden flex-col">
      {/* Particle Background */}
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <Image
            src="/images/tasneem-pic.png"
            alt="heroimage"
            width={150}
            height={150}
            className="rounded-full border-8 border-[#6a1b9a]"
          />

          {/* online status circle 0c0c48aa*/}
          <span
            className="
                absolute 
                bottom-2 right-2 
                w-6 h-6 
                bg-green-500 
                rounded-full 
                border-4 border-white"
          >
            {/* ping effect */}
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
          </span>
        </div>

        <p className="text-cyan-200 font-bold sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Tasneem <span className="text-white">Abdelrazek</span>
        </p>

        {/* <h1 className='text-2x1 sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-center font-bold tracking-wide'>
        Creating web products,<br/> brands,<span className='text-cyan-200'> and experiences.</span>
        </h1> */}
        <h1 className="text-2x1 sm:text-4xl md:text-5xl lg:text-6xl mt-4 text-center font-bold tracking-wide">
          Crafting modern web solutions,
          <br /> for{" "}
          <span className="text-cyan-200">
            companies and freelance projects.
          </span>
        </h1>

        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          A passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Developer",
                  "React Native Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button className="mt-6 px-10 py-4 bg-[#4b0082] hover:bg-[#c2185b] transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
