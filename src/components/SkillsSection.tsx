import GlowCard from './GlowCard';
import ScrollReveal from './ScrollReveal';
import {
  Code, Server, Database, Shield, Palette, Monitor
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['HTML', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'React'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['PHP', 'Laravel', 'Node.js', 'Express', 'Python', 'Django', 'Java', 'C'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'SQL', 'MySQL', 'SQLite'],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: ['Wireshark', 'Burp Suite', 'Nmap', 'Kali Linux'],
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    skills: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe XD', 'Figma', 'Notion', 'WordPress'],
  },
  {
    title: 'Systems & AI',
    icon: Monitor,
    skills: ['Linux', 'Windows', 'AI Tools', 'MS Word', 'Excel', 'PowerPoint'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Tools & <span className="text-gradient-primary">Technologies</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.08}>
              <GlowCard className="h-full">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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

export default SkillsSection;
