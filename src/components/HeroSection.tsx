"use client";

import { motion } from "framer-motion";
import NameLens from "./ui/NameLens";
import { NoiseBackground } from "@/components/ui/noise-background";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      <AuroraBackground className="min-h-screen">
        {/* Main content wrapper */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            
            {/* LEFT SIDE — TEXT */}
            <div className="text-center lg:text-left">
              {/* Status badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                <span className="text-xs font-mono text-slate-300">
                  Available
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <NameLens />
              </motion.h1>

              {/* Title */}
              <motion.p
                className="text-lg sm:text-xl text-slate-300 mb-4 max-w-xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Web Developer <span className="text-cyan-400/50">•</span> Adobe Designer{" "}
                <span className="text-cyan-400/50">•</span> Cybersecurity Professional
              </motion.p>

              {/* Tagline */}
              <motion.p
                className="text-sm sm:text-base text-slate-400 font-mono max-w-lg mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Building secure, scalable, and visually stunning digital experiences.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <NoiseBackground
                  containerClassName="rounded-xl"
                  gradientColors={["rgb(56,189,248)", "rgb(168,85,247)", "rgb(236,72,153)"]}
                >
                  <button
                    onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3 rounded-xl bg-black/80 text-white font-medium text-sm backdrop-blur-md border border-white/10 hover:bg-black transition-colors"
                  >
                    View Projects →
                  </button>
                </NoiseBackground>

                <NoiseBackground
                  containerClassName="rounded-xl"
                  gradientColors={["rgb(34,197,94)", "rgb(59,130,246)", "rgb(168,85,247)"]}
                >
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-3 rounded-xl bg-black/80 text-white font-medium text-sm backdrop-blur-md border border-white/10 hover:bg-black transition-colors"
                  >
                    Get in Touch →
                  </button>
                </NoiseBackground>
              </motion.div>
            </div>

            {/* RIGHT SIDE — PHOTO */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="relative group">
                {/* Decorative background glow for photo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl">
                  <img
  src="/profile.png"
  alt="Rakesh Naskar"
  className="w-full h-full object-cover transition-all duration-700" 
/>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </AuroraBackground>
    </section>
  );
};

export default HeroSection;