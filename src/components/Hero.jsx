import { SITE } from "@/config/config.ts";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // Fade in on mount
    section.style.opacity = "0";
    requestAnimationFrame(() => {
      section.style.transition = "opacity 0.8s ease-out";
      section.style.opacity = "1";
    });
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[75vh] flex items-center justify-center bg-white" style={{ overflow: "visible" }}>
      {/* Animated Background Blobs — clipped via a wrapping div so they don't overflow page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
        <div className="flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-bold border border-green-100 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span>04 April 2026 · {SITE.city}</span>
          </div>

          {/* Title — pb-4 prevents italic descender clipping */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none pb-4">
            <span className="block text-gray-900">Open Source Day</span>
            <span className="gradient-text italic block">2026</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            India's largest open source conference. 1000+ developers, builders &amp; maintainers — one unforgettable day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#get-involved"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gray-900 rounded-full hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Get Involved
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/2025/"
              className="group inline-flex items-center justify-center px-8 py-4 font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 hover:scale-105"
            >
              Explore 2025
            </a>
          </div>
        </div>

        {/* Hashtag Footer */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-6 opacity-40">
          <div className="text-xl font-bold text-gray-400">#OSDIn2026</div>
          <div className="text-xl font-bold text-gray-400">#OSDIndia2026</div>
          <div className="text-xl font-bold text-gray-400">#OpenSourceDay</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
