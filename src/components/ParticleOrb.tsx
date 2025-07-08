import React from 'react';

interface ParticleOrbProps {
  className?: string;
}

const ParticleOrb: React.FC<ParticleOrbProps> = ({ className = '' }) => {
  // Generate 100 particles for a good balance of visual effect and performance
  const particles = Array.from({ length: 100 }, (_, i) => {
    // Generate random angles for 3D positioning
    const rotateZ = Math.random() * 360;
    const rotateY = Math.random() * 360;
    
    return {
      id: i,
      rotateZ,
      rotateY,
      delay: i * 0.02, // Staggered animation start
    };
  });

  return (
    <div className={`particle-orb-container ${className}`}>
      <div className="particle-orb-wrap">
        {particles.map((particle) => (
          <div 
            key={particle.id} 
            className="particle-3d"
            style={{
              '--rotate-z': `${particle.rotateZ}deg`,
              '--rotate-y': `${particle.rotateY}deg`,
              '--delay': `${particle.delay}s`,
              animationDelay: `${particle.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleOrb;
