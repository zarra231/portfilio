import React, { useRef, useState, useEffect } from "react";

export function AnimatedContent({
  children,
  distance = 35,
  direction = "vertical", // 'vertical' or 'horizontal'
  duration = 800,
  delay = 0,
  stagger = 100,
  className = ""
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateVal = direction === "vertical" ? `0, ${distance}px, 0` : `${distance}px, 0, 0`;

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : `translate3d(${translateVal})`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            transitionDelay: `${delay + idx * stagger}ms`,
          },
        });
      })}
    </div>
  );
}

export default AnimatedContent;
