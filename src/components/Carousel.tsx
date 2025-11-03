import React, { useRef, useState, useEffect } from "react";

interface SimpleCarouselProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  autoplay?: number;
}

export default function SimpleCarousel({children, className = "w-full h-full", autoplay = 4000}: SimpleCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const items = Array.isArray(children) ? children : [children];
  const count = items.length;

  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const targetLeft = index * el.clientWidth;
    el.scrollTo({ left: targetLeft, behavior: "smooth" });
    setActive(index);
  };

  useEffect(() => {
    if (!autoplay || count <= 1) return;

    const interval = setInterval(() => {
      const nextIndex = (active + 1) % count;
      scrollToIndex(nextIndex);
    }, autoplay);

    return () => clearInterval(interval);
  }, [active, autoplay, count]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory w-full h-full hide-scrollbar"
      >
        {items.map((child, i) => (
          <div key={i} className="snap-center flex-shrink-0 w-full h-full relative">
            {child}
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full ${i === active ? "bg-blue-500" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}