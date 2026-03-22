import { useState, useCallback } from 'react';
import AnimatedLoader from '@/components/AnimatedLoader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Loader overlays but content is ALWAYS in DOM for Lighthouse/crawlers */}
      <AnimatedLoader onComplete={handleLoaderComplete} />

      {/* Content always rendered — just hidden while loading to prevent flash */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.4s ease',
          pointerEvents: isLoading ? 'none' : 'auto',
        }}
      >
        <CustomCursor />
        <Navbar />

        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
    </>
  );
};

export default Index;
