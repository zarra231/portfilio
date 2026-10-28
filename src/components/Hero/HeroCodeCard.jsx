import React from "react";
import { FileCode2, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroCodeCard() {
  return (
    <div className="relative w-full rounded-2xl bg-[#1e1e2e]/90 border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-[#151522] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
          <FileCode2 className="w-3.5 h-3.5 text-teal-300" />
          <span>developer-profile.ts</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 bg-white/[0.04] px-1.5 py-0.5 rounded">
          TS 5.4
        </span>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed space-y-3 text-slate-300">
        <div>
          <span className="text-cyan-400">const</span>{" "}
          <span className="text-teal-300 font-semibold">zahra</span> = &#123;
        </div>

        <div className="pl-4 space-y-1 text-[11px]">
          <div>
            <span className="text-slate-400">fullName:</span>{" "}
            <span className="text-amber-200">"Zahra Nur Amalia"</span>,
          </div>
          <div>
            <span className="text-slate-400">primaryRoles:</span> [
            <span className="text-teal-200">"Frontend Dev"</span>,{" "}
            <span className="text-teal-200">"UI/UX Designer"</span>
            ],
          </div>
          <div>
            <span className="text-slate-400">coreStack:</span> [
            <span className="text-purple-300">"React.js"</span>,{" "}
            <span className="text-purple-300">"Tailwind"</span>,{" "}
            <span className="text-purple-300">"Figma"</span>
            ],
          </div>
          <div>
            <span className="text-slate-400">location:</span>{" "}
            <span className="text-amber-200">"Bogor, Indonesia"</span>,
          </div>
          <div>
            <span className="text-slate-400">currentStatus:</span>{" "}
            <span className="text-emerald-300 font-semibold">"Ready for Work & Projects"</span>,
          </div>
        </div>

        <div>&#125;;</div>

        {/* Quick Metrics */}
        <div className="pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-[#151522] border border-white/[0.04]">
            <div className="text-sm font-bold text-white font-mono">7+ Proyek Selesai</div>
            <div className="text-[10px] text-slate-400">Web Apps & Design</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#151522] border border-white/[0.04]">
            <div className="text-sm font-bold text-teal-300 font-mono">Clean Code</div>
            <div className="text-[10px] text-slate-400">Modular Architecture</div>
          </div>
        </div>

        {/* Status bar bottom */}
        <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400 font-mono">
          <div className="flex items-center gap-1.5 text-teal-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>All systems verified</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Slicing Figma ke React</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCodeCard;
