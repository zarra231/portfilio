import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal, MessageCircle, Sparkles } from "lucide-react";
import { personalData } from "../../data/personal";

export function Navbar({ activeSection = "hero" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Profile", href: "#about", id: "about" },
    { label: "Education", href: "#about", id: "education" },
    { label: "Experience", href: "#experience-skills", id: "experience" },
    { label: "Skills", href: "#experience-skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/40 flex items-center justify-center font-mono font-bold text-xs text-[#38bdf8] shadow-sm group-hover:scale-105 transition-transform">
              ZN
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white tracking-tight flex items-center gap-1.5">
                <span>Zahra Nur Amalia</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Frontend & UI/UX
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#111116]/80 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button: WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-950 bg-[#38bdf8] hover:bg-[#7dd3fc] transition-all shadow-md shadow-[#38bdf8]/20 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Hit Me Up</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#111116] border border-white/[0.1] shadow-2xl space-y-3 font-mono text-xs">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.04]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/[0.08]">
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#38bdf8] text-slate-950 font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
