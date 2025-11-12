import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: React.ReactNode;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  icon,
  download,
}) => {
  const baseClasses =
    "group relative px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 overflow-hidden";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#FFBBE1] to-[#DD7BDF] hover:from-[#DD7BDF] hover:to-[#FFBBE1] text-white shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#DD7BDF]/40 text-white",
    outline:
      "border-2 border-[#FFBBE1] hover:bg-[#FFBBE1]/10 text-[#FFBBE1] hover:scale-105",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;