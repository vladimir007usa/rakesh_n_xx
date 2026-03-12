"use client";

import GlowCard from "./GlowCard";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

interface Project {
  title: string;
  description: string;
  liveLink?: string;
  github: string;
  tags: string[];
  status?: string;
}

const projects: Project[] = [
  {
    title: "DesignForge",
    description:
      "A design marketplace platform for storing and selling design templates.",
    liveLink: "https://designforge-zeta.vercel.app/",
    github: "https://github.com/vladimir007usa/designforge",
    tags: ["Marketplace", "Full-Stack", "Design"],
  },
  {
    title: "Sri NandiGram",
    description:
      "Premium real estate website for Mayapur with elegant UI & responsive layout.",
    liveLink: "https://www.nandigram.site/",
    github: "https://github.com/vladimir007usa/srinandigram-xx",
    tags: ["Real Estate", "Premium", "Web Design"],
  },
  {
    title: "Nandi Sanctuary",
    description:
      "An experimental modern web experience currently in development.",
    github: "https://github.com/vladimir007usa/nandi-sanctuary",
    tags: ["Ongoing", "Web App"],
    status: "In Development",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      style={{ background: "hsl(230 25% 3%)" }} // 🔥 SAME AS EXPERIENCE
    >
      {/* ✨ BLUE GLOWING LINES */}
      <div className="absolute inset-0 z-0 opacity-90">
        <BackgroundLines className="w-full h-full text-cyan-400" />
      </div>

      {/* 🔥 EXTRA BLUE GLOW AMBIENCE */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0%,transparent_65%)] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">

          {/* TITLE */}
          <ScrollReveal>
            <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </h2>
          </ScrollReveal>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <GlowCard className="h-full group border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500">

                  <div className="p-8 flex flex-col h-full">

                    {/* HEADER */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>

                        {project.status && (
                          <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                            {project.status}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-slate-400 mb-8 flex-1 group-hover:text-slate-300 transition-colors">
                      {project.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-white/5 text-slate-400 border border-white/10 group-hover:border-cyan-400/40 group-hover:text-cyan-400 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
