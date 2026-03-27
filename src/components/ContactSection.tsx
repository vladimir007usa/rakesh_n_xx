import { useState } from 'react';
import { Boxes } from '@/components/ui/background-boxes';
import ScrollReveal from './ScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Send, CheckCircle, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email is too long'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject must be less than 200 characters'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'b1090997-a9d3-434c-955d-4fbf3393e247');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', 'Portfolio Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast({
          title: 'Message sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // If the API returns success: false, show the message from the API
        throw new Error(data.message || 'The server rejected the request.');
      }
    } catch (error: any) {
      toast({
        title: 'Error sending message',
        description: error.message || 'Please try again later or reach out via email directly.',
        variant: 'destructive',
      });
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32 border-t border-border"
    >
      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-background z-0">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="text-gradient-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Have a project in mind or just want to say hello? Drop me a
              message and I'll get back to you as soon as possible.
            </p>
          </div>
        </ScrollReveal>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">

          {/* LEFT — CONTACT INFO CARD */}
          <ScrollReveal delay={0.1}>
            <div className="glass-surface rounded-2xl p-5 flex flex-col gap-5 border border-white/10 hover:border-cyan-400/30 transition-colors duration-500">

              {/* Header */}
              <div>
                <h3 className="text-base font-bold text-white mb-1">Contact Info</h3>
                <p className="text-xs text-slate-400">
                  Reach out via any of these channels — I'm always open to new opportunities.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-4">

                {/* Email */}
                <a
                  href="mailto:rakeshjames009@gmail.com"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
                  aria-label="Send an email to Rakesh James"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-300 shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-xs font-medium text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                      rakeshjames009@gmail.com
                    </p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 ml-auto shrink-0 transition-colors" />
                </a>

                {/* LinkedIn — Coming Soon */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 opacity-50 cursor-not-allowed">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-xs font-medium text-slate-500 truncate">Coming soon…</p>
                  </div>
                </div>

                {/* Twitter — Coming Soon */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 opacity-50 cursor-not-allowed">
                  <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                    <Twitter className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">Twitter / X</p>
                    <p className="text-xs font-medium text-slate-500 truncate">Coming soon…</p>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/vladimir007usa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300"
                  aria-label="Visit Rakesh's GitHub profile"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-400/10 border border-purple-400/20 flex items-center justify-center group-hover:bg-purple-400/20 group-hover:border-purple-400/50 transition-all duration-300 shrink-0">
                    <Github className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">GitHub</p>
                    <p className="text-xs font-medium text-slate-200 group-hover:text-purple-300 transition-colors truncate">
                      github.com/vladimir007usa
                    </p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-purple-400 ml-auto shrink-0 transition-colors" />
                </a>
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/5 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#4ade80] shrink-0" />
                <p className="text-[10px] font-mono text-green-400">Available for freelance & full-time roles</p>
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT — MESSAGE FORM */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="glass-surface rounded-2xl p-6 sm:p-8 space-y-5 border border-white/10 hover:border-cyan-400/20 transition-colors duration-500"
            >
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-muted-foreground uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Rakesh Naskar"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      'bg-secondary/50 border-border/60 focus:border-primary/50 placeholder:text-muted-foreground/40',
                      errors.name && 'border-destructive'
                    )}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-muted-foreground uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      'bg-secondary/50 border-border/60 focus:border-primary/50 placeholder:text-muted-foreground/40',
                      errors.email && 'border-destructive'
                    )}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-mono text-muted-foreground uppercase tracking-wider"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className={cn(
                    'bg-secondary/50 border-border/60 focus:border-primary/50 placeholder:text-muted-foreground/40',
                    errors.subject && 'border-destructive'
                  )}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-muted-foreground uppercase tracking-wider"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hi…"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={cn(
                    'bg-secondary/50 border-border/60 focus:border-primary/50 placeholder:text-muted-foreground/40 resize-none',
                    errors.message && 'border-destructive'
                  )}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  'w-full h-11 font-medium text-sm transition-all',
                  isSubmitted &&
                    'bg-green-600 hover:bg-green-600 text-white'
                )}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <Mail className="w-4 h-4 mr-1 animate-pulse" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-1" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

