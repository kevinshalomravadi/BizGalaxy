"use client";

import { useState, useEffect, useRef } from "react";

export interface SpatialParallaxState {
  scrollY: number;
  scrollVelocity: number;
  mouseX: number; // -1 to 1
  mouseY: number; // -1 to 1
  isReducedMotion: boolean;
}

export function useSpatialParallax(): SpatialParallaxState {
  const [state, setState] = useState<SpatialParallaxState>({
    scrollY: 0,
    scrollVelocity: 0,
    mouseX: 0,
    mouseY: 0,
    isReducedMotion: false,
  });

  const lastScrollY = useRef(0);
  const targetMouseX = useRef(0);
  const targetMouseY = useRef(0);
  const currentMouseX = useRef(0);
  const currentMouseY = useRef(0);
  const velocity = useRef(0);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReduced = mediaQuery.matches;

    if (isReduced) {
      setState((prev) => ({ ...prev, isReducedMotion: true }));
      return;
    }

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;
      velocity.current = delta;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to +1
      targetMouseX.current = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY.current = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Smooth RAF loop for interpolation (lerp)
    const updateLoop = () => {
      // Smooth mouse damping (0.06 factor)
      currentMouseX.current += (targetMouseX.current - currentMouseX.current) * 0.06;
      currentMouseY.current += (targetMouseY.current - currentMouseY.current) * 0.06;

      // Smooth velocity decay (0.9 factor)
      velocity.current *= 0.9;

      setState({
        scrollY: window.scrollY,
        scrollVelocity: Math.round(velocity.current * 100) / 100,
        mouseX: Math.round(currentMouseX.current * 1000) / 1000,
        mouseY: Math.round(currentMouseY.current * 1000) / 1000,
        isReducedMotion: false,
      });

      animFrameId.current = requestAnimationFrame(updateLoop);
    };

    animFrameId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return state;
}
