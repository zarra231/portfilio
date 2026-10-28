import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { FigmaHeroTitle } from "../components/Hero/FigmaHeroTitle";
import { ProfileIntro } from "../components/Hero/ProfileIntro";
import { ExperienceSkillsSection } from "../components/ExperienceSkills/ExperienceSkillsSection";
import { ProjectSelectedSection } from "../components/Projects/ProjectSelectedSection";
import { ContactSection } from "../components/Contact/ContactSection";
import { KodFooter } from "../components/Footer/KodFooter";
import { CheckCircle2, X } from "lucide-react";

export function Home() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f1f5f9] font-sans selection:bg-[#38bdf8]/30 selection:text-[#38bdf8]">
      
      {/* Background Technical Grid (kodacademy style) */}
      <div className="fixed inset-0 kod-grid-bg pointer-events-none opacity-40 z-0" />

      {/* Ambient Gradient Glows */}
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[128px] pointer-events-none z-0" />
      <div className="fixed top-1/2 -right-48 w-96 h-96 bg-[#c084fc]/10 rounded-full blur-[128px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-1/3 w-96 h-96 bg-[#fb7185]/8 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Kodacademy Ruled Container Frame */}
      <div className="relative z-10 max-w-[1440px] mx-auto kod-frame min-h-screen flex flex-col justify-between">
        
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Main Content Body */}
        <main className="flex-1 w-full pt-4">
          
          {/* Section 1: Top Banner with Code Card & Figma PORTFOLIO Title */}
          <section id="hero">
            <FigmaHeroTitle />
          </section>

          {/* Section 2: Profile Intro (Photocard + Hit Me Up + Bio + Education) */}
          <ProfileIntro onShowToast={showToast} />

          {/* Section 3: Experience & Skills (Two Columns matching screenshot) */}
          <ExperienceSkillsSection />

          {/* Section 4: Project Selected (Horizontal Carousel / Grid with Modal) */}
          <ProjectSelectedSection />

          {/* Section 5: Contact Form Section */}
          <ContactSection onShowToast={showToast} />

        </main>

        {/* Kodacademy Style HUD Footer */}
        <KodFooter />

      </div>

      {/* Global Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 p-4 rounded-2xl bg-[#14151f]/95 border border-[#38bdf8]/40 text-white font-mono text-xs shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}

export default Home;
