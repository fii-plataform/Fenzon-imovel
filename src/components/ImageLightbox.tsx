"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { PropertyImage, PROPERTY_DATA } from "@/data/property";

interface LightboxProps {
  images: PropertyImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full px-4 sm:px-8 py-4 flex items-center justify-between z-10 border-b border-slate-800/80 bg-slate-950/80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            {currentImage.category}
          </span>
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-white">
              {currentImage.title}
            </h3>
            <p className="text-xs text-slate-400 hidden sm:block">
              {currentImage.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs sm:text-sm font-medium text-slate-400">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrow Left */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-slate-900/80 border border-slate-700/80 text-white hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Image Container */}
        <div className="relative w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center select-none">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Arrow Right */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-slate-900/80 border border-slate-700/80 text-white hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div
        className="w-full px-4 sm:px-8 py-4 border-t border-slate-800/80 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs text-slate-300 text-center sm:text-left">
          {currentImage.subtitle}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={PROPERTY_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Tirar dúvidas desta foto no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
