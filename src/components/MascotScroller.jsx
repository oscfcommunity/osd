import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 80;
const BG_COLOR = "#161820";

// Frame URL builder — served from /public/osd-hero-high/
const frameUrl = (i) => `/osd-hero-high/${String(i + 1).padStart(5, "0")}.webp`;

// Copy overlay phases keyed by scroll progress
const PHASES = [
  {
    start: 0,
    end: 0.18,
    heading: "Meet your new open source ally.",
    sub: null,
    align: "center",
    accentColor: "#00D6FF",
  },
  {
    start: 0.2,
    end: 0.58,
    heading: "Built for builders.",
    sub: "Crafted by the community, for the community.",
    align: "left",
    accentColor: "#0050FF",
  },
  {
    start: 0.62,
    end: 0.88,
    heading: "Open source runs deep.",
    sub: "Every contribution shapes who we are.",
    align: "right",
    accentColor: "#00D6FF",
  },
  {
    start: 0.91,
    end: 1,
    heading: "OSD 2026 — Ship. Together.",
    sub: null,
    align: "center",
    isCta: true,
    accentColor: "#0050FF",
  },
];

function getPhaseOpacity(phase, progress) {
  const fadeLen = 0.04;
  if (progress < phase.start || progress > phase.end) return 0;
  const fadeInEnd = phase.start + fadeLen;
  const fadeOutStart = phase.end - fadeLen;
  if (progress < fadeInEnd) return (progress - phase.start) / fadeLen;
  if (progress > fadeOutStart) return (phase.end - progress) / fadeLen;
  return 1;
}

export default function MascotScroller() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const logoRef = useRef(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preload all frames
  useEffect(() => {
    // Load OSD Logo for watermark
    const logoImg = new Image();
    logoImg.src = "/icons/OSDGreen.svg";
    logoRef.current = logoImg;

    const images = new Array(TOTAL_FRAMES);
    let loaded = 0;

    const onLoad = () => {
      loaded++;
      const pct = loaded / TOTAL_FRAMES;
      setLoadProgress(pct);
      if (pct >= 0.85) setReady(true);
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad; // count errors so we don't hang
      img.src = frameUrl(i);
      images[i] = img;
    }

    imagesRef.current = images;
  }, []);

  // Draw current frame to canvas
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    // Size canvas to container maintaining 16:9
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const containerAspect = w / h;

    let drawW, drawH, dx, dy;

    // Always use object-fit: cover behavior.
    if (containerAspect > imgAspect) {
      // Container is wider than image aspect ratio: fit width and crop height.
      drawW = w;
      drawH = drawW / imgAspect;
    } else {
      // Container is taller than image aspect ratio (e.g. mobile portrait): fit height and crop width.
      drawH = h;
      drawW = drawH * imgAspect;
    }
    dx = (w - drawW) / 2;
    dy = (h - drawH) / 2;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, dx, dy, drawW, drawH);

    // ─────────────────────────────────────────────────────────
    // Overlay OSD logo to hide the Veo watermark at bottom right of the image
    // Sizing relative to the VISIBLE screen width (w), rather than the potentially heavily-scaled
    // video frame (drawW) - this prevents it becoming massive on mobile tall screens.

    const isMobile = containerAspect < 1; // Basic portrait check
    const scaleFactor = isMobile ? h : w; // Use height as scale base on mobile as it dominates

    // Calculate logo size keeping it reasonable on both mobile and desktop
    const logoW = drawW * (isMobile ? 0.05 : 0.06);
    const logoH = logoW;

    // Padding to position perfectly over Veo
    const paddingX = drawW * 0.005;
    const paddingY = drawH * 0.02;

    // "Veo" is at the bottom right of the ORIGINAL frame
    const logoX = dx + drawW - logoW - paddingX;
    const logoY = dy + drawH - logoH - paddingY;

    // Draw a dark pill/circle to completely mask the "Veo" text
    ctx.fillStyle = BG_COLOR;
    ctx.beginPath();
    ctx.arc(logoX + logoW / 2, logoY + logoH / 2, logoW / 2 + drawW * 0.008, 0, 2 * Math.PI);
    ctx.fill();

    if (logoRef.current && logoRef.current.complete) {
      ctx.drawImage(logoRef.current, logoX, logoY, logoW, logoH);
    }
  };

  // GSAP ScrollTrigger scroll driver
  useEffect(() => {
    if (!ready) return;

    let gsap, ScrollTrigger;

    const init = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      gsap = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const obj = { frame: 0, progress: 0 };

      gsap.to(obj, {
        frame: TOTAL_FRAMES - 1,
        progress: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          onUpdate: (self) => {
            const f = Math.round(obj.frame);
            if (f !== frameRef.current) {
              frameRef.current = f;
              cancelAnimationFrame(rafRef.current);
              rafRef.current = requestAnimationFrame(() => drawFrame(f));
            }
            setScrollProgress(self.progress);
          },
        },
      });

      // Draw first frame immediately
      drawFrame(0);
    };

    init();

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  // Redraw on resize
  useEffect(() => {
    const onResize = () => drawFrame(frameRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "600vh",
        position: "relative",
      }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: BG_COLOR,
          overflow: "hidden",
        }}
      >
        {/* Loading state */}
        {!ready && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: BG_COLOR,
              zIndex: 20,
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#00D6FF",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "16px",
                opacity: 0.7,
              }}
            >
              Loading experience
            </div>
            <div
              style={{
                width: "180px",
                height: "2px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${loadProgress * 100}%`,
                  background: "linear-gradient(90deg, #0050FF, #00D6FF)",
                  borderRadius: "2px",
                  transition: "width 0.2s",
                }}
              />
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            opacity: ready ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />

        {/* Copy overlays — all phases */}
        {PHASES.map((phase, i) => {
          const opacity = getPhaseOpacity(phase, scrollProgress);
          if (opacity <= 0) return null;

          const posStyle =
            phase.align === "left"
              ? {
                  left: "clamp(24px, 6vw, 80px)",
                  right: "auto",
                  textAlign: "left",
                }
              : phase.align === "right"
              ? {
                  right: "clamp(24px, 6vw, 80px)",
                  left: "auto",
                  textAlign: "right",
                }
              : {
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                };

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                transform: phase.align === "center" ? "translate(-50%, -50%)" : "translateY(-50%)",
                ...posStyle,
                opacity,
                transition: "opacity 0.3s ease",
                pointerEvents: phase.isCta ? "auto" : "none",
                maxWidth: "clamp(280px, 36vw, 520px)",
                zIndex: 10,
              }}
            >
              {/* Thin accent line */}
              <div
                style={{
                  width: "36px",
                  height: "2px",
                  background: phase.accentColor,
                  marginBottom: "14px",
                  boxShadow: `0 0 12px ${phase.accentColor}`,
                  marginLeft: phase.align === "right" ? "auto" : phase.align === "center" ? "auto" : "0",
                  marginRight: phase.align === "center" ? "auto" : "0",
                }}
              />

              <h2
                style={{
                  fontFamily: "Inter, -apple-system, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem, 3.5vw, 3.2rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  margin: 0,
                  textShadow: `0 0 40px ${phase.accentColor}44`,
                }}
              >
                {phase.heading}
              </h2>

              {phase.sub && (
                <p
                  style={{
                    fontFamily: "Inter, -apple-system, sans-serif",
                    fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "10px",
                    letterSpacing: "0.01em",
                    lineHeight: 1.5,
                  }}
                >
                  {phase.sub}
                </p>
              )}

              {phase.isCta && (
                <a
                  href="/2025"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "24px",
                    padding: "14px 32px",
                    background: "linear-gradient(135deg, #0050FF, #00D6FF)",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                    letterSpacing: "0.02em",
                    borderRadius: "100px",
                    textDecoration: "none",
                    boxShadow: "0 0 32px rgba(0, 80, 255, 0.5), 0 0 64px rgba(0, 214, 255, 0.2)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                    e.currentTarget.style.boxShadow = "0 0 48px rgba(0,80,255,0.7), 0 0 96px rgba(0,214,255,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 0 32px rgba(0, 80, 255, 0.5), 0 0 64px rgba(0, 214, 255, 0.2)";
                  }}
                >
                  Explore OSD 2025
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              )}
            </div>
          );
        })}

        {/* Scroll hint — fades out after 5% progress */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: scrollProgress < 0.05 ? 1 - scrollProgress * 20 : 0,
            transition: "opacity 0.3s",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, rgba(0,214,255,0.6), transparent)",
              animation: "scrollPulse 1.5s ease-in-out infinite",
            }}
          />
        </div>

        {/* Progress bar at bottom edge */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            width: `${scrollProgress * 100}%`,
            background: "linear-gradient(90deg, #0050FF, #00D6FF)",
            transition: "width 0.05s",
            boxShadow: "0 0 8px #00D6FF",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
      `}</style>
    </div>
  );
}
