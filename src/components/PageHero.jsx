import { useEffect, useRef } from "react";

/**
 * PageHero — shared hero for all inner pages.
 * Mirrors Hero.jsx design exactly; only content differs via props.
 * @param {{ badge: string, title: string, titleGradient: string, subtitle: string, primaryCta: { text: string, href: string, external?: boolean }, secondaryCta?: { text: string, href: string, external?: boolean }, ctaNote?: string }} props
 */
const PageHero = ({ badge, title, titleGradient, subtitle, primaryCta, secondaryCta, ctaNote }) => {
  const sectionRef = useRef(null);
  const hashTagList = ["#OSDIn2026", "#OSDIndia2026", "#OpenSourceDay"];
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.style.opacity = "0";
    requestAnimationFrame(() => {
      section.style.transition = "opacity 0.8s ease-out";
      section.style.opacity = "1";
    });
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[75vh] flex items-center justify-center bg-white" style={{ overflow: "visible" }}>
      {/* Blobs — clipped so they don't spill outside */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
        <div className="flex flex-col items-center">
          {/* Pulsing badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-bold border border-green-100 mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span>{badge}</span>
          </div>

          {/* Title — pb-4 prevents italic gradient descender clipping */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none pb-4">
            <span className="block text-gray-900">{title}</span>
            <span className="gradient-text italic block">{titleGradient}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">{subtitle}</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={primaryCta.href}
              {...(primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gray-900 hover:bg-gray-800 rounded-full hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              {primaryCta.text}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                {...(secondaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-center justify-center px-8 py-4 font-bold text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {secondaryCta.text}
              </a>
            )}
          </div>

          {ctaNote && (
            <div class="text-gray-600 mt-6 pt-6 border-t border-gray-200 w-full">
              <span class="font-semibold">Deadline:</span> {ctaNote}
            </div>
          )}
        </div>

        {/* Hashtag footer — mirrors Hero.jsx */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-6 opacity-40">
          {hashTagList.map((tag) => (
            <div className="text-xl font-bold text-gray-400">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
