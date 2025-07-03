
import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
          </div>
          <div className="space-y-8 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              I'm a passionate software engineer with 5+ years of experience building robust applications and distributed systems.
            </p>
            <p className="leading-relaxed">
              My expertise spans full-stack development, cloud architecture, and DevOps practices. I love tackling challenging problems and turning ideas into reality.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you'll find me contributing to open source, mentoring junior developers, or exploring the latest tech trends.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <Badge variant="secondary">Problem Solver</Badge>
            <Badge variant="secondary">System Architect</Badge>
            <Badge variant="secondary">Open Source Contributor</Badge>
            <Badge variant="secondary">Tech Enthusiast</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
