"use client";

import React, { useState } from "react";
import {
  Database,
  Bot,
  Zap,
  TrendingUp,
  Target,
  BookOpen,
  RotateCw,
  Sparkles
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function GrowthLoop() {
  const { openOnboarding } = useOnboarding();
  const [activeNode, setActiveNode] = useState<number>(0);

  const orbitalNodes = [
    {
      id: "data",
      title: "Business Data",
      subtitle: "Telemetry Source",
      desc: "Daily bookings, customer visits, staff shifts, and inventory movements stream directly into the BizGalaxy core.",
      icon: Database,
      badge: "Step 01",
      xPercent: 50,
      yPercent: 12,
    },
    {
      id: "ai",
      title: "Veyra AI",
      subtitle: "Continuous Processing",
      desc: "Veyra correlates business patterns, forecasts customer churn, and pinpoints untapped operating capacity.",
      icon: Bot,
      badge: "Step 02",
      xPercent: 82,
      yPercent: 28,
    },
    {
      id: "action",
      title: "Action",
      subtitle: "One-Click Execution",
      desc: "Approved marketing campaigns, WhatsApp re-engagements, and staffing adjustments launch automatically.",
      icon: Zap,
      badge: "Step 03",
      xPercent: 88,
      yPercent: 68,
    },
    {
      id: "growth",
      title: "Customer Growth",
      subtitle: "Revenue Lift",
      desc: "Returning customers re-book faster, empty weekday chairs fill up, and average order value climbs.",
      icon: TrendingUp,
      badge: "Step 04",
      xPercent: 70,
      yPercent: 88,
    },
    {
      id: "results",
      title: "Results",
      subtitle: "Measurable Impact",
      desc: "Every campaign and action produces tangible telemetry: net new revenue, retention lift, and margin growth.",
      icon: Target,
      badge: "Step 05",
      xPercent: 30,
      yPercent: 88,
    },
    {
      id: "learning",
      title: "Learning",
      subtitle: "Continuous Adaptation",
      desc: "Algorithmic feedback loop records customer response rates and continuously sharpens future recommendations.",
      icon: BookOpen,
      badge: "Step 06",
      xPercent: 14,
      yPercent: 50,
    },
  ];

  const current = orbitalNodes[activeNode];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background glow (stable) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-950/20 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Autonomous Growth Loop
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              The Business <span className="text-gradient-purple-gold">Growth Flywheel.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              A self-reinforcing cosmic cycle. Data streams in, Veyra generates intelligence, actions convert customers, and the platform grows smarter every day.
            </p>
          </div>
        </ScrollReveal>

        {/* Futuristic Orbital Diagram (Stable, grounded, no continuous floating or mouse parallax) */}
        <ScrollReveal delayMs={150}>
          <div className="relative max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center mb-12">
            
            {/* Stable orbital ellipses */}
            <div className="absolute inset-4 sm:inset-10 border border-purple-500/25 rounded-[100%] rotate-[-15deg] pointer-events-none opacity-60" />
            <div className="absolute inset-8 sm:inset-16 border border-yellow-400/25 rounded-[100%] rotate-[20deg] pointer-events-none opacity-40" />

            {/* SVG Orbit Tracks */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <ellipse
                cx="50%"
                cy="50%"
                rx="42%"
                ry="36%"
                fill="none"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <ellipse
                cx="50%"
                cy="50%"
                rx="42%"
                ry="36%"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#facc15" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center: Glowing BizGalaxy Planet (Stable, grounded) */}
            <div className="relative z-20 flex flex-col items-center justify-center p-6 rounded-full bg-gradient-to-tr from-purple-900 via-indigo-950 to-[#080516] border-2 border-purple-400/60 shadow-[0_0_60px_rgba(139,92,246,0.7)] text-center group cursor-pointer hover:scale-105 transition-transform duration-300 w-36 h-36 sm:w-44 sm:h-44">
              {/* Planetary ring */}
              <div className="absolute w-44 sm:w-56 h-14 sm:h-16 border-2 border-yellow-300/60 rounded-[100%] rotate-[-25deg] shadow-[0_0_20px_rgba(250,204,21,0.6)] pointer-events-none" />
              
              <Sparkles className="w-6 h-6 text-yellow-300 mb-1" />
              <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase">
                BIZGALAXY
              </span>
              <span className="text-[9px] sm:text-[10px] text-purple-200 font-mono mt-0.5">
                Unified Core
              </span>
            </div>

            {/* 6 Planetary Orbit Nodes */}
            {orbitalNodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = activeNode === idx;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(idx)}
                  style={{
                    top: `${node.yPercent}%`,
                    left: `${node.xPercent}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`absolute z-30 flex flex-col items-center cursor-pointer transition-transform duration-200 ${
                    isSelected ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-lg ${
                      isSelected
                        ? "bg-purple-600 border-yellow-300 text-white shadow-[0_0_30px_rgba(250,204,21,0.6)]"
                        : "bg-[#0f0b24] border-purple-500/40 text-purple-300 hover:border-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="mt-2 text-center pointer-events-none whitespace-nowrap">
                    <span className={`text-[11px] sm:text-xs font-bold block ${isSelected ? "text-yellow-300" : "text-white"}`}>
                      {node.title}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-400 hidden sm:block">
                      {node.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Node Detail Card (Stable, clean) */}
        <ScrollReveal delayMs={200}>
          <div className="max-w-2xl mx-auto glass-panel p-6 sm:p-7 rounded-3xl border border-purple-400/30 text-center relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {current.badge}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Flywheel Phase
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-lg mx-auto mb-5">
              {current.desc}
            </p>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-purple-300">
              <RotateCw className="w-4 h-4 text-yellow-300" />
              <span>Continuous autonomous improvement 24 hours a day</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
