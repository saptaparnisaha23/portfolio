"use client";

import { useMemo, useEffect, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { type Engine, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 35;
      const y = (e.clientY / innerHeight - 0.5) * 35;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.45,
              color: "#95C7A4",
            },
          },
        },
      },
      particles: {
        color: { 
          value: ["#95C7A4", "#CFE8D6", "#4E7C59", "#78AC86"] 
        },
        links: {
          color: "#95C7A4",
          distance: 135,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: true,
          speed: 0.45,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 85,
        },
        opacity: {
          value: { min: 0.18, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
          },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 2.2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#18261E]">
      {/* Luxury Grain Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 z-10" />

      {/* LAYER 1: Top Radial Soft Sage Spotlight */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(149,199,164,0.18),transparent_70%)] transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate3d(calc(-50% + ${mousePos.x * 0.3}px), ${mousePos.y * 0.3}px, 0)`,
        }}
      />

      {/* LAYER 2: Large Slow Drifting Blurred Sage Blobs with Parallax */}
      <div 
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#95C7A4]/12 blur-[140px] animate-pulse transition-transform duration-1000 ease-out z-0"
        style={{
          transform: `translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`,
        }}
      />
      <div 
        className="absolute top-[42%] right-[5%] w-[550px] h-[550px] rounded-full bg-[#CFE8D6]/10 blur-[160px] transition-transform duration-1000 ease-out z-0"
        style={{
          transform: `translate3d(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px, 0)`,
        }}
      />
      <div 
        className="absolute top-[75%] left-[20%] w-[480px] h-[480px] rounded-full bg-[#95C7A4]/10 blur-[150px] animate-pulse transition-transform duration-1000 ease-out z-0"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
        }}
      />

      {/* LAYER 3: Tiny Floating Ambient Depth Particles */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out z-0"
        style={{
          transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
        }}
      >
        <div className="absolute top-[18%] left-[28%] w-1.5 h-1.5 rounded-full bg-[#95C7A4]/50 blur-[0.5px] animate-bounce" />
        <div className="absolute top-[32%] right-[22%] w-1 h-1 rounded-full bg-[#CFE8D6]/60 blur-[0.5px]" />
        <div className="absolute top-[58%] left-[12%] w-2 h-2 rounded-full bg-[#95C7A4]/40 blur-[1px] animate-pulse" />
        <div className="absolute top-[82%] right-[32%] w-1.5 h-1.5 rounded-full bg-[#CFE8D6]/50 blur-[0.5px]" />
      </div>

      {/* Constellation Canvas Layer */}
      <ParticlesProvider init={async (engine: Engine) => { await loadSlim(engine); }}>
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0 z-0 pointer-events-auto"
        />
      </ParticlesProvider>
    </div>
  );
}
