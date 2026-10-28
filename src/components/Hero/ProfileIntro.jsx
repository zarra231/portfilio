import React, { useState } from "react";
import { personalData } from "../../data/personal";
import zaraAvatar from "../../assets/zara_avatar.jpeg";
import {
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  GraduationCap,
  Calendar,
  Award,
  CornerDownRight
} from "lucide-react";


export function ProfileIntro({ onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, label, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    if (onShowToast) onShowToast(`${label} disalin ke clipboard!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactList = [
    {
      key: "wa",
      label: "WhatsApp",
      value: personalData.phone,
      display: personalData.phone,
      href: personalData.whatsappUrl,
      icon: (
        <svg className="w-4 h-4 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15s-.779.98-.955 1.18c-.176.2-.352.226-.653.075s-1.272-.469-2.424-1.496c-.896-.799-1.501-1.787-1.677-2.088s-.019-.464.132-.614c.136-.135.301-.352.452-.527s.201-.301.301-.502.05-.376-.025-.527c-.075-.15-.678-1.633-.929-2.238-.244-.59-.492-.51-.678-.52h-.578c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.512 1.079 2.914 1.23 3.115c.15.2 2.122 3.24 5.14 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.042 2C6.52 2 2.038 6.48 2.038 12c0 1.96.57 3.79 1.554 5.34L2 22l4.82-1.536A9.948 9.948 0 0012.042 22c5.522 0 10.004-4.48 10.004-10S17.564 2 12.042 2z" />
        </svg>
      )
    },
    {
      key: "email",
      label: "Email",
      value: personalData.email,
      display: personalData.email,
      href: `mailto:${personalData.email}`,
      icon: (
        <svg className="w-4 h-4 fill-[#38bdf8] shrink-0" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    },
    {
      key: "github",
      label: "GitHub",
      value: personalData.github,
      display: "https://github.com/zarra231",
      href: personalData.github,
      icon: (
        <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: personalData.linkedin,
      display: "linkedin.com/in/zahranuramalia-550144297",
      href: personalData.linkedin,
      icon: (
        <svg className="w-4 h-4 fill-[#0A66C2] shrink-0" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-8">

            {/* Holographic Photocard */}
            <div className="relative group w-full max-w-[320px] mx-auto sm:mx-0">

              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#38bdf8] via-[#c084fc] to-[#fb7185] rounded-[28px] opacity-75 blur-lg group-hover:opacity-100 transition duration-500" />

              {/* Card Container */}
              <div className="relative rounded-[24px] bg-[#14151e] border border-white/[0.15] p-3 shadow-2xl overflow-hidden holo-card">

                {/* Holographic Glare Shimmer */}
                <div className="holo-glare" />

                {/* Decorative Neon Sparkles */}
                <span className="absolute top-4 right-4 text-[#38bdf8] text-lg select-none animate-pulse">✦</span>
                <span className="absolute top-12 left-5 text-[#c084fc] text-sm select-none animate-pulse delay-200">✦</span>

                {/* Image Frame */}
                <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-gradient-to-b from-[#1e1e2e] to-[#0c0d14]">
                  <img
                    src={zaraAvatar}
                    alt="Zahra Nur Amalia"
                    className="w-full h-full object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/zara_avatar.jpeg";
                    }}
                  />

                  {/* Inner subtle shadow vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Signature Badge on the Card */}
                <div className="mt-3 px-3 py-2.5 rounded-xl bg-[#09090b]/90 border border-white/[0.08] backdrop-blur-md flex items-center justify-between">
                  <div>
                    {/* Cursive Name Logo */}
                    <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#38bdf8] via-[#e0f2fe] to-[#c084fc] bg-clip-text text-transparent font-serif italic">
                      Zara
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      Frontend &amp; UI/UX Developer
                    </div>
                  </div>

                  <div className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80] animate-pulse" />
                </div>
              </div>
            </div>

            {/* "Hit Me Up!" & Contact Information */}
            <div className="w-full max-w-[340px] space-y-4">
              {/* Playful Italic Heading */}
              <div className="flex items-center gap-2">
                <h3 className="text-2xl sm:text-3xl font-serif italic font-normal text-[#f87171] tracking-wide">
                  Hit Me Up!
                </h3>
                <CornerDownRight className="w-4 h-4 text-[#f87171] -rotate-12 mt-1" />
              </div>

              {/* Contact Links List */}
              <div className="space-y-2 font-mono text-xs">
                {contactList.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#111116] border border-white/[0.06] hover:border-white/[0.18] transition-all group"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 min-w-0 text-slate-300 hover:text-white transition-colors"
                    >
                      {item.icon}
                      <span className="truncate text-[11px] text-slate-300 group-hover:text-white">
                        {item.display}
                      </span>
                    </a>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleCopy(item.value, item.label, item.key)}
                        title={`Copy ${item.label}`}
                        className="p-1 rounded-md text-slate-500 hover:text-white hover:bg-white/[0.08] transition-colors"
                      >
                        {copiedKey === item.key ? (
                          <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md text-slate-500 hover:text-[#38bdf8] hover:bg-white/[0.08] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-8">

            {/* "Hello, I'm Zara!" Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#4ade80] mb-5">
                Hello, I'm Zara!
              </h2>

              {/* Bio with Bold Keyword Highlights (verbatim from screenshot & CV) */}
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                <p>
                  I'm a final-year <strong className="text-white font-semibold">Informatics Engineering</strong> student at <strong className="text-white font-semibold">Ibn Khaldun University Bogor</strong> with a specialization in <strong className="text-white font-semibold">Software Engineering</strong>. I enjoy building modern, responsive, and user-friendly digital experiences that combine clean interfaces with functional design.
                </p>
                <p>
                  My primary focus is <strong className="text-[#38bdf8] font-semibold">Front-End Development</strong>, where I work with <strong className="text-white font-semibold">React.js</strong>, <strong className="text-white font-semibold">Tailwind CSS</strong>, <strong className="text-white font-semibold">Bootstrap</strong>, and <strong className="text-white font-semibold">JavaScript</strong> to transform ideas and UI designs into interactive web applications. Alongside development, I also have experience in <strong className="text-[#c084fc] font-semibold">UI/UX design</strong> using <strong className="text-white font-semibold">Figma</strong> and <strong className="text-[#4ade80] font-semibold">Quality Assurance</strong>, including <strong className="text-white font-semibold">API testing with Postman</strong> and <strong className="text-white font-semibold">documenting test cases</strong>.
                </p>
                <p>
                  I enjoy collaborating with teams, turning concepts into polished products, and continuously exploring new technologies that help create better user experiences.
                </p>
              </div>
            </div>

            {/* EDUCATION Heading */}
            <div className="pt-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#c084fc] uppercase">
                  EDUCATION
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#c084fc]/30 to-transparent" />
              </div>

              {/* Education Cards */}
              <div className="space-y-4">
                {personalData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#111116] border border-white/[0.08] hover:border-[#c084fc]/40 transition-all duration-300 shadow-lg group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center text-[#c084fc] shrink-0">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-[#c084fc] transition-colors">
                            {edu.institution}
                          </h4>
                          <p className="text-xs text-slate-400 font-medium">
                            {edu.degree}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                        <Calendar className="w-3.5 h-3.5 text-[#c084fc]" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="mt-2 pl-0 sm:pl-10 space-y-1">
                      <p className="text-xs text-slate-300">
                        {edu.specialization}
                      </p>
                      {edu.gpa && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] text-xs font-mono font-semibold mt-1">
                          <Award className="w-3 h-3" />
                          <span>{edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ProfileIntro;
