"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  Maximize2,
  Ruler,
  Car,
  BedDouble,
  Store,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Dark & Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/predio-fachada-comercial.jpg"
          alt="Fachada do Prédio Comercial e Residencial em Boqueirão - PB"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 filter brightness-[0.40] contrast-[1.1] transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered Vignette & Gradients for Readability and Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/50 to-slate-950/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline / Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-emerald-500/10 backdrop-blur-md animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Oportunidade Única no Centro de Boqueirão - Paraíba</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-slate-300">Venda Direta</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl text-balance">
          Prédio Comercial e Residencial na zona{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            mais valorizada
          </span>{" "}
          da cidade
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal text-balance">
          Edifício com <span className="text-white font-semibold">3 pavimentos completos</span> (rés do chão e mais dois andares). 
          Ponto comercial consagrado na <span className="text-emerald-300 font-medium">Rua Félix Araújo</span> com alto fluxo de clientes, 
          visibilidade privilegiada e renda com locação de lojas e apartamentos.
        </p>

        {/* Price & Deal Banner */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 px-6 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-xl shadow-2xl">
          <div className="text-left sm:border-r sm:border-slate-800 sm:pr-6">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
              Preço de Venda
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                {PROPERTY_DATA.price.display}
              </span>
              <span className="text-xs text-amber-300 font-medium bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                Excelente Oportunidade
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 text-left">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Negociação Direta:</strong> Fale sem corretores ou taxas intermediárias.
            </span>
          </div>
        </div>

        {/* Fast Property Specs Bar (Linha com ícones mostrando dados rápidos) */}
        <div className="mt-9 w-full max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-left">
            {/* Stat 1: Pavimentos */}
            <div className="flex flex-col p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-200">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Building2 className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
                  Pavimentos
                </span>
              </div>
              <span className="text-base font-bold text-white">3 Níveis</span>
              <span className="text-[11px] text-slate-400">Térreo + 2 andares</span>
            </div>

            {/* Stat 2: Área m² */}
            <div className="flex flex-col p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-200">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Maximize2 className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
                  Área Total
                </span>
              </div>
              <span className="text-base font-bold text-white">263,50 m²</span>
              <span className="text-[11px] text-slate-400">Área construída</span>
            </div>

            {/* Stat 3: Dimensões */}
            <div className="flex flex-col p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-200">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Ruler className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
                  Medindo
                </span>
              </div>
              <span className="text-base font-bold text-white">1.537 m²</span>
              <span className="text-[11px] text-slate-400">Medida total</span>
            </div>

            {/* Stat 4: Vagas / Estacionamento */}
            <div className="flex flex-col p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-200">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Car className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
                  Vagas / Acesso
                </span>
              </div>
              <span className="text-base font-bold text-white">Fácil Vagas</span>
              <span className="text-[11px] text-slate-400">Estacionamento frontal</span>
            </div>

            {/* Stat 5: Quartos / Salas */}
            <div className="flex flex-col p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-200">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <BedDouble className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
                  Unidades
                </span>
              </div>
              <span className="text-base font-bold text-white">Multiuso</span>
              <span className="text-[11px] text-slate-400">Aptos / Salas / Lojas</span>
            </div>

            {/* Stat 6: Ponto Comercial */}
            <div className="flex flex-col p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-200">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Store className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
                  Localização
                </span>
              </div>
              <span className="text-base font-bold text-white">Centro Nobre</span>
              <span className="text-[11px] text-slate-400">Rua Félix Araújo</span>
            </div>
          </div>
        </div>

        {/* Primary Call to Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Main WhatsApp CTA */}
          <a
            href={PROPERTY_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] hover:bg-right shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Falar com o Proprietário</span>
          </a>

          {/* Secondary CTA: Ver Fotos e Galeria */}
          <a
            href="#galeria"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 transition-all duration-200 backdrop-blur-sm"
          >
            <span>Ver Galeria de Fotos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Direct Phone Assistance Note */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Boqueirão - Paraíba • WhatsApp: <strong>{PROPERTY_DATA.contact.phoneDisplay}</strong></span>
        </div>
      </div>

      {/* Decorative gradient border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"></div>
    </section>
  );
}
