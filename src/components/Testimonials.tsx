
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
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <p className="text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
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
