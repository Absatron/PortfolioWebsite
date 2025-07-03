
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="hover-zoom inline-block">Let's</span>{' '}
              <span className="hover-zoom inline-block text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              <span className="hover-zoom inline-block">Ready</span>{' '}
              <span className="hover-zoom inline-block">to</span>{' '}
              <span className="hover-zoom inline-block text-primary">collaborate</span>{' '}
              <span className="hover-zoom inline-block">on</span>{' '}
              <span className="hover-zoom inline-block">your</span>{' '}
              <span className="hover-zoom inline-block text-primary">next</span>{' '}
              <span className="hover-zoom inline-block">project?</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 hover-zoom">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 hover-zoom">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 hover-zoom">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button size="lg" className="w-full hover-zoom">
                  <span className="hover-zoom">Send</span>{' '}
                  <span className="hover-zoom">Message</span>
                </Button>
              </form>
            </Card>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 hover-zoom">
                  <span className="hover-zoom inline-block">Get</span>{' '}
                  <span className="hover-zoom inline-block">in</span>{' '}
                  <span className="hover-zoom inline-block text-primary">Touch</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="hover-zoom">alex@devportfolio.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="hover-zoom">linkedin.com/in/alexdev</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="hover-zoom">github.com/alexdev</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 hover-zoom">
                  <span className="hover-zoom inline-block text-primary">Open</span>{' '}
                  <span className="hover-zoom inline-block">to</span>{' '}
                  <span className="hover-zoom inline-block">Opportunities</span>
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="hover-zoom">• Full-time positions</div>
                  <div className="hover-zoom">• Contract work</div>
                  <div className="hover-zoom">• Technical consulting</div>
                  <div className="hover-zoom">• Code reviews & mentoring</div>
                  <div className="hover-zoom">• Speaking engagements</div>
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
