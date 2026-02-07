import { motion } from 'framer-motion';
import TextScramble from './TextScramble';
import BackgroundGrid from './BackgroundGrid';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <BackgroundGrid className="min-h-screen flex items-center justify-center relative">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: 'hsl(190 95% 55%)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-15"
        style={{ background: 'hsl(260 80% 65%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-surface glow-border mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-xs font-mono text-muted-foreground">Available for work</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <TextScramble
            text="Rakesh Naskar"
            className="text-gradient-primary"
            delay={2200}
            speed={25}
          />
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground font-light mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          Web Developer <span className="text-primary/50">•</span> Adobe Designer <span className="text-primary/50">•</span> Cybersecurity Professional
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base text-muted-foreground/70 font-mono max-w-lg mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          "Building secure, scalable, and visually stunning digital experiences."
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="noise-bg px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-lg border border-border text-foreground/80 font-medium text-sm hover:border-primary/40 hover:text-foreground transition-all"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </BackgroundGrid>
  );
};

export default HeroSection;
