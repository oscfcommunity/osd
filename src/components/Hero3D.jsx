import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Preload, ContactShadows, Text, SpotLight, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

// --- Mascot Component (The floating abstract tech character) ---
function Mascot() {
    const groupRef = useRef();
    const eyeLeft = useRef();
    const eyeRight = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Subtle breathing animation
        groupRef.current.position.y = Math.sin(t * 2) * 0.1;

        // Look at mouse
        const x = (state.pointer.x * state.viewport.width) / 2;
        const y = (state.pointer.y * state.viewport.height) / 2;

        groupRef.current.lookAt(x, y, 5); // Look slightly forward and towards pointer

        // Blink animation occasionally
        if (Math.random() > 0.99) {
            eyeLeft.current.scale.y = 0.1;
            eyeRight.current.scale.y = 0.1;
        } else {
            eyeLeft.current.scale.y = THREE.MathUtils.lerp(eyeLeft.current.scale.y, 1, 0.1);
            eyeRight.current.scale.y = THREE.MathUtils.lerp(eyeRight.current.scale.y, 1, 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} dispose={null}>
                {/* Main Body (Glassy Sphere) */}
                <mesh castShadow receiveShadow>
                    <icosahedronGeometry args={[1, 4]} />
                    <meshPhysicalMaterial
                        color="#10b981"
                        metalness={0.1}
                        roughness={0.1}
                        transmission={0.9}
                        thickness={1.5}
                        envMapIntensity={2}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Inner Core (Glowing) */}
                <mesh>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial color="#34d399" />
                </mesh>

                {/* Orbit Rings */}
                <mesh rotation={[Math.PI / 3, 0, 0]}>
                    <torusGeometry args={[1.5, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#6ee7b7" emissive="#6ee7b7" emissiveIntensity={0.5} />
                </mesh>
                <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
                    <torusGeometry args={[1.5, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#emerald-400" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Eyes (Visor) */}
                <group position={[0, 0.2, 0.95]}>
                    {/* Background Visor */}
                    <mesh position={[0, 0, -0.05]} scale={[0.8, 0.3, 0.1]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#064e3b" roughness={0.5} />
                    </mesh>
                    {/* Glowing Eyes */}
                    <mesh ref={eyeLeft} position={[-0.2, 0, 0]}>
                        <capsuleGeometry args={[0.05, 0.1, 4, 8]} />
                        <meshBasicMaterial color="#a7f3d0" />
                    </mesh>
                    <mesh ref={eyeRight} position={[0.2, 0, 0]}>
                        <capsuleGeometry args={[0.05, 0.1, 4, 8]} />
                        <meshBasicMaterial color="#a7f3d0" />
                    </mesh>
                </group>
            </group>
        </Float>
    );
}

// --- Floating Abstract Elements ---
function FloatingElements({ count = 30 }) {
    const meshRef = useRef();

    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 10 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -20 + Math.random() * 40;
            const yFactor = -20 + Math.random() * 40;
            const zFactor = -20 + Math.random() * 20;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Calculate mouse influence
            particle.mx += (state.pointer.x * 2 - particle.mx) * 0.01;
            particle.my += (state.pointer.y * 2 - particle.my) * 0.01;

            dummy.position.set(
                (xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10) * 0.5 + particle.mx * 2,
                (yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10) * 0.5 + particle.my * 2,
                (zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10) * 0.5
            );
            dummy.scale.set(s * 0.5 + 0.5, s * 0.5 + 0.5, s * 0.5 + 0.5);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;

        // Scroll based rotation
        const scrollY = window.scrollY;
        meshRef.current.rotation.y = scrollY * 0.001;
        meshRef.current.rotation.x = scrollY * 0.0005;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshPhysicalMaterial
                color="#a7f3d0"
                transmission={0.8}
                opacity={0.8}
                transparent={true}
                roughness={0.2}
                metalness={0.1}
                clearcoat={1}
            />
        </instancedMesh>
    );
}

// --- HTML Overlay Content ---
const HeroContent = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center">
            {/* Status Badge */}
            <div className="pointer-events-auto inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-green-800 text-sm font-bold border border-green-200/50 mb-8 shadow-lg hover:bg-white transition-colors cursor-default">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span>04 April 2026 · AHMEDABAD</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-none pb-4 drop-shadow-sm pointer-events-auto">
                <span className="block text-gray-900">Open Source Day</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 italic block">2026</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto mb-10 leading-relaxed bg-white/30 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-sm pointer-events-auto">
                India's largest open source conference. 1000+ developers, builders &amp; maintainers — one unforgettable day.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
                <a
                    href="#get-involved"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 overflow-hidden"
                >
                    <div className="absolute inset-0 w-full h-full -x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                    <span className="relative z-10 flex items-center">
                        Get Involved
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </a>
                <a
                    href="/2025/"
                    className="group inline-flex items-center justify-center px-8 py-4 font-bold text-gray-900 bg-white/80 backdrop-blur-md border-2 border-gray-900/10 rounded-full hover:bg-white hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    Explore 2025
                </a>
            </div>

            {/* Hashtag Footer */}
            <div className="absolute bottom-10 left-0 right-0 flex flex-wrap justify-center gap-6 opacity-60 pointer-events-auto">
                <div className="text-sm font-bold tracking-wider text-gray-600 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">#OSDIn2026</div>
                <div className="text-sm font-bold tracking-wider text-gray-600 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">#OSDIndia2026</div>
                <div className="text-sm font-bold tracking-wider text-gray-600 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">#OpenSourceDay</div>
            </div>
        </div>
    );
};

// --- Responsive Components ---
function MascotWrapper() {
    const { viewport } = useThree();
    const isMobile = viewport.width < 6;

    // On mobile, center the mascot, move it slightly up and back, and scale it down.
    // On desktop, keep the original position [3, 0, 0]
    const position = isMobile ? [0, 3.2, -1] : [3, 0, 0];
    const scale = isMobile ? 0.7 : 1;

    return (
        <group position={position} scale={scale}>
            <Mascot />
        </group>
    );
}

// --- Main 3D Hero Component ---

export default function Hero3D() {
    const containerRef = useRef();

    useEffect(() => {
        // Reveal animation for the container
        gsap.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: "power2.out" }
        );
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[100vh] min-h-[800px] overflow-hidden bg-gradient-to-b from-green-50 via-white to-gray-50">

            {/* 3D Canvas Background */}
            <div className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 45 }}
                    dpr={[1, 2]} // Better resolution for retina screens
                    performance={{ min: 0.5 }}
                >
                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#emerald-200" />
                    <directionalLight position={[0, 5, 5]} intensity={1.5} color="#ffffff" />

                    {/* Environment for reflective materials */}
                    <Environment preset="apartment" />

                    {/* Scene Elements */}
                    <MascotWrapper />

                    <FloatingElements count={50} />

                    {/* Ground Shadow */}
                    <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />

                    {/* Performance Optimization */}
                    <Preload all />
                </Canvas>
            </div>

            {/* HTML Content Overlay */}
            <HeroContent />

        </div>
    );
}
