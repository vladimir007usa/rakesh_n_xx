import ScrollReveal from './ScrollReveal';
import { Github, Mail, ArrowUpRight } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer id="contact" className="py-24 sm:py-32 relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="text-gradient-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Interested in working together or have a question? Feel free to reach out.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/vladimir007usa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground hover:border-primary/30 hover:text-primary transition-all group"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </a>
            <a
              href="mailto:rakesh@example.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
          </div>
        </ScrollReveal>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024 Rakesh Naskar. All rights reserved.</p>
          <p className="font-mono text-muted-foreground/50">
            Built with React + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
