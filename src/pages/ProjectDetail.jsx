import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { BackToTop } from "../components/Footer/BackToTop";
import { FadeContent } from "../components/reactbits/FadeContent";
import { GlareCard } from "../components/reactbits/GlareCard";
import { Github } from "../components/Icons";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  Calendar,
  Layers,
  Sparkles,
  Shield,
  FileCheck,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  X,
  Code2,
  Cpu,
  Smartphone,
  Package,
  Sliders,
  Store,
  LayoutGrid,
  Clock,
  QrCode,
  WifiOff,
  BellRing,
  Map,
  MessageCircle,
  Filter,
  Search,
  Calculator,
  BarChart3,
  Ticket,
  Download,
  Users,
  Terminal,
  Lock,
  ShieldAlert
} from "lucide-react";

// Icon mapping helper for features
const iconMap = {
  Shield,
  FileCheck,
  Cpu,
  Smartphone,
  Package,
  Sliders,
  Store,
  LayoutGrid,
  Clock,
  QrCode,
  WifiOff,
  BellRing,
  Map,
  MessageCircle,
  Filter,
  Search,
  Calculator,
  BarChart3,
  Ticket,
  Download,
  Users,
  Terminal,
  Lock,
  ShieldAlert,
};

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top upon navigating to a detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#0F172A] text-white">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-32 px-4">
          <h1 className="text-3xl font-bold font-mono text-teal-300">Proyek Tidak Ditemukan</h1>
          <p className="text-slate-400 mt-2 text-sm">
            Proyek dengan ID "{id}" tidak ditemukan dalam data portofolio.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-teal-400 text-slate-950 font-bold font-mono text-xs hover:bg-teal-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related projects (other projects excluding current)
  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-[#0F172A] text-[#F1F5F9] selection:bg-teal-400/30 selection:text-teal-300">
      <Navbar />

      <main className="pt-24 pb-20 relative z-10">
        
        {/* Top Back Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-teal-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Semua Proyek</span>
          </Link>
        </div>

        {/* 1. HERO SECTION: Large Banner, Title, Description, Tech Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <FadeContent delay={100}>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1e1e2e]/80">
              
              {/* Large Banner Image */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] via-[#1e1e2e]/60 to-transparent" />
                
                {/* Category & Status Overlay */}
                <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold tracking-wide uppercase bg-slate-900/90 backdrop-blur-md text-teal-300 border border-teal-400/40">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-mono bg-white/10 backdrop-blur-md text-slate-200 border border-white/10">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Header Info Overlay */}
              <div className="p-6 sm:p-10 -mt-20 relative z-10 space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Teknologi:</span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-teal-300 bg-teal-400/10 border border-teal-400/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links Bar */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold bg-teal-400 text-slate-950 hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20 active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[#151522] border border-white/10 hover:border-teal-400/40 text-slate-200 hover:text-white transition-all active:scale-95"
                    >
                      <Github className="w-4 h-4" />
                      <span>Lihat Kode (GitHub)</span>
                    </a>
                  )}

                  {project.documentation && (
                    <a
                      href={project.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-medium text-slate-300 hover:text-teal-300 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Dokumentasi</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          </FadeContent>
        </section>

        {/* 2. OVERVIEW SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <FadeContent delay={150}>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1e1e2e]/90 border border-white/[0.08] shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-mono text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Project Overview &amp; Background</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Tentang Proyek Ini
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.overview}
              </p>
              <div className="pt-3 border-t border-white/[0.06] flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-slate-400">Peran: <strong className="text-white">{project.role}</strong></span>
                <span>•</span>
                <span className="text-slate-400">Status: <strong className="text-teal-300">Production Ready</strong></span>
              </div>
            </div>
          </FadeContent>
        </section>

        {/* 3. KEY FEATURES (Animated Cards) */}
        {project.features && project.features.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <FadeContent delay={200}>
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="w-5 h-5 text-teal-300" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Fitur Unggulan
                </h2>
              </div>
            </FadeContent>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {project.features.map((feat, fIdx) => {
                const IconComponent = iconMap[feat.icon] || Sparkles;
                return (
                  <FadeContent key={fIdx} delay={250 + fIdx * 80} distance={20}>
                    <div className="p-6 rounded-2xl bg-[#1e1e2e]/80 border border-white/[0.07] hover:border-teal-400/40 transition-all duration-300 card-glow h-full flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/20 text-teal-300 flex items-center justify-center mb-4">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">
                          {feat.title}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          {feat.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-teal-400">
                        Feature #{fIdx + 1}
                      </div>
                    </div>
                  </FadeContent>
                );
              })}
            </div>
          </section>
        )}

        {/* 4. SCREENSHOTS GALLERY (Responsive Grid + Modal Preview) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <FadeContent delay={200}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Galeri Antarmuka &amp; Tangkapan Layar
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Klik tangkapan layar untuk melihat ukuran penuh
                  </p>
                </div>
              </div>
            </FadeContent>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.screenshots.map((shot, sIdx) => (
                <FadeContent key={sIdx} delay={250 + sIdx * 90} distance={20}>
                  <div
                    onClick={() => setSelectedImage(shot)}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e2e] cursor-pointer hover:border-teal-400/40 transition-all shadow-xl"
                  >
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                      <img
                        src={shot.url}
                        alt={shot.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-3 rounded-full bg-slate-900/80 text-teal-300 border border-teal-400/40 backdrop-blur-md">
                          <Maximize2 className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-[#1e1e2e]/95 border-t border-white/[0.06]">
                      <h4 className="text-sm font-bold text-white">
                        {shot.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {shot.caption}
                      </p>
                    </div>
                  </div>
                </FadeContent>
              ))}
            </div>
          </section>
        )}

        {/* 5. DEVELOPMENT PROCESS (Timeline) */}
        {project.process && project.process.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <FadeContent delay={200}>
              <div className="flex items-center gap-2 mb-8">
                <Calendar className="w-5 h-5 text-teal-300" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Alur Proses Pengembangan
                </h2>
              </div>
            </FadeContent>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#1e1e2e]/90 border border-white/[0.08] shadow-xl">
              <div className="relative pl-6 sm:pl-8 border-l border-teal-400/30 space-y-8">
                {project.process.map((step, pIdx) => (
                  <div key={pIdx} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#1e1e2e] border-2 border-teal-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(94,234,212,0.8)]" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-teal-300">
                          {step.phase}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-400">
                          {step.date}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. DETAILED DOCUMENTATION (Research, Wireframe, UI Design, Implementation, Testing) */}
        {project.documentationSections && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <FadeContent delay={200}>
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="w-5 h-5 text-teal-300" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Dokumentasi &amp; Catatan Teknis
                </h2>
              </div>
            </FadeContent>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              <div className="p-6 rounded-2xl bg-[#1e1e2e]/70 border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-teal-300 uppercase tracking-wider block">01 • Tahap Riset</span>
                <h3 className="text-base font-bold text-white">Research &amp; Analysis</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.documentationSections.research}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1e1e2e]/70 border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-purple-300 uppercase tracking-wider block">02 • Arsitektur</span>
                <h3 className="text-base font-bold text-white">Wireframe &amp; User Flow</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.documentationSections.wireframe}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1e1e2e]/70 border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-pink-300 uppercase tracking-wider block">03 • Estetika</span>
                <h3 className="text-base font-bold text-white">UI Design &amp; Styling</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.documentationSections.uiDesign}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1e1e2e]/70 border border-white/[0.06] space-y-2">
                <span className="text-[10px] font-mono text-teal-300 uppercase tracking-wider block">04 • Frontend</span>
                <h3 className="text-base font-bold text-white">Implementation &amp; Code</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.documentationSections.implementation}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1e1e2e]/70 border border-white/[0.06] space-y-2 md:col-span-2">
                <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider block">05 • Validasi</span>
                <h3 className="text-base font-bold text-white">Testing &amp; Quality Assurance</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.documentationSections.testing}
                </p>
              </div>

            </div>
          </section>
        )}

        {/* 7. RELATED PROJECTS CAROUSEL / MINI GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-white/[0.08]">
          <FadeContent delay={100}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Proyek Terkait Lainnya
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Eksplorasi karya dan studi kasus frontend lainnya
                </p>
              </div>

              <Link
                to="/#projects"
                className="text-xs font-mono text-teal-300 hover:text-teal-200 flex items-center gap-1"
              >
                <span>Lihat Semua</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeContent>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/projects/${rel.id}`)}
                className="group p-5 rounded-2xl bg-[#1e1e2e]/80 border border-white/[0.06] hover:border-teal-400/40 transition-all duration-300 cursor-pointer card-glow flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 rounded-xl overflow-hidden mb-4 bg-slate-900">
                    <img
                      src={rel.thumbnail}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-teal-300 uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors mt-1 line-clamp-1">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {rel.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-teal-300 font-mono">
                  <span>Buka Studi Kasus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />

      {/* Screenshot Fullscreen Modal Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-10 flex flex-col items-center justify-center animate-in fade-in duration-200"
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <div className="mt-3 text-center">
              <h4 className="text-sm font-bold text-white font-mono">{selectedImage.title}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
