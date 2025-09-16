import React, { useState, useCallback, useMemo } from "react";

const images = [
  {
    src: "/venue/SOU-Main.jpeg",
    alt: "Silver Oak University main building",
    caption: "Main Building",
  },
  {
    src: "/venue/SOU-EBlock.jpeg",
    alt: "Silver Oak University E Block",
    caption: "E Block",
  },
  {
    src: "/venue/SOU-Gate.jpeg",
    alt: "Silver Oak University main gate",
    caption: "Main Gate",
  },
  {
    src: "/venue/SOU-FoodCourt.jpeg",
    alt: "Silver Oak University food court",
    caption: "Food Court",
  },
];

export default function VenueGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = useCallback((index) => {
    setActiveIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const active = useMemo(() => images[activeIndex], [activeIndex]);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-6 md:mb-8">
        Venue Photos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((img, index) => (
          <figure
            key={img.src}
            className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                onClick={() => open(index)}
              />
            </div>
            <figcaption className="px-3 py-2 text-sm text-gray-700">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-50 ${
          isOpen ? "flex" : "hidden"
        } items-center justify-center bg-white/70 backdrop-blur-sm`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-caption"
        onClick={(e) => {
          if (e.currentTarget === e.target) close();
        }}
      >
        <div className="flex flex-col items-center">
          {isOpen && (
            <div className="relative w-full h-[72vh] bg-white rounded-xl shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={active.src}
                alt={active.alt}
                className="max-w-full max-h-full object-contain"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                className="absolute top-3 right-3 rounded-full bg-white text-black  px-2 hover:bg-gray-900 hover:text-white w-9 h-9 flex items-center justify-center shadow"
                aria-label="Close"
                title="Close"
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
