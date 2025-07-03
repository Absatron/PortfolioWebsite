
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary hover-zoom cursor-pointer">
            {'<Dev/>'}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover-zoom transition-colors">About</a>
            <a href="#projects" className="hover-zoom transition-colors">Projects</a>
            <a href="#skills" className="hover-zoom transition-colors">Skills</a>
            <a href="#contact" className="hover-zoom transition-colors">Contact</a>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 hover-zoom">
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
