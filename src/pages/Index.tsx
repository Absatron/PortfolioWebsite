
import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const projects = [
    {
      title: "E-commerce Redesign",
      description: "Redesigned the entire shopping experience for a major retailer, focusing on mobile-first design and streamlined checkout.",
      impact: "Increased conversion by 34%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["UX Research", "Prototyping", "A/B Testing"]
    },
    {
      title: "SaaS Dashboard",
      description: "Created an intuitive analytics dashboard for a B2B platform, making complex data accessible and actionable.",
      impact: "Reduced user onboarding time by 50%",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Data Visualization", "User Testing", "Figma"]
    },
    {
      title: "Mobile Banking App",
      description: "Designed a complete mobile banking experience with focus on security, accessibility, and user trust.",
      impact: "4.8★ app store rating",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile Design", "Security UX", "Accessibility"]
    }
  ];

  const skills = [
    { category: "Design Tools", items: ["Figma", "Sketch", "Adobe Creative Suite", "Principle", "Framer"] },
    { category: "Development", items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Git"] },
    { category: "Research", items: ["User Interviews", "Usability Testing", "A/B Testing", "Analytics", "Surveys"] },
    { category: "Collaboration", items: ["Design Systems", "Agile/Scrum", "Stakeholder Management", "Mentoring"] }
  ];

  const testimonials = [
    {
      quote: "Abs transformed our entire user experience. The results speak for themselves - our conversion rates have never been higher.",
      author: "Sarah Chen",
      role: "Product Manager, TechCorp",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Working with Abs was incredible. They have this rare ability to make complex problems feel simple and elegant.",
      author: "Michael Rodriguez",
      role: "CEO, StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Abs</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  I'm Abs, a UX designer who makes{' '}
                  <span className="text-primary">complex things delightfully simple</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I transform user frustration into seamless experiences through research-driven design and human-centered thinking.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Let's Talk
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Abs working on design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                5+ Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a UX designer with a passion for solving complex problems through simple, elegant solutions. 
                  My journey started in psychology, which gave me deep insights into human behavior and decision-making.
                </p>
                <p>
                  Over the past 5 years, I've worked with startups and Fortune 500 companies, always focusing on 
                  the human side of technology. I believe great design is invisible – it just works.
                </p>
                <p>
                  When I'm not designing, you'll find me experimenting with new coffee brewing methods, hiking local trails, 
                  or mentoring junior designers in the community.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Psychology Background</Badge>
                <Badge variant="secondary">Mentor</Badge>
                <Badge variant="secondary">Coffee Enthusiast</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Abs portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects where I've helped businesses create better user experiences.
            </p>
          </div>
          
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-cols-2' : ''}`}>
                  <div className={`aspect-video md:aspect-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm font-semibold text-primary">{project.impact}</div>
                        <Button variant="ghost" size="sm" className="group">
                          View Case Study
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Services */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I bring a diverse toolkit to every project, combining design expertise with technical knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-muted-foreground">{skill}</div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="space-y-4">
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground">
                Ready to create something amazing? I'd love to hear about your project.
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
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>hello@absdesign.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-5 h-5 text-primary" />
                      <span>linkedin.com/in/absdesigner</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="w-5 h-5 text-primary" />
                      <span>github.com/absdesigner</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Services</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>• UX/UI Design</div>
                    <div>• User Research</div>
                    <div>• Design Systems</div>
                    <div>• Prototyping</div>
                    <div>• Design Audits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Abs</div>
            <div className="text-muted-foreground">
              © 2024 Abs. Crafted with care and lots of coffee.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
