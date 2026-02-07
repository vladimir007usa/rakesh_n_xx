import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { GraduationCap } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

const educationData: Education[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Greater Kolkata College of Engineering and Management',
    period: '2022 – Present',
  },
  {
    degree: 'Higher Secondary',
    institution: 'Canning David Sassoon High School',
    period: '2021',
    score: '401 / 500',
  },
  {
    degree: 'Secondary',
    institution: 'Canning David Sassoon High School',
    period: '2019',
    score: '588 / 700',
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Academic <span className="text-gradient-primary">Journey</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden sm:block" />

          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <ScrollReveal key={edu.degree} delay={i * 0.12}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0 relative z-10"
                      whileInView={{ scale: [0.8, 1] }}
                      viewport={{ once: true }}
                    >
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-5 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-sm">{edu.degree}</h3>
                      <span className="text-xs font-mono text-primary shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    {edu.score && (
                      <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
                        Score: {edu.score}
                      </p>
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
