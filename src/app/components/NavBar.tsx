import React from 'react';
import CatLogo from "@res/logo/CatLogo"

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

interface NavbarProps {
  lang: string;
}

export default function Navbar({ lang }: NavbarProps) {
  // Fallback sull'inglese se la lingua non è supportata
  const dict = navData[lang] || navData.en;

  // Stile tipizzato per il cursore centrato a forma di cantiere (🏗️)
  // Nota: abbiamo aggiunto text-anchor, dominant-baseline e l'offset "16 16"
  const disabledCursorStyle: React.CSSProperties = {
    cursor: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" style=\"font-size: 24px;\"><text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"central\">🚧</text></svg>') 16 16, not-allowed"
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO & BRAND */}
        <a 
          href={`/${lang}`}
          className="flex items-center gap-2 group transition-all"
        >
          <CatLogo 
            viewBox="0 0 236 236" 
            fill="currentColor"
            className="h-10 w-10 text-brand-600 group-hover:scale-110 transition-transform" 
          />
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className="font-bold text-lg tracking-tight text-dark group-hover:text-brand-600 transition-colors">
              Kat3x
            </span>
            <span className="hidden sm:inline-block text-sm text-mid sm:ml-2 sm:border-l sm:pl-2 border-slate-300">
              {dict.tagline}
            </span>
          </div>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-mid">
          <a href={`/${lang}/problem`} className="hover:text-brand-600 transition-colors">
            {dict.problem}
          </a>
          
          <span 
            className="opacity-50 transition-colors" 
            style={disabledCursorStyle}
          >
            <span className="pointer-events-none">{dict.useCases}</span>
          </span>

          <span 
            className="opacity-50 transition-colors" 
            style={disabledCursorStyle}
          >
            <span className="pointer-events-none">{dict.methodology}</span>
          </span>

          <span 
            className="opacity-50 transition-colors" 
            style={disabledCursorStyle}
          >
            <span className="pointer-events-none">{dict.standard}</span>
          </span>
        </nav>

        {/* CTA BUTTON */}
        <div>
          <a 
            href={`/${lang}/diagnostic`} 
            className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm"
          >
            {dict.cta}
          </a>
        </div>
      </div>
    </header>
  );
}