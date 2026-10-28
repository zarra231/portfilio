import React from "react";
import { Terminal, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/[0.08] bg-[#0A0D16] text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Copyright */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#38bdf8]/20 via-[#111116] to-[#c084fc]/20 border border-[#38bdf8]/40 flex items-center justify-center font-mono font-black text-[11px] shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <span className="bg-gradient-to-tr from-[#38bdf8] via-[#7dd3fc] to-[#c084fc] bg-clip-text text-transparent">
                ZN
              </span>
            </div>
            <div>
              <span>© {new Date().getFullYear()} Zahra Nur Amalia. All rights reserved.</span>
            </div>
          </div>

          {/* Center: Tech stack disclaimer */}
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with</span>
            <span className="text-white font-medium">React</span>
            <span>+</span>
            <span className="text-white font-medium">Tailwind CSS</span>
            <span>+</span>
            <span className="text-teal-300 font-medium">ReactBits</span>
          </div>

          {/* Right: Quick Back to Top text button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-teal-300 transition-colors cursor-pointer group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
