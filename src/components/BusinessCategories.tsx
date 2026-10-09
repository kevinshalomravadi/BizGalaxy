import React from "react";
import {
  Scissors,
  UtensilsCrossed,
  Coffee,
  Cake,
  ShoppingBag,
  CupSoda,
  Store,
  Sparkles
} from "lucide-react";

export function BusinessCategories() {
  const categories = [
    { name: "SALONS", icon: Scissors, desc: "AI Salon Employee" },
    { name: "RESTAURANTS", icon: UtensilsCrossed, desc: "AI Restaurant Employee" },
    { name: "CAFÉS", icon: Coffee, desc: "AI Café Employee" },
    { name: "BAKERIES", icon: Cake, desc: "AI Bakery Employee" },
    { name: "SUPERMARKETS", icon: ShoppingBag, desc: "AI Retail Employee" },
    { name: "JUICE SHOPS", icon: CupSoda, desc: "AI Juice Shop Employee" },
    { name: "RETAIL", icon: Store, desc: "AI Store Employee" },
    { name: "AND MORE", icon: Sparkles, desc: "Specialized AI Employee" },
  ];

  return (
    <section className="relative py-12 border-y border-purple-500/10 bg-white/[0.01] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-8">
          Built for the businesses that keep local communities moving.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-purple-950/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-white/5 text-zinc-400 group-hover:text-purple-300 group-hover:bg-purple-500/10 transition-colors mb-2.5">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <span className="text-xs font-bold tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                  {cat.name}
                </span>
                <span className="text-[10px] text-zinc-500 group-hover:text-purple-300/80 transition-colors mt-0.5 text-center">
                  {cat.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
