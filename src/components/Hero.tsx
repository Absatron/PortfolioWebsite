
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden cosmic-hero">
      {/* Starfield Background */}
      <div className="starfield-container">
        <div 
          className="starfield starfield-layer-1"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        ></div>
        <div 
          className="starfield starfield-layer-2"
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          }}
        ></div>
        <div 
          className="starfield starfield-layer-3"
          style={{
            transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px)`,
          }}
        ></div>
      </div>

      {/* Nebulae Effect */}
      <div className="nebulae-container">
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight floating-text">
              <span className="cosmic-word hover-glow inline-block">Hello,</span>{' '}
              <span className="cosmic-word hover-glow inline-block">I'm</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating" data-text="Alex">
                Alex
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-mono floating-text">
              <span className="cosmic-word hover-glow inline-block">Full-Stack</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">Software</span>{' '}
              <span className="cosmic-word hover-glow inline-block">Engineer</span>
            </div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto floating-text">
              <span className="cosmic-word hover-glow inline-block">I</span>{' '}
              <span className="cosmic-word hover-glow inline-block">build</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">scalable</span>{' '}
              <span className="cosmic-word hover-glow inline-block">systems,</span>{' '}
              <span className="cosmic-word hover-glow inline-block">solve</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">complex</span>{' '}
              <span className="cosmic-word hover-glow inline-block">problems,</span>{' '}
              <span className="cosmic-word hover-glow inline-block">and</span>{' '}
              <span className="cosmic-word hover-glow inline-block">create</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">innovative</span>{' '}
              <span className="cosmic-word hover-glow inline-block">solutions</span>{' '}
              <span className="cosmic-word hover-glow inline-block">that</span>{' '}
              <span className="cosmic-word hover-glow inline-block">make</span>{' '}
              <span className="cosmic-word hover-glow inline-block">a</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">difference.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center floating-text">
            <Button size="lg" className="group cosmic-button">
              <span className="cosmic-word hover-glow">View</span>{' '}
              <span className="cosmic-word hover-glow">My</span>{' '}
              <span className="cosmic-word hover-glow">Work</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="cosmic-button">
              <span className="cosmic-word hover-glow">Let's</span>{' '}
              <span className="cosmic-word hover-glow">Connect</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
