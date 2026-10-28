import React, { useState } from "react";
import { Terminal, Layers, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

export function FigmaHeroTitle() {
  const [isHovered, setIsHovered] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`const developer = { name: "Zahra Nur Amalia", role: "Frontend & UI/UX" };`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full pt-20 pb-8 flex flex-col items-center overflow-hidden">

      {/* Top Badges Row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-2.5 mb-6 z-10"
      >
        {/* 2026 Year Pill */}
        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.12] backdrop-blur-md shadow-sm">
          2026
        </span>

        {/* Frontend & UI/UX Design Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#3b0764]/50 border border-[#c084fc]/50 text-[#e9d5ff] text-xs font-mono font-semibold shadow-[0_0_15px_rgba(192,132,252,0.25)] backdrop-blur-md">
          <span>Frontend &amp; UI/UX Design</span>
        </div>
      </motion.div>

      {/* Floating Top-Left Code Card (matching screenshot with gentle floating motion) */}
      <div className="w-full max-w-5xl px-4 flex justify-start mb-2">
        <motion.div
          animate={{
            y: [0, -6, 0, 5, 0],
            rotate: [0, -0.6, 0, 0.6, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={handleCopyCode}
          title="Click to copy snippet"
          className="group relative cursor-pointer rounded-xl bg-[#111116]/95 border border-white/[0.1] hover:border-[#38bdf8]/50 p-3 shadow-xl backdrop-blur-xl transition-all duration-300 max-w-xs sm:max-w-sm hidden sm:block"
        >
          {/* Header dots */}
          <div className="flex items-center justify-between gap-4 pb-2 mb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
              <Terminal className="w-2.5 h-2.5 text-[#38bdf8]" />
              <span>zara.config.ts</span>
            </span>
            <span className="text-[9px] font-mono text-slate-500 group-hover:text-[#38bdf8] transition-colors">
              {copiedCode ? "Copied!" : "Click to copy"}
            </span>
          </div>

          {/* Snippet Code */}
          <div className="font-mono text-[11px] leading-relaxed text-slate-300">
            <div>
              <span className="text-[#38bdf8]">const</span>{" "}
              <span className="text-[#4ade80]">developer</span> = &#123;
            </div>
            <div className="pl-3 space-y-0.5">
              <div>
                <span className="text-slate-400">name:</span>{" "}
                <span className="text-[#fde047]">"Zahra Nur Amalia"</span>,
              </div>
              <div>
                <span className="text-slate-400">role:</span>{" "}
                <span className="text-[#c084fc]">"Frontend &amp; UI/UX"</span>,
              </div>
              <div>
                <span className="text-slate-400">status:</span>{" "}
                <span className="text-[#38bdf8]">"Open for Work"</span>
              </div>
            </div>
            <div>&#125;;</div>
          </div>
        </motion.div>
      </div>

      {/* Massive PORTFOLIO Title inside ANIMATED Figma Bounding Box */}
      <div className="w-full max-w-5xl px-4">
        <motion.div
          animate={{
            y: [0, -8, 0, 7, 0],
            rotate: [0, 0.4, 0, -0.4, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-full rounded-md border-2 border-[#38bdf8] py-8 sm:py-12 md:py-16 px-4 sm:px-8 flex items-center justify-center transition-all duration-300 select-none shadow-[0_0_20px_rgba(56,189,248,0.1)] ${isHovered ? "bg-[#38bdf8]/[0.03] shadow-[0_0_40px_rgba(56,189,248,0.25)] border-[#7dd3fc]" : ""
            }`}
        >
          {/* Animated SVG Border Marching Ants / Selection glow */}
          <div className="absolute inset-0 pointer-events-none rounded-md overflow-hidden">
            <div className="w-full h-full border border-[#38bdf8]/30 animate-pulse" />
          </div>

          {/* 8 Figma Vector Anchor Handles (Animated pulsing scale) */}
          {/* Top-Left */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="figma-node -top-[5px] -left-[5px] rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />
          {/* Top-Center */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="figma-node -top-[5px] left-1/2 -translate-x-1/2 rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />
          {/* Top-Right */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="figma-node -top-[5px] -right-[5px] rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />
          {/* Middle-Left */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            className="figma-node top-1/2 -left-[5px] -translate-y-1/2 rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />
          {/* Middle-Right */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            className="figma-node top-1/2 -right-[5px] -translate-y-1/2 rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />
          {/* Bottom-Left */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="figma-node -bottom-[5px] -left-[5px] rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />
          {/* Bottom-Center */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
            className="figma-node -bottom-[5px] left-1/2 -translate-x-1/2 rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />
          {/* Bottom-Right Node (anchoring the name badge) */}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2.1 }}
            className="figma-node -bottom-[5px] -right-[5px] rounded-[1px] shadow-[0_0_6px_#38bdf8]"
          />

          {/* Figma Dimension Tooltip (shows on hover) */}
          <div
            className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded bg-[#0284c7] text-white text-[10px] font-mono font-semibold transition-opacity duration-200 pointer-events-none flex items-center gap-1.5 shadow-lg ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <Layers className="w-2.5 h-2.5" />
            <span>Frame: 1040 × 240 px • Rotating</span>
          </div>

          {/* Animated PORTFOLIO Text Letters with Gentle Wave and Glow */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase text-center font-sans drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] flex items-center justify-center">
            {"PORTFOLIO".split("").map((letter, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [0, -4, 0, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.12,
                  ease: "easeInOut"
                }}
                className="inline-block hover:text-[#38bdf8] hover:scale-110 transition-transform duration-200 cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          {/* Animated Figma Cursor Tag Badge at Bottom Right */}
          <motion.div
            animate={{
              x: [0, 4, 0, -3, 0],
              y: [0, -3, 0, 4, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-4 right-1 sm:-bottom-5 sm:right-2 z-30 flex items-center"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-[11px] sm:text-xs font-mono font-bold shadow-lg shadow-[#0284c7]/50 border border-[#38bdf8] transition-all hover:scale-110 cursor-pointer">
              <MousePointer2 className="w-3 h-3 fill-white text-white -rotate-12 animate-bounce" />
              <span>ZAHRA NUR AMALIA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}

export default FigmaHeroTitle;
