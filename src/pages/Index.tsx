
import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Download, ExternalLink, Terminal, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const projects = [
    {
      title: "Distributed Task Scheduler",
      description: "Built a high-performance distributed task scheduling system using microservices architecture with Redis and Docker. Handles 10k+ concurrent tasks with automatic failover and load balancing.",
      tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual demo
      github: "https://github.com/username/task-scheduler",
      live: "https://task-scheduler-demo.com"
    },
    {
      title: "Real-time Crypto Trading Bot",
      description: "Algorithmic trading bot with machine learning price prediction. Implements multiple trading strategies with real-time market data analysis and automated risk management.",
      tech: ["Python", "TensorFlow", "WebSockets", "PostgreSQL"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual demo
      github: "https://github.com/username/crypto-bot",
      live: "https://crypto-bot-dashboard.com"
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting platform ensuring transparency and immutability. Smart contracts handle vote casting and counting with zero-knowledge proofs for privacy.",
      tech: ["Solidity", "Web3.js", "React", "IPFS"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual demo
      github: "https://github.com/username/blockchain-voting",
      live: "https://blockchain-vote.com"
    }
  ];

  const skills = [
    { 
      category: "Languages", 
      items: ["JavaScript/TypeScript", "Python", "Go", "Rust", "Solidity", "C++"],
      icon: <Code className="w-6 h-6" />
    },
    { 
      category: "Backend & Cloud", 
      items: ["Node.js", "Docker", "Kubernetes", "AWS", "GCP", "Microservices"],
      icon: <Database className="w-6 h-6" />
    },
    { 
      category: "Frontend & Mobile", 
      items: ["React", "Next.js", "React Native", "Vue.js", "WebGL", "PWA"],
      icon: <Terminal className="w-6 h-6" />
    },
    { 
      category: "Data & AI", 
      items: ["TensorFlow", "PyTorch", "Redis", "PostgreSQL", "MongoDB", "GraphQL"],
      icon: <Database className="w-6 h-6" />
    }
  ];

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary hover-zoom cursor-pointer">
              {'<Dev/>'}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover-zoom transition-colors">About</a>
              <a href="#projects" className="hover-zoom transition-colors">Projects</a>
              <a href="#skills" className="hover-zoom transition-colors">Skills</a>
              <a href="#contact" className="hover-zoom transition-colors">Contact</a>
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 hover-zoom">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - No Pictures */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="hover-zoom inline-block">Hello,</span>{' '}
                <span className="hover-zoom inline-block">I'm</span>{' '}
                <span className="text-primary hover-zoom inline-block glitch" data-text="Alex">
                  Alex
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-muted-foreground font-mono">
                <span className="hover-zoom inline-block">Full-Stack</span>{' '}
                <span className="hover-zoom inline-block text-primary">Software</span>{' '}
                <span className="hover-zoom inline-block">Engineer</span>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <span className="hover-zoom inline-block">I</span>{' '}
                <span className="hover-zoom inline-block">build</span>{' '}
                <span className="hover-zoom inline-block text-primary">scalable</span>{' '}
                <span className="hover-zoom inline-block">systems,</span>{' '}
                <span className="hover-zoom inline-block">solve</span>{' '}
                <span className="hover-zoom inline-block text-primary">complex</span>{' '}
                <span className="hover-zoom inline-block">problems,</span>{' '}
                <span className="hover-zoom inline-block">and</span>{' '}
                <span className="hover-zoom inline-block">create</span>{' '}
                <span className="hover-zoom inline-block text-primary">innovative</span>{' '}
                <span className="hover-zoom inline-block">solutions</span>{' '}
                <span className="hover-zoom inline-block">that</span>{' '}
                <span className="hover-zoom inline-block">make</span>{' '}
                <span className="hover-zoom inline-block">a</span>{' '}
                <span className="hover-zoom inline-block text-primary">difference.</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group hover-zoom">
                <span className="hover-zoom">View</span>{' '}
                <span className="hover-zoom">My</span>{' '}
                <span className="hover-zoom">Work</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover-zoom">
                <span className="hover-zoom">Let's</span>{' '}
                <span className="hover-zoom">Connect</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - No Pictures */}
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

      {/* Featured Projects - With Demo Videos */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="hover-zoom inline-block">Featured</span>{' '}
              <span className="hover-zoom inline-block text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <span className="hover-zoom inline-block">Here</span>{' '}
              <span className="hover-zoom inline-block">are</span>{' '}
              <span className="hover-zoom inline-block">some</span>{' '}
              <span className="hover-zoom inline-block">of</span>{' '}
              <span className="hover-zoom inline-block">my</span>{' '}
              <span className="hover-zoom inline-block text-primary">recent</span>{' '}
              <span className="hover-zoom inline-block">projects</span>{' '}
              <span className="hover-zoom inline-block">that</span>{' '}
              <span className="hover-zoom inline-block">showcase</span>{' '}
              <span className="hover-zoom inline-block">my</span>{' '}
              <span className="hover-zoom inline-block text-primary">technical</span>{' '}
              <span className="hover-zoom inline-block">skills.</span>
            </p>
          </div>
          
          <div className="grid gap-12 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:shadow-primary/20">
                <div className="space-y-6">
                  {/* Demo Video */}
                  <div className="aspect-video relative">
                    <iframe
                      src={project.demo}
                      title={`${project.title} Demo`}
                      className="w-full h-full rounded-t-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Project Details */}
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold hover-zoom text-primary">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="hover-zoom">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button variant="outline" size="sm" className="group hover-zoom">
                          <Github className="w-4 h-4 mr-2" />
                          <span className="hover-zoom">Code</span>
                        </Button>
                        <Button size="sm" className="group hover-zoom">
                          <span className="hover-zoom">Live</span>{' '}
                          <span className="hover-zoom">Demo</span>
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

      {/* Skills & Technologies */}
      <section id="skills" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="hover-zoom inline-block">Skills</span>{' '}
              <span className="hover-zoom inline-block">&</span>{' '}
              <span className="hover-zoom inline-block text-primary">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              <span className="hover-zoom inline-block">My</span>{' '}
              <span className="hover-zoom inline-block text-primary">technical</span>{' '}
              <span className="hover-zoom inline-block">arsenal</span>{' '}
              <span className="hover-zoom inline-block">for</span>{' '}
              <span className="hover-zoom inline-block">building</span>{' '}
              <span className="hover-zoom inline-block text-primary">modern</span>{' '}
              <span className="hover-zoom inline-block">applications.</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold hover-zoom">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-muted-foreground hover-zoom cursor-default">
                      {skill}
                    </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="hover-zoom inline-block">What</span>{' '}
              <span className="hover-zoom inline-block text-primary">People</span>{' '}
              <span className="hover-zoom inline-block">Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:shadow-primary/20">
                <div className="space-y-4">
                  <p className="text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-l-2 border-primary pl-4">
                    <div className="font-semibold hover-zoom">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground hover-zoom">{testimonial.role}</div>
                    <div className="text-sm text-primary hover-zoom">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - No Repeated Services */}
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

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0 text-primary hover-zoom">
              {'<Dev/>'}
            </div>
            <div className="text-muted-foreground hover-zoom">
              © 2024 Alex. Built with passion and lots of coffee.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
