
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
              I am a software engineer with a passion for tackling complex problems head-on and a relentless drive to expand my toolkit—whether that means diving into the latest AI research, mastering a new framework, or exploring the impacts of technology on our health, wealth and relationships. 
            </p>
            <p className="leading-relaxed">
              By asking incisive questions and slicing problems into clear, actionable steps, I create smart, streamlined solutions that drive my personal development and, with the right perspective, uplift the wider community.
            </p>
            <p className="leading-relaxed">
              Time is my most precious resource, so I leverage productivity hacks and continuous learning to make every minute count—balancing hands-on development with deep study to stay ahead of the curve. 
            </p>
             <p className="leading-relaxed">
              When I am not developing, you’ll find me exploring thought-provoking insights from podcasts and books, mentoring others or in the gym. 
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <Badge variant="secondary">Problem Solver</Badge>
            <Badge variant="secondary">Critcal Thinker</Badge>
            <Badge variant="secondary">Mentor</Badge>
            <Badge variant="secondary">Student of knowledge</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
