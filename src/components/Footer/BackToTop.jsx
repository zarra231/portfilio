import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-2.5 rounded-full bg-[#1e1e2e]/90 hover:bg-[#252536] border border-white/10 hover:border-teal-400/40 text-slate-300 hover:text-teal-300 shadow-2xl backdrop-blur-md transition-all duration-300 group active:scale-95 flex items-center justify-center"
    >
      {/* SVG Circular Progress Ring */}
      <svg className="w-10 h-10 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="text-slate-800"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="text-teal-400 transition-all duration-150"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>

      <ArrowUp className="w-4 h-4 absolute group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}

export default BackToTop;
