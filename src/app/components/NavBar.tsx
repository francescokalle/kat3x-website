"use client";

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  AlertCircle, 
  Briefcase, 
  FlaskConical, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';
import CatLogo from "@res/logo/CatLogo";

// Dizionario integrato nell'elemento
const navData: Record<string, any> = {
  it: {
    tagline: "AI Visibility Observatory",
    problem: "Il Problema",
    useCases: "Casi d'Uso",
    methodology: "Metodologia",
    standard: "Standard CHKCD",
    cta: "Avvia Self-Test"
  },
  en: {
    tagline: "AI Visibility Observatory",
    problem: "The Problem",
    useCases: "Use Cases",
    methodology: "Methodology",
    standard: "CHKCD Standard",
    cta: "Run Self-Test"
  }
};

const fallbackDict = navData.en;

interface NavbarProps {
  lang?: string;
}

export default function Navbar({ lang = 'en' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dict = navData[lang] || navData['en'] || fallbackDict;

  const disabledCursorStyle: React.CSSProperties = {
    cursor: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" style=\"font-size: 24px;\"><text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"central\">🚧</text></svg>') 16 16, not-allowed"
  };

  return (
    // Usiamo un Fragment (<>) per restituire sia lo spacer che la navbar
    <>
      {/* 
        SPACER INVISIBILE:
        Questo div scorre normalmente con la pagina. È alto 96px (h-24) per compensare 
        i 16px (top-4) + 64px (h-16) della navbar, più un piccolo margine extra di respiro.
        bg-transparent assicura che prenda il colore del container/sfondo sottostante.
      */}
      <div 
        className="w-full h-24 bg-transparent pointer-events-none flex-shrink-0" 
        aria-hidden="true" 
      />

      {/* LA NAVBAR FISSA */}
      <div className="fixed top-4 left-0 w-full flex justify-center px-4 sm:px-6 lg:px-8 z-50 pointer-events-none">
        
        {/* w-full gli permette di ridursi infinitamente senza blocchi, max-w-7xl lo limita su desktop */}
        <div className="w-full max-w-7xl relative pointer-events-auto">
          
          {/* L'HEADER VISIBILE */}
          <header className="w-full bg-white/50 backdrop-blur-lg border border-slate-200/80 shadow-lg shadow-slate-200/50 rounded-2xl">
            <div className="h-16 px-4 sm:px-6 flex items-center justify-between">
              
              {/* LOGO E BRAND */}
              <a 
                href={`/${lang}`}
                className="flex items-center gap-2 group transition-all min-w-0"
              >
                <CatLogo 
                  viewBox="0 0 236 236" 
                  fill="currentColor"
                  className="h-10 w-10 text-brand-600 group-hover:scale-110 transition-transform flex-shrink-0" 
                />
                <div className="flex flex-col sm:flex-row sm:items-center min-w-0">
                  <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors truncate">
                    Kat3x
                  </span>
                  <span className="hidden sm:inline-block text-sm text-slate-500 sm:ml-2 sm:border-l sm:pl-2 border-slate-300 truncate">
                    {dict.tagline}
                  </span>
                </div>
              </a>

              {/* LINKS CENTRALI (Desktop) */}
              <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                <a href={`/${lang}/problem`} className="hover:text-brand-600 transition-colors">
                  {dict.problem}
                </a>
                
                <span className="group flex items-center gap-2 opacity-60 transition-colors" style={disabledCursorStyle}>
                  <a href="#" className="pointer-events-none">{dict.useCases}</a>
                </span>

                <span className="group flex items-center gap-2 opacity-60 transition-colors" style={disabledCursorStyle}>
                  <a href="#" className="pointer-events-none">{dict.methodology}</a>
                </span>

                <span className="group flex items-center gap-2 opacity-60 transition-colors" style={disabledCursorStyle}>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="pointer-events-none">
                    {dict.standard}
                  </a>
                </span>
              </nav>

              {/* CTA BUTTON (Desktop) */}
              <div className="hidden md:block">
                <a 
                  href={`/${lang}/diagnostic`} 
                  className="bg-brand-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-700 transition-colors shadow-sm whitespace-nowrap"
                >
                  {dict.cta}
                </a>
              </div>

              {/* HAMBURGER MENU BUTTON (Mobile) */}
              <div className="md:hidden flex items-center flex-shrink-0">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-slate-600 hover:text-brand-600 focus:outline-none p-1.5 transition-transform duration-200 active:scale-95 bg-slate-100 rounded-lg"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </header>

          {/* MOBILE MENU DROPDOWN */}
          <div 
            className={`md:hidden absolute z-50 left-0 right-0 sm:left-auto sm:right-0 top-[calc(100%+0.75rem)] sm:w-[320px] rounded-2xl shadow-2xl border border-white/20 p-4 transform transition-all duration-300 ease-out origin-top sm:origin-top-right
              bg-white/50 backdrop-blur-md overflow-hidden
              ${isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3 min-w-0">
              
              {/* Item 1: Problem */}
              <a 
                href={`/${lang}/problem`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-brand-50/60 hover:bg-brand-100/80 text-slate-700 hover:text-brand-600 transition-colors border border-white/20 min-w-0"
              >
                <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7 mb-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center truncate w-full">{dict.problem}</span>
              </a>

              {/* Item 2: Use Cases (Disabled) */}
              <div 
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-brand-50/50 text-slate-400 opacity-60 relative border border-white/10 min-w-0" 
                style={disabledCursorStyle}
              >
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 mb-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center truncate w-full">{dict.useCases}</span>
                <span className="absolute top-1 right-1 sm:top-2 sm:right-2 text-[10px] sm:text-xs">🚧</span>
              </div>

              {/* Item 3: Methodology (Disabled) */}
              <div 
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-brand-50/50 text-slate-400 opacity-60 relative border border-white/10 min-w-0" 
                style={disabledCursorStyle}
              >
                <FlaskConical className="w-6 h-6 sm:w-7 sm:h-7 mb-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center truncate w-full">{dict.methodology}</span>
                <span className="absolute top-1 right-1 sm:top-2 sm:right-2 text-[10px] sm:text-xs">🚧</span>
              </div>

              {/* Item 4: Standard (Disabled) */}
              <div 
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-brand-50/50 text-slate-400 opacity-60 relative border border-white/10 min-w-0" 
                style={disabledCursorStyle}
              >
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 mb-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center truncate w-full">{dict.standard}</span>
                <span className="absolute top-1 right-1 sm:top-2 sm:right-2 text-[10px] sm:text-xs">🚧</span>
              </div>

            </div>

            <div className="mt-4 pt-4 border-t border-white/20 flex min-w-0">
              <a 
                href={`/${lang}/diagnostic`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand-600/50 backdrop-blur-lg text-white px-4 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-brand-700 transition-all shadow-md active:scale-[0.98] truncate"
              >
                <Activity className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">{dict.cta}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}