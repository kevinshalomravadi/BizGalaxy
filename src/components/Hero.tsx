"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  Bot
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

export function Hero() {
  const { openOnboarding } = useOnboarding();
  const [suggestionState, setSuggestionState] = useState<"pending" | "approved">("pending");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Cosmic background glows (Stable, fixed) */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-indigo-900/25 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-purple-200 uppercase">
                AI-Powered Business Operating System
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Your Business. <br />
              <span className="text-gradient-purple-gold relative inline-block">
                Your Universe.
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-yellow-300 to-transparent opacity-60"></span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              BizGalaxy brings your business, customers, operations and AI into one powerful platform.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => openOnboarding()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] border border-purple-300/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Register Your Business</span>
                <ArrowRight className="w-5 h-5 text-purple-200" />
              </button>

              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/30 transition-all backdrop-blur-md hover:scale-[1.02]"
              >
                <span>Explore BizGalaxy</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </a>
            </div>

            {/* Target Businesses Tagline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80"></span>
              <span>One platform to manage your business, connect with customers and grow with AI.</span>
            </div>
          </div>

          {/* Right Column: Veyra AI Character (Stable, grounded, cinematic) */}
          <div className="lg:col-span-5 relative">
            {/* Background Ambient Glow & Orbital Ring */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600/30 via-violet-600/20 to-yellow-500/10 rounded-full blur-3xl opacity-70 pointer-events-none" />
            
            {/* Static Glowing orbital ring */}
            <div className="absolute inset-0 -m-8 border border-purple-500/25 rounded-full pointer-events-none opacity-60" />

            <div className="relative flex flex-col items-center">
              
              {/* Top Mini Revenue Card (Grounded in position) */}
              <div className="self-end -mb-6 mr-2 z-20 glass-panel rounded-2xl p-3 border border-purple-400/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
                    <TrendingUp className="w-4 h-4 text-yellow-300" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-zinc-400">Total Revenue</div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      ₹ 28,450
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-1.5 py-0.2 rounded">
                        +24%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Veyra Main Visual Container (Stable, no floating) */}
              <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_60px_rgba(139,92,246,0.45)] group">
                <Image
                  src="/images/veyra.jpg"
                  alt="Veyra AI Employee - BizGalaxy"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Cosmic Vignette & Lighting overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090714] via-transparent to-purple-950/20 pointer-events-none" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />

                {/* Grounded Veyra Tag */}
                <div className="absolute top-4 left-4 z-10 glass-pill px-3 py-1 rounded-full border border-purple-400/30 flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                    VEYRA • AI EMPLOYEE
                  </span>
                </div>
              </div>

              {/* Main Interactive Holographic Card (Stable position) */}
              <div className="relative -mt-14 w-full z-20 glass-panel rounded-3xl p-5 sm:p-6 border border-purple-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wide">
                        Good morning, Owner.
                      </h4>
                      <p className="text-[10px] text-purple-300">
                        Here&apos;s what I found for your business today:
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>

                {/* Live Bullet Points */}
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span><strong>12 appointments</strong> booked for today</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span><strong>3 customers</strong> haven&apos;t returned in 30 days</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span><strong>Weekend demand</strong> is surging +28%</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                    <span>I prepared a weekend offer for your approval.</span>
                  </div>
                </div>

                {/* Suggested Action Bar */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                  <a
                    href="#ai-employees"
                    className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Suggestions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() =>
                      setSuggestionState((prev) =>
                        prev === "pending" ? "approved" : "pending"
                      )
                    }
                    className={`text-[11px] font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                      suggestionState === "approved"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-purple-600 hover:bg-purple-500 text-white shadow-sm"
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{suggestionState === "approved" ? "Offer Approved" : "Approve Offer"}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
