import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  phase: 'exploding' | 'floating';
  explosionTarget: { x: number; y: number };
  gradients?: GradientLayer[];
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const lastFrameTime = useRef(0);
  const isVisible = useRef(true);

  // Performance monitoring
  const performanceConfig = useMemo(() => ({
    maxParticles: window.innerWidth < 768 ? 50 : window.innerWidth < 1200 ? 100 : 150,
    targetFPS: 60,
    adaptiveQuality: true,
    reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }), []);

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
      const rect = canvas.getBoundingClientRect();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', updateMousePosition);

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Optimize particle count based on device capabilities
      const particleCount = window.innerWidth < 768 ? 50 : window.innerWidth < 1200 ? 100 : 150;

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        
        // Calculate distance to reach any corner of the screen
        const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;
        const distance = 200 + Math.random() * maxDistance;
        
        let targetX = centerX + Math.cos(angle) * distance;
        let targetY = centerY + Math.sin(angle) * distance;
        
        // Allow particles much closer to edges
        targetX = Math.max(20, Math.min(canvas.width - 20, targetX));
        targetY = Math.max(20, Math.min(canvas.height - 20, targetY));

        const particle: Particle = {
          x: centerX,
          y: centerY,
          baseX: targetX,
          baseY: targetY,
          vx: Math.cos(angle) * (4 + Math.random() * 6), // Increased initial velocity
          vy: Math.sin(angle) * (4 + Math.random() * 6),
          size: 1.5 + Math.random() * 4, // More size variation for different star sizes
          opacity: 0,
          phase: 'exploding',
          explosionTarget: { x: targetX, y: targetY }
        };

        // Pre-create gradients for this particle to avoid recreation every frame
        particle.gradients = createParticleGradients(ctx, particle.size);
        
        particles.current.push(particle);
      }
    };

    // Animation loop with performance monitoring
    const animate = (currentTime: number) => {
      if (!isVisible.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // FPS throttling
      if (currentTime - lastFrameTime.current < 1000 / performanceConfig.targetFPS) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.016; // ~60fps

      particles.current.forEach((particle) => {
        if (particle.phase === 'exploding') {
          // Explosion phase - move towards target
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.99; // Decelerate
          particle.vy *= 0.99;
          particle.opacity = Math.min(0.8, particle.opacity + 0.03);

          // Check if reached target or time elapsed
          const distToTarget = Math.sqrt(
            Math.pow(particle.x - particle.explosionTarget.x, 2) + 
            Math.pow(particle.y - particle.explosionTarget.y, 2)
          );

          if (distToTarget < 30 || timeRef.current > 5) {
            particle.phase = 'floating';
            particle.baseX = particle.x;
            particle.baseY = particle.y;
            particle.vx = 0;
            particle.vy = 0;
          }
        } else {
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
            const repelStrength = 0.8; // Increased from 0.3 to make it more noticeable
            
            // Apply smooth repulsion force
            particle.vx += (dx / distance) * force * repelStrength;
            particle.vy += (dy / distance) * force * repelStrength;
          }
          
          // Add very gentle floating motion using unique particle seeds
          const floatSeedX = particle.baseX * 0.001;
          const floatSeedY = particle.baseY * 0.001;
          const floatX = Math.sin(timeRef.current * 0.2 + floatSeedX) * 0.005; // Reduced further
          const floatY = Math.cos(timeRef.current * 0.15 + floatSeedY) * 0.004; // Reduced further
          
          // Apply tiny floating forces
          particle.vx += floatX;
          particle.vy += floatY;
          
          // Apply gentle damping to gradually slow particles
          particle.vx *= 0.997; // Reduced damping to allow mouse interaction to be more visible
          particle.vy *= 0.997;
          
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Screen wrapping instead of bouncing
          if (particle.x < -10) particle.x = canvas.width + 10;
          if (particle.x > canvas.width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = canvas.height + 10;
          if (particle.y > canvas.height + 10) particle.y = -10;
        }

        // Draw particle with optimized rendering
        ctx.save();
        
        const baseAlpha = particle.opacity;
        
        // Use pre-created gradients if available, otherwise create optimized glow layers
        if (particle.gradients) {
          // Draw glow layers with pre-created gradients
          particle.gradients.forEach(({ gradient, alpha, size }) => {
            ctx.globalAlpha = baseAlpha * alpha;
            ctx.translate(particle.x, particle.y);
            ctx.fillStyle = gradient;
            ctx.fillRect(-size, -size, size * 2, size * 2);
            ctx.translate(-particle.x, -particle.y);
          });
        } else {
          // Fallback: simplified glow layers without expensive gradient recreation
          const glowLayers = [
            { size: particle.size * 6, alpha: 0.05, color: '#6969b3' },
            { size: particle.size * 3, alpha: 0.15, color: '#98c1d9' },
            { size: particle.size * 1.5, alpha: 0.3, color: '#b8e0f5' }
          ];
          
          glowLayers.forEach(layer => {
            ctx.globalAlpha = baseAlpha * layer.alpha;
            ctx.fillStyle = layer.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, layer.size, 0, Math.PI * 2);
            ctx.fill();
          });
        }
        
        // Draw core without expensive shadow effects
        ctx.globalAlpha = baseAlpha;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        
        // Simplified star rays without shadow
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
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [updateMousePosition, createParticleGradients, performanceConfig.targetFPS]);

  // Add intersection observer to pause animation when component is not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('[data-hero-section]');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="relative py-20 md:py-32 min-h-screen flex items-center justify-center bg-black overflow-hidden" data-hero-section>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight floating-text glowing-text">
              Hello, I'm Abdullah
            </h1>
            <div className="text-2xl md:text-3xl font-mono text-primary floating-text-delayed">
              AI / Full-Stack Software Engineer
            </div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-muted-foreground floating-text opacity-90">
              Where complexity meets clarity: I ask the right questions and engineer innovative solutions that actually work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
