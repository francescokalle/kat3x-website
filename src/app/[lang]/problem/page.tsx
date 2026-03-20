import React from "react";
import { SearchX, ServerCrash, Bot, ArrowRight } from "lucide-react";
import GlowTitle from "../../components/GlowTitle";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "../../components/PageBackground";
import Blockquote from "@/app/components/blockquote";

const dictionaries: Record<string, any> = {
  it: {
    titleLine1: "Il Problema",
    titleLine2: "dell'",
    highlight: "Invisibilità",
    subtitle:
      "Perché le architetture web tradizionali falliscono nell'era dell'AI Generativa.",
    canonicalQuote:
      "Un’intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato.",
    sections: {
      s1Title: "L'Illusione del Design",
      s1Desc:
        "Un sito web visivamente perfetto per un essere umano è spesso un blocco incomprensibile per un LLM. Modelli come ChatGPT o Claude non 'guardano' il tuo sito, ne analizzano i nodi semantici crudi. Se mancano, la tua azienda scompare.",
      s2Title: "La Crisi del RAG",
      s2Desc:
        "Quando un utente chiede a un AI 'Qual è il miglior fornitore per...', l'AI interroga i propri dataset. Se le informazioni della tua azienda non sono strutturate, l'AI sceglierà un concorrente con dati più leggibili.",
      s3Title: "Perdita di Potere Decisionale",
      s3Desc:
        "Nel 2026, la ricerca passa da interfacce conversazionali. Non essere citabili da un AI significa essere esclusi all'origine dal processo decisionale dei clienti B2B e B2C.",
    },
    cta: "Scopri la Metodologia Kat3x",
  },
  en: {
    titleLine1: "The Problem",
    titleLine2: "of",
    highlight: "Invisibility",
    subtitle: "Why traditional web architectures fail in the era of Generative AI.",
    canonicalQuote:
      "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured.",
    sections: {
      s1Title: "The Illusion of Design",
      s1Desc:
        "A visually perfect website for a human is often an incomprehensible block for an LLM. Models like ChatGPT or Claude don't 'look' at your site; they analyze raw semantic nodes. If they are missing, your company disappears.",
      s2Title: "The RAG Crisis",
      s2Desc:
        "When a user asks an AI 'Who is the best provider for...', the AI queries its datasets. If your company's information isn't structured, the AI will choose a competitor with more readable data.",
      s3Title: "Loss of Decisional Power",
      s3Desc:
        "In 2026, search goes through conversational interfaces. Not being citable by an AI means being excluded at the origin from the decision-making process of clients.",
    },
    cta: "Discover Kat3x Methodology",
  },
};

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  const disabledCursorStyle: React.CSSProperties = {
    cursor: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" style=\"font-size: 24px;\"><text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"central\">🚧</text></svg>') 16 16, not-allowed"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      <PageBackground />
      <Navbar lang={lang} />

      <main className="pb-24">
        {/* HEADER / HERO */}
        <section className="relative pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          {/* soft orb behind hero */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-56 bg-gradient-to-r from-brand-100/60 to-emerald-100/40 blur-3xl -z-10 rounded-[100%]" />

          <GlowTitle
            as="h1"
            className="text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight leading-[1.05]"
            glowColor="100, 255, 100"
          >
            {dict.titleLine1}{" "}
            <br className="hidden sm:block" /> {dict.titleLine2}{" "}
            <span className="text-brand-600">{dict.highlight}</span>
          </GlowTitle>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {dict.subtitle}
          </p>

          {/* CANONICAL QUOTE (glass) */}
          <Blockquote quote={dict.canonicalQuote}></Blockquote>
        </section>

        {/* CARDS */}
        <section className="py-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-8 overflow-hidden hover:-translate-y-0.5 transition-all">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-200/25 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white/70 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <SearchX className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {dict.sections.s1Title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{dict.sections.s1Desc}</p>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-8 overflow-hidden hover:-translate-y-0.5 transition-all">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-200/25 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white/70 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <ServerCrash className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {dict.sections.s2Title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{dict.sections.s2Desc}</p>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-8 overflow-hidden hover:-translate-y-0.5 transition-all">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-200/25 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white/70 text-brand-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Bot className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {dict.sections.s3Title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{dict.sections.s3Desc}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-16">
              <div
                className="inline-flex items-center gap-2 text-slate-400 opacity-60 font-semibold text-lg relative"
                style={disabledCursorStyle}
              >
                <span>{dict.cta}</span>
                <ArrowRight className="w-5 h-5" />
                <span className="absolute -top-2 -right-4 text-[10px] sm:text-xs">🚧</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}