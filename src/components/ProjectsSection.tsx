import GlowCard from './GlowCard';
import ScrollReveal from './ScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

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
    title: 'DesignForge',
    description: 'A design marketplace platform for storing and selling design templates. Full-stack solution with user auth, template management, and secure payments.',
    liveLink: 'https://designforge-189wxfwqm-rakesh-naskars-projects-9df96544.vercel.app/',
    github: 'https://github.com/vladimir007usa/designforge',
    tags: ['Marketplace', 'Full-Stack', 'Design'],
  },
  {
    title: 'Sri NandiGram',
    description: 'Premium real estate website for Mayapur, featuring property listings, an elegant UI, and responsive design for a luxury property brand.',
    liveLink: 'https://www.nandigram.site/',
    github: 'https://github.com/vladimir007usa/srinandigram-xx',
    tags: ['Real Estate', 'Premium', 'Web Design'],
  },
  {
    title: 'Nandi Sanctuary',
    description: 'An ongoing project exploring new design paradigms and web experiences. Currently in active development.',
    github: 'https://github.com/vladimir007usa/nandi-sanctuary',
    tags: ['Ongoing', 'Web App'],
    status: 'In Development',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Featured <span className="text-gradient-primary">Work</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <GlowCard className="h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                      {project.status && (
                        <span className="text-[10px] font-mono text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
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
                          className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-1 rounded bg-secondary/80 text-muted-foreground border border-border"
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
    </section>
  );
};

export default ProjectsSection;
