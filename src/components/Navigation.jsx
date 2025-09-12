import { useState, useEffect } from "react";
import { NAVIGATION, BRANDING, SITE } from "../config.ts";

const Navigation = (props) => {
  const { activePath = "" } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-green-500/20 shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="nav-item flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={BRANDING.logos.main.src}
                alt="OSW Logo"
                className="w-8 h-8 mr-2"
              />
              <span className="text-xl md:text-2xl font-bold gradient-text">
                {SITE.shortTitle}
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.items.map((item) => {
              const isTickets = item.name.toLowerCase() === "tickets";
              const isActivePath = item.href === activePath;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={
                    isTickets
                      ? `bg-green-300 hover:bg-green-500 hover:text-white text-black px-4 lg:px-6 py-2 rounded-full font-semibold transition-all duration-200 glow-effect hover:scale-105 text-sm lg:text-base`
                      : `nav-item text-black hover:text-green-600 transition-colors duration-200 relative group font-medium ${isActivePath ? "text-green-600" : ""}`
                  }
                >
                  {item.name}
                  {!isTickets && (
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200  ${isActivePath ? "w-full" : ""}`}
                    ></span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block nav-item">
            <a
              href={NAVIGATION.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 text-white px-4 lg:px-6 py-2 rounded-full font-semibold transition-all duration-200 glow-effect hover:scale-105 text-sm lg:text-base"
            >
              {NAVIGATION.cta.text}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-green-600 transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-500/20 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-black hover:text-green-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://konfhub.com/open-source-day-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-semibold text-center transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
