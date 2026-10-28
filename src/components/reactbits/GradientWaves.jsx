import React, { useEffect, useRef } from "react";

export function GradientWaves({
  colors = ["#4F46E5", "#8B5CF6", "#EC4899", "#0F172A"],
  speed = 0.002,
  blur = "blur-3xl",
  opacity = 0.55
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Orbs configuration for soft organic wave movement
    const orbs = [
      { x: width * 0.25, y: height * 0.2, r: Math.max(width, height) * 0.35, color: colors[0], vx: 0.7, vy: 0.5, t: 0 },
      { x: width * 0.75, y: height * 0.35, r: Math.max(width, height) * 0.4, color: colors[1], vx: -0.5, vy: 0.6, t: 2 },
      { x: width * 0.45, y: height * 0.75, r: Math.max(width, height) * 0.38, color: colors[2], vx: 0.6, vy: -0.4, t: 4 },
      { x: width * 0.85, y: height * 0.85, r: Math.max(width, height) * 0.32, color: colors[0], vx: -0.4, vy: -0.5, t: 6 }
    ];

    let time = 0;

    const render = () => {
      time += speed;
      ctx.clearRect(0, 0, width, height);

      // Deep dark background
      ctx.fillStyle = colors[3] || "#0F172A";
      ctx.fillRect(0, 0, width, height);

      // Render each soft glowing fluid orb
      orbs.forEach((orb) => {
        const ox = orb.x + Math.sin(time + orb.t) * 120;
        const oy = orb.y + Math.cos(time * 0.8 + orb.t) * 90;

        const gradient = ctx.createRadialGradient(ox, oy, 10, ox, oy, orb.r);
        gradient.addColorStop(0, orb.color + "99"); // ~60% opacity
        gradient.addColorStop(0.5, orb.color + "33"); // ~20% opacity
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, speed]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className={`w-full h-full filter ${blur}`}
        style={{ opacity }}
      />
      {/* Subtle cyber grid overlay over the gradient */}
      <div className="absolute inset-0 cyber-grid-pattern opacity-40 mix-blend-overlay" />
      {/* Vignette edge darkening */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
    </div>
  );
}

export default GradientWaves;
