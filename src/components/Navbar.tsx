"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowRight, MessageSquare, Clock } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

export function Navbar() {
  const { openOnboarding, openWhatsAppEnquiry } = useOnboarding();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AI Employee", href: "#ai-employees" },
    { name: "Brands", href: "#brands" },
    { name: "Creative Studio", href: "#creative-studio" },
    { name: "Industries", href: "#businesses" },
    { name: "Platform", href: "#platform" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#070512]/90 backdrop-blur-xl border-b border-purple-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Text */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-wider text-xl text-white">
                  BIZ<span className="text-purple-400">GALAXY</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  AI OS + STUDIO
                </span>
              </div>
              <span className="text-[9px] text-zinc-400 tracking-widest uppercase font-medium">
                AI Employee & Content Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-5 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp Quick Consultation Button (Inspired by Digital Decodes) */}
            <button
              onClick={() => openWhatsAppEnquiry()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
            </button>

            {/* Main Register Button */}
            <button
              onClick={() => openOnboarding()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_24px_rgba(139,92,246,0.4)] border border-purple-300/40 transition-all hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-200" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openWhatsAppEnquiry()}
              className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              aria-label="WhatsApp enquiry"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0718]/95 backdrop-blur-2xl border-b border-purple-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-200 hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppEnquiry();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (3-Hour Reply)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openOnboarding();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center gap-2"
            >
              <span>Deploy BizGalaxy Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
