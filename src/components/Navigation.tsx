
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Abdullah_James_CV.pdf'; // Points to the CV file in public folder
    link.download = 'Abdullah_James_CV.pdf'; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary cursor-pointer">
            {'<Dev/>'}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex items-center gap-2"
            onClick={handleResumeDownload}
          >
            <Download className="w-4 h-4" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
