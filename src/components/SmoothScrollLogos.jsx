import { useRef, useEffect } from "react";
import "../styles/global.css";

/**
 * @param {{ logos: {logo: string}[], duration?: number, height?: number, itemWidth?: number }} props
 */

export default function SmoothScrollLogos({
  logos = [],
  duration = 30,
  height = 300,
  itemWidth = 700,
}) {
  const items = [...logos, ...logos]; // duplicate for seamless loop
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (el) void el.offsetWidth; // restart animation on logos change
  }, [logos.map((l) => l.logo).join(",")]);

  if (!logos || logos.length === 0) return null;

  return (
    <div className="w-full overflow-hidden" style={{ height }}>
      <div
        ref={trackRef}
        className="smoothscroll-track flex"
        style={{ animationDuration: `${duration}s`, height }}
      >
        {items.map((logo, idx) => (
          <div
            key={idx}
            className="smoothscroll-item flex-shrink-0 rounded-lg overflow-hidden"
            style={{
              height,
              minWidth: 300,
              maxWidth: itemWidth,
              flexBasis: "auto",
            }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src={logo.logo}
                alt={logo.name || `logo-${idx}`}
                width={itemWidth}
                height={height}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
