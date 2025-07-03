
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border cosmic-nav">
      {/* Starfield Background for Nav */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="starfield starfield-layer-1 opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary hover-glow cursor-pointer cosmic-word pulsating">
            {'<Dev/>'}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="cosmic-word hover-glow transition-colors">About</a>
            <a href="#projects" className="cosmic-word hover-glow transition-colors">Projects</a>
            <a href="#skills" className="cosmic-word hover-glow transition-colors">Skills</a>
            <a href="#contact" className="cosmic-word hover-glow transition-colors">Contact</a>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 cosmic-button">
            <Download className="w-4 h-4" />
            <span className="cosmic-word hover-glow">Resume</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
