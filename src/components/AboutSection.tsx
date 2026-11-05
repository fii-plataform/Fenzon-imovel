"use client";

import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Building,
  Store,
  MapPin,
  MessageCircle,
  TrendingUp,
  Shield,
  Layers,
} from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-slate-900/60 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image in Elegant Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 aspect-[4/5]">
                <Image
                  src={PROPERTY_DATA.aboutImage}
                  alt="Edifício de 3 Pavimentos na Rua Félix Araújo, Boqueirão"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/90 border border-slate-800 backdrop-blur-md shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Edifício com 3 Pavimentos
                      </h4>
                      <p className="text-xs text-slate-400">
                        Rés do chão + 2 andares completos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-slate-950/90 border border-emerald-500/30 backdrop-blur-md shadow-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Localização Nobre</div>
                  <div className="text-[11px] text-emerald-400">Rua Félix Araújo, Centro</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
              <Building className="w-3.5 h-3.5" />
              <span>{PROPERTY_DATA.about.badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              {PROPERTY_DATA.about.title}
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-base text-slate-300 leading-relaxed font-normal">
              {PROPERTY_DATA.about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Bullets Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PROPERTY_DATA.about.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={PROPERTY_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Conversar com o Proprietário</span>
              </a>

              <a
                href="#localizacao"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Ver Localização no Mapa</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
