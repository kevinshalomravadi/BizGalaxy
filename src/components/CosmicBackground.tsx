"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
  phase: number;
  color: string;
}

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create subtle static twinkling stars (no drifting or parallax movement)
    const starCount = Math.min(Math.floor((width * height) / 8000), 160);
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const isGold = Math.random() < 0.1;
      const isViolet = Math.random() < 0.2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.01 + 0.004,
        phase: Math.random() * Math.PI * 2,
        color: isGold ? "rgba(250, 204, 21," : isViolet ? "rgba(216, 180, 254," : "rgba(230, 220, 255,",
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.phase += star.speed;
        const currentAlpha = star.alpha + Math.sin(star.phase) * 0.2;
        const clampedAlpha = Math.max(0.1, Math.min(0.9, currentAlpha));

        ctx.fillStyle = `${star.color} ${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Galaxy Nebulas (Fixed & Stable, No Parallax Movement) */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-purple-950/30 via-indigo-950/20 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[35%] -left-[10%] w-[700px] h-[700px] bg-purple-900/15 blur-[150px] rounded-full" />
      <div className="absolute top-[60%] -right-[10%] w-[750px] h-[750px] bg-violet-900/15 blur-[160px] rounded-full" />
      <div className="absolute bottom-[5%] left-[25%] w-[650px] h-[450px] bg-yellow-400/5 blur-[140px] rounded-full" />

      {/* Subtle Star Canvas (Twinkling in place without scrolling/drifting) */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* Static Subtle Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25" />
    </div>
  );
}
