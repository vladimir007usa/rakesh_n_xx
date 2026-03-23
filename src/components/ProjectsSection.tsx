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
    image: "https://image.thum.io/get/width/1000/crop/800/https://mayapurcrafts-xx.vercel.app/",
    liveLink: "https://mayapurcrafts-xx.vercel.app/",
    github: "https://github.com/vladimir007usa/mayapurcrafts_xx",
    tags: ["E-Commerce", "Ongoing", "Handcrafts"],
    status: "Ongoing",
  },
  {
    title: "DesignForge",
    description:
      "A design marketplace platform for storing and selling design templates.",
    image: "https://image.thum.io/get/width/1000/crop/800/https://designforge-zeta.vercel.app/",
    liveLink: "https://designforge-zeta.vercel.app/",
    github: "https://github.com/vladimir007usa/designforge",
    tags: ["Marketplace", "Full-Stack", "Design"],
  },
  {
    title: "Sri NandiGram",
    description:
      "Premium real estate website for Mayapur with elegant UI & responsive layout.",
    image: "https://image.thum.io/get/width/1000/crop/800/https://www.nandigram.in/",
    liveLink: "https://www.nandigram.in/",
    github: "https://github.com/vladimir007usa/srinandigram-xx",
    tags: ["Real Estate", "Premium", "Web Design"],
  },
  {
    title: "Nandi Sanctuary",
    description:
      "An experimental modern web experience currently in development.",
    image: "https://image.thum.io/get/width/1000/crop/800/https://www.nandisanctuary.com/",
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
                <GlowCard 
                  alwaysShowElectric={true}
                  className="h-[500px] group border-white/10 bg-zinc-900 overflow-hidden rounded-2xl relative"
                >
                  {/* BACKGROUND IMAGE WITH OVERLAY */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    {/* Subtler Gradient - clear at top, dark at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* CONTENT OVERLAY */}
                  <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                    
                    {/* TOP ACTIONS & BADGES */}
                    <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-wider backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live
                        </span>
                        {project.status && (
                          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-bold text-cyan-400 uppercase tracking-wider backdrop-blur-md">
                            {project.status}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
                            aria-label={`View live site for ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300"
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* MAIN INFO */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-300 line-clamp-3 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* TECH TAGS */}
                      <div className="flex flex-wrap gap-2 pt-2 cursor-default">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
