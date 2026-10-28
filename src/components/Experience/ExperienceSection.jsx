import React from "react";
import { organizationsData } from "../../data/organizations";
import { Calendar, Users, Award, ChevronRight, Sparkles } from "lucide-react";
import { FadeContent } from "../reactbits/FadeContent";
import { GradualBlur } from "../reactbits/GradualBlur";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0B0F19]/80">
      <GradualBlur className="mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <FadeContent delay={100}>
          <div className="flex items-center gap-3 mb-12">
            <span className="section-label">04 /</span>
            <div className="h-[1px] w-8 bg-teal-400/50" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Pengalaman Organisasi &amp; Kepanitiaan
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.08] to-transparent ml-2" />
          </div>
        </FadeContent>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-10 ml-2 sm:ml-4">
          {organizationsData.map((item, index) => (
            <FadeContent key={item.id} delay={150 + index * 80} distance={25}>
              <div className="relative group">

                {/* Timeline Node Icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0F172A] border-2 border-teal-400 group-hover:bg-teal-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(94,234,212,0.6)]" />

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#1e1e2e]/90 border border-white/[0.07] hover:border-teal-400/35 transition-all duration-300 card-glow shadow-xl">

                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-teal-300 font-mono">
                        {item.org || item.organization}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mt-3 mb-2 group-hover:text-teal-300 transition-colors">
                    {item.role}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {item.desc || item.description}
                  </p>

                  {/* Responsibilities list */}
                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] font-mono text-slate-400 font-semibold block uppercase tracking-wider">
                        Tanggung Jawab Utama:
                      </span>
                      <ul className="space-y-1">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Photos thumbnail preview if available */}
                  {item.photos && item.photos.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-3 overflow-x-auto no-scrollbar">
                      {item.photos.map((photo, pIdx) => (
                        <div
                          key={pIdx}
                          className="relative shrink-0 w-28 h-18 rounded-lg overflow-hidden border border-white/10 group/img"
                        >
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-1 text-center">
                            <span className="text-[8px] text-white line-clamp-2">{photo.caption}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </FadeContent>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExperienceSection;
