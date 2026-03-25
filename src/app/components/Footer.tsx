import React from "react";
import CatLogo from "@res/logo/CatLogo";

const footerData: Record<string, any> = {
  it: {
    desc: "Kat3x è una piattaforma osservativa indipendente che studia come la conoscenza strutturata interagisce con i large language models. Monitora il framework normativo CHKCD.",
    titles: {
      kb: "Knowledge Base",
      network: "Network",
    },
    links: {
      glossary: "Glossario Canonico",
      protocol: "Protocollo Diagnostico",
      syntax: "Sintassi TONL",
      examples: "TONL Examples",
      about: "Chi Siamo",
      playground: "Diagnostic Playground",
    },
    copyright: "Semantic Node — Machine Readable Ready",
  },
  en: {
    desc: "Kat3x is an independent observational platform studying how structured knowledge interacts with large language models. It monitors the CHKCD normative framework.",
    titles: {
      kb: "Knowledge Base",
      network: "Network",
    },
    links: {
      glossary: "Canonical Glossary",
      protocol: "Diagnostic Protocol",
      syntax: "TONL Syntax",
      examples: "TONL Examples",
      about: "About Us",
      playground: "Diagnostic Playground",
    },
    copyright: "Semantic Node — Machine Readable Ready",
  },
};

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const dict = footerData[lang] || footerData.en;

  return (
    <footer className="relative overflow-hidden bg-slate-950/95 backdrop-blur-xl text-slate-300 border-t border-white/10">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-brand-500/10 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-44 -right-40 w-[34rem] h-[34rem] bg-emerald-500/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.16)_1px,transparent_0)] [background-size:26px_26px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href={`/${lang}`} className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-sm">
                <CatLogo
                  viewBox="0 0 236 236"
                  fill="currentColor"
                  className="h-9 w-9 text-white-500 group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Kat3x
                </span>
                <span className="text-xs text-slate-400">
                  AI Visibility Observatory
                </span>
              </div>
            </a>

            <p className="mt-5 text-sm leading-relaxed max-w-md text-slate-300/90">
              {dict.desc}
            </p>
          </div>

          {/* Knowledge Base */}
          <div>
            <h4 className="text-white font-bold mb-4">{dict.titles.kb}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`/${lang}/knowledge/glossary`}
                  className="hover:text-white transition-colors"
                >
                  {dict.links.glossary}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/knowledge/methodology`}
                  className="hover:text-white transition-colors"
                >
                  {dict.links.protocol}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/knowledge/tonl`}
                  className="hover:text-white transition-colors"
                >
                  {dict.links.syntax}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/knowledge/examples`}
                  className="hover:text-white transition-colors"
                >
                  {dict.links.examples}
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-white transition-colors">
                  llms.txt
                </a>
              </li>
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="text-white font-bold mb-4">{dict.titles.network}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://chkcd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  CHKCD Framework
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/diagnostic`}
                  className="hover:text-white transition-colors"
                >
                  {dict.links.playground}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/about`}
                  className="hover:text-white transition-colors"
                >
                  {dict.links.about}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-slate-400">
            © 2026 Kat3x AI Visibility Observatory. Version 1.0.
          </p>
          <p className="text-slate-400">{dict.copyright}</p>
        </div>
      </div>
    </footer>
  );
}