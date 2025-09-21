import React, { useState, useRef, useCallback } from "react";
import { BRANDING, EVENT } from "@/config";

const BadgeMaker = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("volunteer");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: -350, y: -180 });
  const [imageScale, setImageScale] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const templates = [
    {
      id: "speaker",
      title: "I am Speaking at",
      subtitle: "Open Source Day 2025",
      color: "#22c55e",
      bgGradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    },
    {
      id: "attendee",
      title: "I am Attending",
      subtitle: "Open Source Day 2025",
      color: "#3b82f6",
      bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    {
      id: "volunteer",
      title: "I am Volunteering at",
      subtitle: "Open Source Day 2025",
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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const drawBadge = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = 800;
    const height = 1000;

    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, currentTemplate.color);
    gradient.addColorStop(1, currentTemplate.color + "80");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add geometric shapes for visual appeal
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.moveTo(0, height * 0.7);
    ctx.quadraticCurveTo(width * 0.3, height * 0.3, width, height * 0.5);
    ctx.quadraticCurveTo(width * 0.7, height * 0.8, 0, height);
    ctx.closePath();
    ctx.fill();

    // Add user image if uploaded
    if (uploadedImage) {
      const img = new Image();
      img.onload = () => {
        const imgSize = 200 * imageScale;
        const imgX = width - 250 + imagePosition.x;
        const imgY = height - 300 + imagePosition.y;

        // Create circular clipping path
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          imgX + imgSize / 2,
          imgY + imgSize / 2,
          imgSize / 2,
          0,
          Math.PI * 2
        );
        ctx.clip();

        ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
        ctx.restore();

        // Add border to image
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(
          imgX + imgSize / 2,
          imgY + imgSize / 2,
          imgSize / 2,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      };
      img.src = uploadedImage;
    }

    // Add text content
    ctx.fillStyle = "white";
    ctx.textAlign = "left";

    // Main title
    ctx.font = "bold 48px Inter, sans-serif";
    ctx.fillText(currentTemplate.title, 50, 150);

    // Subtitle
    ctx.font = "bold 50px Inter, sans-serif";
    ctx.fillText(currentTemplate.subtitle, 50, 250);

    // Event details
    ctx.font = "24px Inter, sans-serif";
    ctx.fillText(EVENT.date, 50, 350);
    ctx.fillText(EVENT.location, 50, 400);

    // Logo area (top right)
    ctx.font = "bold 20px Inter, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("OPEN SOURCE DAY 2025", width - 50, 100);

    // Add some decorative elements
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    ctx.fillRect(width - 200, 50, 150, 4);
    ctx.fillRect(width - 200, 60, 100, 2);
  }, [
    selectedTemplate,
    uploadedImage,
    imagePosition,
    imageScale,
    currentTemplate,
  ]);

  React.useEffect(() => {
    drawBadge();
  }, [drawBadge]);

  const downloadBadge = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `osd-2025-${selectedTemplate}-badge.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const shareToSocial = (platform) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL();
    const text = `I'm ${currentTemplate.subtitle.toLowerCase()} at ${
      EVENT.name
    }! Join me on ${EVENT.date} at ${
      EVENT.location
    }. #OpenSourceDay2025 #OSD2025`;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(window.location.href)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };

  const copyToClipboard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/png")
      );
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your OSD 2025 Badge
          </h1>
          <p className="text-lg text-gray-600">
            Choose a template, upload your photo, and create a personalized
            badge to share on social media
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Step 1: Template Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Choose Template
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTemplate === template.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: template.color }}
                      ></div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">
                          {template.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {template.subtitle}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Image Upload and Adjustment */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Upload and Adjust
              </h2>

              {!uploadedImage ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg
                      className="mx-auto h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Upload a clear headshot or portrait photo. PNG or JPG
                    recommended.
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Upload Photo
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Drag inside preview to move. Use the slider to resize.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Zoom: {Math.round(imageScale * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={imageScale}
                      onChange={(e) =>
                        setImageScale(parseFloat(e.target.value))
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <button
                    onClick={() => {
                      setUploadedImage(null);
                      setImagePosition({ x: 0, y: 0 });
                      setImageScale(1);
                    }}
                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Remove Photo
                  </button>
                </div>
              )}
            </div>

            {/* Step 3: Download and Share */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Download & Share
              </h2>

              <div className="space-y-4">
                <button
                  onClick={downloadBadge}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy to Clipboard</span>
                </button>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => shareToSocial("twitter")}
                    className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => shareToSocial("linkedin")}
                    className="bg-blue-700 text-white py-2 px-3 rounded-lg hover:bg-blue-800 transition-colors text-sm"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => shareToSocial("facebook")}
                    className="bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Badge Preview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Badge Preview
            </h2>

            <div className="relative flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full max-w-md mx-auto border border-gray-200 rounded-lg shadow-lg"
                style={{ aspectRatio: "4/5" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setImagePosition({ x: 0, y: 0 });
                  setImageScale(1);
                }}
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Reset Position
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeMaker;
