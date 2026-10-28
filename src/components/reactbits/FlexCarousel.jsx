import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FlexCarousel({
  items = [],
  renderItem,
  maxRotationDegrees = 14,
  maxDepthPx = 80,
  backgroundBlur = "16px",
  gradientIntensity = 0.45,
  dragSensitivity = 1.2,
  onActiveChange,
  className = ""
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const currentDragRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);

  const total = items.length;

  // Active Index change notification
  useEffect(() => {
    if (onActiveChange) {
      onActiveChange(activeIndex);
    }
  }, [activeIndex, onActiveChange]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Wheel scrolling (horizontal / deltaY with debounce)
  const wheelLockRef = useRef(false);
  const handleWheel = (e) => {
    if (wheelLockRef.current) return;
    if (Math.abs(e.deltaX) > 25 || Math.abs(e.deltaY) > 35) {
      wheelLockRef.current = true;
      if (e.deltaX > 25 || e.deltaY > 35) {
        goToNext();
      } else {
        goToPrev();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 350);
    }
  };

  // Pointer / Touch Dragging
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    startXRef.current = clientX;
    currentDragRef.current = 0;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = (clientX - startXRef.current) * dragSensitivity;
    currentDragRef.current = delta;
    setDragOffset(delta);

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      velocityRef.current = delta / dt;
      lastTimeRef.current = now;
    }
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60;
    const velocityThreshold = 0.35;

    if (currentDragRef.current < -threshold || velocityRef.current < -velocityThreshold) {
      goToNext();
    } else if (currentDragRef.current > threshold || velocityRef.current > velocityThreshold) {
      goToPrev();
    }

    setDragOffset(0);
    currentDragRef.current = 0;
  };

  // Dynamic active card accent color
  const activeColor = items[activeIndex]?.accentColor || "#5EEAD4";

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      className={`relative w-full py-10 overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Ambient Gradient Backdrop behind active item */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none transition-all duration-700 -z-10"
        style={{
          background: `radial-gradient(circle, ${activeColor} 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)`,
          filter: `blur(${backgroundBlur})`,
          opacity: gradientIntensity,
        }}
      />

      {/* Cards 3D Stage */}
      <div className="relative flex items-center justify-center min-h-[480px] sm:min-h-[520px] w-full">
        {items.map((item, index) => {
          // Calculate circular index offset relative to activeIndex
          let offset = index - activeIndex;
          if (offset > Math.floor(total / 2)) offset -= total;
          if (offset < -Math.floor(total / 2)) offset += total;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          // Calculate 3D transforms based on distance from center
          const spacing = 320; // horizontal spacing in px
          const translateX = offset * spacing + (isDragging ? dragOffset * 0.7 : 0);
          const rotateY = -offset * maxRotationDegrees;
          const translateZ = -absOffset * maxDepthPx;
          const scale = isCenter ? 1.05 : Math.max(0.78, 1 - absOffset * 0.16);
          const opacity = absOffset > 2 ? 0 : Math.max(0.25, 1 - absOffset * 0.35);
          const zIndex = 30 - absOffset * 5;

          return (
            <div
              key={item.id || index}
              onClick={() => {
                if (!isCenter && !isDragging) {
                  setActiveIndex(index);
                }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] md:w-[420px] transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(calc(-50% + ${translateX}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: absOffset > 1 ? "none" : "auto",
              }}
            >
              {renderItem ? renderItem(item, isCenter, index) : null}
            </div>
          );
        })}
      </div>

      {/* Navigation Controls & Indicators */}
      <div className="flex items-center justify-center gap-4 mt-6 relative z-40">
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
          aria-label="Previous project"
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 border border-white/10 hover:border-teal-400/40 transition-all shadow-lg active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-7 bg-teal-400 shadow-[0_0_10px_rgba(94,234,212,0.8)]"
                  : "w-2 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          aria-label="Next project"
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-teal-500/20 text-slate-300 hover:text-teal-300 border border-white/10 hover:border-teal-400/40 transition-all shadow-lg active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="text-center mt-3 text-[11px] font-mono text-slate-500 flex items-center justify-center gap-2">
        <span className="hidden sm:inline">Gunakan tombol panah ◄ ► atau geser kursor untuk eksplorasi</span>
      </div>
    </div>
  );
}

export default FlexCarousel;
