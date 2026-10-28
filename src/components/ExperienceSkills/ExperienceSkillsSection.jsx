import React, { useState } from "react";
import { experiencesData } from "../../data/organizations";
import { skillCategories } from "../../data/skills";
import { ChevronDown, ChevronUp, Briefcase, Calendar, CheckCircle2, Sparkles, Filter } from "lucide-react";

export function ExperienceSkillsSection() {
  const [expandedId, setExpandedId] = useState("exp-1");
  const [expFilter, setExpFilter] = useState("all"); // 'all', 'dev', 'org'

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredExperiences = experiencesData.filter((item) => {
    if (expFilter === "all") return true;
    if (expFilter === "dev") {
      return (
        item.role.toLowerCase().includes("developer") ||
        item.role.toLowerCase().includes("assurance") ||
        item.role.toLowerCase().includes("designer")
      );
    }
    if (expFilter === "org") {
      return (
        item.role.toLowerCase().includes("divisi") ||
        item.role.toLowerCase().includes("departemen") ||
        item.type.toLowerCase().includes("himpunan") ||
        item.type.toLowerCase().includes("kepanitiaan")
      );
    }
    return true;
  });

  return (
    <section id="experience-skills" className="py-14 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ================= LEFT COLUMN: EXPERIENCE ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Header */}
            <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/[0.08]">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#38bdf8] font-sans">
                Experience
              </h2>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#111116] border border-white/[0.08] text-[11px] font-mono">
                <button
                  onClick={() => setExpFilter("all")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    expFilter === "all"
                      ? "bg-[#38bdf8]/20 text-[#38bdf8] font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  All ({experiencesData.length})
                </button>
                <button
                  onClick={() => setExpFilter("dev")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    expFilter === "dev"
                      ? "bg-[#38bdf8]/20 text-[#38bdf8] font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Tech
                </button>
                <button
                  onClick={() => setExpFilter("org")}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    expFilter === "org"
                      ? "bg-[#38bdf8]/20 text-[#38bdf8] font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Org
                </button>
              </div>
            </div>

            {/* Experience Items List */}
            <div className="space-y-3 font-sans">
              {filteredExperiences.map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "bg-[#14151f] border-[#38bdf8]/50 shadow-lg shadow-[#38bdf8]/5"
                        : "bg-[#111116]/80 border-white/[0.07] hover:border-white/[0.18]"
                    }`}
                  >
                    {/* Header Row (Clickable) */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 focus:outline-none"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {item.role}
                          </span>
                        </div>

                        <div className="text-xs sm:text-sm text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="text-slate-300 font-medium">
                            {item.organization}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="font-mono text-[11px] text-[#38bdf8]">
                            {item.period}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 pt-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06] hidden sm:inline-block">
                          {item.badge}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Accordion Expanded Detail Content */}
                    {isExpanded && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-white/[0.06] text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-black/20">
                        <p className="mb-3">{item.description}</p>
                        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                          <span>Tipe: {item.type}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>


          {/* ================= RIGHT COLUMN: SKILLS ================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Header */}
            <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/[0.08]">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#fb923c] font-sans">
                Skills
              </h2>
              <span className="text-xs font-mono text-slate-500">
                Tech &amp; Methodologies
              </span>
            </div>

            {/* Skill Subsections matching screenshot */}
            <div className="space-y-6">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#111116] border border-white/[0.07] hover:border-white/[0.14] transition-all space-y-3.5"
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-base sm:text-lg font-bold font-sans tracking-tight"
                      style={{ color: cat.color }}
                    >
                      {cat.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  {/* Pills Container */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200 cursor-default shadow-sm select-none ${cat.badgeStyle}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ExperienceSkillsSection;
