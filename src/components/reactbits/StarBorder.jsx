import React from "react";

export function StarBorder({
  as: Component = "button",
  className = "",
  color = "#5EEAD4",
  speed = "5s",
  children,
  ...props
}) {
  return (
    <Component
      className={`relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-xl group ${className}`}
      {...props}
    >
      {/* Animated rotating border beam */}
      <span
        className="absolute inset-[-100%] animate-star-rotate rounded-full pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${color} 360deg)`,
          animationDuration: speed,
        }}
      />
      {/* Inner surface */}
      <span className="relative z-10 w-full h-full flex items-center justify-center px-5 py-2.5 rounded-[10px] bg-[#1e1e2e] transition-colors duration-200 group-hover:bg-[#252536]">
        {children}
      </span>
    </Component>
  );
}

export default StarBorder;
