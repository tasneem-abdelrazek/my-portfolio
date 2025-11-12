import React from "react";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlightText: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlightText,
  description,
  className = "",
}) => {
  return (
    <div className={`text-center mb-8 animate-fadeInUp ${className}`}>
      <Badge text={badge} className="mb-4" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
        <span className="text-white">{title} </span>
        <span className="relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] blur-2xl opacity-40"></span>
          <span className="relative bg-gradient-to-r from-[#FFBBE1] via-[#DD7BDF] to-[#FFBBE1] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,187,225,0.6)] animate-gradient-x bg-[length:200%_200%]">
            {highlightText}
          </span>
        </span>
      </h1>

      {description && (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;