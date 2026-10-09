import React from "react";
import { SlidersHorizontal, BrainCircuit, Rocket, CheckCircle2 } from "lucide-react";

export function WhyBizGalaxy() {
  const pillars = [
    {
      num: "01",
      pillar: "MANAGE",
      headline: "Run your daily business from one platform.",
      desc: "Consolidate point of sale, staff rosters, appointments, online orders, customer profiles, and multiple branches into a single high-performance cockpit.",
      icon: SlidersHorizontal,
      points: ["Replaces 5-6 disconnected apps", "Unified inventory & appointment scheduling", "Multi-branch permissions & roles"],
    },
    {
      num: "02",
      pillar: "UNDERSTAND",
      headline: "Use your business data to understand what is happening.",
      desc: "Stop staring at confusing spreadsheets. Veyra turns transactional receipts, visit frequency, and hourly capacity into plain-language summaries that reveal exact patterns.",
      icon: BrainCircuit,
      points: ["Instant daily morning briefings", "Customer retention drop-off indicators", "Profit margin & waste analysis"],
    },
    {
      num: "03",
      pillar: "GROW",
      headline: "Let your AI employee help identify and act on opportunities.",
      desc: "Your AI employee doesn't wait for your command. It spots empty salon chairs, slow dining hours, or surplus bakery batches and prepares high-yield marketing initiatives for your approval.",
      icon: Rocket,
      points: ["1-click approved promotional campaigns", "Automated regular customer re-engagement", "Measurable incremental revenue yield"],
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-purple-950/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            The Fundamental Paradigm Shift
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            More Than <span className="text-gradient-purple-gold">Software.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Traditional software was built to record the past. BizGalaxy was engineered to propel your future.
          </p>
        </div>

        {/* 3 Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="glass-panel glass-panel-hover p-8 sm:p-10 rounded-3xl border border-purple-500/20 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 group-hover:bg-purple-500/20 rounded-full blur-2xl transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-purple-400 font-mono">
                      {item.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold tracking-widest text-amber-300 uppercase block mb-2">
                    {item.pillar}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-2.5">
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement Box */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#100d23] to-purple-950/40 border border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
          <p className="text-xl sm:text-2xl font-extrabold text-white leading-relaxed">
            “Software manages. <br className="sm:hidden" />
            AI understands. <br />
            <span className="text-gradient-purple-gold">BizGalaxy brings both together.”</span>
          </p>
        </div>

      </div>
    </section>
  );
}
