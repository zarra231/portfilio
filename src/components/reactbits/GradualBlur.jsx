import React from "react";

export function GradualBlur({ className = "", height = "h-16" }) {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${height} ${className}`}>
      {/* 4-layer progressive blur effect */}
      <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_bottom,transparent,black_25%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,transparent_25%,black_50%)]" />
      <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_bottom,transparent_50%,black_75%)]" />
      <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,transparent_75%,black_100%)]" />
      {/* Subtle glowing center horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
    </div>
  );
}

export default GradualBlur;
