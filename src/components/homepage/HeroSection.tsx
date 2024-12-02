import React from 'react';
import { Button } from '../ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-background"></div>
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Streamline Blood Donation, Save Lives Effortlessly
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Join a trusted platform connecting donors, recipients, and administrators for a seamless blood donation process.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Register as a Donor</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
    </section>
  );
};

export default HeroSection

