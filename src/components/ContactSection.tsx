import { useState } from 'react';
import { Boxes } from '@/components/ui/background-boxes';
import ScrollReveal from './ScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Send, CheckCircle } from 'lucide-react';
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

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
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
      <div className="relative z-10 max-w-4xl mx-auto px-6">
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

        <ScrollReveal delay={0.15}>
          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="glass-surface rounded-2xl p-6 sm:p-8 space-y-5"
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
                  rows={5}
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
