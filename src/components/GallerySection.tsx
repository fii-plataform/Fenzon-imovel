"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  Camera,
  Layers,
  Sparkles,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { PROPERTY_DATA, PropertyImage } from "@/data/property";
import ImageLightbox from "./ImageLightbox";

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Todas");

  const categories = ["Todas", "Comercial", "Fachada", "Estrutura"];

  const filteredImages =
    activeCategory === "Todas"
      ? PROPERTY_DATA.gallery
      : PROPERTY_DATA.gallery.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section id="galeria" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Galeria de Imagens</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Conheça o Imóvel em Detalhes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Veja as fotos da fachada, estrutura vertical e do ponto comercial no Centro de Boqueirão.
            Clique em qualquer imagem para ampliar em alta resolução.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/25"
                    : "bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                }`}
              >
                {cat === "Todas" ? "Todas as Fotos" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento-Box / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[280px] sm:auto-rows-[340px]">
          {/* Card 1: Wide Facade (Spans 7 cols on desktop) */}
          <div
            onClick={() => openLightbox(0)}
            className="group relative md:col-span-7 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-emerald-500/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={PROPERTY_DATA.gallery[0].src}
              alt="Fachada frontal comercial do edifício em Boqueirão"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent group-hover:via-slate-950/40 transition-colors" />

            {/* Badges and Caption */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/90 text-slate-950 backdrop-blur-md shadow-md">
                Destaque Principal
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950/70 text-slate-300 border border-slate-700 backdrop-blur-md">
                1274 × 1235
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-slate-950/60 text-white group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors backdrop-blur-md border border-slate-700/60">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-400">
                Ponto Comercial Consolidado
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                Fachada Comercial Frontal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                Ampla frente voltada para a Rua Félix Araújo, com lojas térreas ativas e dois pavimentos superiores.
              </p>
            </div>
          </div>

          {/* Card 2: Vertical Tall Corner View (Spans 5 cols on desktop, row-span 2 for height) */}
          <div
            onClick={() => openLightbox(1)}
            className="group relative md:col-span-5 md:row-span-2 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-emerald-500/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={PROPERTY_DATA.gallery[1].src}
              alt="Vista da esquina e dos 3 pavimentos completos"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent group-hover:via-slate-950/40 transition-colors" />

            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-400/90 text-slate-950 backdrop-blur-md shadow-md">
                3 Pavimentos
              </span>
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950/70 text-slate-300 border border-slate-700 backdrop-blur-md">
                1012 × 1555
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-slate-950/60 text-white group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors backdrop-blur-md border border-slate-700/60">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="text-[11px] uppercase font-bold tracking-wider text-amber-300">
                Esquina Estratégica & Altura
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Visão Angular & Altura Total
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Edifício vertical imponente com térreo comercial, sacada e dois andares superiores com ventilação e iluminação natural.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span>Clique para ver em tela cheia</span>
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Card 3: Ground Floor Commerce (Spans 4 cols on desktop) */}
          <div
            onClick={() => openLightbox(2)}
            className="group relative md:col-span-4 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-emerald-500/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={PROPERTY_DATA.gallery[2].src}
              alt="Lojas do pavimento térreo com fluxo comercial"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent group-hover:via-slate-950/50 transition-colors" />

            <div className="absolute top-4 left-4 z-10">
              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                Térreo Comercial
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-950/60 text-white group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors backdrop-blur-md border border-slate-700/60">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-base font-bold text-white">
                Térreo com Grande Visibilidade
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                Ponto ativo com lojas de grande apelo e movimentação diária no centro.
              </p>
            </div>
          </div>

          {/* Card 4: Upper Floors Versatility (Spans 3 cols on desktop) */}
          <div
            onClick={() => openLightbox(3)}
            className="group relative md:col-span-3 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-emerald-500/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Image
              src={PROPERTY_DATA.gallery[3].src}
              alt="Andares superiores para apartamentos ou clínicas"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent group-hover:via-slate-950/50 transition-colors" />

            <div className="absolute top-4 left-4 z-10">
              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                Pavimentos Superiores
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-950/60 text-white group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors backdrop-blur-md border border-slate-700/60">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-base font-bold text-white">
                Andares 1 & 2
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-2">
                Espaço ideal para apartamentos residenciais, consultórios ou escritórios.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner with GitHub note and visit invite */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Deseja ver o imóvel pessoalmente ou receber fotos adicionais?
              </h4>
              <p className="text-sm text-slate-400 mt-0.5">
                Agende uma visita técnica ou solicite a planta e documentos diretamente com o proprietário.
              </p>
            </div>
          </div>

          <a
            href={PROPERTY_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Agendar Visita no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={PROPERTY_DATA.gallery}
        currentIndex={selectedImageIndex ?? 0}
        isOpen={selectedImageIndex !== null}
        onClose={closeLightbox}
        onNavigate={(index) => setSelectedImageIndex(index)}
      />
    </section>
  );
}
