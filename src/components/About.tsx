
import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30 cosmic-section relative overflow-hidden">
      {/* Starfield Background */}
      <div className="starfield-container">
        <div className="starfield starfield-layer-2 opacity-20"></div>
        <div className="starfield starfield-layer-3 opacity-15"></div>
      </div>

      {/* Nebulae Effects */}
      <div className="nebulae-container">
        <div className="nebula nebula-2 opacity-05"></div>
        <div className="nebula nebula-3 opacity-05"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 floating-text">
              <span className="cosmic-word hover-glow inline-block">About</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">Me</span>
            </h2>
          </div>
          <div className="space-y-8 text-lg text-muted-foreground floating-text">
            <p className="leading-relaxed">
              <span className="cosmic-word hover-glow inline-block">I'm</span>{' '}
              <span className="cosmic-word hover-glow inline-block">a</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">passionate</span>{' '}
              <span className="cosmic-word hover-glow inline-block">software</span>{' '}
              <span className="cosmic-word hover-glow inline-block">engineer</span>{' '}
              <span className="cosmic-word hover-glow inline-block">with</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">5+</span>{' '}
              <span className="cosmic-word hover-glow inline-block">years</span>{' '}
              <span className="cosmic-word hover-glow inline-block">of</span>{' '}
              <span className="cosmic-word hover-glow inline-block">experience</span>{' '}
              <span className="cosmic-word hover-glow inline-block">building</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">robust</span>{' '}
              <span className="cosmic-word hover-glow inline-block">applications</span>{' '}
              <span className="cosmic-word hover-glow inline-block">and</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">distributed</span>{' '}
              <span className="cosmic-word hover-glow inline-block">systems.</span>
            </p>
            <p className="leading-relaxed">
              <span className="cosmic-word hover-glow inline-block">My</span>{' '}
              <span className="cosmic-word hover-glow inline-block">expertise</span>{' '}
              <span className="cosmic-word hover-glow inline-block">spans</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">full-stack</span>{' '}
              <span className="cosmic-word hover-glow inline-block">development,</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">cloud</span>{' '}
              <span className="cosmic-word hover-glow inline-block">architecture,</span>{' '}
              <span className="cosmic-word hover-glow inline-block">and</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">DevOps</span>{' '}
              <span className="cosmic-word hover-glow inline-block">practices.</span>{' '}
              <span className="cosmic-word hover-glow inline-block">I</span>{' '}
              <span className="cosmic-word hover-glow inline-block">love</span>{' '}
              <span className="cosmic-word hover-glow inline-block">tackling</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">challenging</span>{' '}
              <span className="cosmic-word hover-glow inline-block">problems</span>{' '}
              <span className="cosmic-word hover-glow inline-block">and</span>{' '}
              <span className="cosmic-word hover-glow inline-block">turning</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">ideas</span>{' '}
              <span className="cosmic-word hover-glow inline-block">into</span>{' '}
              <span className="cosmic-word hover-glow inline-block">reality.</span>
            </p>
            <p className="leading-relaxed">
              <span className="cosmic-word hover-glow inline-block">When</span>{' '}
              <span className="cosmic-word hover-glow inline-block">I'm</span>{' '}
              <span className="cosmic-word hover-glow inline-block">not</span>{' '}
              <span className="cosmic-word hover-glow inline-block">coding,</span>{' '}
              <span className="cosmic-word hover-glow inline-block">you'll</span>{' '}
              <span className="cosmic-word hover-glow inline-block">find</span>{' '}
              <span className="cosmic-word hover-glow inline-block">me</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">contributing</span>{' '}
              <span className="cosmic-word hover-glow inline-block">to</span>{' '}
              <span className="cosmic-word hover-glow inline-block">open</span>{' '}
              <span className="cosmic-word hover-glow inline-block">source,</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">mentoring</span>{' '}
              <span className="cosmic-word hover-glow inline-block">junior</span>{' '}
              <span className="cosmic-word hover-glow inline-block">developers,</span>{' '}
              <span className="cosmic-word hover-glow inline-block">or</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">exploring</span>{' '}
              <span className="cosmic-word hover-glow inline-block">the</span>{' '}
              <span className="cosmic-word hover-glow inline-block">latest</span>{' '}
              <span className="cosmic-word hover-glow inline-block">tech</span>{' '}
              <span className="cosmic-word hover-glow inline-block">trends.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center floating-text">
            <Badge variant="secondary" className="cosmic-button cosmic-word hover-glow">Problem Solver</Badge>
            <Badge variant="secondary" className="cosmic-button cosmic-word hover-glow">System Architect</Badge>
            <Badge variant="secondary" className="cosmic-button cosmic-word hover-glow">Open Source Contributor</Badge>
            <Badge variant="secondary" className="cosmic-button cosmic-word hover-glow">Tech Enthusiast</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
