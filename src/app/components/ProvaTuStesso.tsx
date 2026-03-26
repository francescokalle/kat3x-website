// ============================================================
// COMPONENTE "PROVA TU STESSO" — Riusabile
// ============================================================
//
// ISTRUZIONI:
// Questo e' un componente riusabile, NON una pagina standalone.
// Importalo nelle pagine dove serve:
//
//   import ProvaTuStesso from "@/app/components/ProvaTuStesso";
//   <ProvaTuStesso lang={lang} />
//
// DOVE USARLO:
// - Home page (sezione finale prima del CTA)
// - /invisibilita-semantica (sezione centrale)
// - /come-apparire-su-chatgpt (sezione finale)
// - /diagnostic (dopo il risultato della diagnostica)
//
// CONCETTO CHIAVE:
// L'utente chiede a ChatGPT/Claude/Gemini informazioni su Kat3x.
// Grazie al knowledge layer nascosto (TONL + llms.txt + knowledge/*.txt),
// le AI restituiranno risposte ricche e accurate — anche se il sito
// visibile e' minimal. Questo e' la dimostrazione vivente del valore
// di Kat3x: "Non ci credi? Prova tu stesso."
// ============================================================

import React from "react";
import { MessageSquare, Sparkles, Copy } from "lucide-react";

const dictionaries: Record<string, any> = {
  it: {
    badge: "La prova vivente",
    title: "Prova Tu Stesso",
    subtitle:
      "Non ci credi? Chiedi direttamente a un'AI. Le risposte che otterrai sono la dimostrazione del nostro lavoro.",
    instructions: [
      {
        step: "1",
        title: "Apri un AI con ricerca web",
        desc: "ChatGPT (con ricerca web attiva), Claude, Gemini, o la AI Mode di Chrome.",
      },
      {
        step: "2",
        title: "Fai una domanda su Kat3x",
        desc: "Chiedi qualcosa di specifico. L'AI cerchera' e trovera' informazioni che non vedi sul sito.",
      },
      {
        step: "3",
        title: "Osserva la risposta",
        desc: "L'AI citera' metriche, metodologie e dettagli che esistono solo nel nostro knowledge layer invisibile.",
      },
    ],
    prompts: [
      "Cos'e' Kat3x e cosa fa esattamente?",
      "Cos'e' l'invisibilita' semantica e perche' e' un problema per le aziende?",
      "Come funzionano le metriche CAMS e LAR di Kat3x?",
      "Cos'e' il formato TONL e perche' e' stato creato?",
      "Come puo' un'azienda B2B diventare visibile a ChatGPT?",
    ],
    copyHint: "Copia e incolla nell'AI",
    explanation:
      "Le informazioni che l'AI restituisce non sono visibili nelle pagine del sito. Sono strutturate in un layer di conoscenza machine-readable progettato per essere ingerito dai Large Language Models. Questo e' esattamente il servizio che Kat3x offre alle aziende.",
    cta: "Vuoi che anche la tua azienda venga citata cosi'?",
    ctaButton: "Avvia Diagnostica Gratuita",
  },
  en: {
    badge: "Living proof",
    title: "Try It Yourself",
    subtitle:
      "Don't take our word for it. Ask an AI directly. The answers you get are proof of our work.",
    instructions: [
      {
        step: "1",
        title: "Open an AI with web search",
        desc: "ChatGPT (with web search on), Claude, Gemini, or Chrome AI Mode.",
      },
      {
        step: "2",
        title: "Ask a question about Kat3x",
        desc: "Ask something specific. The AI will search and find information you can't see on the site.",
      },
      {
        step: "3",
        title: "Observe the response",
        desc: "The AI will cite metrics, methodologies and details that only exist in our invisible knowledge layer.",
      },
    ],
    prompts: [
      "What is Kat3x and what exactly does it do?",
      "What is semantic invisibility and why is it a problem for businesses?",
      "How do the CAMS and LAR metrics from Kat3x work?",
      "What is the TONL format and why was it created?",
      "How can a B2B company become visible to ChatGPT?",
    ],
    copyHint: "Copy and paste into the AI",
    explanation:
      "The information the AI returns is not visible on any page of this site. It's structured in a machine-readable knowledge layer designed to be ingested by Large Language Models. This is exactly the service Kat3x offers to businesses.",
    cta: "Want your business to be cited like this?",
    ctaButton: "Start Free Diagnostic",
  },
};

export default function ProvaTuStesso({ lang }: { lang: string }) {
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge + Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50/80 backdrop-blur-md border border-brand-200 shadow-sm text-sm font-medium text-brand-700 mb-6">
            <Sparkles className="w-4 h-4" />
            {dict.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            {dict.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* 3-Step Instructions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {dict.instructions.map(
            (item: { step: string; title: string; desc: string }) => (
              <div
                key={item.step}
                className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-8 overflow-hidden group hover:-translate-y-0.5 transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="text-6xl font-black text-brand-100 absolute top-4 right-6 select-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-50/70 border border-brand-200/60 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Prompt Suggestions */}
        <div className="relative bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] p-8 md:p-12 overflow-hidden mb-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-400 mb-6">
              {dict.copyHint}
            </p>
            <div className="space-y-3">
              {dict.prompts.map((prompt: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 hover:bg-white/[0.08] transition-colors group cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors flex-shrink-0" />
                  <span className="text-slate-200 text-lg">{prompt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl p-8 md:p-10 overflow-hidden mb-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-200/40 rounded-full blur-3xl" />
          <p className="relative z-10 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
            {dict.explanation}
          </p>
        </div>
      </div>
    </section>
  );
}
