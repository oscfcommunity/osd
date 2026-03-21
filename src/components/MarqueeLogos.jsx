import { useRef, useEffect } from "react";

export default function MarqueeLogos({
  logos = [],
  duration = 100,
  height = 120,
  itemMinWidth = 220,
}) {
  const items = [...logos, ...logos];
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    void el.offsetWidth;
  }, [logos.map?.((l) => l.logo).join?.(",")]);

  if (!logos || logos.length === 0) return null;

  return (
    <div className="w-full overflow-hidden relative"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <style>{`
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 32px;
          animation: marquee ${duration}s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-item {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${itemMinWidth}px;
          height: ${height}px;
          padding: 0 8px;
        }
        .marquee-item img {
          max-height: ${Math.min(height, 140)}px;
          height: auto;
          max-width: 100%;
          object-fit: contain;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
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
