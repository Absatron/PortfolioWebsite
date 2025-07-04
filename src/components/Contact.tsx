
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 ">
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
          
          <div className="flex flex-col md:flex-row justify-center gap-20 max-w-3xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <a 
                    href="mailto:jamesabdullah82@gmail.com?subject=PortfolioContact"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    jamesabdullah82@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <a href={"https://www.linkedin.com/in/abdullah-james/"} target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>linkedin.com/in/abdullah-james</span>
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                 <a href={"https://github.com/Absatron"} target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>github.com/Absatron</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Open to Opportunities
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div>• Freelance & Contract work</div>
                <div>• Startup & Business collaborations</div>
                <div>• Mentoring</div>
                <div>• Speaking engagements</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
