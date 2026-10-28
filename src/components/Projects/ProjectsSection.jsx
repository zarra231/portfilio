import React, { useState, useMemo } from "react";
import { projectsData, projectCategories } from "../../data/projects";
import { ProjectCarousel } from "./ProjectCarousel";
import { ProjectCard } from "./ProjectCard";
import { FadeContent } from "../reactbits/FadeContent";
import { GradualBlur } from "../reactbits/GradualBlur";
import { LayoutGrid, Layers, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("carousel"); // 'carousel' or 'grid'

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0B0F19]/80">
      <GradualBlur className="mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeContent delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="section-label">02 /</span>
                <div className="h-[1px] w-8 bg-teal-400/50" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Selected Projects
                </h2>
              </div>
              <p className="text-sm text-slate-400 max-w-xl font-normal">
                Koleksi proyek pilihan yang mencakup perancangan antarmuka, arsitektur sistem web, eksplorasi UI/UX, dan aplikasi mobile.
              </p>
            </div>

            {/* Controls: View Mode Toggle */}
            <div className="flex items-center gap-2 self-start md:self-auto p-1 rounded-xl bg-[#1e1e2e] border border-white/[0.08]">
              <button
                onClick={() => setViewMode("carousel")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === "carousel"
                    ? "bg-teal-400/20 text-teal-300 font-bold border border-teal-400/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Carousel</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === "grid"
                    ? "bg-teal-400/20 text-teal-300 font-bold border border-teal-400/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Semua Grid</span>
              </button>
            </div>
          </div>
        </FadeContent>

        {/* Filter Categories Tabs */}
        <FadeContent delay={200}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-white text-slate-950 font-bold shadow-md shadow-white/10"
                    : "bg-[#1e1e2e]/80 text-slate-300 hover:text-white hover:bg-[#252536] border border-white/[0.06]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeContent>

        {/* Main Display: ReactBits Carousel or Responsive Grid */}
        {viewMode === "carousel" ? (
          <FadeContent delay={300}>
            <ProjectCarousel
              projects={filteredProjects}
              maxRotationDegrees={14}
              maxDepthPx={75}
              backgroundBlur="28px"
              gradientIntensity={0.5}
              dragSensitivity={1.1}
            />
          </FadeContent>
        ) : (
          <FadeContent delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isStatic={true} />
              ))}
            </div>
          </FadeContent>
        )}

      </div>
    </section>
  );
}

export default ProjectsSection;
