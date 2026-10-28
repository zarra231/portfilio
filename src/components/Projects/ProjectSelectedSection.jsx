import React, { useState, useRef } from "react";
import { projectsData, projectCategories } from "../../data/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { ChevronLeft, ChevronRight, ExternalLink, Layers, ArrowRight } from "lucide-react";

export function ProjectSelectedSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Coral Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#fb7185] font-sans drop-shadow-[0_2px_15px_rgba(251,113,133,0.3)]">
            Project Selected
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 font-mono max-w-xl">
            Selected works in Front-End Development, UI/UX Design, and Quality Assurance
          </p>

          {/* Category Tabs & Carousel Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${selectedCategory === cat.id
                  ? "bg-[#fb7185] text-slate-950 font-bold shadow-md shadow-[#fb7185]/20 scale-105"
                  : "bg-[#111116] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Controls (Desktop) */}
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-xs font-mono text-slate-500">
            Menampilkan {filteredProjects.length} proyek
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="p-2 rounded-xl bg-[#111116] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#fb7185]/50 transition-all active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="p-2 rounded-xl bg-[#111116] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#fb7185]/50 transition-all active:scale-95 shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel Cards (matching screenshot) */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 px-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[320px] sm:w-[360px] shrink-0 snap-start rounded-3xl bg-[#111116] border border-white/[0.08] hover:border-[#fb7185]/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(251,113,133,0.15)] flex flex-col justify-between group"
            >
              {/* Card Top: Mockup Image */}
              <div className="space-y-4">
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116]/80 via-transparent to-transparent" />

                  {/* Top-Right Badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/70 text-[#fb7185] border border-[#fb7185]/30 backdrop-blur-md">
                    {project.badge}
                  </span>

                  {/* Year Tag Bottom Left */}
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-300 bg-black/60 border border-white/10 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#fb7185] transition-colors tracking-tight line-clamp-1">
                    {project.shortTitle} | {project.year}
                  </h3>
                  <p className="text-xs text-[#38bdf8] font-mono mt-0.5">
                    {project.role}
                  </p>
                </div>

                {/* Description from CV */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Tech Pills & CTA */}
              <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/[0.05] hover:bg-[#fb7185] hover:text-slate-950 text-white text-xs font-mono font-semibold transition-all duration-200 border border-white/[0.08] hover:border-[#fb7185] group-hover:shadow-md"
                >
                  <span>Lihat Detail Proyek</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectSelectedSection;
