"use client";

import React from "react";
import {
  TrendingUp,
  Store,
  Home,
  Briefcase,
  DollarSign,
  ArrowUpRight,
  ShieldAlert,
  Percent,
} from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function InvestmentSection() {
  return (
    <section id="investimento" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Retorno Sobre Investimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Alto Potencial de Rendimento Recorrente
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            A versatilidade dos 3 pavimentos permite criar múltiplas fontes de receita estável através
            de locações comerciais e residenciais simultâneas.
          </p>
        </div>

        {/* 3 Revenue Stream Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1: Pavimento Térreo */}
          <div className="rounded-2xl p-7 bg-slate-900 border border-slate-800 relative group hover:border-emerald-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
              <Store className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
              Piso Térreo • Rés do Chão
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">
              Lojas & Comércio Varejista
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fachada direta para a rua com enorme fluxo de pedestres e veículos. Ideal para lojas de eletrônicos, farmácias, óticas, oficinas, bancos 24h ou minimercados com alto valor de metro quadrado comercial.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="text-slate-400">Público-alvo</span>
              <span className="font-semibold text-white">Comerciantes & Redes</span>
            </div>
          </div>

          {/* Pillar 2: 1º Pavimento */}
          <div className="rounded-2xl p-7 bg-slate-900 border border-slate-800 relative group hover:border-teal-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-5">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-bold tracking-wider text-teal-400">
              1º Andar Superior
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">
              Consultórios & Escritórios
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Pavimento intermediário com sacada frontal, ventilação e excelente iluminação. Perfeito para consultórios médicos, odontológicos, escritórios de advocacia, contabilidade ou polos de atendimento corporativo.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="text-slate-400">Público-alvo</span>
              <span className="font-semibold text-white">Profissionais Liberais</span>
            </div>
          </div>

          {/* Pillar 3: 2º Pavimento */}
          <div className="rounded-2xl p-7 bg-slate-900 border border-slate-800 relative group hover:border-amber-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
              <Home className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              2º Andar Superior
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">
              Apartamentos Residenciais
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Andar superior com privacidade e vista privilegiada. Pode ser configurado como ampla residência executiva ou dividido em apartamentos/estúdios compactos de alta procura para moradia no centro da cidade.
            </p>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="text-slate-400">Público-alvo</span>
              <span className="font-semibold text-white">Famílias & Locatários</span>
            </div>
          </div>
        </div>

        {/* Investment Metric Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800">
          {PROPERTY_DATA.investmentHighlights.map((item, index) => (
            <div key={index} className="text-center p-3">
              <div className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {item.metric}
              </div>
              <div className="text-sm font-bold text-white mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
