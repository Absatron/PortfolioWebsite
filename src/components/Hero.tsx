
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm Abdullah
            </h1>
            <div className="text-2xl md:text-3xl font-mono text-primary">
              AI / Full-Stack Software Engineer
            </div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground">
              I build scalable systems, solve complex problems, and create innovative solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
