"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  Star,
  MapPin,
  Phone
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CustomerWebsite() {
  const { openOnboarding } = useOnboarding();
  const [copied, setCopied] = useState(false);

  const sampleServices = [
    { name: "Signature Haircut & Blowdry", duration: "45 mins", price: "₹850", rating: "4.9" },
    { name: "Balayage Color Transformation", duration: "120 mins", price: "₹3,200", rating: "5.0" },
    { name: "Hydra-Luxe Organic Facial", duration: "60 mins", price: "₹1,800", rating: "4.8" },
    { name: "Royal Spa Pedicure & Care", duration: "50 mins", price: "₹1,200", rating: "4.9" },
  ];

  const handleCopyLink = () => {
    navigator.clipboard?.writeText("https://bizgalaxy.com/s/hitech-salon");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background glow (stable) */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-purple-900/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Automatic Storefront Generation
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Your Business Gets Its Own <br />
              <span className="text-gradient-purple-gold">Digital Experience.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              Enter your business information once. BizGalaxy turns it into a customer-facing digital experience.
            </p>
          </div>
        </ScrollReveal>

        {/* 6-Stage Visual Architecture Flow */}
        <ScrollReveal delayMs={100}>
          <div className="p-6 rounded-3xl glass-panel border border-white/10 max-w-5xl mx-auto mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="text-center text-xs font-mono font-bold tracking-widest text-purple-300 uppercase mb-6">
              Instant Data Flow (Zero Duplicate Entry)
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 w-full lg:w-auto flex-1 hover:border-purple-400/50 transition-all">
                <span className="text-[10px] text-purple-300 font-semibold block uppercase">Source</span>
                <span className="text-xs sm:text-sm font-bold text-white">Owner Dashboard</span>
              </div>

              <ArrowRight className="w-4 h-4 text-purple-400 hidden lg:block shrink-0" />
              <ArrowDown className="w-4 h-4 text-purple-400 lg:hidden" />

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 w-full lg:w-auto flex-1 hover:border-purple-400/50 transition-all">
                <span className="text-[10px] text-zinc-400 font-semibold block uppercase">Input</span>
                <span className="text-xs sm:text-sm font-bold text-white">Business Data</span>
              </div>

              <ArrowRight className="w-4 h-4 text-purple-400 hidden lg:block shrink-0" />
              <ArrowDown className="w-4 h-4 text-purple-400 lg:hidden" />

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border border-purple-400/50 w-full lg:w-auto flex-1 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <span className="text-[10px] text-yellow-300 font-bold block uppercase">Core Engine</span>
                <span className="text-xs sm:text-sm font-black text-white">BizGalaxy Engine</span>
              </div>

              <ArrowRight className="w-4 h-4 text-purple-400 hidden lg:block shrink-0" />
              <ArrowDown className="w-4 h-4 text-purple-400 lg:hidden" />

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 w-full lg:w-auto flex-1 hover:border-purple-400/50 transition-all">
                <span className="text-[10px] text-purple-300 font-semibold block uppercase">Generated</span>
                <span className="text-xs sm:text-sm font-bold text-white">Customer Website</span>
              </div>

              <ArrowRight className="w-4 h-4 text-purple-400 hidden lg:block shrink-0" />
              <ArrowDown className="w-4 h-4 text-purple-400 lg:hidden" />

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 w-full lg:w-auto flex-1 hover:border-purple-400/50 transition-all">
                <span className="text-[10px] text-emerald-400 font-semibold block uppercase">Action</span>
                <span className="text-xs sm:text-sm font-bold text-white">Bookings / Orders</span>
              </div>

              <ArrowRight className="w-4 h-4 text-purple-400 hidden lg:block shrink-0" />
              <ArrowDown className="w-4 h-4 text-purple-400 lg:hidden" />

              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 w-full lg:w-auto flex-1 hover:border-purple-400/50 transition-all">
                <span className="text-[10px] text-purple-300 font-semibold block uppercase">Synced Live</span>
                <span className="text-xs sm:text-sm font-bold text-white">Owner Dashboard</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Realistic Customer Website Preview (Matching Bottom-Left of Reference Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left/Middle: Tablet Device Frame showing Storefront (8 Cols) - Stable */}
          <div className="lg:col-span-8 relative">
            <ScrollReveal delayMs={150}>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/25 via-violet-600/15 to-yellow-500/10 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

              <div className="relative rounded-3xl border border-purple-500/30 bg-[#0e0a20] shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden">
                
                {/* Browser Bar */}
                <div className="px-5 py-3 bg-[#0a0718] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="px-4 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
                    <Globe className="w-3 h-3 text-purple-400" />
                    <span>https://bizgalaxy.com/s/hitech-salon</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SSL Secured
                  </div>
                </div>

                {/* Storefront Hero with Salon Imagery */}
                <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden group">
                  <Image
                    src="/images/salon.jpg"
                    alt="Customer Website Preview"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a20] via-black/40 to-black/20" />

                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-300 bg-black/50 px-3 py-1 rounded-full border border-yellow-300/30 backdrop-blur-md inline-block mb-2">
                      Hi-Tech Luxury Salon & Spa
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                      Your Beauty, Our Passion.
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-200 mt-1 max-w-md hidden sm:block">
                      Elevated hair styling, organic skincare, and personalized aesthetic treatments.
                    </p>
                    
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => openOnboarding()}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
                      >
                        Book Appointment
                      </button>
                      <span className="text-xs text-yellow-300 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" />
                        <strong>4.8</strong> (128 reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Storefront Services Showcase */}
                <div className="p-6 bg-[#0a0718]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">
                      Our Featured Services
                    </h4>
                    <span className="text-[10px] text-zinc-400">Instant Online Booking</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sampleServices.map((serv, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs hover:bg-white/[0.06] transition-colors"
                      >
                        <div>
                          <div className="font-bold text-white">{serv.name}</div>
                          <div className="text-[10px] text-zinc-400">{serv.duration}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-black text-yellow-300">{serv.price}</div>
                          <span className="text-[10px] text-emerald-400 font-semibold">Available</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer details: Location & Contact */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>Indiranagar 100ft Road, Bangalore</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-purple-400" />
                      <span>+91 80 4123 4567</span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right: Phone Preview & QR Code Card (4 Cols) - Stable */}
          <div className="lg:col-span-4 space-y-5 flex flex-col items-center sm:items-stretch">
            <ScrollReveal delayMs={200}>
              {/* Sleek Branded QR Code Card (Stable) */}
              <div className="glass-panel p-6 rounded-3xl border border-purple-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-center w-full">
                <h4 className="text-sm font-bold text-white mb-1">
                  Scan to Visit Our Website
                </h4>
                <p className="text-xs text-zinc-400 mb-5">
                  Place this branded QR code at your reception counter or print on receipts.
                </p>

                {/* Realistic QR Graphic */}
                <div className="relative mx-auto w-44 h-44 rounded-2xl bg-white p-3.5 shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center justify-center">
                  <div className="w-full h-full border-4 border-black p-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <div className="w-8 h-8 bg-black border-2 border-white" />
                      <div className="w-8 h-8 bg-black border-2 border-white" />
                    </div>
                    {/* Center BizGalaxy Logo */}
                    <div className="mx-auto w-10 h-10 rounded-lg bg-purple-900 border border-purple-400 flex items-center justify-center shadow-md">
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-8 h-8 bg-black border-2 border-white" />
                      <div className="w-5 h-5 bg-black" />
                    </div>
                  </div>
                </div>

                {/* Domain & Copy Button */}
                <div className="mt-5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-purple-300 truncate max-w-[170px]">
                    bizgalaxy.com/s/hitech
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-[11px] transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Value Callout Card */}
              <div className="mt-5 p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 text-xs text-zinc-300 w-full space-y-2">
                <div className="flex items-center gap-2 text-purple-300 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Coding or Web Hosting Needed</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Whenever you change prices or staff in your BizGalaxy owner console, your customer website updates instantly in real time.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
