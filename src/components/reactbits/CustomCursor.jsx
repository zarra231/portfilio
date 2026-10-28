import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const ringPosRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    // Smooth lerp loop for outer ring
    const loop = () => {
      ringPosRef.current.x += (pos.x - ringPosRef.current.x) * 0.18;
      ringPosRef.current.y += (pos.y - ringPosRef.current.y) * 0.18;
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [pos.x, pos.y, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Center sharp dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicked ? 0.7 : isHovered ? 1.4 : 1})`,
          width: "6px",
          height: "6px",
        }}
      />

      {/* Smooth trailing glow ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
          isHovered
            ? "w-10 h-10 border-teal-400/80 bg-teal-400/10 shadow-[0_0_15px_rgba(94,234,212,0.3)]"
            : "w-7 h-7 border-white/30 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) scale(${isClicked ? 0.85 : 1})`,
        }}
      />
    </>
  );
}

export default CustomCursor;
