"use client";

import GlowCard from "./GlowCard";
import ScrollReveal from "./ScrollReveal";
import { Meteors } from "./ui/meteors";
import { Briefcase, ExternalLink } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    role: "Full-Stack Web Developer & Designer",
    company: "The Statesman",
    period: "Nov 2025 – Present",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* METEOR BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={24} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <ScrollReveal>
          

          <h2 className="text-4xl sm:text-5xl font-bold text-gradient-primary mb-12">
            Experience
          </h2>
        </ScrollReveal>

        {/* CARD */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlowCard className="backdrop-blur-md">
                <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                  {/* LEFT */}
                  <div className="flex gap-4 items-center">

                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>

                      {/* WHITE STATESMAN LOGO */}
                      <img
                        src="/the-statesman-logo.png"
                        alt="The Statesman"
                        className="h-10 sm:h-12 mt-2 w-auto object-contain
                                   brightness-0 invert
                                   drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                      />
                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-start sm:items-end gap-3">
                    <span className="text-xs font-mono text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {exp.period}
                    </span>

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition"
                      >
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
