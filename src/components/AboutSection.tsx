import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  const tools = [
    { label: 'Adobe Creative Suite', detail: 'Photoshop, XD, Illustrator, InDesign' },
    { label: 'Web Technologies', detail: 'HTML, CSS, JS, React, Node.js, Laravel, Django' },
    { label: 'Security Tools', detail: 'Kali Linux, Burp Suite, Wireshark, Nmap' },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            A bit about <span className="text-gradient-primary">me</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12">
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Versatile and self-motivated professional with experience in web development,
              cybersecurity, graphic & web design, and document publishing. I build secure, scalable,
              and visually compelling digital products from concept to deployment.
            </p>
            <p className="text-muted-foreground/70 leading-relaxed text-sm">
              With a strong foundation in both frontend aesthetics and backend security,
              I bring a unique perspective to every project — ensuring they're not just beautiful,
              but resilient and performant.
            </p>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2 space-y-4" delay={0.2}>
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/20 transition-colors duration-300"
              >
                <p className="text-sm font-semibold text-foreground mb-1">{tool.label}</p>
                <p className="text-xs text-muted-foreground">{tool.detail}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
