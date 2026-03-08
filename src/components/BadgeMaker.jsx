import React, { useState, useRef, useCallback } from "react";
import { BRANDING, EVENT, SITE } from "@/config/config";
import Cropper from "react-easy-crop";

const BadgeMaker = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("volunteer");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: -350, y: -180 });
  const [imageScale, setImageScale] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [userName, setUserName] = useState("");
  const [canNativeShare, setCanNativeShare] = useState(false);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isCropping, setIsCropping] = useState(false);

  const templates = [
    {
      id: "speaker",
      title: "Speaking",
      subtitle: "Open Source Day 2026",
      color: "#22c55e",
      bgGradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    },
    {
      id: "attendee",
      title: "Attending",
      subtitle: "Open Source Day 2026",
      color: "#3b82f6",
      bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    {
      id: "volunteer",
      title: "Volunteering",
      subtitle: "Open Source Day 2026",
      color: "#f59e0b",
      bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
  ];

  const currentTemplate = templates.find((t) => t.id === selectedTemplate);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setIsCropping(true); // start cropping mode
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e) => {
    if (!uploadedImage) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - imagePosition.x,
      y: e.clientY - imagePosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !uploadedImage) return;
    setImagePosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
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

        resolve(canvas.toDataURL("image/png"));
      };
      image.onerror = reject;
    });
  };

  const drawBadge = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = 800;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    /* -------------------------
      Pick Template Dynamically
  -------------------------- */
    const template = templates.find((t) => t.id === currentTemplate.id) || templates[1]; // default attendee
    const gradientColors = template.bgGradient.match(/#([0-9a-f]{6}|[0-9a-f]{3})/gi) || [template.color, template.color];

    /* -------------------------
      Gradient Background + Glow
  -------------------------- */
    const bgGradient = ctx.createLinearGradient(0, 0, width, height);
    bgGradient.addColorStop(0, gradientColors[0]);
    bgGradient.addColorStop(1, gradientColors[1]);
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle radial glow behind avatar
    const glowGradient = ctx.createRadialGradient(width / 2, 370, 120, width / 2, 370, 300);
    glowGradient.addColorStop(0, "rgba(255,255,255,0.15)");
    glowGradient.addColorStop(1, "transparent");
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, width, height);

    /* -------------------------
      Grid Layer
  -------------------------- */
    const gridSpacing = 80;
    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    /* -------------------------
      Neural Network Layer (Glowing)
  -------------------------- */
    const drawNeuralNetwork = (ctx, width, height, nodes = 40) => {
      const points = [];
      for (let i = 0; i < nodes; i++) {
        points.push({ x: Math.random() * width, y: Math.random() * height });
      }

      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 1;
      ctx.shadowColor = template.color;
      ctx.shadowBlur = 8;

      for (let i = 0; i < nodes; i++) {
        for (let j = i + 1; j < nodes; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.shadowBlur = 0;
    };
    drawNeuralNetwork(ctx, width, height);

    /* -------------------------
      Top Title
  -------------------------- */
    ctx.fillStyle = "#fff";
    ctx.font = "800 54px Inter";
    ctx.textAlign = "center";
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 6;
    ctx.fillText("Open Source Day", width / 2, 120);
    ctx.shadowBlur = 0;

    /* -------------------------
      Logo Top-left
  -------------------------- */
    try {
      const logoUrl = typeof BRANDING.logos.green === "string" ? BRANDING.logos.green : BRANDING.logos.green?.src || BRANDING.logos.green;

      if (logoUrl) {
        const logo = new Image();
        logo.onload = () => {
          const maxW = 160;
          const maxH = 70;
          let w = logo.width;
          let h = logo.height;
          const scale = Math.min(maxW / w, maxH / h);
          w *= scale;
          h *= scale;
          ctx.drawImage(logo, 50, 50, w, h);
        };
        logo.src = logoUrl;
      }
    } catch {}

    /* -------------------------
      Centered Avatar with Neon Ring
  -------------------------- */
    const avatarSize = 240;
    const avatarX = width / 2 - avatarSize / 2;
    const avatarY = 250;

    if (uploadedImage) {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.shadowColor = "rgba(255,255,255,0.25)";
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(width / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, avatarX, avatarY, avatarSize, avatarSize);
        ctx.restore();

        // Neon ring
        ctx.save();
        ctx.lineWidth = 8;
        ctx.strokeStyle = template.color;
        ctx.shadowColor = template.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(width / 2, avatarY + avatarSize / 2, avatarSize / 2 + 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // White border
        ctx.lineWidth = 6;
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        ctx.arc(width / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
        ctx.stroke();
      };
      img.src = uploadedImage;
    }

    /* -------------------------
      User Name
  -------------------------- */
    ctx.fillStyle = "#fff";
    ctx.font = "700 64px Inter";
    ctx.textAlign = "center";
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 6;
    ctx.fillText(userName, width / 2, avatarY + avatarSize + 80);
    ctx.shadowBlur = 0;

    /* -------------------------
      Role Pill with Gradient
  -------------------------- */
    const roleText = template.title.toUpperCase();
    ctx.font = "600 20px Inter";
    const roleWidth = ctx.measureText(roleText).width + 40;
    const roleHeight = 40;
    const pillX = width / 2 - roleWidth / 2;
    const pillY = avatarY + avatarSize + 100;
    const radius = 20;

    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(pillX + radius, pillY);
    ctx.lineTo(pillX + roleWidth - radius, pillY);
    ctx.quadraticCurveTo(pillX + roleWidth, pillY, pillX + roleWidth, pillY + radius);
    ctx.lineTo(pillX + roleWidth, pillY + roleHeight - radius);
    ctx.quadraticCurveTo(pillX + roleWidth, pillY + roleHeight, pillX + roleWidth - radius, pillY + roleHeight);
    ctx.lineTo(pillX + radius, pillY + roleHeight);
    ctx.quadraticCurveTo(pillX, pillY + roleHeight, pillX, pillY + roleHeight - radius);
    ctx.lineTo(pillX, pillY + radius);
    ctx.quadraticCurveTo(pillX, pillY, pillX + radius, pillY);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    const textGradient = ctx.createLinearGradient(pillX, 0, pillX + roleWidth, 0);
    textGradient.addColorStop(0, "white");
    textGradient.addColorStop(1, "white");
    ctx.fillStyle = textGradient;
    ctx.fillText(roleText, width / 2, pillY + 26);

    /* -------------------------
      Event Details Bottom-left
  -------------------------- */
    ctx.textAlign = "left";
    ctx.font = "500 26px Inter";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.fillText(EVENT.date, 50, height - 140);
    ctx.font = "500 24px Inter";
    ctx.fillText(EVENT.location, 50, height - 100);

    /* -------------------------
      Website Bottom-left
  -------------------------- */
    ctx.font = "500 18px Inter";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText(SITE.website.replace(/^https?:\/\//, ""), 50, height - 50);

    /* -------------------------
      Logo Bottom-right
  -------------------------- */
    try {
      const logoUrl2 = typeof BRANDING.logos.main === "string" ? BRANDING.logos.main : BRANDING.logos.main?.src || BRANDING.logos.main;

      if (logoUrl2) {
        const logoImg2 = new Image();
        logoImg2.onload = () => {
          const maxLogoWidth2 = 200;
          const maxLogoHeight2 = 90;
          let drawW2 = logoImg2.width;
          let drawH2 = logoImg2.height;
          const scale2 = Math.min(maxLogoWidth2 / drawW2, maxLogoHeight2 / drawH2);
          drawW2 *= scale2;
          drawH2 *= scale2;
          ctx.globalAlpha = 0.85;
          ctx.drawImage(logoImg2, width - drawW2 - 30, height - drawH2 - 30, drawW2, drawH2);
          ctx.globalAlpha = 1;
        };
        logoImg2.src = logoUrl2;
      }
    } catch (_) {}
  }, [selectedTemplate, uploadedImage, userName, currentTemplate, templates]);

  React.useEffect(() => {
    drawBadge();
  }, [drawBadge]);

  // Detect browser-only APIs after mount to avoid SSR errors
  React.useEffect(() => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanNativeShare(true);
    }
  }, []);

  const downloadBadge = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `osd-2026-${selectedTemplate}-badge.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const shareToSocial = async (platform) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL();
    const baseText = userName.trim()
      ? `${userName} is ${currentTemplate.title.toLowerCase()} at ${EVENT.name}!`
      : `I'm ${currentTemplate.title.toLowerCase()} at ${EVENT.name}!`;

    const fullText = `${baseText} Join us on ${EVENT.date} at ${EVENT.location}. #OpenSourceDay2026 #OSD2026`;

    // Convert canvas to blob for sharing
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));

    if (typeof navigator !== "undefined" && navigator.share && platform === "native") {
      // Use native sharing if available
      try {
        const file = new File([blob], `osd-2026-${selectedTemplate}-badge.png`, { type: "image/png" });
        await navigator.share({
          title: "My OSD 2026 Badge",
          text: fullText,
          files: [file],
        });
        return;
      } catch (error) {
        console.log("Native sharing failed, falling back to platform-specific sharing");
      }
    }

    const currentHref = typeof window !== "undefined" ? window.location.href : "";
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}&url=${encodeURIComponent(currentHref)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentHref)}&summary=${encodeURIComponent(fullText)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentHref)}&quote=${encodeURIComponent(fullText)}`,
    };

    if (shareUrls[platform] && typeof window !== "undefined") {
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
          new ClipboardItem({
            "image/png": blob,
          }),
        ]);
      } else {
        throw new Error("Clipboard API not available");
      }
      // alert("Badge copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      alert("Failed to copy to clipboard. Please download the image instead.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your OSD 2026 Badge</h1>
          <p className="text-lg text-gray-600">Choose a template, upload your photo, and create a personalized badge to share on social media</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Step 1: Name Input */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Enter Your Name</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name (Required)</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {userName.trim() === "" ? (
                    <p className="text-sm text-red-600 mt-1">Name is required to generate your badge.</p>
                  ) : (
                    <p className="text-sm text-gray-500 mt-1">Your name will appear on the badge</p>
                  )}
                </div>
              </div>
            </div>

            {/* Step 2: Template Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Choose Template</h2>
              <div className="grid grid-cols-1 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTemplate === template.id ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: template.color }}></div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">{template.title}</div>
                        <div className="text-sm text-gray-600">{template.subtitle}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Image Upload and Adjustment */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Upload and Adjust</h2>

              {!uploadedImage ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">Upload a clear headshot or portrait photo. PNG or JPG recommended.</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Upload Photo
                  </button>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </div>
              ) : (
                <div className="space-y-4">
                  {isCropping && (
                    <div className="w-full">
                      {/* Crop area */}
                      <div className="relative w-full h-[400px] bg-black rounded-lg overflow-hidden">
                        <Cropper
                          image={uploadedImage}
                          crop={crop}
                          zoom={zoom}
                          aspect={1} // square crop (good for circular avatar)
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onCropComplete={(croppedArea, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
                        />
                      </div>

                      {/* Toolbar below the image */}
                      <div className="flex flex-col items-center space-y-4 mt-4">
                        {/* Zoom bar */}
                        <input
                          type="range"
                          min={1}
                          max={3}
                          step={0.1}
                          value={zoom}
                          onChange={(e) => setZoom(Number(e.target.value))}
                          className="w-64 accent-green-600"
                        />

                        {/* Action buttons */}
                        <div className="flex space-x-4">
                          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={() => setIsCropping(false)}>
                            Cancel
                          </button>
                          <button
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            onClick={async () => {
                              const croppedImg = await getCroppedImg(uploadedImage, croppedAreaPixels);
                              setUploadedImage(croppedImg);
                              setIsCropping(false);
                            }}
                          >
                            Crop
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setUploadedImage(null);
                      setImagePosition({ x: -350, y: -180 });
                      setImageScale(2);
                    }}
                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Remove Photo
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Badge Preview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Badge Preview</h2>

            <div className="relative flex items-center justify-center">
              <canvas ref={canvasRef} className="w-full max-w-md mx-auto border border-gray-200 rounded-lg shadow-lg" style={{ aspectRatio: "4/5" }} />
            </div>

            {/* Download & Share - visible on all screen sizes */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Download & Share</h2>

              <div className="space-y-4">
                <button
                  onClick={downloadBadge}
                  disabled={userName.trim() === ""}
                  className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                    userName.trim() === "" ? "bg-green-300 text-white cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download PNG</span>
                </button>

                <button
                  onClick={copyToClipboard}
                  disabled={userName.trim() === ""}
                  className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                    userName.trim() === "" ? "bg-blue-300 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy to Clipboard</span>
                </button>

                {canNativeShare && (
                  <button
                    onClick={() => shareToSocial("native")}
                    disabled={userName.trim() === ""}
                    className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                      userName.trim() === "" ? "bg-purple-300 text-white cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span>Share Badge</span>
                  </button>
                )}

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => shareToSocial("twitter")}
                    disabled={userName.trim() === ""}
                    className={`py-2 px-3 rounded-lg transition-colors text-sm ${
                      userName.trim() === "" ? "bg-blue-300 text-white cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => shareToSocial("linkedin")}
                    disabled={userName.trim() === ""}
                    className={`py-2 px-3 rounded-lg transition-colors text-sm ${
                      userName.trim() === "" ? "bg-blue-400 text-white cursor-not-allowed" : "bg-blue-700 text-white hover:bg-blue-800"
                    }`}
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => shareToSocial("facebook")}
                    disabled={userName.trim() === ""}
                    className={`py-2 px-3 rounded-lg transition-colors text-sm ${
                      userName.trim() === "" ? "bg-blue-500 text-white cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Download & Share section removed; unified section lives under preview */}
      </div>
    </div>
  );
};

export default BadgeMaker;
