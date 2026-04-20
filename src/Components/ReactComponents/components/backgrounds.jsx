// Neon Grid Background Component
export function NeonGridBackground({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-[#030712] ${className}`}>
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,229,255,0.28),transparent_60%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Rolling Window Background Component
export function RollingWindowBackground({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-[#050b1a] ${className}`}>
      {/* Sweeping bar */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.28) 35%, transparent 70%)',
          animation: 'rollX 5s linear infinite',
        }}
      />
      {/* Depth radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.25),transparent_40%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Canvas-based Backgrounds
import { useRef, useEffect } from "react";

// Hacker Grid Component (Canvas-based)
export function HackerGrid() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const PARTICLE_COUNT = 100;
    const CONNECTION_DISTANCE = 100;
    const MOUSE_RADIUS = 150;
    const COLOR_PARTICLE = "#39ff14";
    const COLOR_LINE = "rgba(57, 255, 20, 0.15)";

    let particles = [];
    const mouse = { x: null, y: null };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      particles = Array(PARTICLE_COUNT).fill().map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 1.5
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.hypot(dx, dy);
          if (distance < MOUSE_RADIUS) {
            p.x += dx * 0.01;
            p.y += dy * 0.01;
          }
        }

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = COLOR_PARTICLE;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < CONNECTION_DISTANCE) {
            ctx.strokeStyle = COLOR_LINE;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const canvasRect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - canvasRect.left;
      mouse.y = e.clientY - canvasRect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 bg-black"><canvas ref={canvasRef} className="absolute inset-0" style={{ display: 'block' }} /></div>;
}

// Void Pulse Component (Canvas-based)
export function VoidPulse() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const RIPPLE_COLOR = "rgba(59, 130, 246, 0.4)";
    const RIPPLE_SPEED = 4;
    const DECAY_RATE = 0.98;

    const ripples = [];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += RIPPLE_SPEED;
        ripple.opacity *= DECAY_RATE;
        
        ctx.strokeStyle = RIPPLE_COLOR;
        ctx.lineWidth = 2 * ripple.opacity;
        ctx.beginPath();
        ctx.ellipse(ripple.x, ripple.y, ripple.radius, ripple.radius * 0.5, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        if (ripple.opacity < 0.01) {
          ripples.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleClick = (e) => {
      const canvasRect = canvas.getBoundingClientRect();
      ripples.push({ x: e.clientX - canvasRect.left, y: e.clientY - canvasRect.top, radius: 1, opacity: 1 });
    };

    resizeCanvas();
    animate();

    canvas.addEventListener("click", handleClick);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 bg-black"><canvas ref={canvasRef} className="absolute inset-0" style={{ display: 'block' }} /></div>;
}

// Glitch Noise Component (Canvas-based)
export function GlitchNoise() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const BLOCK_SIZE = 5;
    const IDLE_SPEED = 0.1;
    const INTERACTION_SPEED = 0.9;
    const INTENSITY_RADIUS = 200;

    const mouse = { x: null, y: null };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const generateNoiseBlock = (x, y, speed) => {
      if (Math.random() < speed) {
        ctx.fillStyle = Math.random() < 0.95 ? "#111" : "#fff";
        ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += BLOCK_SIZE) {
        for (let y = 0; y < canvas.height; y += BLOCK_SIZE) {
          let speed = IDLE_SPEED;

          if (mouse.x && mouse.y) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distance = Math.hypot(dx, dy);

            if (distance < INTENSITY_RADIUS) {
              speed = INTERACTION_SPEED * (1 - distance / INTENSITY_RADIUS);
            }
          }

          generateNoiseBlock(x, y, speed);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const canvasRect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - canvasRect.left;
      mouse.y = e.clientY - canvasRect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 bg-black"><canvas ref={canvasRef} className="absolute inset-0" style={{ display: 'block' }} /></div>;
}
