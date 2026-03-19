import React from 'react';
import { Rabbit } from 'lucide-react';
import CatLogo from '@res/logo/CatLogo';

const footerData: Record<string, any> = {
  it: {
    desc: "Kat3x è una piattaforma osservativa indipendente che studia come la conoscenza strutturata interagisce con i large language models. Monitora il framework normativo CHKCD.",
    titles: {
      kb: "Knowledge Base",
      network: "Network"
    },
    links: {
      glossary: "Glossario Canonico",
      protocol: "Protocollo Diagnostico",
      syntax: "Sintassi TONL",
      about: "Chi Siamo",
      playground: "Diagnostic Playground"
    },
    copyright: "Semantic Node — Machine Readable Ready"
  },
  en: {
    desc: "Kat3x is an independent observational platform studying how structured knowledge interacts with large language models. It monitors the CHKCD normative framework.",
    titles: {
      kb: "Knowledge Base",
      network: "Network"
    },
    links: {
      glossary: "Canonical Glossary",
      protocol: "Diagnostic Protocol",
      syntax: "TONL Syntax",
      about: "About Us",
      playground: "Diagnostic Playground"
    },
    copyright: "Semantic Node — Machine Readable Ready"
  }
};

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const dict = footerData[lang] || footerData.en;

  return (
    <footer className="bg-slate-950/95 backdrop-blur-xl text-slate-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <CatLogo 
              viewBox="0 0 236 236" 
              fill="currentColor"
              className="h-12 w-12 text-brand-600 group-hover:scale-110 transition-transform" 
            />
            <span className="font-bold text-lg text-white">Kat3x</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            {dict.desc}
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">{dict.titles.kb}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={`/${lang}/knowledge/glossary`} className="hover:text-white transition-colors">{dict.links.glossary}</a></li>
            <li><a href={`/${lang}/knowledge/methodology`} className="hover:text-white transition-colors">{dict.links.protocol}</a></li>
            <li><a href={`/${lang}/knowledge/tonl`} className="hover:text-white transition-colors">{dict.links.syntax}</a></li>
            <li><a href="/llms.txt" className="hover:text-white transition-colors">llms.txt</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">{dict.titles.network}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://chkcd.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CHKCD Framework</a></li>
            <li><a href={`/${lang}/diagnostic`} className="hover:text-white transition-colors">{dict.links.playground}</a></li>
            <li><a href={`/${lang}/about`} className="hover:text-white transition-colors">{dict.links.about}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Kat3x AI Visibility Observatory. Version 1.0.</p>
        <p className="mt-2 md:mt-0">{dict.copyright}</p>
      </div>
    </footer>
  );
}