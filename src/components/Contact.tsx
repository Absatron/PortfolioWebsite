
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/30 cosmic-section relative overflow-hidden">
      {/* Starfield Background */}
      <div className="starfield-container">
        <div className="starfield starfield-layer-2 opacity-20"></div>
        <div className="starfield starfield-layer-3 opacity-15"></div>
      </div>

      {/* Nebulae Effects */}
      <div className="nebulae-container">
        <div className="nebula nebula-1 opacity-05"></div>
        <div className="nebula nebula-2 opacity-05"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 floating-text">
              <span className="cosmic-word hover-glow inline-block">Let's</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground floating-text">
              <span className="cosmic-word hover-glow inline-block">Ready</span>{' '}
              <span className="cosmic-word hover-glow inline-block">to</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">collaborate</span>{' '}
              <span className="cosmic-word hover-glow inline-block">on</span>{' '}
              <span className="cosmic-word hover-glow inline-block">your</span>{' '}
              <span className="cosmic-word hover-glow inline-block neon-accent pulsating">next</span>{' '}
              <span className="cosmic-word hover-glow inline-block">project?</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 floating-text">
            <Card className="p-8 cosmic-card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 cosmic-word hover-glow">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background cosmic-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 cosmic-word hover-glow">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background cosmic-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 cosmic-word hover-glow">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background cosmic-input"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button size="lg" className="w-full cosmic-button">
                  <span className="cosmic-word hover-glow">Send</span>{' '}
                  <span className="cosmic-word hover-glow">Message</span>
                </Button>
              </form>
            </Card>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 floating-text">
                  <span className="cosmic-word hover-glow inline-block">Get</span>{' '}
                  <span className="cosmic-word hover-glow inline-block">in</span>{' '}
                  <span className="cosmic-word hover-glow inline-block neon-accent pulsating">Touch</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform neon-accent pulsating" />
                    <span className="cosmic-word hover-glow">alex@devportfolio.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform neon-accent pulsating" />
                    <span className="cosmic-word hover-glow">linkedin.com/in/alexdev</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform neon-accent pulsating" />
                    <span className="cosmic-word hover-glow">github.com/alexdev</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 floating-text">
                  <span className="cosmic-word hover-glow inline-block neon-accent pulsating">Open</span>{' '}
                  <span className="cosmic-word hover-glow inline-block">to</span>{' '}
                  <span className="cosmic-word hover-glow inline-block">Opportunities</span>
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="cosmic-word hover-glow">• Full-time positions</div>
                  <div className="cosmic-word hover-glow">• Contract work</div>
                  <div className="cosmic-word hover-glow">• Technical consulting</div>
                  <div className="cosmic-word hover-glow">• Code reviews & mentoring</div>
                  <div className="cosmic-word hover-glow">• Speaking engagements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
