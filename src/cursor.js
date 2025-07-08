// Custom star cursor with trails functionality
document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-star';
  document.body.appendChild(cursor);

  let trails = [];
  let mouseX = 0;
  let mouseY = 0;
  let animationId;
  let lastTrailTime = 0;
  const trailInterval = 16; // ~60fps for trail creation

  // Throttled trail creation for better performance
  function createTrail(x, y, timestamp) {
    if (timestamp - lastTrailTime < trailInterval) return;
    lastTrailTime = timestamp;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    
    document.body.appendChild(trail);
    trails.push(trail);

    // Limit max trails for performance
    if (trails.length > 15) {
      const oldTrail = trails.shift();
      if (oldTrail.parentNode) {
        oldTrail.parentNode.removeChild(oldTrail);
      }
    }

    // Remove trail after animation
    setTimeout(() => {
      if (trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
      trails = trails.filter(t => t !== trail);
    }, 600);
  }

  // Optimized mouse move handler
  function updateCursor(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    
    // Use requestAnimationFrame for smooth trail creation
    if (!animationId) {
      animationId = requestAnimationFrame((timestamp) => {
        createTrail(mouseX, mouseY, timestamp);
        animationId = null;
      });
    }
  }

  // Use optimized mouse move handler
  document.addEventListener('mousemove', updateCursor, { passive: true });

  // Handle hover states efficiently
  document.addEventListener('mouseover', (e) => {
    if (e.target.matches('a, button, [role="button"], input, textarea, select')) {
      cursor.classList.add('hover');
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    if (e.target.matches('a, button, [role="button"], input, textarea, select')) {
      cursor.classList.remove('hover');
    }
  }, { passive: true });

  // Handle visibility changes
  document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
  
  // Cleanup on visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && trails.length > 0) {
      trails.forEach(trail => trail.remove());
      trails = [];
    }
  });
});
