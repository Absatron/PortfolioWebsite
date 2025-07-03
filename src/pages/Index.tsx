
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground cosmic-website">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />

      {/* Cosmic Footer */}
      <footer className="py-12 border-t border-border cosmic-section relative overflow-hidden">
        {/* Starfield Background */}
        <div className="starfield-container">
          <div className="starfield starfield-layer-1 opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0 text-primary cosmic-word hover-glow pulsating">
              {'<Dev/>'}
            </div>
            <div className="text-muted-foreground cosmic-word hover-glow">
              © 2024 Alex. Built with passion and lots of coffee.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
