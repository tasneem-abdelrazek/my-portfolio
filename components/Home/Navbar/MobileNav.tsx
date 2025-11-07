import React from "react";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ closeMobileNav }: { closeMobileNav: () => void }) => {
  return (
    <div>
      {/* overlay */}
      <div
        className="fixed inset-0 transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen"
        onClick={closeMobileNav}
      ></div>

      {/* nav links */}
      <div className="fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0">
        {NavLinks.map((link) => (
          <Link key={link.name} href={link.path} onClick={closeMobileNav}>
            <p className="w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.name}
            </p>
          </Link>
        ))}
        {/* close icon */}
        <CgClose
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          onClick={closeMobileNav}
        />
      </div>
    </div>
  );
};

export default MobileNav;
