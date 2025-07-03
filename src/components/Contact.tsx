
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
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on your next project?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span>alex@devportfolio.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span>linkedin.com/in/alexdev</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <span>github.com/alexdev</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Open to Opportunities
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>• Full-time positions</div>
                  <div>• Contract work</div>
                  <div>• Technical consulting</div>
                  <div>• Code reviews & mentoring</div>
                  <div>• Speaking engagements</div>
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
