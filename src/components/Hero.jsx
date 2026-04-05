import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const randomImages = [
  "IMG_20260404_115716.jpg",
  "IMG_20260404_120332.jpg",
  "IMG_20260404_174813.jpg",
  "IMG_20260404_182045.jpg",
  "IMG_20260404_182240.jpg",
  "PXL_20260404_043240608.MP.jpg",
  "PXL_20260404_132445542.jpg",
  "PXL_20260404_132935934.jpg",
  "SMIT0376.JPG.jpeg",
  "SMIT0433.JPG.jpeg",
  "SMIT0444.JPG.jpeg",
  "SMIT0455.JPG.jpeg",
  "SMIT0463.JPG.jpeg",
  "SMIT0470.JPG.jpeg",
  "SMIT0491.JPG.jpeg",
  "SMIT0575.JPG.jpeg",
  "SMIT0795.JPG.jpeg",
];

const Hero = () => {
  const leftImagesRef = useRef([]);
  const rightImagesRef = useRef([]);
  const groupImageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const trailContainerRef = useRef(null);

  // For image trail
  const lastMousePos = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Side images animations
      gsap.from(leftImagesRef.current, {
        x: -200,
        opacity: 0,
        rotate: -30,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(rightImagesRef.current, {
        x: 200,
        opacity: 0,
        rotate: 30,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      });

      // Group image animation
      gsap.from(groupImageRef.current, {
        y: 400,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });

      // Text fade-blur animation
      gsap.from(textRef.current, {
        opacity: 0,
        filter: "blur(20px)",
        scale: 0.95,
        duration: 1.5,
        ease: "power2.out",
      });
    }, containerRef);

    // Mouse movement trail logic
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const distance = Math.hypot(x - lastMousePos.current.x, y - lastMousePos.current.y);

      if (distance > 100) {
        lastMousePos.current = { x, y };
        spawnTrailImage(x, y);
      }
    };

    const spawnTrailImage = (x, y) => {
      const imgName = randomImages[imageIndex.current];
      imageIndex.current = (imageIndex.current + 1) % randomImages.length;

      const img = document.createElement("img");
      img.src = `/end/random/${imgName}`;
      img.className = "absolute pointer-events-none z-20 w-48 h-auto rounded-xl shadow-2xl border-4 border-white object-cover opacity-0 translate-x-[-50%] translate-y-[-50%]";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      trailContainerRef.current.appendChild(img);

      const rotate = Math.random() * 20 - 10;

      gsap.to(img, {
        opacity: 1,
        scale: 1,
        rotate,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

      gsap.to(img, {
        opacity: 0,
        scale: 0.5,
        y: "-=50",
        duration: 1,
        delay: 0.8,
        ease: "power2.in",
        onComplete: () => {
          img.remove();
        },
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const addToRefs = (el, ref) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  const images = [
    // Side Gallery (Desktop) & Rows (Mobile)
    { src: "/end/IMG_20260404_115716.jpg", rotate: "-7deg", dTop: "25%", dLeft: "5%", mTop: "12%", mLeft: "20%", side: "left" },
    { src: "/end/IMG_20260404_120332.jpg", rotate: "5deg", dTop: "50%", dLeft: "12%", mTop: "10%", mLeft: "50%", side: "left" },
    { src: "/end/IMG_20260404_174813.jpg", rotate: "-3deg", dTop: "75%", dLeft: "8%", mTop: "12%", mLeft: "80%", side: "left" },
    { src: "/end/IMG_20260404_182045.jpg", rotate: "6deg", dTop: "25%", dRight: "8%", mTop: "68%", mLeft: "20%", side: "right" },
    { src: "/end/IMG_20260404_182240.jpg", rotate: "-5deg", dTop: "50%", dRight: "16%", mTop: "70%", mLeft: "50%", side: "right" },
    { src: "/end/PXL_20260404_043240608.MP.jpg", rotate: "4deg", dTop: "75%", dRight: "10%", mTop: "68%", mLeft: "80%", side: "right" },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen lg:min-h-[90vh] flex flex-col items-center justify-center bg-white overflow-hidden pb-32">
      {/* Image Trail Target Container */}
      <div ref={trailContainerRef} className="absolute inset-0 pointer-events-none z-20" />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
      </div>

      {/* Side Gallery Images */}
      {images.map((img, i) => {
        const isLeft = img.side === "left";
        return (
          <div
            key={i}
            ref={(el) => addToRefs(el, isLeft ? leftImagesRef : rightImagesRef)}
            className="hero-image absolute z-10 p-1 lg:p-2 bg-white rounded-lg lg:rounded-2xl shadow-xl lg:shadow-2xl border border-gray-100 transition-transform duration-300 hover:scale-110 hover:rotate-0 cursor-pointer w-[90px] lg:w-[220px]"
            style={{
              "--m-top": img.mTop,
              "--m-left": img.mLeft,
              "--d-top": img.dTop,
              "--d-left": img.dLeft || "auto",
              "--d-right": img.dRight || "auto",
              transform: `translate(var(--tx), -50%) rotate(${img.rotate})`,
            }}
          >
            <img src={img.src} alt={`Gallery ${i}`} className="w-full h-auto rounded-md lg:rounded-xl object-cover" />
          </div>
        );
      })}

      <style jsx>{`
        .hero-image {
          top: var(--m-top);
          left: var(--m-left);
          right: auto;
          --tx: -50%;
        }
        @media (min-width: 1024px) {
          .hero-image {
            top: var(--d-top);
            left: var(--d-left);
            right: var(--d-right);
            --tx: 0;
          }
        }
      `}</style>

      {/* Main Content */}
      <div ref={textRef} className="relative z-30 max-w-4xl mx-auto px-4 text-center mt-20 lg:mt-12 mb-32">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            <span className="block text-gray-900 drop-shadow-md">Thanks for making</span>
            <span className="gradient-text block mt-2 drop-shadow-md">OSD2026</span>
            <span
              className="block mt-4 text-gray-800 drop-shadow-md italic"
              style={{
                fontFamily: '"Mrs Saint Delafield", cursive',
                fontSize: "clamp(3rem, 10vw, 5rem)",
                fontWeight: "400",
                lineHeight: "1"
              }}
            >
              Awesome
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12 tracking-wide uppercase italic">
            See you next year! 👋
          </p>

          {/* CTA Removed */}
        </div>
      </div>

      {/* Group Image overlapping at the bottom */}
      <div ref={groupImageRef} className="absolute bottom-[-60px] lg:bottom-[-130px] left-1/2 -translate-x-1/2 w-[140%] lg:w-[120%] max-w-[1400px] z-40 px-4 lg:px-0">
        <img
          src="/end/group.png"
          alt="OSD2026 Group Photo"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
