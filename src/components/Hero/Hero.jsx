import React, { useState, useEffect } from "react";
import { Code, ArrowDown, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { Lanyard } from "../reactbits/Lanyard";
import { Magnet } from "../reactbits/Magnet";
import { HeroCodeCard } from "./HeroCodeCard";
import { FadeContent } from "../reactbits/FadeContent";

export function Hero() {
  // Role smooth fade animation
  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "React Specialist",
    "Web Developer"
  ];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [isRoleFading, setIsRoleFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleFading(true);
      setTimeout(() => {
        setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
        setIsRoleFading(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill */}
            <FadeContent delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1e2e]/90 border border-teal-400/30 text-teal-300 text-xs font-mono backdrop-blur-md shadow-sm">
                <Code className="w-3.5 h-3.5 text-teal-300" />
                <span>Frontend Development &amp; UI/UX Design</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping ml-1" />
              </div>
            </FadeContent>

            {/* Name with Animated Text Reveal */}
            <FadeContent delay={200} distance={20}>
              <p className="text-slate-400 text-sm font-mono mb-2 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                <span>Halo, perkenalkan saya</span>
              </p>
              
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="inline-block hover:text-teal-300 transition-colors">Zahra</span>{" "}
                <span className="inline-block hover:text-teal-300 transition-colors">Nur</span>{" "}
                <span className="text-gradient-cyan inline-block">Amalia</span>
              </h1>

              {/* Role with Smooth Fade Animation */}
              <div className="flex items-center gap-2 mt-3 text-lg sm:text-2xl font-semibold">
                <span className="text-slate-400">Saya seorang</span>
                <span
                  className={`text-teal-300 font-mono underline decoration-teal-400/40 underline-offset-4 transition-all duration-300 ${
                    isRoleFading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                  }`}
                >
                  {roles[currentRoleIdx]}
                </span>
                <span className="w-2 h-5 bg-teal-300 animate-cursor-blink inline-block" />
              </div>
            </FadeContent>

            {/* Description */}
            <FadeContent delay={300} distance={20}>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Fokus membangun website yang responsif, rapi, dan nyaman dipakai. Terbiasa menerjemahkan ide dan desain di{" "}
                <span className="text-white font-medium underline decoration-teal-400/30">Figma</span> menjadi kode nyata menggunakan{" "}
                <span className="text-white font-medium underline decoration-teal-400/30">React.js</span> dan{" "}
                <span className="text-white font-medium underline decoration-teal-400/30">Tailwind CSS</span>.
              </p>
            </FadeContent>

            {/* Tech Badges with Magnet effect / hover glow */}
            <FadeContent delay={400} distance={20}>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Figma", "REST API", "Git & GitHub"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-[#1e1e2e]/90 border border-white/[0.08] hover:border-teal-400/50 hover:text-teal-300 hover:shadow-[0_0_12px_rgba(94,234,212,0.2)] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeContent>

            {/* CTAs with Magnet Hover */}
            <FadeContent delay={500} distance={20}>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Magnet strength={18} radius={100}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-teal-300 hover:bg-teal-200 transition-all duration-200 group shadow-lg shadow-teal-500/20 active:scale-95"
                  >
                    <span>Lihat Proyek</span>
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </Magnet>

                <Magnet strength={18} radius={100}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#1e1e2e] hover:bg-[#252536] border border-white/10 hover:border-teal-400/40 transition-all duration-200 group active:scale-95"
                  >
                    <span>Hubungi Saya</span>
                    <ArrowUpRight className="w-4 h-4 text-teal-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Magnet>
              </div>
            </FadeContent>

          </div>

          {/* Right Column: ReactBits Lanyard ID Card Component + Interactive Code Card */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <FadeContent delay={300} distance={30}>
              {/* ReactBits Lanyard Component */}
              <div className="w-full flex justify-center">
                <Lanyard
                  name="Zahra Nur Amalia"
                  role="Frontend Developer & UI/UX"
                  idNumber="ZN-2026-DEV"
                />
              </div>

              {/* Developer Code Window Card */}
              <div className="w-full max-w-[420px] mt-2">
                <HeroCodeCard />
              </div>
            </FadeContent>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
