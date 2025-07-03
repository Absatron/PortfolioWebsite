
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Distributed Task Scheduler",
      description: "Built a high-performance distributed task scheduling system using microservices architecture with Redis and Docker. Handles 10k+ concurrent tasks with automatic failover and load balancing.",
      tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      github: "https://github.com/username/task-scheduler",
      live: "https://task-scheduler-demo.com"
    },
    {
      title: "Real-time Crypto Trading Bot",
      description: "Algorithmic trading bot with machine learning price prediction. Implements multiple trading strategies with real-time market data analysis and automated risk management.",
      tech: ["Python", "TensorFlow", "WebSockets", "PostgreSQL"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      github: "https://github.com/username/crypto-bot",
      live: "https://crypto-bot-dashboard.com"
    },
    {
      title: "Blockchain Voting System",
      description: "Decentralized voting platform ensuring transparency and immutability. Smart contracts handle vote casting and counting with zero-knowledge proofs for privacy.",
      tech: ["Solidity", "Web3.js", "React", "IPFS"],
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      github: "https://github.com/username/blockchain-voting",
      live: "https://blockchain-vote.com"
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
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" size="sm" className="group">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="group">
                        Live Demo
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
  );
};

export default Projects;
