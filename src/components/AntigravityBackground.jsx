import React, { useEffect, useRef } from 'react';

// Google Antigravity Full Spectrum Palette:
// Google Blue -> Indigo -> Violet -> Purple -> Fuchsia -> Deep Pink -> Coral Rose -> Cyan -> Blue
const SPECTRUM_COLORS = [
  '#4285F4', // Google Blue
  '#1A73E8', // Royal Blue
  '#2563EB', // Vibrant Blue
  '#3B82F6', // Cobalt
  '#6366F1', // Indigo
  '#7C3AED', // Deep Purple
  '#8B5CF6', // Violet
  '#A855F7', // Bright Purple
  '#C026D3', // Fuchsia
  '#DB2777', // Deep Rose
  '#EC4899', // Pink
  '#F43F5E', // Coral Rose
  '#EA4335', // Google Red/Coral
  '#06B6D4', // Teal Cyan
  '#0284C7', // Sky Blue
];

export default function AntigravityBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let width = 0;
    let height = 0;

    // Mouse state with smooth filtering
    const mouse = {
      x: -3000,
      y: -3000,
      targetX: -3000,
      targetY: -3000,
      vx: 0,
      vy: 0,
      isActive: false,
    };

    let particles = [];

    const updateDimensions = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    const handleResize = () => {
      updateDimensions();
      initParticles();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      mouse.vx = (newX - mouse.targetX) * 0.25;
      mouse.vy = (newY - mouse.targetY) * 0.25;
      mouse.targetX = newX;
      mouse.targetY = newY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    function getColorForAngle(angle) {
      let norm = (angle % (Math.PI * 2)) / (Math.PI * 2);
      if (norm < 0) norm += 1;
      const index = Math.floor(norm * SPECTRUM_COLORS.length) % SPECTRUM_COLORS.length;
      return SPECTRUM_COLORS[index];
    }

    function initParticles() {
      if (!width || !height) return;
      particles = [];

      // Bounded spherical radius centered on hero
      const sphereRadius = Math.min(width * 0.44, height * 0.52, 460);
      const innerRadius = 80;
      const particleCount = Math.min(Math.max(Math.floor((sphereRadius * sphereRadius) / 680), 200), 340);
      const goldenAngle = 2.399963;

      for (let i = 0; i < particleCount; i++) {
        // Distribute within spherical disc with soft boundaries
        const indexRatio = (i + 1) / particleCount;
        const rNorm = Math.pow(indexRatio, 0.62);
        const radius = innerRadius + rNorm * (sphereRadius - innerRadius);

        const baseAngle = i * goldenAngle + (Math.random() - 0.5) * 0.3;
        const color = getColorForAngle(baseAngle);

        const length = 2.5 + Math.random() * 4.0; // 2.5px to 6.5px (compact subtle sprinkles)
        const thickness = 1.6 + Math.random() * 1.2; // 1.6px to 2.8px

        // Soft radial spherical fade so the sphere dissolves gracefully at the edges
        const edgeFade = 1 - Math.pow(radius / (sphereRadius * 1.05), 3);
        const baseAlpha = Math.max(0.18, (0.35 + Math.random() * 0.5) * Math.max(0.1, edgeFade));

        const driftSpeed = 0.0006 + Math.random() * 0.0008;
        const pulsePhase = Math.random() * Math.PI * 2;
        const pulseSpeed = 0.012 + Math.random() * 0.018;
        const swirlCurve = 0.28 + Math.random() * 0.12;

        particles.push({
          baseAngle,
          currentAngle: baseAngle,
          baseRadius: radius,
          currentRadius: radius,
          sphereRadius,
          driftSpeed,
          pulsePhase,
          pulseSpeed,
          swirlCurve,
          color,
          length,
          thickness,
          baseAlpha,
          alpha: baseAlpha,
          x: width * 0.5,
          y: height * 0.48,
          vx: 0,
          vy: 0,
          currentFacingAngle: baseAngle,
          targetFacingAngle: baseAngle,
          friction: 0.88,
          spring: 0.038,
        });
      }
    }

    updateDimensions();
    initParticles();

    // Render loop
    let time = 0;
    const render = () => {
      time += 0.014;
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.48;

      // Smooth mouse interpolation
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
        mouse.vx *= 0.85;
        mouse.vy *= 0.85;
      } else {
        mouse.x += (-3000 - mouse.x) * 0.05;
        mouse.y += (-3000 - mouse.y) * 0.05;
        mouse.vx = 0;
        mouse.vy = 0;
      }

      const cursorInfluenceRadius = 240;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Spherical Orbit Drift & Breathing
        p.currentAngle += p.driftSpeed;
        p.pulsePhase += p.pulseSpeed;

        const breathing = Math.sin(p.pulsePhase) * 6;
        const activeRadius = p.baseRadius + breathing;

        // Spherical logarithmic spiral resting position
        const spiralOffset = (activeRadius / 380) * p.swirlCurve;
        const totalAngle = p.currentAngle + spiralOffset;

        const restingX = centerX + Math.cos(totalAngle) * activeRadius;
        const restingY = centerY + Math.sin(totalAngle) * activeRadius;

        // Default resting flow direction tangent to the spherical swirl
        let desiredFacingAngle = totalAngle + Math.PI * 0.04;

        // 2. Glitch-Free Cursor Interaction (Bell-curve physics)
        if (mouse.isActive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cursorInfluenceRadius && dist > 2) {
            const normDist = dist / cursorInfluenceRadius; // 0 to 1
            // Smooth bell-shaped curve: 0 at center (no clumping), peak at mid-distance, 0 at edge
            const bellForce = Math.sin(normDist * Math.PI) * 2.8;

            const dirX = dx / (dist + 35);
            const dirY = dy / (dist + 35);

            // Gentle gravitational pull + velocity drag
            p.vx += dirX * bellForce + mouse.vx * 0.04 * (1 - normDist);
            p.vy += dirY * bellForce + mouse.vy * 0.04 * (1 - normDist);

            // Smooth directional blending (avoids atan2 singularities and flips)
            const cursorInfluence = 1 - normDist;
            const mouseAngle = Math.atan2(dy, dx);
            desiredFacingAngle = desiredFacingAngle * (1 - cursorInfluence * 0.6) + mouseAngle * (cursorInfluence * 0.6);
          }
        }

        // 3. Elastic Spring Physics to resting streamline
        const springForceX = (restingX - p.x) * p.spring;
        const springForceY = (restingY - p.y) * p.spring;

        p.vx += springForceX;
        p.vy += springForceY;

        p.vx *= p.friction;
        p.vy *= p.friction;

        p.x += p.vx;
        p.y += p.vy;

        // 4. Stable Shortest-Arc Angle Rotation
        let angleDiff = desiredFacingAngle - p.currentFacingAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        p.currentFacingAngle += angleDiff * 0.12;

        // 5. Draw the Dash / Pill
        const halfLen = p.length / 2;
        const cosA = Math.cos(p.currentFacingAngle);
        const sinA = Math.sin(p.currentFacingAngle);

        const x1 = p.x - cosA * halfLen;
        const y1 = p.y - sinA * halfLen;
        const x2 = p.x + cosA * halfLen;
        const y2 = p.y + sinA * halfLen;

        ctx.save();
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.lineWidth = p.thickness;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
