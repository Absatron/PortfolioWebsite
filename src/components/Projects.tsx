
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Kalu Cuts - Booking System",
      description: "A comprehensive full-stack appointment booking platform with secure payment processing, real-time availability tracking, and admin dashboard. Features JWT authentication, Stripe payments, automated email confirmations, and PDF receipt generation.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      demo: "/videos/kalu-cuts-demo-web.mp4",
      github: "https://github.com/Absatron/BookingWebsite"
    },
    {
      title: "ML-Powered Trading Algorithm",
      description: "Advanced machine learning trading system combining neural network price prediction with reinforcement learning optimization. Features deep learning models, technical analysis integration, risk management, and QuantConnect platform integration for automated forex and CFD trading.",
      tech: ["Python", "TensorFlow", "PyTorch", "QuantConnect", "Reinforcement Learning", "Neural Networks"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      github: "https://github.com/Absatron/TradingAlgoQuantConnect"
    },
    {
      title: "Graph Theory Teacher Aid",
      description: "An interactive Visual Basic .NET educational tool for visualizing graph theory algorithms. Features step-by-step demonstrations of BFS, DFS, Dijkstra's algorithm, and TSP solutions with drag-and-drop graph creation, customizable animations, and multiple data representations.",
      tech: ["Visual Basic .NET", "Windows Forms", "XML", "Graph Theory", "Algorithm Visualization"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      github: "https://github.com/Absatron/GraphTheoryTeachingAid",
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills.
          </p>
        </div>
        
        <div className="grid gap-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                {/* Demo Video */}
                <div className="aspect-video relative overflow-hidden rounded-t-lg bg-gray-100">
                  <video
                    src={project.demo}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Project Details */}
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                     <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="group">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
