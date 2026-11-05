"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Calendar,
  Sparkles,
} from "lucide-react";
import { PROPERTY_DATA } from "@/data/property";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("83993865806");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Box */}
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950 border border-emerald-500/30 shadow-2xl backdrop-blur-xl text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Atendimento Direto com o Proprietário</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Pronto para conhecer este imóvel ou fazer sua proposta?
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Para mais informações, detalhes da metragem, consulta de valores ou agendamento de visita presencial, 
            entre em contato imediatamente pelo WhatsApp.
          </p>

          {/* Big Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp Button */}
            <a
              href={PROPERTY_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-[length:200%_auto] hover:bg-right shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950" />
              <span>Chamar no WhatsApp Agora</span>
            </a>

            {/* Direct Phone Call / Copy */}
            <div className="w-full sm:w-auto flex items-center gap-2">
              <a
                href={`tel:${PROPERTY_DATA.contact.whatsappNumber}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-5 rounded-2xl font-semibold text-base text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>{PROPERTY_DATA.contact.phoneDisplay}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                title="Copiar número"
                className="p-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Copiar número de telefone"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {copied && (
            <p className="mt-3 text-xs text-emerald-400 font-medium animate-in fade-in duration-150">
              ✓ Número copiado para a área de transferência!
            </p>
          )}

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Sem Intermediários</h4>
                <p className="text-xs text-slate-400">Trate direto com o proprietário</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Visita Flexível</h4>
                <p className="text-xs text-slate-400">Agende no dia e hora de sua escolha</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Resposta Rápida</h4>
                <p className="text-xs text-slate-400">Atendimento ágil no WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
