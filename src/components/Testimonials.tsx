
import React from 'react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "One of the most talented engineers I've worked with. Their ability to solve complex problems and deliver scalable solutions is outstanding.",
      author: "Sarah Chen",
      role: "Senior Engineering Manager, TechCorp",
      company: "TechCorp"
    },
    {
      quote: "Exceptional technical skills combined with great communication. Led our team through a critical system migration flawlessly.",
      author: "Michael Rodriguez",
      role: "CTO, StartupXYZ",
      company: "StartupXYZ"
    }
  ];

  return (
    <section className="py-20 cosmic-section relative overflow-hidden">
      {/* Starfield Background */}
      <div className="starfield-container">
        <div className="starfield starfield-layer-3 opacity-15"></div>
        <div className="starfield starfield-layer-1 opacity-10"></div>
      </div>

      {/* Nebulae Effects */}
      <div className="nebulae-container">
        <div className="nebula nebula-3 opacity-05"></div>
        <div className="nebula nebula-2 opacity-05"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 floating-text">
            <span className="cosmic-word hover-glow inline-block">What</span>{' '}
            <span className="cosmic-word hover-glow inline-block neon-accent pulsating">People</span>{' '}
            <span className="cosmic-word hover-glow inline-block">Say</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 cosmic-card floating-text">
              <div className="space-y-4">
                <p className="text-lg italic leading-relaxed cosmic-word">"{testimonial.quote}"</p>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold cosmic-word hover-glow neon-accent">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground cosmic-word hover-glow">{testimonial.role}</div>
                  <div className="text-sm text-primary cosmic-word hover-glow">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
