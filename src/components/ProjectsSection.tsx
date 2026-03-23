"use client";

import GlowCard from "./GlowCard";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  github: string;
  tags: string[];
  status?: string;
}

const projects: Project[] = [
  {
    title: "Mayapur Crafts Pvt Ltd",
    description:
      "E-commerce platform for authentic handcrafted goods from Mayapur — featuring curated product listings, a smooth shopping experience, and a clean modern UI. Currently under active development.",
    image: "https://image.thum.io/get/width/800/crop/600/https://mayapurcrafts-xx.vercel.app/",
    liveLink: "https://mayapurcrafts-xx.vercel.app/",
    github: "https://github.com/vladimir007usa/mayapurcrafts_xx",
    tags: ["E-Commerce", "Ongoing", "Handcrafts"],
    status: "Ongoing",
  },
  {
    title: "DesignForge",
    description:
      "A design marketplace platform for storing and selling design templates.",
    image: "https://image.thum.io/get/width/800/crop/600/https://designforge-zeta.vercel.app/",
    liveLink: "https://designforge-zeta.vercel.app/",
    github: "https://github.com/vladimir007usa/designforge",
    tags: ["Marketplace", "Full-Stack", "Design"],
  },
  {
    title: "Sri NandiGram",
    description:
      "Premium real estate website for Mayapur with elegant UI & responsive layout.",
    image: "https://image.thum.io/get/width/800/crop/600/https://www.nandigram.in/",
    liveLink: "https://www.nandigram.in/",
    github: "https://github.com/vladimir007usa/srinandigram-xx",
    tags: ["Real Estate", "Premium", "Web Design"],
  },
  {
    title: "Nandi Sanctuary",
    description:
      "An experimental modern web experience currently in development.",
    image: "https://image.thum.io/get/width/800/crop/600/https://www.nandisanctuary.com/",
    liveLink: "https://www.nandisanctuary.com/",
    github: "https://github.com/vladimir007usa/nandi_sancturyxx",
    tags: ["Sanctuary", "Web App"],
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
                <GlowCard className="h-full group border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-500 overflow-hidden rounded-2xl flex flex-col">

                  {/* PROJECT IMAGE COVER */}
                  <div className="relative w-full h-48 overflow-hidden group border-b border-white/5">
                    {/* Hover Glow Effect layer */}
                    <div className="absolute inset-0 z-10 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-500 pointer-events-none" />
                    
                    <img 
                      src={project.image} 
                      alt={project.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-1">

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
                            className="icon-btn z-20 relative"
                            aria-label={`View live site for ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn z-20 relative"
                          aria-label={`View GitHub repository for ${project.title}`}
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
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
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
