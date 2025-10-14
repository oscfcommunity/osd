import { useEffect } from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const menuItems = document.querySelectorAll(".mobile-menu-item");
      menuItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-50px)";
        item.style.transition = "all 0.3s ease-out";

        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, index * 100);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className="relative bg-gray-900 h-full w-80 max-w-sm p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold gradient-text">Menu</h2>
          <button onClick={onClose} className="text-black-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="space-y-4">
          {[
            { name: "Home", href: "/" },
            { name: "Speakers", href: "/speakers" },
            { name: "Schedule", href: "/schedule" },
            { name: "Venue", href: "/venue" },
            { name: "Tickets", href: "/tickets" },
            { name: "Past Events", href: "/past-events" },
          ].map((item, _index) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-menu-item block py-3 px-4 text-lg text-black-300 hover:text-green-400 hover:bg-gray-800 rounded-lg transition-all duration-200"
              onClick={onClose}
            >
              {item.name}
            </a>
          ))}

          <div className="pt-6 border-t border-gray-700">
            <a
              href="/gallery"
              className="block mx-3 mt-4 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-semibold text-center transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
