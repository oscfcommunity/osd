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
        backgroundSize: "60px 60px"
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
      <div className="text-9xl font-mono" style={{ color: color }}>&lt;/&gt;</div>
    </div>

    {/* Bottom/Secondary Glow */}
    <div
      className="absolute bottom-[-10%] left-[80%] -translate-x-1/2 w-[800px] h-[600px] opacity-[0.15] pointer-events-none transition-colors duration-700 mix-blend-multiply"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
        filter: "blur(100px)"
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
    link.href =
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap";
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
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
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

    // 1. Base Background Fill (Deep Zinc/Cyber dark)
    ctx.fillStyle = "#09090b";
    ctx.fillRect(0, 0, width, height);

    // 2. Tech Grid Pattern
    ctx.strokeStyle = "rgba(255,255,255,0.03)";
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
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

      ctx.strokeStyle = "rgba(255,255,255,0.06)";
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
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    drawNetwork();

    // 3. Radial Glows for depth
    const topGlow = ctx.createRadialGradient(width / 2, 350, 0, width / 2, 350, 600);
    topGlow.addColorStop(0, `${currentTemplate.color}26`); // 15% opacity
    topGlow.addColorStop(1, "transparent");
    ctx.fillStyle = topGlow;
    ctx.fillRect(0, 0, width, height);

    const bottomGlow = ctx.createRadialGradient(width / 2, height, 0, width / 2, height, 600);
    bottomGlow.addColorStop(0, `${currentTemplate.color}14`); // 8% opacity
    bottomGlow.addColorStop(1, "transparent");
    ctx.fillStyle = bottomGlow;
    ctx.fillRect(0, 0, width, height);

    // 4. Border Accents
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
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
    const [logoObj, imgObj] = await Promise.all([
      loadImage(typeof BRANDING.logos.main === "string" ? BRANDING.logos.main : BRANDING.logos.main?.src),
      loadImage(uploadedImage)
    ]);

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
      ctx.fillStyle = "#ffffff";
      ctx.font = "800 48px 'Space Grotesk'";
      ctx.textAlign = "center";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
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
      ctx.moveTo(cx, cy - 10); ctx.lineTo(cx - 10, cy + 10);
      ctx.moveTo(cx, cy - 10); ctx.lineTo(cx + 10, cy + 10);
      ctx.moveTo(cx - 10, cy + 10); ctx.lineTo(cx + 10, cy + 10);
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
      ctx.moveTo(cx - 5, cy - 8); ctx.lineTo(cx - 12, cy); ctx.lineTo(cx - 5, cy + 8);
      ctx.moveTo(cx + 5, cy - 8); ctx.lineTo(cx + 12, cy); ctx.lineTo(cx + 5, cy + 8);
      ctx.moveTo(cx + 2, cy - 10); ctx.lineTo(cx - 2, cy + 10);
      ctx.stroke();
      ctx.restore();
    };

    drawNodesIcon(60, 160, "rgba(255,255,255,0.4)");
    drawCodeIcon(width - 60, 160, "rgba(255,255,255,0.4)");

    // 7. Avatar Section
    const avatarY = 440;
    const avatarSize = 360;

    // HUD Rings around avatar
    ctx.save();
    ctx.translate(width / 2, avatarY);

    // Thin outer ring
    ctx.beginPath();
    ctx.arc(0, 0, avatarSize / 2 + 35, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
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
    ctx.beginPath(); ctx.arc(0, 0, avatarSize / 2 + 45, -Math.PI / 6, Math.PI / 6);
    ctx.strokeStyle = `${currentTemplate.color}80`; ctx.lineWidth = 4; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, avatarSize / 2 + 45, Math.PI - Math.PI / 6, Math.PI + Math.PI / 6);
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
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.restore();
    } else {
      // Placeholder
      ctx.save();
      ctx.beginPath();
      ctx.arc(width / 2, avatarY, avatarSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = "#18181b"; // zinc-900
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "rgba(255,255,255,0.2)";
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
    ctx.fillStyle = "#ffffff";
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

      ctx.fillStyle = "rgba(255,255,255,0.7)";
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

    // Pill background
    ctx.fillStyle = currentTemplate.bgColor;
    const pillPadding = 30;
    ctx.beginPath();
    ctx.roundRect(width / 2 - roleWidth / 2 - pillPadding, roleY - 24, roleWidth + pillPadding * 2, 48, 8);
    ctx.fill();
    ctx.strokeStyle = `${currentTemplate.color}40`;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = currentTemplate.color;
    ctx.fillText(roleText, width / 2, roleY);

    // 10. Bottom Details Area
    const bottomY = height - 160;

    // Tech Divider
    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, bottomY - 40);
    ctx.lineTo(width - 50, bottomY - 40);
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "500 16px 'JetBrains Mono'";
    ctx.fillText("> SYS.DATE", 50, bottomY);
    ctx.fillStyle = "#ffffff";
    ctx.font = "500 22px 'Space Grotesk'";
    ctx.fillText("04 APRIL 2026", 50, bottomY + 28);

    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "500 16px 'JetBrains Mono'";
    ctx.fillText("> LOCATION", 50, bottomY + 75);
    ctx.fillStyle = "#ffffff";
    ctx.font = "500 22px 'Space Grotesk'";
    ctx.fillText("AHMEDABAD, IN", 50, bottomY + 103);

    // Barcode signature
    const drawBarcode = (x, y, w, h) => {
      ctx.fillStyle = "#ffffff";
      let currX = x;
      let seed = 1234;
      for (let i = 0; i < nameText.length; i++) seed += nameText.charCodeAt(i);
      const random = () => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
      };

      while (currX < x + w) {
        const barW = random() > 0.5 ? 2 : (random() > 0.8 ? 6 : 3);
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
    ctx.fillStyle = "rgba(255,255,255,0.3)";
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
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}&url=${encodeURIComponent(currentHref)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentHref)}&summary=${encodeURIComponent(fullText)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentHref)}&quote=${encodeURIComponent(fullText)}`,
    };

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
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
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
          filter: "blur(80px)"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Delegate <span style={{ color: currentTemplate.color }}>Pass</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Generate your personalized, high-tech lanyard ID for Open Source Day 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-8">

            {/* Step 1: Identity */}
            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-gray-200">1</span>
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
                <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-gray-200">2</span>
                <span>Access Level</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`relative overflow-hidden p-4 rounded-xl border transition-all duration-300 flex items-center space-x-4 ${selectedTemplate === template.id
                      ? `bg-gray-50 border-[color:var(--t-color)] shadow-[0_4px_15px_var(--t-glow)]`
                      : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm"
                      }`}
                    style={{
                      '--t-color': template.color,
                      '--t-glow': `${template.color}30`,
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
                <span className="bg-gray-100 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border border-gray-200">3</span>
                <span>Biometric Data</span>
              </h2>

              {!uploadedImage ? (
                <div
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="text-gray-400 mb-4 group-hover:text-gray-500 transition-colors">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                          min={1} max={3} step={0.1}
                          value={zoom}
                          onChange={(e) => setZoom(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex space-x-3 w-full">
                          <button className="flex-1 bg-gray-200 text-gray-800 font-semibold px-4 py-3 rounded-xl hover:bg-gray-300 transition" onClick={() => setIsCropping(false)}>
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
                className="w-full h-full rounded-[2rem] shadow-2xl transition-all duration-500"
                style={{
                  boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5)`,
                  border: `1px solid ${currentTemplate.color}30`
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                <span>Export Pass</span>
              </button>

              <button
                onClick={copyToClipboard}
                className="col-span-1 bg-white text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition flex items-center justify-center space-x-2 border border-gray-200 shadow-sm hover:shadow"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <span>Copy</span>
              </button>

              <button
                onClick={() => shareToSocial("twitter")}
                className="col-span-1 bg-[#1DA1F2]/10 text-[#1DA1F2] border border-[#1DA1F2]/20 py-3 rounded-xl font-semibold hover:bg-[#1DA1F2]/20 transition flex items-center justify-center space-x-2 shadow-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                <span>Share</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeMaker;
