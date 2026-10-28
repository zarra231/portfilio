import React, { useState, useRef, useEffect } from "react";
import heroImg from "../../assets/hero.png";
import { Sparkles, ShieldCheck, QrCode, Terminal } from "lucide-react";

export function Lanyard({
  name = "Zahra Nur Amalia",
  role = "Frontend Developer & UI/UX",
  idNumber = "ZN-2026-DEV",
  image = heroImg
}) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  // Physics state
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const physicsRef = useRef({
    vx: 0,
    vy: 0,
    vz: 0,
    targetX: 0,
    targetY: 0,
    targetRotX: 0,
    targetRotY: 0,
    targetRotZ: 0,
    currentX: 0,
    currentY: 0,
    currentRotX: 0,
    currentRotY: 0,
    currentRotZ: 0,
    time: 0
  });

  const dragStartRef = useRef({ startX: 0, startY: 0, originX: 0, originY: 0 });

  // Handle Dragging
  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    dragStartRef.current = {
      startX: clientX,
      startY: clientY,
      originX: physicsRef.current.currentX,
      originY: physicsRef.current.currentY
    };
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      if (isDragging) {
        const dx = (clientX - dragStartRef.current.startX) * 0.7;
        const dy = (clientY - dragStartRef.current.startY) * 0.7;
        physicsRef.current.targetX = Math.max(-120, Math.min(120, dragStartRef.current.originX + dx));
        physicsRef.current.targetY = Math.max(-40, Math.min(80, dragStartRef.current.originY + dy));
        
        // Tilt according to drag
        physicsRef.current.targetRotZ = (physicsRef.current.targetX / 100) * 25;
        physicsRef.current.targetRotY = (physicsRef.current.targetX / 100) * 30;
        physicsRef.current.targetRotX = -(physicsRef.current.targetY / 80) * 20;
      } else if (containerRef.current) {
        // Hover parallax effect when not dragging
        const rect = containerRef.current.getBoundingClientRect();
        if (
          clientX >= rect.left - 50 &&
          clientX <= rect.right + 50 &&
          clientY >= rect.top - 50 &&
          clientY <= rect.bottom + 50
        ) {
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const nx = (clientX - cx) / (rect.width / 2);
          const ny = (clientY - cy) / (rect.height / 2);

          physicsRef.current.targetRotY = nx * 18;
          physicsRef.current.targetRotX = -ny * 14;
          physicsRef.current.targetRotZ = nx * 8;
          physicsRef.current.targetX = nx * 20;
        } else {
          physicsRef.current.targetRotX = 0;
          physicsRef.current.targetRotY = 0;
          physicsRef.current.targetRotZ = 0;
          physicsRef.current.targetX = 0;
          physicsRef.current.targetY = 0;
        }
      }
    };

    const handlePointerUp = () => {
      if (isDragging) {
        setIsDragging(false);
        physicsRef.current.targetX = 0;
        physicsRef.current.targetY = 0;
        physicsRef.current.targetRotX = 0;
        physicsRef.current.targetRotY = 0;
        physicsRef.current.targetRotZ = 0;
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging]);

  // Animation Loop with Spring Inertia and Gentle Idle Sway
  useEffect(() => {
    let animId;
    const p = physicsRef.current;

    const animate = () => {
      p.time += 0.025;

      // Gentle natural idle swing when not dragged
      const idleSwingZ = Math.sin(p.time) * 3;
      const idleSwingX = Math.cos(p.time * 0.7) * 4;
      const idleRotY = Math.sin(p.time * 0.9) * 4;

      // Spring damping physics
      const spring = isDragging ? 0.22 : 0.07;
      const friction = 0.86;

      p.vx = (p.vx + (p.targetX + (isDragging ? 0 : idleSwingX) - p.currentX) * spring) * friction;
      p.vy = (p.vy + (p.targetY - p.currentY) * spring) * friction;

      p.currentX += p.vx;
      p.currentY += p.vy;

      p.currentRotX += ((p.targetRotX - p.currentRotX) * spring);
      p.currentRotY += ((p.targetRotY + (isDragging ? 0 : idleRotY) - p.currentRotY) * spring);
      p.currentRotZ += ((p.targetRotZ + (isDragging ? 0 : idleSwingZ) - p.currentRotZ) * spring);

      setPos({ x: p.currentX, y: p.currentY });
      setRotation({
        x: p.currentRotX,
        y: p.currentRotY,
        z: p.currentRotZ
      });

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-start w-full max-w-[340px] mx-auto select-none touch-none py-4"
      style={{ perspective: "1000px" }}
    >
      {/* Lanyard Top Attachment / Anchor Clip */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Metal ring anchor */}
        <div className="w-9 h-3.5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-500 rounded-full shadow-md border border-white/40" />
        
        {/* Woven Lanyard Ribbon with brand accent */}
        <div
          className="w-5 h-16 origin-top bg-gradient-to-b from-[#4F46E5] via-[#8B5CF6] to-[#EC4899] shadow-inner transition-transform duration-75 relative overflow-hidden"
          style={{
            transform: `rotate(${rotation.z * 0.45}deg) scaleY(${1 + Math.abs(pos.y) * 0.003})`,
          }}
        >
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px]" />
          <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Silver Swivel Hook & Clip */}
        <div
          className="relative -mt-1 z-10 flex flex-col items-center transition-transform duration-75"
          style={{
            transform: `translate(${pos.x * 0.3}px, ${pos.y * 0.3}px) rotate(${rotation.z * 0.7}deg)`,
          }}
        >
          {/* Metal clip bar */}
          <div className="w-7 h-4 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-sm shadow-sm border border-slate-400" />
          {/* Metal hook loop */}
          <div className="w-3.5 h-5 border-2 border-slate-300 rounded-full -mt-1 shadow-sm" />
        </div>
      </div>

      {/* Hanging 3D ID Card with Physics */}
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        className={`relative z-10 w-full cursor-grab active:cursor-grabbing transition-shadow duration-300 ${
          isDragging ? "shadow-2xl shadow-purple-500/30" : "shadow-xl"
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
          transformOrigin: "top center",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card Holder Hole at top */}
        <div className="w-8 h-2 bg-slate-900/90 border border-white/20 rounded-full mx-auto -mb-2 relative z-30 shadow-inner" />

        {/* The Badge Itself */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/25 via-white/10 to-teal-400/30 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Card Glass Layer */}
          <div className="relative rounded-2xl bg-[#1e1e2e]/95 p-5 text-left border border-white/10 overflow-hidden">
            
            {/* Holographic foil sweep line */}
            <div
              className="absolute -inset-full pointer-events-none opacity-20 bg-gradient-to-tr from-transparent via-white/40 to-transparent transform rotate-45 transition-transform duration-1000"
              style={{
                transform: `translateX(${pos.x * 2}px) translateY(${pos.y * 2}px) rotate(45deg)`,
              }}
            />

            {/* Top Bar: Pass Type & Security Chip */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
                <span className="text-[10px] font-mono font-bold tracking-wider text-teal-300 uppercase">
                  VERIFIED PASS
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                <Terminal className="w-3 h-3 text-purple-400" />
                <span>{idNumber}</span>
              </div>
            </div>

            {/* Profile Avatar / Photo with Glowing Ring */}
            <div className="my-4 flex items-center gap-3.5">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-teal-400/40 p-0.5 bg-gradient-to-tr from-purple-500 to-teal-400 shadow-md">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-[10px]"
                    onError={(e) => {
                      // Fallback avatar if local image has rendering edge case
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-teal-400 text-slate-950 shadow">
                  <ShieldCheck className="w-3 h-3" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                  {name}
                </h3>
                <p className="text-xs text-teal-300 font-mono mt-0.5">
                  {role}
                </p>
                <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-md bg-white/[0.06] text-[10px] text-slate-300 font-mono border border-white/5">
                  <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                  <span>React Specialist</span>
                </div>
              </div>
            </div>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-2 py-2 px-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-[10px] font-mono">
              <div>
                <span className="text-slate-500 block">ROLE CODE</span>
                <span className="text-slate-200 font-semibold">DEV-FE-2026</span>
              </div>
              <div>
                <span className="text-slate-500 block">LOCATION</span>
                <span className="text-slate-200 font-semibold">Bogor, ID</span>
              </div>
            </div>

            {/* Bottom Bar: QR Code & Auth Barcode */}
            <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-slate-500 block">
                  DIGITAL CREDENTIAL
                </span>
                {/* Simulated Barcode */}
                <div className="flex items-center gap-0.5 h-4 opacity-70">
                  {[2, 4, 1, 3, 2, 5, 1, 2, 4, 2, 1, 3, 2].map((w, i) => (
                    <div
                      key={i}
                      className="bg-slate-300 h-full"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="p-1 rounded-md bg-white/10 border border-white/15 text-white">
                <QrCode className="w-6 h-6" />
              </div>
            </div>

            {/* Drag hint on hover */}
            <div className="mt-2 text-center">
              <span className="text-[9px] font-mono text-slate-500">
                {isDragging ? "Lepaskan untuk mengayun ↺" : "✦ Tarik kartu untuk interaksi 3D"}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Lanyard;
