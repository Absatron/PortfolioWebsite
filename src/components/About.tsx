import React from 'react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const handshakeSvg = encodeURIComponent(`
    <svg width="800" height="400" viewBox="0 -8 72 72" xmlns="http://www.w3.org/2000/svg">
      <path d="M64,12.78v17s-3.63.71-4.38.81-3.08.85-4.78-.78C52.22,27.25,42.93,18,42.93,18a3.54,3.54,0,0,0-4.18-.21c-2.36,1.24-5.87,3.07-7.33,3.78a3.37,3.37,0,0,1-5.06-2.64,3.44,3.44,0,0,1,2.1-3c3.33-2,10.36-6,13.29-7.52,1.78-1,3.06-1,5.51,1C50.27,12,53,14.27,53,14.27a2.75,2.75,0,0,0,2.26.43C58.63,14,64,12.78,64,12.78ZM27,41.5a3,3,0,0,0-3.55-4.09,3.07,3.07,0,0,0-.64-3,3.13,3.13,0,0,0-3-.75,3.07,3.07,0,0,0-.65-3,3.38,3.38,0,0,0-4.72.13c-1.38,1.32-2.27,3.72-1,5.14s2.64.55,3.72.3c-.3,1.07-1.2,2.07-.09,3.47s2.64.55,3.72.3c-.3,1.07-1.16,2.16-.1,3.46s2.84.61,4,.25c-.45,1.15-1.41,2.39-.18,3.79s4.08.75,5.47-.58a3.32,3.32,0,0,0,.3-4.68A3.18,3.18,0,0,0,27,41.5Zm25.35-8.82L41.62,22a3.53,3.53,0,0,0-3.77-.68c-1.5.66-3.43,1.56-4.89,2.24a8.15,8.15,0,0,1-3.29,1.1,5.59,5.59,0,0,1-3-10.34C29,12.73,34.09,10,34.09,10a6.46,6.46,0,0,0-5-2C25.67,8,18.51,12.7,18.51,12.7a5.61,5.61,0,0,1-4.93.13L8,10.89v19.4s1.59.46,3,1a6.33,6.33,0,0,1,1.56-2.47,6.17,6.17,0,0,1,8.48-.06,5.4,5.4,0,0,1,1.34,2.37,5.49,5.49,0,0,1,2.29,1.4A5.4,5.4,0,0,1,26,34.94a5.47,5.47,0,0,1,3.71,4,5.38,5.38,0,0,1,2.39,1.43,5.65,5.65,0,0,1,1.48,4.89a0,0,0,0,1,0,0s.8.9,1.29,1.39a2.46,2.46,0,0,0,3.48-3.48s2,2.48,4.28,1c2-1.4,1.69-3.06.74-4a3.19,3.19,0,0,0,4.77.13,2.45,2.45,0,0,0,.13-3.3s1.33,1.81,4,.12c1.89-1.6,1-3.43,0-4.39Z" 
            fill="none" 
            stroke="rgb(168 85 247)" 
            stroke-width="0.8" 
            opacity="0.12"/>
    </svg>
  `);

  return (
    <section 
      id="about" 
      className="py-20 bg-card/30"
      style={{
        backgroundImage: `url("data:image/svg+xml,${handshakeSvg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {["About", "Me"].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </h2>
          </div>
          <div className="space-y-8 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              {["I", "am", "a", "software", "engineer", "with", "a", "passion", "for", "tackling", "complex", "problems", "head-on", "and", "a", "relentless", "drive", "to", "expand", "my", "toolkit—whether", "that", "means", "diving", "into", "the", "latest", "AI", "research,", "mastering", "a", "new", "framework,", "or", "exploring", "the", "impacts", "of", "technology", "on", "our", "health,", "wealth", "and", "relationships."].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
            <p className="leading-relaxed">
              {["By", "asking", "incisive", "questions", "and", "slicing", "problems", "into", "clear,", "actionable", "steps,", "I", "create", "smart,", "streamlined", "solutions", "that", "drive", "my", "personal", "development", "and,", "with", "the", "right", "perspective,", "uplift", "the", "wider", "community."].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
            <p className="leading-relaxed">
              {["Time", "is", "my", "most", "precious", "resource,", "so", "I", "leverage", "productivity", "hacks", "and", "continuous", "learning", "to", "make", "every", "minute", "count—balancing", "hands-on", "development", "with", "deep", "study", "to", "stay", "ahead", "of", "the", "curve."].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
            <p className="leading-relaxed">
              {["When", "I", "am", "not", "developing,", "you'll", "find", "me", "exploring", "thought-provoking", "insights", "from", "podcasts", "and", "books,", "mentoring", "others", "or", "in", "the", "gym."].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <Badge variant="secondary">Problem Solver</Badge>
            <Badge variant="secondary">Critcal Thinker</Badge>
            <Badge variant="secondary">Mentor</Badge>
            <Badge variant="secondary">Student of knowledge</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
