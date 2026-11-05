"use client";

import React from "react";
import {
  MapPin,
  Navigation,
  Compass,
  Building2,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Privilegiada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            No Centro Comercial de Boqueirão
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Situado no endereço mais movimentado da cidade, garantindo máxima visibilidade para
            qualquer segmento comercial e praticidade para moradores e clientes.
          </p>
        </div>

        {/* Location Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Location Information Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Endereço Oficial
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {PROPERTY_DATA.location.address}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {PROPERTY_DATA.location.neighborhood} • {PROPERTY_DATA.location.city} - {PROPERTY_DATA.location.state}
                  </p>
                </div>
              </div>

              {/* Location Highlights */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Fluxo Intenso de Pedestres e Veículos</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Ponto central com tráfego contínuo ao longo de todo o dia comercial.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Vizinhança Ativa e Consolidada</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Próximo a lojas, farmácias, mercados, agências bancárias e serviços essenciais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Fácil Acesso e Estacionamento Frontal</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Área ampla na frente do prédio para parada de clientes, motos e automóveis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Cidade em Pleno Desenvolvimento</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Boqueirão é polo no Cariri Oriental da Paraíba, atraindo moradores de cidades vizinhas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps External Button */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={PROPERTY_DATA.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 transition-all"
              >
                <Navigation className="w-4 h-4 fill-slate-950" />
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Embedded Google Maps (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 min-h-[380px] lg:min-h-full relative">
            <iframe
              title="Localização do Edifício na Rua Félix Araújo, Centro - Boqueirão / PB"
              src={PROPERTY_DATA.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px", filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
