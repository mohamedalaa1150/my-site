import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
  const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className} rounded-[0.9rem]`}
      style={{
        background: "rgb(var(--bg-surface) / 0.6)",
        border: "1px solid transparent",
        backgroundImage:
          "linear-gradient(rgb(var(--bg-surface) / 0.6), rgb(var(--bg-surface) / 0.6)), var(--gradient-gold)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow: "0 10px 24px -12px rgb(var(--gold) / 0.7)",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <span className="font-display font-semibold gradient-text tracking-tight">
          MA
        </span>
      </div>
    </div>
  );
};

export default Logo;
