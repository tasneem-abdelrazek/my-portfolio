import React from "react";
import { BsStars } from "react-icons/bs";

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#FFBBE1]/10 to-[#DD7BDF]/10 rounded-full border border-[#DD7BDF]/30 ${className}`}
    >
      <BsStars className="w-4 h-4 text-[#FFBBE1] animate-pulse" />
      <span className="text-sm font-semibold bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
};

export default Badge;