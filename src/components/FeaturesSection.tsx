"use client";

import React from "react";
import {
  Building,
  Compass,
  Coins,
  Eye,
  Layers,
  Handshake,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

const iconMap: Record<string, React.ElementType> = {
  Building,
  Compass,
  Coins,
  Eye,
  Layers,
  Handshake,
};

export default function FeaturesSection() {
  return (
    <section id="diferenciais" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comodidades e Diferenciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Por Que Investir Neste Imóvel?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Um dos poucos edifícios verticais no centro da cidade que combina localização de ponta,
            metragem expressiva e estrutura versátil para múltiplos modelos de negócio.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTY_DATA.differentiators.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Building;

            return (
              <div
                key={index}
                className={`relative group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? "bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/30 hover:border-emerald-500/60 shadow-xl shadow-emerald-500/5"
                    : "bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Top Row: Icon + Badge if highlight */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${
                      item.highlight
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                        : "bg-slate-800/80 border border-slate-700 text-slate-300"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {item.highlight && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Bottom line accent */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-500 group-hover:text-emerald-400/80 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Benefício comprovado no local</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
