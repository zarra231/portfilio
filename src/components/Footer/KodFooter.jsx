import React from "react";
import { ArrowUp, Terminal, Heart, Sparkles, MessageCircle } from "lucide-react";
import { personalData } from "../../data/personal";

export function KodFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#0c0d12]/95 backdrop-blur-xl relative z-20">

      {/* Top CTA Row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/[0.06]">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Interested in collaborating?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Open for Frontend Developer &amp; UI/UX opportunities
          </p>
        </div>
      </div>

      {/* Kodacademy Style Developer HUD Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">

          {/* Status Indicators */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-slate-300">STATUS: Available for hire</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>CODENAME: Zara Theme</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span>BOGOR, JAWA BARAT</span>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              &copy; {new Date().getFullYear()} Zahra Nur Amalia. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              title="Kembali ke atas"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-[#38bdf8]/20 text-slate-400 hover:text-[#38bdf8] border border-white/[0.08] transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default KodFooter;
