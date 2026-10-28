import React, { useRef, useState, useEffect } from "react";

export function FadeContent({
  children,
  blur = false,
  duration = 750,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
  delay = 0,
  threshold = 0.15,
  initialOpacity = 0,
  className = "",
  distance = 28
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : initialOpacity,
        transform: isVisible ? "none" : `translate3d(0, ${distance}px, 0)`,
        filter: blur ? (isVisible ? "blur(0px)" : "blur(10px)") : "none",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}

export default FadeContent;
