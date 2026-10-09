import React from "react";
import {
  Sparkles,
  Network,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight
} from "lucide-react";

export function FutureVision() {
  const nodes = [
    { title: "Business Core", status: "now" },
    { title: "Customers", status: "now" },
    { title: "Employees", status: "now" },
    { title: "AI Veyra", status: "now" },
    { title: "Marketing", status: "now" },
    { title: "Orders & POS", status: "now" },
    { title: "Predictive Supply", status: "soon" },
    { title: "Multi-Agent Sync", status: "soon" },
    { title: "Autonomous Sourcing", status: "soon" },
  ];

  const nowFeatures = [
    "Unified POS, Appointments & Inventory OS",
    "Specialized Veyra AI employee for each industry",
    "Proactive morning briefings & retention alerts",
    "Customer-facing branded web portal generator",
    "Owner-governed 1-click marketing campaigns",
  ];

  const futureFeatures = [
    "Predictive supplier automated replenishment",
    "Inter-branch staff cross-scheduling optimization",
    "Multi-agent AI ecosystem (inventory bot + concierge bot)",
    "Real-time dynamic pricing based on local weather & footfall",
    "Voice-first operational terminal for hands-on chefs & stylists",
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background galaxy orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-purple-900/20 via-indigo-900/10 to-yellow-500/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            Long-Term Vision
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The Future of Local Business <br />
            <span className="text-gradient-purple-gold">is Intelligent.</span>
          </h2>
          <div className="mt-6 space-y-2 text-base sm:text-xl text-zinc-300">
            <p className="font-medium text-white">
              “Today, BizGalaxy helps businesses manage.
            </p>
            <p className="text-purple-300 font-semibold">
              Tomorrow, BizGalaxy will help businesses understand, decide and act.”
            </p>
          </div>
        </div>

        {/* Futuristic Galaxy Network Visual Strip */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-3xl glass-panel border border-purple-500/30 relative overflow-hidden">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-zinc-400 mb-6 flex items-center justify-center gap-2">
            <Network className="w-4 h-4 text-purple-400" />
            <span>The Interconnected Galaxy Node Network</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {nodes.map((n) => (
              <div
                key={n.title}
                className={`p-4 rounded-xl border flex items-center justify-between ${
                  n.status === "now"
                    ? "bg-purple-950/30 border-purple-500/30 text-white"
                    : "bg-white/[0.01] border-white/5 text-zinc-400"
                }`}
              >
                <span className="text-xs font-semibold">{n.title}</span>
                <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded ${
                  n.status === "now"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    : "bg-white/5 text-amber-300/80 border border-amber-400/20"
                }`}>
                  {n.status === "now" ? "Available Now" : "Coming Soon"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Roadmap Matrix: Available Now vs Coming Soon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1: Available Now */}
          <div className="glass-panel p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Available Now
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Production-ready tools shipping to businesses today:
            </p>
            <div className="space-y-3.5">
              {nowFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Coming Soon */}
          <div className="glass-panel p-8 rounded-3xl border border-purple-500/20 bg-purple-950/10">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-4 h-4 text-amber-300" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Coming Soon (R&D Pipeline)
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Next-generation autonomy in active development for 2026–2027:
            </p>
            <div className="space-y-3.5">
              {futureFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <Sparkles className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
