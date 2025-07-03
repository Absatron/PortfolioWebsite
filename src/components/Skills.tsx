
import React from 'react';
import { Terminal, Code, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Skills = () => {
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

  return (
    <section id="skills" className="py-20 bg-card/30 cosmic-section relative overflow-hidden">
      {/* Starfield Background */}
      <div className="starfield-container">
        <div className="starfield starfield-layer-2 opacity-20"></div>
        <div className="starfield starfield-layer-1 opacity-15"></div>
      </div>

      {/* Nebulae Effects */}
      <div className="nebulae-container">
        <div className="nebula nebula-2 opacity-05"></div>
        <div className="nebula nebula-1 opacity-05"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 floating-text">
            <span className="cosmic-word hover-glow inline-block">Skills</span>{' '}
            <span className="cosmic-word hover-glow inline-block">&</span>{' '}
            <span className="cosmic-word hover-glow inline-block neon-accent pulsating">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto floating-text">
            <span className="cosmic-word hover-glow inline-block">My</span>{' '}
            <span className="cosmic-word hover-glow inline-block neon-accent pulsating">technical</span>{' '}
            <span className="cosmic-word hover-glow inline-block">arsenal</span>{' '}
            <span className="cosmic-word hover-glow inline-block">for</span>{' '}
            <span className="cosmic-word hover-glow inline-block">building</span>{' '}
            <span className="cosmic-word hover-glow inline-block neon-accent pulsating">modern</span>{' '}
            <span className="cosmic-word hover-glow inline-block">applications.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:shadow-primary/20 group cosmic-card floating-text">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary group-hover:scale-110 transition-transform neon-accent pulsating">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold cosmic-word hover-glow neon-accent">{skillGroup.category}</h3>
              </div>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-muted-foreground cosmic-word hover-glow cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
