
import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="hover-zoom inline-block">About</span>{' '}
              <span className="hover-zoom inline-block text-primary">Me</span>
            </h2>
          </div>
          <div className="space-y-8 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              <span className="hover-zoom inline-block">I'm</span>{' '}
              <span className="hover-zoom inline-block">a</span>{' '}
              <span className="hover-zoom inline-block text-primary">passionate</span>{' '}
              <span className="hover-zoom inline-block">software</span>{' '}
              <span className="hover-zoom inline-block">engineer</span>{' '}
              <span className="hover-zoom inline-block">with</span>{' '}
              <span className="hover-zoom inline-block text-primary">5+</span>{' '}
              <span className="hover-zoom inline-block">years</span>{' '}
              <span className="hover-zoom inline-block">of</span>{' '}
              <span className="hover-zoom inline-block">experience</span>{' '}
              <span className="hover-zoom inline-block">building</span>{' '}
              <span className="hover-zoom inline-block text-primary">robust</span>{' '}
              <span className="hover-zoom inline-block">applications</span>{' '}
              <span className="hover-zoom inline-block">and</span>{' '}
              <span className="hover-zoom inline-block text-primary">distributed</span>{' '}
              <span className="hover-zoom inline-block">systems.</span>
            </p>
            <p className="leading-relaxed">
              <span className="hover-zoom inline-block">My</span>{' '}
              <span className="hover-zoom inline-block">expertise</span>{' '}
              <span className="hover-zoom inline-block">spans</span>{' '}
              <span className="hover-zoom inline-block text-primary">full-stack</span>{' '}
              <span className="hover-zoom inline-block">development,</span>{' '}
              <span className="hover-zoom inline-block text-primary">cloud</span>{' '}
              <span className="hover-zoom inline-block">architecture,</span>{' '}
              <span className="hover-zoom inline-block">and</span>{' '}
              <span className="hover-zoom inline-block text-primary">DevOps</span>{' '}
              <span className="hover-zoom inline-block">practices.</span>{' '}
              <span className="hover-zoom inline-block">I</span>{' '}
              <span className="hover-zoom inline-block">love</span>{' '}
              <span className="hover-zoom inline-block">tackling</span>{' '}
              <span className="hover-zoom inline-block text-primary">challenging</span>{' '}
              <span className="hover-zoom inline-block">problems</span>{' '}
              <span className="hover-zoom inline-block">and</span>{' '}
              <span className="hover-zoom inline-block">turning</span>{' '}
              <span className="hover-zoom inline-block text-primary">ideas</span>{' '}
              <span className="hover-zoom inline-block">into</span>{' '}
              <span className="hover-zoom inline-block">reality.</span>
            </p>
            <p className="leading-relaxed">
              <span className="hover-zoom inline-block">When</span>{' '}
              <span className="hover-zoom inline-block">I'm</span>{' '}
              <span className="hover-zoom inline-block">not</span>{' '}
              <span className="hover-zoom inline-block">coding,</span>{' '}
              <span className="hover-zoom inline-block">you'll</span>{' '}
              <span className="hover-zoom inline-block">find</span>{' '}
              <span className="hover-zoom inline-block">me</span>{' '}
              <span className="hover-zoom inline-block text-primary">contributing</span>{' '}
              <span className="hover-zoom inline-block">to</span>{' '}
              <span className="hover-zoom inline-block">open</span>{' '}
              <span className="hover-zoom inline-block">source,</span>{' '}
              <span className="hover-zoom inline-block text-primary">mentoring</span>{' '}
              <span className="hover-zoom inline-block">junior</span>{' '}
              <span className="hover-zoom inline-block">developers,</span>{' '}
              <span className="hover-zoom inline-block">or</span>{' '}
              <span className="hover-zoom inline-block text-primary">exploring</span>{' '}
              <span className="hover-zoom inline-block">the</span>{' '}
              <span className="hover-zoom inline-block">latest</span>{' '}
              <span className="hover-zoom inline-block">tech</span>{' '}
              <span className="hover-zoom inline-block">trends.</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <Badge variant="secondary" className="hover-zoom">Problem Solver</Badge>
            <Badge variant="secondary" className="hover-zoom">System Architect</Badge>
            <Badge variant="secondary" className="hover-zoom">Open Source Contributor</Badge>
            <Badge variant="secondary" className="hover-zoom">Tech Enthusiast</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
