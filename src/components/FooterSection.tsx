import { Github, Mail } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="py-10 relative border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vladimir007usa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:rakesh@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 Rakesh Naskar. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground/50">
            Built with React + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
