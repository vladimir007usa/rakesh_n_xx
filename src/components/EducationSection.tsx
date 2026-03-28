"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import DottedGlowBackground from "./ui/dotted-glow-background";

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

const educationData: Education[] = [
  {
    id: "btech-cse",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Greater Kolkata College of Engineering and Management",
    period: "2022 – 2026",
  },
  {
    id: "hs-school",
    degree: "Higher Secondary",
    institution: "Canning David Sassoon High School",
    period: "2021",
    score: "401 / 500",
  },
  {
    id: "secondary-school",
    degree: "Secondary",
    institution: "Canning canning David Sassoon High School",
    period: "2019",
    score: "588 / 700",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 sm:py-32 bg-slate-950" // Ensured dark background
    >
      {/* 🔥 DOTTED GLOW ANIMATION - Set opacity to 1 for max visibility */}
      <DottedGlowBackground
        className="absolute inset-0 z-0 pointer-events-none"
        gap={25}
        radius={2}
        speed={1.0}
        opacity={1} 
      />

      {/* Masking Gradient: Softened so dots remain visible in the center */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="space-y-2 mb-16">
            <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              Education
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Academic <span className="text-cyan-400">Journey</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-slate-700 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {educationData.map((edu, i) => (
              <ScrollReveal key={edu.id} delay={i * 0.1}>
                <div className="group flex gap-6">
                  
                  {/* Timeline Dot & Icon */}
                  <div className="hidden sm:flex flex-col items-center">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 relative z-10 group-hover:border-cyan-500/50 transition-colors shadow-xl"
                      whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md shadow-2xl hover:shadow-cyan-500/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h3 className="font-bold text-lg leading-tight text-slate-100">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md w-fit border border-cyan-400/20">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-400 mb-4 font-medium">
                      {edu.institution}
                    </p>

                    {edu.score && (
                      <div className="flex items-center gap-2 text-xs text-slate-300 font-mono bg-slate-800/50 p-2 rounded-lg border border-slate-700/50 w-fit">
                        <Award className="w-3.5 h-3.5 text-cyan-500" />
                        <span>Score: <span className="text-white font-bold">{edu.score}</span></span>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;