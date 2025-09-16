import { useEffect, useRef } from "react";
import { HERO, BRANDING, EVENT } from "../config.ts";
import Counter from "../components/Counter.jsx";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Simple CSS animations instead of GSAP
    const animateElement = (element, delay = 0) => {
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(50px)";
        element.style.transition = "all 0.8s ease-out";

        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, delay);
      }
    };

    animateElement(titleRef.current, 200);
    animateElement(subtitleRef.current, 400);
    animateElement(ctaRef.current, 600);

    // Create floating particles
    createParticles();
  }, []);

  const createParticles = () => {
    if (!particlesRef.current) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const particleColor = "#22c55e";

      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: ${particleColor};
        border-radius: 50%;
        opacity: 0.6;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 3 + 2}s infinite linear;
        animation-delay: ${Math.random() * 2}s;
      `;
      particlesRef.current.appendChild(particle);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0 bg-white green-border pb-8">
      {/* Animated leaf-like background shapes matching the design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-leaf floating-leaf-1"></div>
        <div className="floating-leaf floating-leaf-2"></div>
        <div className="floating-leaf floating-leaf-3"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-green-100/60 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-200/50 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-50/80 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-300/40 rounded-full blur-2xl animate-blob animation-delay-6000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-green-200/60 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Background particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      ></div>

      <div
        ref={heroRef}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-8 md:mt-0"
      >
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight flex flex-col items-center"
        >
          <div className="flex items-center">
            <img
              src={BRANDING.logos.main.src}
              alt="Open Source Day Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 "
            />
            <span className="text-black">{HERO.title.part1} ‎</span>
            <span className="gradient-text">{HERO.title.part2}</span>
          </div>
          <span className="text-black">{HERO.title.part3}</span>
          <span className="text-green-600 text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
            {HERO.title.year}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed px-4"
        >
          {HERO.subtitle}
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <a
            href={HERO.buttons.primary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-200 glow-effect hover:scale-105 transform text-center shadow-lg"
          >
            {HERO.buttons.primary.text}
          </a>
          <a
            href="/schedule"
            className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-200 hover:scale-105 transform text-center"
          >
            {HERO.buttons.secondary.text}
          </a>
        </div>

        {/* Event details */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center px-4">
          <div className="light-card p-4 md:p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">
              {EVENT.date}
            </h3>
            <p className="text-sm md:text-base text-black">One Day Event</p>
          </div>

          {/* Attendees */}
          <div className="light-card p-4 md:p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">
              <Counter target={EVENT.stats.expectedAttendees} client:visible />+
            </h3>
            <p className="text-sm md:text-base text-black">
              Attendees Expected
            </p>
          </div>

          {/* Speakers */}
          <div className="light-card p-4 md:p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">
              <Counter target={EVENT.stats.speakers} client:visible />+
            </h3>
            <p className="text-sm md:text-base text-black">Expert Speakers</p>
          </div>

          {/* Community Partners */}
          <div className="light-card p-4 md:p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">
              <Counter target={EVENT.stats.communityPartners} client:visible />+
            </h3>
            <p className="text-sm md:text-base text-black">
              Community Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
