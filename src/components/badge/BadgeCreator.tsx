import React, { useState, useRef, useEffect } from 'react';
import { BadgeTemplate } from './BadgeTemplate.tsx';
import { Upload, ChevronLeft, RefreshCw, Loader2, Maximize, Smartphone, Monitor } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/lib/cropImage.ts';
import { Twitter, Linkedin, Share2, Image as ImageIcon, FileText } from 'lucide-react';

const OSD_LOGO = "/icons/OSDGreen.svg";
const ROLES = ["Attendee", "Speaker", "Volunteer"];

type AspectRatio = 'square' | 'story' | 'banner';

export default function OSDBadgeCreator() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('Attendee');
    const [image, setImage] = useState<string | undefined>(undefined);
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('square');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Cropper State
    const [tempImage, setTempImage] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [isCropping, setIsCropping] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempImage(reader.result as string);
                setIsCropping(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const handleCropSave = async () => {
        if (tempImage && croppedAreaPixels) {
            const cropped = await getCroppedImg(tempImage, croppedAreaPixels);
            if (cropped) {
                setImage(cropped);
                setIsCropping(false);
                setTempImage(null);
            }
        }
    };

    const handleDownload = async (format: 'pdf' | 'png' | 'jpeg') => {
        const element = document.querySelector('.badge-render-container') as HTMLElement;
        if (!element) return;

        try {
            const canvas = await html2canvas(element, {
                scale: 3, // High resolution
                useCORS: true,
                backgroundColor: null,
            });

            if (format === 'pdf') {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: aspectRatio === 'banner' ? 'landscape' : 'portrait',
                    unit: 'px',
                    format: [canvas.width / 3, canvas.height / 3]
                });

                pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 3, canvas.height / 3);
                pdf.save(`OSD_Badge_${name.replace(/\s+/g, '_') || '2026'}.pdf`);
            } else {
                const imgData = canvas.toDataURL(`image/${format}`, 1.0);
                const link = document.createElement('a');
                link.href = imgData;
                link.download = `OSD_Badge_${name.replace(/\s+/g, '_') || '2026'}.${format}`;
                link.click();
            }
        } catch (err) {
            console.error("Download failed", err);
            alert("Failed to generate badge. Please try again.");
        }
    };

    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const shareText = `I just created my custom badge for Open Source Day 2026! Can't wait to be in Gandhinagar 🚀 #OSD2026 #OpenSourceDay`;

    const handleShare = (platform: 'twitter' | 'linkedin') => {
        const urls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        };
        window.open(urls[platform], '_blank');
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] font-['Plus_Jakarta_Sans',_sans-serif] text-[#0f172a] pb-20 pt-16 md:pt-20">
            {/* ── HEADER ── */}
            <div className="bg-gradient-to-br from-[#f0fdf4] via-[#dcfce7] to-[#f0fdf4] border-b border-[#16a34a]/10 py-12 px-8 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-[#16a34a]/10 border border-[#16a34a]/20 rounded-full px-4 py-1.5 mb-6">
                        <img src={OSD_LOGO} alt="" className="w-5 h-5 object-contain" />
                        <span className="text-[10px] font-black text-[#15803d] tracking-[0.15em] uppercase">Open Source Day 2026</span>
                    </div>
                    <h1 className="text-5xl font-black mb-4 tracking-tighter leading-none">
                        Create Your <span className="bg-gradient-to-r from-[#15803d] to-[#4ade80] bg-clip-text text-transparent">Event Badge</span>
                    </h1>
                    <p className="text-[#64748b] font-medium">Design your custom badge for socials and the event floor.</p>
                </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 mt-12 items-start">

                {/* ── LEFT: FORM ── */}
                <div className="space-y-6">
                    <Card label="Display Name" hint="How you want your name to appear on the badge">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-[#16a34a] transition-all"
                            placeholder="e.g. Viral Parmar"
                            maxLength={24}
                        />
                    </Card>

                    <Card label="Role" hint="Choose your official category for the badge">
                        <div className="flex flex-wrap gap-2">
                            {ROLES.map((r) => (
                                <button
                                    key={r}
                                    onClick={() => setRole(r)}
                                    className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border-2 ${role === r
                                        ? 'bg-[#16a34a] border-[#16a34a] text-white shadow-lg shadow-[#16a34a]/20'
                                        : 'bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#16a34a]/30'
                                        }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </Card>

                    <Card label="Social Dimensions" hint="Pick a layout for your favorite platform">
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { id: 'square', label: 'Square', desc: 'Post 1:1', icon: <Maximize className="w-4 h-4" /> },
                                { id: 'story', label: 'Story', desc: 'Shorts 9:16', icon: <Smartphone className="w-4 h-4" /> },
                                { id: 'banner', label: 'Banner', desc: 'Header 16:9', icon: <Monitor className="w-4 h-4" /> }
                            ].map((dim) => (
                                <button
                                    key={dim.id}
                                    onClick={() => setAspectRatio(dim.id as AspectRatio)}
                                    className={`flex flex-col items-center gap-1.5 p-4 rounded-2xl border-2 transition-all ${aspectRatio === dim.id
                                        ? 'border-[#16a34a] bg-[#f0fdf4] text-[#15803d] shadow-lg shadow-[#16a34a]/10'
                                        : 'border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#16a34a]/30'
                                        }`}
                                >
                                    {dim.icon}
                                    <span className="text-[10px] font-black uppercase tracking-wider">{dim.label}</span>
                                    <span className="text-[9px] font-bold opacity-60">{dim.desc}</span>
                                </button>
                            ))}
                        </div>
                    </Card>

                    <Card label="Profile Photo" hint="High resolution square portraits look best">
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className={`w-full aspect-video rounded-2xl border-2 border-dashed transition-all cursor-pointer overflow-hidden relative group flex flex-col items-center justify-center gap-3 ${image ? 'border-[#4ade80]' : 'border-[#cbd5e1] bg-[#f8fafc] hover:border-[#4ade80]'
                                }`}
                        >
                            {image ? (
                                <>
                                    <img src={image} className="w-full h-full object-cover" alt="Preview" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white rounded-full p-3 text-[#15803d]">
                                            <RefreshCw className="w-6 h-6 animate-spin-slow" />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-12 h-12 rounded-full bg-[#f0fdf4] border border-[#16a34a]/20 flex items-center justify-center text-[#16a34a]">
                                        <Upload className="w-6 h-6" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-[#1e293b]">Upload your photo</p>
                                        <p className="text-[10px] text-[#94a3b8]">JPG, PNG or WEBP</p>
                                    </div>
                                </>
                            )}
                            <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                        </div>
                    </Card>

                    <div className="pt-4 space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <button
                                onClick={() => handleDownload('png')}
                                className="py-4 bg-white border-2 border-[#16a34a] text-[#16a34a] font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg hover:bg-[#f0fdf4] transition-all flex items-center justify-center gap-2"
                            >
                                <ImageIcon className="w-4 h-4" />
                                Save as PNG
                            </button>
                            <button
                                onClick={() => handleDownload('jpeg')}
                                className="py-4 bg-white border-2 border-[#16a34a] text-[#16a34a] font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg hover:bg-[#f0fdf4] transition-all flex items-center justify-center gap-2"
                            >
                                <ImageIcon className="w-4 h-4" />
                                Save as JPEG
                            </button>
                        </div>
                        <button
                            onClick={() => handleDownload('pdf')}
                            className="w-full py-5 bg-gradient-to-r from-[#15803d] to-[#22c55e] text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-[#16a34a]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
                        >
                            <FileText className="w-5 h-5" />
                            Download PDF Badge
                        </button>

                        <div className="pt-4 border-t border-black/5 mt-4">
                            <p className="text-[10px] font-black text-[#94a3b8] uppercase tracking-[0.2em] mb-4 text-center flex items-center justify-center gap-2">
                                <Share2 className="w-3 h-3" /> Share your excitement
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className="py-3 bg-[#00acee]/10 text-[#00acee] rounded-xl font-bold text-[11px] flex items-center justify-center gap-2 hover:bg-[#00acee]/20 transition-all"
                                >
                                    <Twitter className="w-4 h-4" /> Twitter
                                </button>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className="py-3 bg-[#0072b1]/10 text-[#0072b1] rounded-xl font-bold text-[11px] flex items-center justify-center gap-2 hover:bg-[#0072b1]/20 transition-all"
                                >
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-[#94a3b8] text-[10px] font-bold uppercase tracking-widest">
                            Official OSD 2026 Print Assets
                        </p>
                    </div>
                </div>

                {/* ── RIGHT: PREVIEW ── */}
                <div className="lg:sticky lg:top-24 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-8 w-full">
                        <div className="flex-1 h-px bg-[#e2e8f0]" />
                        <span className="text-[10px] font-black text-[#94a3b8] uppercase tracking-[0.3em]">Live Preview</span>
                        <div className="flex-1 h-px bg-[#e2e8f0]" />
                    </div>

                    <div className="p-8 pb-12 bg-white rounded-[40px] border border-black/5 shadow-2xl scale-[0.8] lg:scale-100 origin-top rotate-1 hover:rotate-0 transition-all duration-500">
                        <div className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                            <BadgeTemplate
                                name={name}
                                role={role}
                                image={image}
                                aspectRatio={aspectRatio}
                            />
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-2">
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#16a34a]/30 animate-pulse" />)}
                        </div>
                        <p className="text-[10px] font-black text-[#cbd5e1] uppercase tracking-[0.2em]">Updates Live</p>
                    </div>
                </div>

            </div>

            {/* ── CROP MODAL ── */}
            {isCropping && tempImage && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
                    <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-black/5 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-black tracking-tight">CROP YOUR PHOTO</h3>
                                <p className="text-xs text-[#64748b] font-medium">Drag and zoom to frame yourself perfectly</p>
                            </div>
                            <button
                                onClick={() => setIsCropping(false)}
                                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                            >
                                <Loader2 className="w-6 h-6 text-[#16a34a] animate-spin shadow-none" />
                            </button>
                        </div>
                        <div className="relative h-[400px] bg-[#f8fafc]">
                            <Cropper
                                image={tempImage}
                                crop={crop}
                                zoom={zoom}
                                aspect={1 / 1}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between text-xs font-bold text-[#64748b]">
                                    <span>ZOOM LEVEL</span>
                                    <span>{Math.round(zoom * 100)}%</span>
                                </div>
                                <input
                                    type="range"
                                    value={zoom}
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    aria-labelledby="Zoom"
                                    onChange={(e) => setZoom(Number(e.target.value))}
                                    className="w-full h-2 bg-[#f1f5f9] rounded-lg appearance-none cursor-pointer accent-[#16a34a]"
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setIsCropping(false)}
                                    className="flex-1 py-4 px-6 bg-[#f1f5f9] text-[#475569] font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#e2e8f0] transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCropSave}
                                    className="flex-[2] py-4 px-6 bg-[#16a34a] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#15803d] shadow-lg shadow-[#16a34a]/25 transition-all"
                                >
                                    Apply Crop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Card({ label, hint, children }: { label: string; hint: string; children: React.ReactNode }) {
    return (
        <div className="bg-white border border-[#e8edf2] rounded-[24px] p-6 shadow-sm">
            <div className="mb-4">
                <h3 className="text-xs font-black text-[#0f172a] uppercase tracking-wider">{label}</h3>
                {hint && <p className="text-[10px] text-[#94a3b8] font-bold">{hint}</p>}
            </div>
            {children}
        </div>
    );
}
