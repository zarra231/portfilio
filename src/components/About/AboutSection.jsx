import React from "react";
import { personalData } from "../../data/personal";
import { MapPin, Code2, Palette, CheckCircle2, GraduationCap, Award, Compass, FileCheck } from "lucide-react";
import { FadeContent } from "../reactbits/FadeContent";
import { GradualBlur } from "../reactbits/GradualBlur";

export function AboutSection() {
  const { education, stats, aboutStory } = personalData;

  const strengths = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      desc: "Membangun komponen React.js yang modular, reusable, dan clean dengan styling Tailwind CSS yang efisien.",
      tag: "React & Architecture"
    },
    {
      icon: Palette,
      title: "UI/UX & Design Thinking",
      desc: "Merancang wireframe hingga interactive prototype di Figma dengan memperhatikan estetika & kemudahan pengguna.",
      tag: "Figma & Prototyping"
    },
    {
      icon: CheckCircle2,
      title: "Integrasi API & Testing",
      desc: "Menghubungkan frontend ke backend REST API dan memastikan respons endpoint serta validasi data berjalan presisi.",
      tag: "Postman & REST API"
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0F172A]/70">
      <GradualBlur className="mb-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeContent delay={100}>
          <div className="flex items-center gap-3 mb-12">
            <span className="section-label">01 /</span>
            <div className="h-[1px] w-8 bg-teal-400/50" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Tentang Saya
            </h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/[0.08] to-transparent ml-2" />
          </div>
        </FadeContent>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Story & Strengths */}
          <div className="lg:col-span-7 space-y-6">
            
            <FadeContent delay={200} distance={25}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#1e1e2e]/90 border border-white/[0.08] backdrop-blur-xl space-y-4 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Menghubungkan keindahan desain visual dengan kehandalan kode frontend yang fungsional.
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {aboutStory}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Bagi saya, tampilan antarmuka yang menarik harus didukung oleh kode yang rapi dan performa yang ringan. Saya terbiasa menyusun struktur komponen yang mudah dirawat, memperhatikan hierarki visual, serta memastikan website tetap nyaman dan responsif dibuka di layar ponsel maupun laptop.
                </p>

                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-teal-300" />
                    Bogor, Indonesia
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-teal-300">Frontend Developer &amp; UI/UX Enthusiast</span>
                </div>
              </div>
            </FadeContent>

            {/* Strengths Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {strengths.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <FadeContent key={idx} delay={300 + idx * 100} distance={20}>
                    <div className="p-5 rounded-xl bg-[#1e1e2e]/80 border border-white/[0.06] hover:border-teal-400/35 transition-all duration-300 card-glow h-full flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-teal-400/10 flex items-center justify-center mb-3 text-teal-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-white/[0.04] text-[10px] font-mono text-teal-300/80">
                        {item.tag}
                      </div>
                    </div>
                  </FadeContent>
                );
              })}
            </div>

          </div>

          {/* Right Column: Stats & Education (Staggered Reveal) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Stats Grid */}
            <FadeContent delay={250} distance={20}>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#1e1e2e]/90 border border-white/[0.06] text-center hover:border-purple-400/30 transition-colors"
                  >
                    <div className="text-2xl font-bold text-white font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-teal-300 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>
            </FadeContent>

            {/* Education Card (Staggered Reveal) */}
            <FadeContent delay={350} distance={20}>
              <div className="p-6 rounded-2xl bg-[#1e1e2e]/90 border border-white/[0.08] space-y-4 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <GraduationCap className="w-4 h-4 text-teal-300" />
                    <span>Latar Belakang Pendidikan</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20">
                    Akademik
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">
                    {education.major}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {education.faculty} — {education.university}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Periode: {education.year}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#151522] border border-white/[0.04] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>Indeks Prestasi Kumulatif</span>
                  </div>
                  <span className="text-teal-300 font-bold text-sm">{education.gpa} / 4.00</span>
                </div>

                <div className="text-[11px] text-slate-400 leading-relaxed">
                  Fokus perkuliahan pada Pemrograman Web, Rekayasa Perangkat Lunak, Interaksi Manusia dan Komputer (IMK), serta Keamanan Sistem Informasi.
                </div>
              </div>
            </FadeContent>

            {/* Principles card */}
            <FadeContent delay={450} distance={20}>
              <div className="p-5 rounded-2xl bg-[#1e1e2e]/60 border border-white/[0.06] flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-white block">Filosofi Kerja:</span>
                  "Desain yang baik adalah yang tidak terlihat oleh mata, tetapi terasa intuitif dan menyenangkan bagi penggunanya."
                </div>
              </div>
            </FadeContent>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
