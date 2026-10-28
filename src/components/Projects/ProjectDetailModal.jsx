import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Calendar, UserCheck, Layers, Code2 } from "lucide-react";

export function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111116] border border-white/[0.12] shadow-2xl z-10 no-scrollbar">

        {/* Header Image Cover */}
        <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-black/40">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 transition-all shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#fb7185] text-slate-950 shadow-md">
              {project.badge}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-white border border-white/20 backdrop-blur-md">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-[#38bdf8] border border-white/20 backdrop-blur-md">
              {project.year}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Title & Role */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-2 text-sm text-[#38bdf8] font-mono">
              <UserCheck className="w-4 h-4" />
              <span>Role: {project.role}</span>
            </div>
          </div>

          {/* Overview Description from CV */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-sm text-slate-300 leading-relaxed">
            <p className="font-sans">{project.description}</p>
          </div>

          {/* Key Highlights / Responsibilities */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-2">
                <span>Pencapaian &amp; Fitur Utama:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#4ade80] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Teknologi Digunakan:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.06] text-slate-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Links */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold font-mono text-slate-950 bg-[#fb7185] hover:bg-[#f43f5e] transition-all shadow-lg shadow-[#fb7185]/20 active:scale-95"
                >
                  <span>Kunjungi Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Lihat Repository</span>
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectDetailModal;
