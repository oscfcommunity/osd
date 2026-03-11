import React from 'react';

type AspectRatio = 'square' | 'story' | 'banner';

interface BadgeTemplateProps {
    name: string;
    role: string;
    image?: string;
    aspectRatio?: AspectRatio;
    badgeId?: string;
}

export const BadgeTemplate: React.FC<BadgeTemplateProps> = ({
    name,
    role,
    image,
    aspectRatio = 'square',
    badgeId = "OSD-2026"
}) => {
    const isStory = aspectRatio === 'story';
    const isBanner = aspectRatio === 'banner';

    const getRoleTheme = (roleName: string) => {
        const r = (roleName || '').toLowerCase();
        if (r.includes('golden') || r.includes('gold')) return { color: '#FFD700', bg: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)', text: '#4A3700' };
        if (r.includes('speaker')) return { color: '#A855F7', bg: '#A855F7', text: '#fff' };
        if (r.includes('volunteer')) return { color: '#109093', bg: '#109093', text: '#fff' }; // OSD Teal Green
        if (r.includes('organizer')) return { color: '#EF4444', bg: '#EF4444', text: '#fff' };
        if (r.includes('sponsor')) return { color: '#F59E0B', bg: '#F59E0B', text: '#fff' };
        if (r.includes('mentor')) return { color: '#06B6D4', bg: '#06B6D4', text: '#fff' };
        return { color: '#00C853', bg: '#00C853', text: '#0f172a' }; // OSD Primary Green
    };

    const theme = getRoleTheme(role);

    // Dimension scaling logic
    const containerStyles: React.CSSProperties = {
        width: isBanner ? '800px' : isStory ? '450px' : '500px',
        aspectRatio: isBanner ? '16/9' : isStory ? '9/16' : '1/1',
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        background: '#0f172a', // Dark Navy background
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    };

    const footerHeight = isStory ? '35%' : isBanner ? '45%' : '40%';

    return (
        <div style={containerStyles} className="badge-render-container">
            {/* ── PHOTO AREA ── */}
            <div style={{
                width: '100%',
                height: `calc(100% - ${footerHeight})`,
                position: 'relative',
                background: image
                    ? `url(${image}) center/cover no-repeat`
                    : 'linear-gradient(160deg, #1e3a8a 0%, #1e1b4b 100%)',
            }}>
                {/* Overlay for better text readability if image is light */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(15, 23, 42, 0.8) 100%)'
                }} />

                {/* ── Details Pill (Top Left) ── */}
                <div style={{
                    position: 'absolute', top: '20px', left: '20px',
                    background: 'rgba(255, 255, 255, 1)',
                    borderRadius: '12px',
                    padding: '8px 16px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: theme.color }} />
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.5px' }}>
                        2026 · OSD · GANDHINAGAR
                    </span>
                </div>

                {/* ── Role Pill (Top Right) ── */}
                <div style={{
                    position: 'absolute', top: '20px', right: '20px',
                    background: theme.bg,
                    borderRadius: '999px',
                    padding: '6px 18px',
                    color: theme.text,
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    boxShadow: `0 4px 14px ${theme.color}66`,
                }}>
                    {role || 'Attendee'}
                </div>
            </div>

            {/* ── CUTOUT TAB SECTION ── */}
            <div style={{
                position: 'absolute',
                bottom: footerHeight,
                left: 0,
                right: 0,
                height: '60px',
                zIndex: 10,
            }}>
                {/* Left Tab: Logo & Mini Details */}
                <div style={{
                    position: 'absolute',
                    bottom: '-1px', // bleed into footer
                    left: '20px',
                    background: '#0f172a',
                    padding: '12px 24px',
                    borderRadius: '16px 16px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    border: '1.5px solid rgba(255,255,255,0.1)',
                    borderBottom: 'none'
                }}>
                    <img src="/icons/OSDGreen.svg" alt="OSD" style={{ width: '24px', height: '24px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ color: 'white', fontSize: '10px', fontWeight: 800, letterSpacing: '0.5px' }}>4 APRIL 2026</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '8px', fontWeight: 600 }}>GANDHINAGAR, INDIA</span>
                    </div>
                </div>

                {/* Right Tab: Secondary Text */}
                <div style={{
                    position: 'absolute',
                    bottom: '-1px',
                    right: '20px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '8px 20px',
                    borderRadius: '30px 30px 0 0',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderBottom: 'none'
                }}>
                    <span style={{ color: 'white', fontSize: '10px', fontWeight: 700, letterSpacing: '1px' }}>
                        {badgeId}
                    </span>
                </div>
            </div>

            {/* ── DARK FOOTER ── */}
            <div style={{
                height: footerHeight,
                width: '100%',
                background: '#0f172a',
                padding: isBanner ? '20px 40px' : '40px 30px 20px',
                display: 'flex',
                flexDirection: isBanner ? 'row' : 'column',
                justifyContent: isBanner ? 'space-between' : 'flex-start',
                alignItems: isBanner ? 'center' : 'stretch',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
            }}>
                {/* Main Text Content */}
                <div style={{ flex: 1 }}>
                    <p style={{
                        margin: 0,
                        fontSize: isStory ? '14px' : '12px',
                        fontWeight: 800,
                        color: '#94a3b8', // Brighter gray
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                    }}>{name || 'Member'} is attending</p>

                    <h2 style={{
                        margin: '8px 0',
                        fontSize: isBanner ? '36px' : isStory ? '48px' : '32px',
                        fontWeight: 900,
                        color: 'white',
                        letterSpacing: '-1px',
                        lineHeight: 1.1,
                    }}>
                        Open Source Day <span style={{ color: theme.color }}>2026</span>
                    </h2>

                    <p style={{
                        margin: '8px 0 0',
                        fontSize: '14px',
                        color: '#CBD5E1', // Much brighter for URL
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600
                    }}>Get yours at osd.opensourceweekend.org</p>
                </div>

                {/* Right Side Info (DevFest style) */}
                {!isBanner && (
                    <div style={{
                        marginTop: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        paddingTop: '20px'
                    }}>
                        <div style={{
                            background: `${theme.color}1A`, // 10% opacity
                            padding: '6px 16px',
                            borderRadius: '8px',
                            border: `1px solid ${theme.color}33` // 20% opacity
                        }}>
                            <span style={{ color: theme.color, fontWeight: 800, fontSize: '12px' }}>GANDHINAGAR EDITION</span>
                        </div>
                    </div>
                )}

                {isBanner && (
                    <div style={{ textAlign: 'right' }}>
                        <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 900, color: 'white' }}>OSD 2026</h3>
                        <span style={{ color: theme.color, fontSize: '14px', fontWeight: 800 }}>MUMBAI-GANDHINAGAR</span>
                    </div>
                )}
            </div>

            {/* Decorative Lines Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                opacity: 0.1,
                background: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 80px)'
            }} />
        </div>
    );
};
