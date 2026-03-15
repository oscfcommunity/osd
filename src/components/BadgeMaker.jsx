import React, { useState, useRef, useCallback, useEffect } from "react";
import { EVENT, SITE, BRANDING } from "@/config/config";
import Cropper from "react-easy-crop";

const loadImage = (src) => {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
};

const templates = [
  {
    id: "speaker",
    title: "Speaking",
    subtitle: "Open Source Day 2026",
    color: "#10B981", // Emerald
    bgColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "attendee",
    title: "Attending",
    subtitle: "Open Source Day 2026",
    color: "#6366F1", // Indigo
    bgColor: "rgba(99, 102, 241, 0.15)",
  },
  {
    id: "volunteer",
    title: "Volunteering",
    subtitle: "Open Source Day 2026",
    color: "#F59E0B", // Amber
    bgColor: "rgba(245, 158, 11, 0.15)",
  },
];

const BackgroundGraphics = ({ color }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-60">
    {/* Tech Grid Background (CSS) */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Floating Icons */}
    <div className="absolute top-[10%] left-[5%] opacity-10 blur-[1px]">
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    </div>

    <div className="absolute bottom-[20%] left-[8%] opacity-20 blur-sm">
      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    </div>

    <div className="absolute top-[25%] right-[5%] opacity-15">
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    </div>

    <div className="absolute bottom-[15%] right-[10%] opacity-10">
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </div>

    <div className="absolute top-[60%] left-[2%] opacity-10">
      <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    </div>

    <div className="absolute top-[75%] right-[5%] opacity-[0.05]">
      <div className="text-9xl font-mono" style={{ color: color }}>{`{}`}</div>
    </div>

    <div className="absolute top-[5%] right-[25%] opacity-[0.05]">
      <div className="text-9xl font-mono" style={{ color: color }}>
        &lt;/&gt;
      </div>
    </div>

    {/* Gandhinagar Skyline Vector */}
    <div className="absolute bottom-0 left-0 right-0 w-full opacity-[0.07] pointer-events-none z-0 flex justify-center mt-auto" style={{ color: color }}>
      <svg viewBox="0 0 1440 320" className="w-full h-auto max-h-[30vh] object-cover object-bottom" preserveAspectRatio="xMidYMax slice" fill="currentColor">
        {/* Mahatma Mandir (Left) */}
        <path d="M100,320 L250,220 L400,220 L550,320 Z" fillOpacity="0.8" />
        <rect x="270" y="240" width="110" height="80" fillOpacity="0.4" />
        <path d="M150,320 L270,260 L380,260 L500,320 Z" fillOpacity="0.5" />

        {/* Dandi Kutir / Salt Mound (Center-Left) */}
        <path d="M500,320 L600,150 L660,150 L760,320 Z" fillOpacity="0.9" />
        <path d="M540,320 L610,200 L650,200 L720,320 Z" fill="#fff" fillOpacity="0.2" />

        {/* Gujarat Legislative Assembly (Center) */}
        <rect x="750" y="160" width="160" height="160" fillOpacity="0.8" />
        <rect x="730" y="180" width="200" height="140" fillOpacity="0.6" />
        <path d="M800,160 C800,100 860,100 860,160 Z" fillOpacity="0.9" />
        <rect x="805" y="130" width="50" height="30" fillOpacity="0.4" />
        <rect x="825" y="60" width="10" height="70" fillOpacity="0.8" />
        <circle cx="830" cy="50" r="10" fillOpacity="0.9" />

        {/* Modern Buildings (Right) */}
        <rect x="980" y="140" width="80" height="180" fillOpacity="0.7" />
        <rect x="1000" y="90" width="40" height="50" fillOpacity="0.8" />
        <path d="M1000,90 L1020,40 L1040,90 Z" fillOpacity="0.9" />

        <rect x="1100" y="180" width="60" height="140" fillOpacity="0.6" />
        <rect x="1120" y="120" width="20" height="60" fillOpacity="0.7" />

        <rect x="1200" y="200" width="90" height="120" fillOpacity="0.8" />
        <path d="M1200,200 L1245,150 L1290,200 Z" fillOpacity="0.5" />

        <rect x="50" y="240" width="70" height="80" fillOpacity="0.7" />
        <rect x="20" y="200" width="40" height="120" fillOpacity="0.6" />

        <rect x="1320" y="220" width="80" height="100" fillOpacity="0.7" />
        <rect x="1350" y="180" width="30" height="40" fillOpacity="0.8" />

        {/* Base Line */}
        <rect x="0" y="315" width="1440" height="5" fillOpacity="1" />
      </svg>
    </div>

    {/* Bottom/Secondary Glow */}
    <div
      className="absolute bottom-[-10%] left-[80%] -translate-x-1/2 w-[800px] h-[600px] opacity-[0.15] pointer-events-none transition-colors duration-700 mix-blend-multiply"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
        filter: "blur(100px)",
      }}
    ></div>
  </div>
);

const BadgeMaker = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("attendee");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [canNativeShare, setCanNativeShare] = useState(false);

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  // Load necessary premium fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setTimeout(() => setFontsLoaded(true), 1000);
    }
  }, []);

  const currentTemplate = templates.find((t) => t.id === selectedTemplate) || templates[1];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setIsCropping(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImg = (imageSrc, pixelCrop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
        resolve(canvas.toDataURL("image/png", 1.0));
      };
      image.onerror = reject;
    });
  };

  const drawBadge = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas || !fontsLoaded) return;
    const ctx = canvas.getContext("2d");

    const width = 800;
    const height = 1150;
    canvas.width = width;
    canvas.height = height;

    // Antialiasing for high-quality export
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.clearRect(0, 0, width, height);

    // 1. Base Background Fill (Light)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    // 2. Tech Grid Pattern
    ctx.strokeStyle = "rgba(0,0,0,0.03)";
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2.5 Neural Network / Geometric Lines
    const drawNetwork = () => {
      // Fixed seed per template so the background doesn't jitter on user input
      let seed = currentTemplate.id.charCodeAt(0) + currentTemplate.id.charCodeAt(currentTemplate.id.length - 1);
      const random = () => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      };

      const nodes = [];
      const numNodes = 40;
      for (let i = 0; i < numNodes; i++) {
        nodes.push({ x: random() * width, y: random() * height });
      }

      ctx.strokeStyle = "rgba(0,0,0,0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
          }
        }
      }
      ctx.stroke();

      // Draw node dots
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    drawNetwork();

    // 3. Radial Glows for depth
    const topGlow = ctx.createRadialGradient(width / 2, 350, 0, width / 2, 350, 600);
    topGlow.addColorStop(0, `${currentTemplate.color}26`); // 15% opacity
    topGlow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = topGlow;
    ctx.fillRect(0, 0, width, height);

    const bottomGlow = ctx.createRadialGradient(width / 2, height, 0, width / 2, height, 600);
    bottomGlow.addColorStop(0, `${currentTemplate.color}14`); // 8% opacity
    bottomGlow.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = bottomGlow;
    ctx.fillRect(0, 0, width, height);

    // 4. Border Accents
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Cyberpunk Corner Highlights
    const drawCorner = (x, y, isLeft, isTop) => {
      ctx.beginPath();
      ctx.moveTo(x + (isLeft ? 30 : -30), y);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + (isTop ? 30 : -30));
      ctx.strokeStyle = currentTemplate.color;
      ctx.lineWidth = 4;
      ctx.stroke();
    };
    drawCorner(20, 20, true, true);
    drawCorner(width - 20, 20, false, true);
    drawCorner(20, height - 20, true, false);
    drawCorner(width - 20, height - 20, false, false);

    // Load assets in parallel
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="1440" height="320">
        <g fill="${currentTemplate.color}">
          <path d="M100,320 L250,220 L400,220 L550,320 Z" fill-opacity="0.8" />
          <rect x="270" y="240" width="110" height="80" fill-opacity="0.4" />
          <path d="M150,320 L270,260 L380,260 L500,320 Z" fill-opacity="0.5" />
          <path d="M500,320 L600,150 L660,150 L760,320 Z" fill-opacity="0.9" />
          <path d="M540,320 L610,200 L650,200 L720,320 Z" fill="#ffffff" fill-opacity="0.2" />
          <rect x="750" y="160" width="160" height="160" fill-opacity="0.8" />
          <rect x="730" y="180" width="200" height="140" fill-opacity="0.6" />
          <path d="M800,160 C800,100 860,100 860,160 Z" fill-opacity="0.9" />
          <rect x="805" y="130" width="50" height="30" fill-opacity="0.4" />
          <rect x="825" y="60" width="10" height="70" fill-opacity="0.8" />
          <circle cx="830" cy="50" r="10" fill-opacity="0.9" />
          <rect x="980" y="140" width="80" height="180" fill-opacity="0.7" />
          <rect x="1000" y="90" width="40" height="50" fill-opacity="0.8" />
          <path d="M1000,90 L1020,40 L1040,90 Z" fill-opacity="0.9" />
          <rect x="1100" y="180" width="60" height="140" fill-opacity="0.6" />
          <rect x="1120" y="120" width="20" height="60" fill-opacity="0.7" />
          <rect x="1200" y="200" width="90" height="120" fill-opacity="0.8" />
          <path d="M1200,200 L1245,150 L1290,200 Z" fill-opacity="0.5" />
          <rect x="50" y="240" width="70" height="80" fill-opacity="0.7" />
          <rect x="20" y="200" width="40" height="120" fill-opacity="0.6" />
          <rect x="1320" y="220" width="80" height="100" fill-opacity="0.7" />
          <rect x="1350" y="180" width="30" height="40" fill-opacity="0.8" />
          <rect x="0" y="315" width="1440" height="5" fill-opacity="1" />
        </g>
      </svg>
    `;
    const svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);

    // Select a random mascot
    const mascotNumber = Math.floor(Math.random() * 10) + 1;
    const mascotPad = mascotNumber.toString().padStart(2, "0");
    const mascotPath = `/src/assets/Mascot/Group ${mascotPad}.svg`;

    // Make an object URL or try to load relative for Vite
    // React-easy-crop / local dev setup may need direct import, but for canvas we can just use the path
    const [logoObj, imgObj, skylineObj, mascotObj] = await Promise.all([
      loadImage(typeof BRANDING.logos.main === "string" ? BRANDING.logos.main : BRANDING.logos.main?.src),
      loadImage(uploadedImage),
      loadImage(svgUrl),
      loadImage(mascotPath),
    ]);

    if (skylineObj) {
      ctx.save();
      ctx.globalAlpha = 0.07;
      const drawH = width / 4.5;
      ctx.drawImage(skylineObj, 0, height - drawH, width, drawH);
      ctx.restore();
    }

    // 5. Logo placement (Top Center)
    if (logoObj) {
      ctx.save();
      ctx.globalAlpha = 1.0;
      const maxW = 280;
      const maxH = 100;
      let logoW = logoObj.width;
      let logoH = logoObj.height;
      const scale = Math.min(maxW / logoW, maxH / logoH);
      const drawW = logoW * scale;
      const drawH = logoH * scale;
      ctx.drawImage(logoObj, (width - drawW) / 2, 50, drawW, drawH);
      ctx.restore();
    } else {
      ctx.fillStyle = "#111827";
      ctx.font = "800 48px 'Space Grotesk'";
      ctx.textAlign = "center";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0,0,0,0.1)";
      ctx.fillText("OPEN SOURCE DAY", width / 2, 100);
      ctx.shadowBlur = 0;
    }

    // 6. Header Texts
    ctx.fillStyle = currentTemplate.color;
    ctx.font = "600 20px 'JetBrains Mono'";
    ctx.textAlign = "center";
    ctx.fillText("// 2026 EDITION", width / 2, 195);

    // Decorative Tech Icons
    const drawNodesIcon = (cx, cy, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      // nodes
      ctx.arc(cx, cy - 10, 4, 0, Math.PI * 2);
      ctx.arc(cx - 10, cy + 10, 4, 0, Math.PI * 2);
      ctx.arc(cx + 10, cy + 10, 4, 0, Math.PI * 2);
      ctx.fill();
      // links
      ctx.beginPath();
      ctx.moveTo(cx, cy - 10);
      ctx.lineTo(cx - 10, cy + 10);
      ctx.moveTo(cx, cy - 10);
      ctx.lineTo(cx + 10, cy + 10);
      ctx.moveTo(cx - 10, cy + 10);
      ctx.lineTo(cx + 10, cy + 10);
      ctx.stroke();
      ctx.restore();
    };

    const drawCodeIcon = (cx, cy, color) => {
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(cx - 5, cy - 8);
      ctx.lineTo(cx - 12, cy);
      ctx.lineTo(cx - 5, cy + 8);
      ctx.moveTo(cx + 5, cy - 8);
      ctx.lineTo(cx + 12, cy);
      ctx.lineTo(cx + 5, cy + 8);
      ctx.moveTo(cx + 2, cy - 10);
      ctx.lineTo(cx - 2, cy + 10);
      ctx.stroke();
      ctx.restore();
    };

    drawNodesIcon(60, 160, "rgba(0,0,0,0.4)");
    drawCodeIcon(width - 60, 160, "rgba(0,0,0,0.4)");

    // 6.5 Draw Mascot Background Decal
    if (mascotObj) {
      ctx.save();
      ctx.globalAlpha = 0.15; // Keep it subtle so it doesn't overpower text
      // Pick a random side and rotate slightly
      const isLeft = currentTemplate.id.length % 2 === 0;
      const mSize = 400;

      ctx.translate(isLeft ? width * 0.15 : width * 0.85, height * 0.4);
      ctx.rotate(((isLeft ? -15 : 15) * Math.PI) / 180);
      ctx.drawImage(mascotObj, -mSize / 2, -mSize / 2, mSize, mSize);
      ctx.restore();
    }

    // 7. Avatar Section
    const avatarY = 440;
    const avatarSize = 360;

    // HUD Rings around avatar
    ctx.save();
    ctx.translate(width / 2, avatarY);

    // Thin outer ring
    ctx.beginPath();
    ctx.arc(0, 0, avatarSize / 2 + 35, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0,0,0,0.05)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Colored segmented ring
    ctx.beginPath();
    ctx.arc(0, 0, avatarSize / 2 + 20, 0, Math.PI * 2);
    ctx.strokeStyle = currentTemplate.color;
    ctx.lineWidth = 3;
    ctx.setLineDash([35, 15, 10, 15]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Side brackets
    ctx.beginPath();
    ctx.arc(0, 0, avatarSize / 2 + 45, -Math.PI / 6, Math.PI / 6);
    ctx.strokeStyle = `${currentTemplate.color}80`;
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, avatarSize / 2 + 45, Math.PI - Math.PI / 6, Math.PI + Math.PI / 6);
    ctx.stroke();
    ctx.restore();

    // The image itself
    if (imgObj) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, avatarY, avatarSize / 2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(imgObj, width / 2 - avatarSize / 2, avatarY - avatarSize / 2, avatarSize, avatarSize);
      ctx.restore();

      // Inner Glow Stroke
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, avatarY, avatarSize / 2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,0,0,0.1)";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.restore();
    } else {
      // Placeholder
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, avatarY, avatarSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = "#f3f4f6"; // gray-100
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.font = "400 24px 'JetBrains Mono'";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AWAITING UPLOAD", width / 2, avatarY);
      ctx.restore();
    }

    // 8. Name & Company Section
    const nameY = avatarY + avatarSize / 2 + 80;
    ctx.textBaseline = "middle";
    const nameText = userName.trim() || "JOHN DOE";
    let fontSize = 64;
    ctx.font = `800 ${fontSize}px 'Space Grotesk'`;
    while (ctx.measureText(nameText.toUpperCase()).width > width - 120 && fontSize > 36) {
      fontSize -= 4;
      ctx.font = `800 ${fontSize}px 'Space Grotesk'`;
    }
    ctx.fillStyle = "#111827";
    ctx.textAlign = "center";
    ctx.fillText(nameText.toUpperCase(), width / 2, nameY);

    // Company & Custom Role
    const companyText = companyName.trim();
    const roleInputText = userRole.trim();
    let compY = nameY + 45;

    if (companyText || roleInputText) {
      let displayStr = "";
      if (roleInputText && companyText) {
        displayStr = `${roleInputText} @ ${companyText}`;
      } else if (roleInputText) {
        displayStr = roleInputText;
      } else {
        displayStr = `@ ${companyText}`;
      }

      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.font = "600 24px 'Space Grotesk'";
      ctx.fillText(displayStr, width / 2, compY);
    } else {
      compY = nameY; // offset if no company/role
    }

    // 9. Template Tag
    const roleY = compY + 55;
    const roleText = `< ${currentTemplate.title.toUpperCase()} />`;
    ctx.font = "700 22px 'JetBrains Mono'";
    const roleWidth = ctx.measureText(roleText).width;

    // Pill background - Updated for better highlight
    ctx.shadowColor = "rgba(0,0,0,0.2)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 4;
    ctx.fillStyle = currentTemplate.color; // Solid vibrant color
    const pillPadding = 30;
    ctx.beginPath();
    ctx.roundRect(width / 2 - roleWidth / 2 - pillPadding, roleY - 24, roleWidth + pillPadding * 2, 48, 8);
    ctx.fill();

    // Reset shadow for pill stroke
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = "#ffffff"; // Bold white text for contrast
    ctx.fillText(roleText, width / 2, roleY);

    // 9.5 Extra Event Text Below Tag
    const osdY1 = roleY + 65;
    ctx.font = `800 ${fontSize}px 'Space Grotesk'`;

    // Draw "OPEN SOURCE DAY"
    const osdText1 = "OPEN SOURCE DAY";
    const osdWidth1 = ctx.measureText(osdText1).width;
    const gradient1 = ctx.createLinearGradient(width / 2 - osdWidth1 / 2, osdY1, width / 2 + osdWidth1 / 2, osdY1);
    gradient1.addColorStop(0, "#111827");
    gradient1.addColorStop(1, currentTemplate.color);

    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = gradient1;
    ctx.fillText(osdText1, width / 2, osdY1);

    // Draw "2026" below it
    const osdY2 = osdY1 + fontSize * 1.1;
    const osdText2 = "2026";
    const osdWidth2 = ctx.measureText(osdText2).width;
    const gradient2 = ctx.createLinearGradient(width / 2 - osdWidth2 / 2, osdY2, width / 2 + osdWidth2 / 2, osdY2);
    gradient2.addColorStop(0, "#111827");
    gradient2.addColorStop(1, currentTemplate.color);
    ctx.fillStyle = gradient2;
    ctx.fillText(osdText2, width / 2, osdY2);

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // 10. Bottom Details Area
    const bottomY = height - 160;

    // Tech Divider
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, bottomY - 40);
    ctx.lineTo(width - 50, bottomY - 40);
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.font = "500 16px 'JetBrains Mono'";
    ctx.fillText("> SYS.DATE", 50, bottomY);
    ctx.fillStyle = "#111827";
    ctx.font = "500 22px 'Space Grotesk'";
    ctx.fillText("04 APRIL 2026", 50, bottomY + 28);

    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.font = "500 16px 'JetBrains Mono'";
    ctx.fillText("> LOCATION", 50, bottomY + 75);
    ctx.fillStyle = "#111827";
    ctx.font = "500 22px 'Space Grotesk'";
    ctx.fillText("GANDHINAGAR, IN", 50, bottomY + 103);

    // Barcode signature
    const drawBarcode = (x, y, w, h) => {
      ctx.fillStyle = "#111827";
      let currX = x;
      let seed = 1234;
      for (let i = 0; i < nameText.length; i++) seed += nameText.charCodeAt(i);
      const random = () => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      };

      while (currX < x + w) {
        const barW = random() > 0.5 ? 2 : random() > 0.8 ? 6 : 3;
        const gap = random() > 0.5 ? 2 : 4;
        if (currX + barW <= x + w) {
          ctx.ctxAlpha = 0.9;
          ctx.fillRect(currX, y, barW, h);
        }
        currX += barW + gap;
      }
    };
    drawBarcode(width - 270, bottomY - 5, 220, 40);

    ctx.textAlign = "right";
    ctx.fillStyle = currentTemplate.color;
    ctx.font = "600 14px 'JetBrains Mono'";
    ctx.fillText(`ID: OSD-2026-${currentTemplate.id.slice(0, 3).toUpperCase()}`, width - 50, bottomY + 60);
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.font = "500 12px 'Space Grotesk'";
    ctx.fillText("AUTHORIZED ACCESS ONLY", width - 50, bottomY + 80);
  }, [uploadedImage, userName, userRole, companyName, selectedTemplate, currentTemplate, fontsLoaded]);

  useEffect(() => {
    drawBadge();
  }, [drawBadge]);

  useEffect(() => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanNativeShare(true);
    }
  }, []);

  const downloadBadge = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `osd-2026-${selectedTemplate}-pass.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  };

  const shareToSocial = async (platform) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const fullText = `${userName.trim() ? `${userName} is` : `I'm`} attending ${EVENT.name}! Join us on ${EVENT.date} #OpenSourceDay2026`;
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

    if (platform === "native" && typeof navigator !== "undefined" && navigator.share) {
      try {
        const file = new File([blob], `osd-2026-pass.png`, { type: "image/png" });
        await navigator.share({
          title: "My OSD 2026 Pass",
          text: fullText,
          files: [file],
        });
        return;
      } catch (error) {
        console.log("Native share failed");
      }
    }

    const currentHref = typeof window !== "undefined" ? window.location.href : "";
    const shareUrls = {
      x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}&url=${encodeURIComponent(currentHref)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentHref)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentHref)}&quote=${encodeURIComponent(fullText)}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText + " " + currentHref)}`,
    };

    if (platform === "instagram") {
      try {
        if (typeof navigator !== "undefined" && navigator.clipboard && typeof ClipboardItem !== "undefined") {
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          alert("Badge copied to clipboard! Open Instagram to paste and share your story.");
        }
      } catch (e) {
        alert("Please download the image first to share on Instagram.");
      }
      return;
    }

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && typeof ClipboardItem !== "undefined") {
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      } else {
        throw new Error("Clipboard API not available");
      }
    } catch (err) {
      alert("Failed to copy to clipboard. Please download the image instead.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 relative overflow-hidden font-sans">
      <BackgroundGraphics color={currentTemplate.color} />

      {/* Background Ambience */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-[0.1] pointer-events-none transition-colors duration-700 mix-blend-multiply"
        style={{
          background: `radial-gradient(circle, ${currentTemplate.color} 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Delegate <span style={{ color: currentTemplate.color }}>Pass</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Generate your personalized, high-tech lanyard ID for Open Source Day 2026.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-8">
            {/* Step 1: Identity */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-gray-200">
                  1
                </span>
                <span>Identification</span>
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-white text-gray-900 px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all placeholder-gray-400 shadow-sm"
                  style={{ focusRing: currentTemplate.color }}
                />
                <input
                  type="text"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  placeholder="Your Role (Optional)"
                  className="w-full bg-white text-gray-900 px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all placeholder-gray-400 shadow-sm"
                  style={{ focusRing: currentTemplate.color }}
                />
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company / Community (Optional)"
                  className="w-full bg-white text-gray-900 px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent outline-none transition-all placeholder-gray-400 shadow-sm"
                  style={{ focusRing: currentTemplate.color }}
                />
              </div>
            </div>

            {/* Step 2: Access Level */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-gray-200">
                  2
                </span>
                <span>Access Level</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`relative overflow-hidden p-4 rounded-xl border transition-all duration-300 flex items-center space-x-4 ${
                      selectedTemplate === template.id
                        ? `bg-gray-50 border-[color:var(--t-color)] shadow-[0_4px_15px_var(--t-glow)]`
                        : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm"
                    }`}
                    style={{
                      "--t-color": template.color,
                      "--t-glow": `${template.color}30`,
                    }}
                  >
                    <div className="w-4 h-4 rounded-full shadow-md" style={{ backgroundColor: template.color }}></div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 tracking-wide">{template.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Biometrics */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-gray-200">
                  3
                </span>
                <span>Biometric Data</span>
              </h2>

              {!uploadedImage ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="text-gray-400 mb-4 group-hover:text-gray-500 transition-colors">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Click to scan image</p>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </div>
              ) : (
                <div className="space-y-4">
                  {isCropping && (
                    <div className="w-full">
                      <div className="relative w-full h-[300px] bg-black rounded-xl overflow-hidden shadow-inner border border-gray-200">
                        <Cropper
                          image={uploadedImage}
                          crop={crop}
                          zoom={zoom}
                          aspect={1}
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onCropComplete={(_, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
                          showGrid={false}
                        />
                      </div>
                      <div className="flex flex-col items-center space-y-4 mt-6">
                        <input
                          type="range"
                          min={1}
                          max={3}
                          step={0.1}
                          value={zoom}
                          onChange={(e) => setZoom(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex space-x-3 w-full">
                          <button
                            className="flex-1 bg-gray-200 text-gray-800 font-semibold px-4 py-3 rounded-xl hover:bg-gray-300 transition"
                            onClick={() => setIsCropping(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="flex-1 text-white font-semibold px-4 py-3 rounded-xl transition hover:opacity-90"
                            style={{ backgroundColor: currentTemplate.color }}
                            onClick={async () => {
                              const croppedImg = await getCroppedImg(uploadedImage, croppedAreaPixels);
                              setUploadedImage(croppedImg);
                              setIsCropping(false);
                            }}
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isCropping && (
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="w-full bg-red-50 text-red-600 font-medium px-4 py-3 rounded-xl border border-red-200 hover:bg-red-100 transition-colors"
                    >
                      Clear Data
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Badge Preview Panel */}
          <div className="lg:col-span-7 flex flex-col items-center sticky top-8">
            <div className="relative w-full max-w-[450px] aspect-[800/1150]">
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded-none shadow-2xl transition-all duration-500"
                style={{
                  boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5)`,
                  border: `1px solid ${currentTemplate.color}30`,
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="w-full max-w-[450px] mt-8 grid grid-cols-2 gap-4">
              <button
                onClick={downloadBadge}
                className="col-span-2 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] text-white shadow-md hover:shadow-lg"
                style={{ backgroundColor: currentTemplate.color }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Export Pass</span>
              </button>

              <button
                onClick={copyToClipboard}
                className="col-span-2 bg-white text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition flex items-center justify-center space-x-2 border border-gray-200 shadow-sm hover:shadow"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copy to Clipboard</span>
              </button>

              {/* Social Share Icons Row */}
              <div className="col-span-2 flex flex-col items-center mt-4 space-y-3">
                <span className="text-gray-500 font-medium text-sm tracking-wide">Share that you are attending:</span>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => shareToSocial("x")}
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition hover:scale-110 shadow-sm"
                    title="Share on X"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => shareToSocial("linkedin")}
                    className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center transition hover:scale-110 shadow-sm"
                    title="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => shareToSocial("instagram")}
                    className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center transition hover:scale-110 shadow-sm"
                    title="Copy for Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => shareToSocial("whatsapp")}
                    className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center transition hover:scale-110 shadow-sm"
                    title="Share on WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => shareToSocial("facebook")}
                    className="w-12 h-12 rounded-full bg-[#1877f2] text-white flex items-center justify-center transition hover:scale-110 shadow-sm"
                    title="Share on Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeMaker;
