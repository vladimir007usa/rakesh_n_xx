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
      <AnimatedLoader onComplete={handleLoaderComplete} />

      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />

          <main>
            <HeroSection />
            <AboutSection />

            {/* 🔥 PROJECTS moved UP */}
            <ProjectsSection />

            {/* 🔥 SKILLS moved DOWN */}
            <SkillsSection />

            <EducationSection />
            <ContactSection />
            <FooterSection />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
