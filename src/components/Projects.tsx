
import React, { useEffect, useRef, useCallback } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GradientLayer {
  gradient: CanvasGradient;
  alpha: number;
  size: number;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  gradients?: GradientLayer[];
}

const Projects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  // Pre-create gradients to avoid recreation every frame
  const createParticleGradients = useCallback((ctx: CanvasRenderingContext2D, size: number): GradientLayer[] => {
    const gradients: GradientLayer[] = [];
    const glowLayers = [
      { size: size * 8, alpha: 0.03, color: '#6969b3' },
      { size: size * 5, alpha: 0.08, color: '#98c1d9' },
      { size: size * 3, alpha: 0.15, color: '#b8e0f5' },
      { size: size * 1.8, alpha: 0.3, color: '#ffffff' }
    ];
    
    glowLayers.forEach(layer => {
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, layer.size);
      gradient.addColorStop(0, layer.color);
      gradient.addColorStop(1, 'transparent');
      gradients.push({ gradient, alpha: layer.alpha, size: layer.size });
    });
    
    return gradients;
  }, []);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const section = canvas.parentElement;
      if (section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
        canvas.style.width = section.offsetWidth + 'px';
        canvas.style.height = section.offsetHeight + 'px';
      }
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', updateMousePosition);

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      
      // Ensure canvas is properly sized before initializing particles
      updateCanvasSize();
      
      // Reduce particle count for projects section
      const particleCount = window.innerWidth < 768 ? 50 : 100;

      for (let i = 0; i < particleCount; i++) {
        // Randomly distribute particles across the canvas
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        const particle: Particle = {
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          size: 1.5 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.5
        };

        // Pre-create gradients for this particle
        particle.gradients = createParticleGradients(ctx, particle.size);
        
        particles.current.push(particle);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.016; // ~60fps

      particles.current.forEach((particle) => {
        // Floating phase with mouse repulsion
        const mouse = mouseRef.current;
        
        // Calculate distance to mouse
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;
        
        if (distance < repelRadius && distance > 0) {
          // Calculate gentle repulsion force with smooth falloff
          const force = Math.pow((repelRadius - distance) / repelRadius, 3);
          const repelStrength = 0.8;
          
          // Apply smooth repulsion force
          particle.vx += (dx / distance) * force * repelStrength;
          particle.vy += (dy / distance) * force * repelStrength;
        }
        
        // Add very gentle floating motion using unique particle seeds
        const floatSeedX = particle.baseX * 0.001;
        const floatSeedY = particle.baseY * 0.001;
        const floatX = Math.sin(timeRef.current * 0.2 + floatSeedX) * 0.005;
        const floatY = Math.cos(timeRef.current * 0.15 + floatSeedY) * 0.004;
        
        // Apply tiny floating forces
        particle.vx += floatX;
        particle.vy += floatY;
        
        // Apply gentle damping to gradually slow particles
        particle.vx *= 0.997;
        particle.vy *= 0.997;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Screen wrapping instead of bouncing
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Draw particle with optimized rendering
        ctx.save();
        
        const baseAlpha = particle.opacity;
        
        // Use pre-created gradients if available
        if (particle.gradients) {
          // Draw glow layers with pre-created gradients
          particle.gradients.forEach(({ gradient, alpha, size }) => {
            ctx.globalAlpha = baseAlpha * alpha;
            ctx.translate(particle.x, particle.y);
            ctx.fillStyle = gradient;
            ctx.fillRect(-size, -size, size * 2, size * 2);
            ctx.translate(-particle.x, -particle.y);
          });
        }
        
        // Draw core
        ctx.globalAlpha = baseAlpha;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        
        // Simplified star rays
        ctx.globalAlpha = baseAlpha * 0.6;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.5;
        
        const rayLength = particle.size * 3;
        ctx.beginPath();
        // Vertical ray
        ctx.moveTo(particle.x, particle.y - rayLength);
        ctx.lineTo(particle.x, particle.y + rayLength);
        // Horizontal ray
        ctx.moveTo(particle.x - rayLength, particle.y);
        ctx.lineTo(particle.x + rayLength, particle.y);
        ctx.stroke();
        
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateMousePosition, createParticleGradients]);

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
      demo: "/videos/Trading-demo.mp4",
      github: "https://github.com/Absatron/TradingAlgoQuantConnect"
    },
    {
      title: "Graph Theory Teacher Aid",
      description: "An interactive Visual Basic .NET educational tool for visualizing graph theory algorithms. Features step-by-step demonstrations of BFS, DFS, Dijkstra's algorithm, and TSP solutions with drag-and-drop graph creation, customizable animations, and multiple data representations.",
      tech: ["Visual Basic .NET", "Windows Forms", "XML", "Graph Theory", "Algorithm Visualization"],
      demo: "/videos/TeachingAid-demo.mp4",
      github: "https://github.com/Absatron/GraphTheoryTeachingAid",
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
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
