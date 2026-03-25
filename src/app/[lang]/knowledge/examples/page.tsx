import React from "react";
import { Code2, Building2 } from "lucide-react";
import GlowTitle from "@/app/components/GlowTitle";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "@/app/components/PageBackground";
import BlockQuote from "@/app/components/blockquote";
import { getPageMetadata } from "@/config/metadata-per-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("examples", lang);
}

// --- TRANSLATION DICTIONARIES ---
const dictionaries: Record<string, any> = {
  it: {
    title: "Strutture Semantiche (Casi Reali)",
    subtitle:
      "Template industriali pronti per il Knowledge Seeding. Scopri come i dati non strutturati vengono tradotti in formati ad alta assimilazione per le AI.",
    mantraLabel: "Canonical Definition (Principio Kat3x)",
    mantra:
      "Un’intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato.",
    examplesTitle: "Template per Settore Industriale",
    examples: [
      {
        id: "manufacturing",
        label: "Manufacturing — Configurazione Macchinario",
        description:
          "Rappresentazione di un macchinario industriale agricolo. Strutturato per assicurare che l'LLM comprenda le specifiche tecniche (come la capacità produttiva) ignorando il 'rumore' del testo marketing.",
        code: `@entity: machine
@id: dryer_tx_500
@context: industrial_agriculture

machine{type|input_moisture|output_moisture|capacity}:
  type: grain dryer
  input_moisture: 24%
  output_moisture: 14%
  capacity: 5.3 t/h
  power_req: 45kW
  
@claims:
  - "Riduce l'umidità del 10% in modo uniforme"
  - "Pienamente compatibile con lo standard telemetrico CHKCD"`,
      },
      {
        id: "hospitality",
        label: "Hospitality — Hotel Services Discovery",
        description:
          "Come strutturare i servizi di un Hotel di lusso per garantire la 'AI Citability' durante le ricerche degli utenti (es. 'Trovami un hotel con SPA e ricarica per auto elettriche').",
        code: `@entity: hospitality_facility
@id: grand_hotel_veneto
@context: luxury_tourism

facility_services{category|status|access}:
  spa_wellness:
    status: active
    access: guests_only
    features: [sauna, thermal_pool, massage]
  ev_charging:
    status: active
    connectors: [type_2, ccs]
    power_kw: 22

@limitations:
  - "L'accesso alla SPA richiede prenotazione anticipata"
  - "Ricarica EV soggetta a disponibilità"`,
      },
    ],
  },
  en: {
    title: "Semantic Structures (Real Cases)",
    subtitle:
      "Industrial templates ready for Knowledge Seeding. Discover how unstructured data is translated into high-assimilation formats for AIs.",
    mantraLabel: "Canonical Definition (Kat3x Principle)",
    mantra:
      "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured.",
    examplesTitle: "Templates by Industrial Sector",
    examples: [
      {
        id: "manufacturing",
        label: "Manufacturing — Machine Configuration",
        description:
          "Representation of an agricultural industrial machine. Structured to ensure the LLM understands technical specs (like production capacity) while ignoring marketing noise.",
        code: `@entity: machine
@id: dryer_tx_500
@context: industrial_agriculture

machine{type|input_moisture|output_moisture|capacity}:
  type: grain dryer
  input_moisture: 24%
  output_moisture: 14%
  capacity: 5.3 t/h
  power_req: 45kW
  
@claims:
  - "Reduces moisture by 10% uniformly"
  - "Fully compatible with CHKCD telemetry standard"`,
      },
      {
        id: "hospitality",
        label: "Hospitality — Hotel Services Discovery",
        description:
          "How to structure luxury Hotel services to ensure 'AI Citability' during user prompt-based discovery (e.g., 'Find me a hotel with a SPA and EV charging').",
        code: `@entity: hospitality_facility
@id: grand_hotel_veneto
@context: luxury_tourism

facility_services{category|status|access}:
  spa_wellness:
    status: active
    access: guests_only
    features: [sauna, thermal_pool, massage]
  ev_charging:
    status: active
    connectors: [type_2, ccs]
    power_kw: 22

@limitations:
  - "SPA access requires prior booking"
  - "EV charging subject to availability"`,
      },
    ],
  },
};

export default async function ExamplesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      <PageBackground />
      <Navbar lang={lang} />

      <main className="pb-24">
        {/* HERO */}
        <section className="relative pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-56 bg-gradient-to-r from-brand-100/60 to-emerald-100/40 blur-3xl -z-10 rounded-[100%]" />

          <div className="w-16 h-16 bg-white/60 backdrop-blur-xl border border-white/70 text-brand-700 rounded-2xl flex items-center justify-center mx-auto mb-7 shadow-sm">
            <Building2 className="h-7 w-7" />
          </div>

          <GlowTitle
            as="h1"
            className="text-4xl md:text-6xl text-slate-900 mb-5 tracking-tight leading-[1.1]"
            glowColor="100, 255, 100"
          >
            {dict.title}
          </GlowTitle>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {dict.subtitle}
          </p>
        </section>

        {/* CONTENT */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          
            <BlockQuote quote={dict.mantra} source={dict.mantraLabel}/>

          {/* EXAMPLES LIST */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            {dict.examplesTitle}
          </h2>

          <div className="space-y-8">
            {dict.examples.map((example: any) => (
              <article
                key={example.id}
                className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] overflow-hidden hover:-translate-y-0.5 transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="px-6 py-4 border-b border-white/70 bg-white/35 backdrop-blur-md flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 bg-white/60 backdrop-blur-md border border-white/70 text-brand-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm truncate">
                      {example.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 border border-white/70 bg-white/50 px-2 py-1 rounded-full">
                    USE CASE
                  </span>
                </div>

                <div className="px-6 py-5">
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                    {example.description}
                  </p>

                  <pre className="bg-slate-950 text-emerald-200/90 text-sm rounded-2xl p-5 overflow-x-auto leading-relaxed font-mono border border-white/10 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
                    {example.code}
                  </pre>
                </div>
              </article>
            ))}
          </div>

        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}