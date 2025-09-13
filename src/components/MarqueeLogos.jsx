import { useRef, useEffect } from "react";

/**
 * @param {{logos?: any[], duration?: number, height?: number, itemMinWidth?: number}} props
 */
export default function MarqueeLogos({
  logos = [],
  duration = 100,
  height = 120,
  itemMinWidth = 220,
}) {
  // Duplicate logos to create a seamless loop
  const items = [...logos, ...logos];
  const trackRef = useRef(null);

  useEffect(() => {
    // Force reflow if logos change so CSS animation restarts cleanly
    const el = trackRef.current;
    if (!el) return;
    void el.offsetWidth;
  }, [logos.map?.((l) => l.logo).join?.(",")]);

  if (!logos || logos.length === 0) return null;

  return (
    <div className="w-full overflow-hidden">
      <style>{`
        .marquee-wrapper {
          position: relative;
          overflow-x: auto; /* enable manual scroll */
          scrollbar-width: none; /* hide Firefox scrollbar */
        }
        .marquee-wrapper::-webkit-scrollbar {
          display: none; /* hide Chrome/Safari scrollbar */
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 24px;
          animation: marquee ${duration}s linear infinite;
        }
        .marquee-item {
          flex: 0 0 auto;
          display:inline-flex; 
          align-items:center; 
          justify-content:center; 
          width: ${itemMinWidth}px; 
          height: ${height}px;
        }
        .marquee-item img { 
          max-height: ${Math.min(height, 140)}px; 
          height: auto; 
          max-width: 100%;
          object-fit: contain;
        }
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>

      <div className="marquee-wrapper" style={{ height: `${height}px` }}>
        <div ref={trackRef} className="marquee-track">
          {items.map((logo, i) => (
            <div key={i} className="marquee-item">
              <img
                src={logo.logo}
                alt={logo.name || `logo-${i}`}
                loading="eager"
                className="marquee-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
