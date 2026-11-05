"use client";

import React from "react";
import { Building2, MessageCircle, Phone, MapPin, ArrowUp } from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Imóvel Central Boqueirão
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              Prédio comercial e residencial de 3 pavimentos no centro mais valorizado e movimentado de Boqueirão - PB.
              Excelente oportunidade para investimento ou comércio próprio.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{PROPERTY_DATA.location.fullAddress}</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-emerald-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-emerald-400 transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition-colors">
                  Sobre o Imóvel
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-emerald-400 transition-colors">
                  Comodidades e Diferenciais
                </a>
              </li>
              <li>
                <a href="#investimento" className="hover:text-emerald-400 transition-colors">
                  Potencial de Rendimento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-emerald-400 transition-colors">
                  Localização no Mapa
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
              Contato Direto
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Agende sua visita ou tire suas dúvidas diretamente com o proprietário do imóvel:
            </p>
            <div className="space-y-3">
              <a
                href={PROPERTY_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>WhatsApp: {PROPERTY_DATA.contact.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>Ligação: {PROPERTY_DATA.contact.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Edifício Comercial & Residencial Boqueirão. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
