import React, { useState } from "react";
import { technicalSkills, softSkills } from "../../data/skills";
import { Code2, Palette, Sparkles, CheckCircle2, Cpu, Wrench, Shield, Layers } from "lucide-react";
import { FadeContent } from "../reactbits/FadeContent";
import { GradualBlur } from "../reactbits/GradualBlur";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Styling", "Languages", "Design", "API & Tools", "Tools & DevOps"];

  const filteredSkills = activeCategory === "All"
    ? technicalSkills
    : technicalSkills.filter((s) => s.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0F172A]/90">
      <GradualBlur className="mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeContent delay={100}>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-label">03 /</span>
            <div className="h-[1px] w-8 bg-teal-400/50" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Keahlian &amp; Kemampuan
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.08] to-transparent ml-2" />
          </div>
        </FadeContent>

        {/* Skill Category Filter Tabs */}
        <FadeContent delay={150}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? "bg-teal-400/20 text-teal-300 border border-teal-400/40 font-bold"
                    : "bg-[#1e1e2e]/70 text-slate-400 hover:text-white border border-white/[0.05]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeContent>

        {/* Technical Skills Grid with Hover Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <FadeContent key={skill.name} delay={180 + (index % 6) * 50} distance={15}>
              <div
                className="group relative p-5 rounded-2xl bg-[#1e1e2e]/80 border border-white/[0.06] hover:border-teal-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(94,234,212,0.12)] flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Subtle top corner gradient glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl group-hover:bg-teal-400/15 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400 uppercase">
                      {skill.category}
                    </span>
                    <span className="text-[10px] font-mono text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded-full border border-teal-400/20">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Proficiency</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${
                          dot <= (skill.level === "Expert" ? 5 : skill.level === "Advanced" ? 4 : 3)
                            ? "bg-teal-400 shadow-[0_0_5px_rgba(94,234,212,0.8)]"
                            : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <FadeContent delay={250}>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <h3 className="text-lg font-bold text-white font-mono">
                Interpersonal &amp; Soft Skills
              </h3>
            </div>
          </FadeContent>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((soft, idx) => (
              <FadeContent key={soft.title} delay={300 + idx * 70} distance={15}>
                <div className="p-5 rounded-xl bg-[#1e1e2e]/50 border border-white/[0.05] hover:border-purple-400/30 transition-all hover:bg-[#1e1e2e]/80">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white">{soft.title}</h4>
                    <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      {soft.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {soft.desc}
                  </p>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SkillsSection;
