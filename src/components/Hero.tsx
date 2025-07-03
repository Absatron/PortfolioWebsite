
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="hover-zoom inline-block">Hello,</span>{' '}
              <span className="hover-zoom inline-block">I'm</span>{' '}
              <span className="text-primary hover-zoom inline-block glitch" data-text="Alex">
                Alex
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground font-mono">
              <span className="hover-zoom inline-block">Full-Stack</span>{' '}
              <span className="hover-zoom inline-block text-primary">Software</span>{' '}
              <span className="hover-zoom inline-block">Engineer</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="hover-zoom inline-block">I</span>{' '}
              <span className="hover-zoom inline-block">build</span>{' '}
              <span className="hover-zoom inline-block text-primary">scalable</span>{' '}
              <span className="hover-zoom inline-block">systems,</span>{' '}
              <span className="hover-zoom inline-block">solve</span>{' '}
              <span className="hover-zoom inline-block text-primary">complex</span>{' '}
              <span className="hover-zoom inline-block">problems,</span>{' '}
              <span className="hover-zoom inline-block">and</span>{' '}
              <span className="hover-zoom inline-block">create</span>{' '}
              <span className="hover-zoom inline-block text-primary">innovative</span>{' '}
              <span className="hover-zoom inline-block">solutions</span>{' '}
              <span className="hover-zoom inline-block">that</span>{' '}
              <span className="hover-zoom inline-block">make</span>{' '}
              <span className="hover-zoom inline-block">a</span>{' '}
              <span className="hover-zoom inline-block text-primary">difference.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group hover-zoom">
              <span className="hover-zoom">View</span>{' '}
              <span className="hover-zoom">My</span>{' '}
              <span className="hover-zoom">Work</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="hover-zoom">
              <span className="hover-zoom">Let's</span>{' '}
              <span className="hover-zoom">Connect</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
