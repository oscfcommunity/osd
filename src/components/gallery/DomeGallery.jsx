import { useState, useEffect, useCallback } from 'react';

const DEFAULT_IMAGES = [
    "DARP0268.JPG.webp", "DARP0269.JPG.webp", "DARP0288.JPG.webp", "DARP0290.JPG.webp",
    "IMG_20260404_115716.webp", "IMG_20260404_120332.webp", "IMG_20260404_174813.webp",
    "IMG_20260404_182045.webp", "IMG_20260404_182240.webp", "PXL_20260404_043240608.MP.webp",
    "PXL_20260404_132445542.webp", "PXL_20260404_132935934.webp", "SAVN1093.JPG.webp",
    "SAVN1099.JPG.webp", "SMIT0376.JPG.webp", "SMIT0433.JPG.webp", "SMIT0444.JPG.webp",
    "SMIT0455.JPG.webp", "SMIT0463.JPG.webp", "SMIT0470.JPG.webp", "SMIT0491.JPG.webp",
    "SMIT0575.JPG.webp", "SMIT0795.JPG.webp", "SMIT1132.JPG.webp", "SMIT1179.JPG.webp",
    "SMIT1271.JPG.webp", "SMIT1273.JPG.webp", "SMIT1278.JPG.webp", "SMIT1294.JPG.webp",
    "SMIT1297.JPG.webp", "SMIT1302.JPG.webp", "SMIT1408.JPG.webp", "SMIT1413.JPG.webp",
    "SMIT1428.JPG.webp", "SMIT1429.JPG.webp", "SMIT1435.JPG.webp", "SMIT1445.JPG.webp",
    "SMIT1620.JPG.webp", "SMIT1633.JPG.webp",
].map(src => ({ src: `/end/random/${src}`, alt: 'OSD2026 Memory' }));

export default function SimpleGallery({ images = DEFAULT_IMAGES }) {
    const [currentIndex, setCurrentIndex] = useState(null);

    const nextImg = useCallback((e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImg = useCallback((e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const close = () => setCurrentIndex(null);

    useEffect(() => {
        const handleKey = (e) => {
            if (currentIndex === null) return;
            if (e.key === 'ArrowRight') nextImg();
            if (e.key === 'ArrowLeft') prevImg();
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [currentIndex, nextImg, prevImg]);

    return (
        <div className="gallery-viewport">
            <div className="gallery-container">
                <div className="gallery-masonry">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="gallery-card-item animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.03}s` }}
                            onClick={() => setCurrentIndex(i)}
                        >
                            <div className="gallery-card group">
                                <img src={img.src} alt={img.alt} loading="lazy" />
                                <div className="gallery-overlay" />
                                <div className="gallery-number">0{i + 1}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enhanced Lightbox */}
            {currentIndex !== null && (
                <div className="lightbox-overlay" onClick={close}>
                    <div className="lightbox-wrapper" onClick={e => e.stopPropagation()}>
                        <button className="nav-btn prev" onClick={prevImg}><span>‹</span></button>
                        <button className="nav-btn next" onClick={nextImg}><span>›</span></button>
                        <button className="lightbox-close" onClick={close}>✕</button>

                        <div className="lightbox-image-container animate-scale-in">
                            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
                            <div className="lightbox-info">
                                <span className="text-white/40 font-black tracking-widest text-[10px] uppercase">
                                    Memory {currentIndex + 1} of {images.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .gallery-viewport { width: 100%; min-height: 100vh; background: #f8fafc; padding: 2rem; --primary: #22c55e; }
        .gallery-container { max-width: 1600px; margin: 4rem auto 4rem; width: 100%; }
        
        .gallery-masonry { columns: 1; gap: 1.5rem; }
        @media (min-width: 640px) { .gallery-masonry { columns: 2; } }
        @media (min-width: 1024px) { .gallery-masonry { columns: 3; } }
        @media (min-width: 1440px) { .gallery-masonry { columns: 4; } }

        .gallery-card-item { break-inside: avoid; margin-bottom: 1.5rem; }
        .gallery-card { 
          position: relative; border-radius: 20px; overflow: hidden; background: #fff; border: 4px solid #fff; 
          box-shadow: 0 15px 30px rgba(0,0,0,0.04); cursor: pointer; transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .gallery-card:hover { transform: translateY(-8px); border-color: var(--primary); box-shadow: 0 25px 50px rgba(34, 197, 94, 0.12); }
        .gallery-card img { width: 100%; height: auto; display: block; filter: saturate(1.05); transition: transform 0.6s ease; }
        .gallery-card:hover img { transform: scale(1.04); }

        .gallery-overlay { position: absolute; inset: 0; opacity: 0; background: linear-gradient(to top, rgba(34, 197, 94, 0.08), transparent); transition: 0.4s ease; }
        .gallery-card:hover .gallery-overlay { opacity: 1; }
        
        .gallery-number { position: absolute; bottom: 1rem; right: 1.5rem; color: #fff; font-weight: 900; font-size: 2rem; opacity: 0.2; font-style: italic; pointer-events: none; }

        /* Lightbox */
        .lightbox-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(10, 10, 10, 0.95); backdrop-filter: blur(25px); display: flex; align-items: center; justify-content: center; padding: 20px; cursor: zoom-out; }
        .lightbox-wrapper { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; cursor: default; }
        
        .lightbox-image-container { position: relative; max-width: 100%; max-height: 100%; display: flex; flex-direction: column; align-items: center; }
        .lightbox-image-container img { max-width: 90vw; max-height: 80vh; border-radius: 24px; box-shadow: 0 50px 100px rgba(0,0,0,0.5); object-fit: contain; border: 1px solid rgba(255,255,255,0.1); }
        .lightbox-info { margin-top: 1.5rem; }

        .nav-btn { position: absolute; top: 50%; transform: translateY(-50%); width: clamp(50px, 8vw, 70px); height: clamp(50px, 8vw, 70px); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; color: #fff; font-size: clamp(30px, 5vw, 40px); cursor: pointer; display: grid; place-items: center; transition: all 0.3s ease; z-index: 1010; }
        .nav-btn:hover { background: var(--primary); transform: translateY(-50%) scale(1.1); border-color: transparent; box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); }
        .nav-btn.prev { left: clamp(10px, 4vw, 40px); }
        .nav-btn.next { right: clamp(10px, 4vw, 40px); }
        
        .lightbox-close { position: absolute; top: 30px; right: 30px; width: 50px; height: 50px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; color: #fff; font-size: 20px; cursor: pointer; display: grid; place-items: center; transition: 0.3s ease; z-index: 1010; }
        .lightbox-close:hover { background: #ef4444; border-color: transparent; transform: rotate(90deg) scale(1.1); }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

        @media (max-width: 768px) {
          .gallery-viewport { padding: 1rem; }
          .gallery-container { margin-top: 5rem; }
          .nav-btn { position: fixed; top: auto; bottom: 30px; transform: none; }
          .nav-btn:hover { transform: scale(1.1); }
          .nav-btn.prev { left: 25vw; }
          .nav-btn.next { right: 25vw; }
          .lightbox-image-container img { max-height: 60vh; border-radius: 16px; }
          .lightbox-close { top: 20px; right: 20px; }
        }
      `}</style>
        </div>
    );
}
