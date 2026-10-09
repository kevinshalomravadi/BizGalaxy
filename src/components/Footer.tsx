import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-purple-500/15 bg-[#050409] text-zinc-400 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-500 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <div className="w-full h-full bg-[#0b0914] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-xl text-white">
                  BIZ<span className="text-purple-400">GALAXY</span>
                </span>
                <span className="text-[10px] text-zinc-400 tracking-widest uppercase font-medium">
                  Your Business. Your Universe.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              BizGalaxy unites modern business operating infrastructure with specialized AI employees for local commerce worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Network Systems Operational
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="col-span-1 md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Platform & AI
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#platform" className="hover:text-purple-300 transition-colors">Platform</a></li>
              <li><a href="#ai-employees" className="hover:text-purple-300 transition-colors">AI Employees</a></li>
              <li><a href="#businesses" className="hover:text-purple-300 transition-colors">Businesses</a></li>
              <li><a href="#pricing" className="hover:text-purple-300 transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-300 transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-purple-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#ai-employees" className="hover:text-purple-300 transition-colors">About</a></li>
              <li><a href="#pricing" className="hover:text-purple-300 transition-colors">Contact</a></li>
              <li><a href="#how-it-works" className="hover:text-purple-300 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#faq" className="hover:text-purple-300 transition-colors">Privacy</a></li>
                <li><a href="#faq" className="hover:text-purple-300 transition-colors">Terms</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-2">
                Social
              </h4>
              <div className="flex items-center gap-3 text-xs sm:text-sm">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">LinkedIn</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors">YouTube</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 BizGalaxy. All rights reserved.
          </div>
          <div className="text-center sm:text-right font-mono text-[11px] text-zinc-400">
            Engineered for high-performance commerce.
          </div>
        </div>
      </div>
    </footer>
  );
}
