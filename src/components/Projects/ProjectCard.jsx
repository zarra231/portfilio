import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, } from "lucide-react";
import { Github } from "../Icons";
import { GlareCard } from "../reactbits/GlareCard";

export function ProjectCard({ project, isCenter = false, isStatic = false }) {
  if (!project) return null;

  return (
    <GlareCard
      className={`rounded-2xl border transition-all duration-300 w-full ${
        isCenter
          ? "bg-[#1e1e2e] border-teal-400/40 shadow-2xl shadow-teal-500/15"
          : "bg-[#181826]/90 border-white/[0.08] hover:border-white/20"
      }`}
      maxTilt={isStatic ? 8 : 4}
    >
      <div className="flex flex-col h-full overflow-hidden rounded-2xl">
        
        {/* Project Thumbnail Image with Category Badge */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 group">
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";
            }}
          />

          {/* Gradient darkness scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] via-transparent to-black/30" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-teal-300 border border-teal-400/30">
              {project.category}
            </span>
          </div>

          {/* Featured pill if active */}
          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[10px] font-mono">
              <span>Featured</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1 hover:text-teal-300 transition-colors">
              <Link to={`/projects/${project.id}`}>
                {project.title}
              </Link>
            </h3>

            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.05] border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Bottom Actions: View Detail CTA + GitHub link */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-teal-200 transition-colors group/cta"
            >
              <span>Lihat Detail</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
            </Link>

            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-white/[0.06] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </GlareCard>
  );
}

export default ProjectCard;
