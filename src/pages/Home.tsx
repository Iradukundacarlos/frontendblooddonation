import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import AboutSection from '../components/homepage/AboutSection';
import FeaturesSection from '../components/homepage/FeaturesSection';
import HowItWorksSection from '../components/homepage/HowItWorksSection';
import ScreenshotsSection from '../components/homepage/ScreenshotsSection';
import TestimonialsSection from '../components/homepage/TestimonialsSection';
import FutureFeaturesSection from '../components/homepage/FutureFeaturesSection';
import ContactSection from '../components/homepage/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <TestimonialsSection />
        <FutureFeaturesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage

