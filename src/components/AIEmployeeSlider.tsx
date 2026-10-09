"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowRight
} from "lucide-react";

export function AIEmployeeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const employees = [
    {
      name: "Veyra Prime",
      role: "Executive Business Operating AI",
      category: "All Businesses",
      image: "/images/veyra.jpg",
      badge: "Core OS Layer",
      highlightMetric: "+28% Revenue Growth",
      dailyTasks: "Orchestrates morning briefings, synthesizes multi-branch data, and calculates optimal promo timing.",
      activeStatus: "Overseeing 1,420 Active Customers",
      accent: "from-purple-500/30 to-violet-900/40",
      borderGlow: "group-hover:border-purple-400/50",
    },
    {
      name: "Elena Vance",
      role: "AI Salon & Spa Specialist",
      category: "Hair, Aesthetics & Wellness",
      image: "/images/salon.jpg",
      badge: "Aura Luxe Salon",
      highlightMetric: "94% Chair Utilization",
      dailyTasks: "Pre-fills slow weekday slots, manages stylist commission splits, and re-engages color touch-up VIPs.",
      activeStatus: "18 Appointments Today Synced",
      accent: "from-fuchsia-500/30 to-purple-900/40",
      borderGlow: "group-hover:border-fuchsia-400/50",
    },
    {
      name: "Alex Chen",
      role: "AI Restaurant Operations Specialist",
      category: "Dining, Bistros & Bars",
      image: "/images/restaurant.jpg",
      badge: "Nova Osteria & Trattoria",
      highlightMetric: "-35% Food Prep Waste",
      dailyTasks: "Forecasts evening table turns, balances kitchen ticketing, and pushes chef tasting specials via QR.",
      activeStatus: "22 Table Consoles Active",
      accent: "from-amber-500/30 to-orange-900/40",
      borderGlow: "group-hover:border-amber-400/50",
    },
    {
      name: "Maya Patel",
      role: "AI Retail & Mart Inventory Specialist",
      category: "Supermarkets & Boutiques",
      image: "/images/retail.jpg",
      badge: "Green Harvest Global Mart",
      highlightMetric: "99.4% Stock Accuracy",
      dailyTasks: "Monitors shelf velocity on 340+ SKUs, alerts on expiring lots, and triggers instant basket discounts.",
      activeStatus: "Real-Time POS Telemetry",
      accent: "from-emerald-500/30 to-teal-900/40",
      borderGlow: "group-hover:border-emerald-400/50",
    },
    {
      name: "Sarah Miller",
      role: "AI Artisan Bakery Specialist",
      category: "Bakeries & Patisseries",
      image: "/images/bakery.jpg",
      badge: "Celestial Artisan Bakes",
      highlightMetric: "85% Late-Day Waste Cut",
      dailyTasks: "Schedules morning sourdough batches, manages custom celebration cake deadlines, and launches evening boxes.",
      activeStatus: "Custom Cake Queue Synced",
      accent: "from-yellow-500/30 to-amber-900/40",
      borderGlow: "group-hover:border-yellow-400/50",
    },
    {
      name: "Anja Rostova",
      role: "AI Café & Loyalty Specialist",
      category: "Coffee Shops & Roasteries",
      image: "/images/cafe.jpg",
      badge: "Nordic Roast Café",
      highlightMetric: "14 Orders/Min Rush Speed",
      dailyTasks: "Anticipates 7:30 AM espresso surges, coordinates digital grab-and-go orders, and sends loyalty rewards.",
      activeStatus: "Morning Queue Live Stream",
      accent: "from-amber-600/30 to-yellow-900/40",
      borderGlow: "group-hover:border-amber-400/50",
    },
  ];

  // Auto scroll effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % employees.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, employees.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? employees.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % employees.length);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-y border-purple-500/15 bg-[#06040e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-900/20 via-indigo-900/15 to-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-xs font-semibold tracking-wider text-purple-200 uppercase">
                Active AI Personnel Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real Digital Employees. <br />
              <span className="text-gradient-purple-gold">Dedicated to Your Floor.</span>
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-xl">
              Swipe through our specialized AI employees. Each arrives pre-trained on your industry&apos;s exact rhythms, terminology, and operational bottlenecks.
            </p>
          </div>

          {/* Slider navigation controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-400/50 transition-all hover:scale-105 active:scale-95 shadow-md"
              aria-label="Previous employee"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-400/50 transition-all hover:scale-105 active:scale-95 shadow-md"
              aria-label="Next employee"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Big Slide */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-5xl mx-auto mb-12"
        >
          <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-purple-500/30 overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.85)]">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Left Column: Image with Glowing HUD Border */}
              <div className="lg:col-span-5 relative group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-purple-400/30 shadow-[0_0_40px_rgba(139,92,246,0.35)]">
                  <Image
                    src={employees[currentIndex].image}
                    alt={employees[currentIndex].name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06040e]/80 via-transparent to-transparent" />

                  {/* Floating active badge on image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-black/60 px-3.5 py-2 rounded-xl border border-white/10">
                    <span className="flex items-center gap-2 text-white font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {employees[currentIndex].activeStatus}
                    </span>
                    <span className="font-mono text-[10px] text-purple-300 uppercase tracking-wider font-semibold">
                      Live
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: AI Employee Persona Profile */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-purple-500/20 text-purple-200 border border-purple-400/30">
                      {employees[currentIndex].badge}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {employees[currentIndex].category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-wide mb-1">
                    {employees[currentIndex].name}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-purple-300 mb-6">
                    {employees[currentIndex].role}
                  </p>

                  {/* Highlight Stat Pill */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/30 mb-6">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-bold text-white">
                      Measured Impact: <span className="text-emerald-400">{employees[currentIndex].highlightMetric}</span>
                    </span>
                  </div>

                  {/* Core daily responsibilities */}
                  <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-purple-400" />
                      Daily Operating Responsibilities:
                    </span>
                    <p className="text-sm text-zinc-200 leading-relaxed">
                      {employees[currentIndex].dailyTasks}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Configured in minutes • Zero code required</span>
                  </div>

                  <a
                    href="#pricing"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-105"
                  >
                    <span>Deploy {employees[currentIndex].name.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {employees.map((emp, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={emp.name}
                onClick={() => setCurrentIndex(idx)}
                className={`p-2.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${isSelected
                    ? "bg-purple-950/60 border-purple-400/60 shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-[1.03]"
                    : "bg-white/[0.02] border-white/5 hover:border-purple-500/30 opacity-70 hover:opacity-100"
                  }`}
              >
                <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src={emp.image}
                    alt={emp.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-white truncate block">
                    {emp.name.split(" ")[0]}
                  </span>
                  <span className="text-[10px] text-zinc-400 truncate block">
                    {emp.category.split(",")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
