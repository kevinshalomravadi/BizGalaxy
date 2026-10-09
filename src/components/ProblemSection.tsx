import React from "react";
import {
  Users,
  CalendarDays,
  UserCheck,
  ShoppingBag,
  Megaphone,
  Tag,
  PhoneCall,
  BarChart3,
  BrainCircuit,
  ArrowDown
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ProblemSection() {
  const problems = [
    { title: "Managing customers", desc: "Keeping tabs on contact info, notes, preferences and history.", icon: Users },
    { title: "Tracking bookings", desc: "Avoiding double bookings, schedule gaps and last-minute cancellations.", icon: CalendarDays },
    { title: "Managing employees", desc: "Balancing shifts, commissions, roles and operational coverage.", icon: UserCheck },
    { title: "Handling orders", desc: "Juggling takeaway, dine-in, counter and digital customer orders.", icon: ShoppingBag },
    { title: "Marketing", desc: "Trying to stay visible on social media while running the floor.", icon: Megaphone },
    { title: "Creating offers", desc: "Figuring out what discounts or bundles will actually bring people in.", icon: Tag },
    { title: "Following up with customers", desc: "Reaching out to inactive regulars before they disappear forever.", icon: PhoneCall },
    { title: "Understanding performance", desc: "Making sense of messy daily numbers and monthly profit margins.", icon: BarChart3 },
    { title: "Remembering everything", desc: "Carrying the entire weight of daily operational details in your head.", icon: BrainCircuit },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background soft glow (stable) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-rose-300 uppercase tracking-wider mb-4">
              The Reality of Small Business
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Running a business shouldn&apos;t mean{" "}
              <span className="text-gradient-purple-gold">doing everything yourself.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Most local owners wear ten hats a day. When every minute is spent on daily firefighting, there is no time left to actually grow.
            </p>
          </div>
        </ScrollReveal>

        {/* 9 Problem Glass Cards (Clean, stable layout with subtle hover) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <ScrollReveal key={prob.title} delayMs={idx * 50}>
                <div
                  className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-purple-400/40"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 group-hover:scale-105 group-hover:text-yellow-300 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-200 transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Transition statement */}
        <ScrollReveal delayMs={150}>
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-5">
              <div className="w-10 h-10 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-600/30 via-violet-500/40 to-yellow-500/30">
              <div className="px-8 py-4 rounded-[14px] bg-[#0c0919] border border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                  BizGalaxy gives your business <span className="text-gradient-purple-gold">another employee.</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
