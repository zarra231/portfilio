import React, { useState, useRef } from "react";

export function GlareCard({
  children,
  className = "",
  glareColor = "rgba(94, 234, 212, 0.25)",
  maxTilt = 8,
}) {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -maxTilt;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;

    setTransform({ rotateX, rotateY });
    setGlarePos({ x: percentX, y: percentY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {/* Dynamic Glare Reflection Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 80%)`,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}

export default GlareCard;
