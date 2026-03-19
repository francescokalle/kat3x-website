import React from 'react';

interface BlockQuoteProps {
  quote: string;
  source?: string;
}

export default function BlockQuote({ quote, source = 'Kat3x Observatory' }: BlockQuoteProps) {
  return (
    <div className="relative max-w-3xl mx-auto py-8 px-4">
      
      {/* --- ELEMENTI DECORATIVI DI SFONDO (Sfuocati dal vetro) --- */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '6s' }} />
      {/* ------------------------------------------------------------------ */}

      {/* --- CARD GLASSMORPHISM --- */}
      {/* Modificato flex in "items-start" e "text-left" per allineare tutto a sinistra */}
      <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-3xl p-10 sm:p-14 overflow-hidden flex flex-col items-start text-left">
        
        {/* Riflesso interno superiore (per dare l'effetto spessore del vetro) */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

        {/* Virgolette decorative (A sinistra, in-flow, non tagliate) */}
        <span className="font-serif text-[80px] leading-[0] text-brand-600/30 mb-10 mt-6 select-none pointer-events-none">
          "
        </span>

        {/* Testo della citazione */}
        <blockquote className="font-serif italic text-xl md:text-2xl text-slate-800 leading-relaxed max-w-2xl">
          {quote}
        </blockquote>

        {/* Footer della citazione */}
        {source && (
          <div className="mt-10 flex items-center justify-start gap-4">
            {/* Pallino verde luminoso */}
            <div className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {source}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}