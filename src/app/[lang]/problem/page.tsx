import React from 'react';
import { SearchX, ServerCrash, Bot, ArrowRight, Rabbit } from 'lucide-react';
import GlowTitle from '../../components/GlowTitle';
import Navbar from '@/app/components/NavBar';

const dictionaries: Record<string, any> = {
  it: {
    titleLine1: "Il Problema",
    titleLine2: "dell'",
    highlight: "Invisibilità",
    subtitle: "Perché le architetture web tradizionali falliscono nell'era dell'AI Generativa.",
    canonicalQuote: "Un’intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato.",
    sections: {
      s1Title: "L'Illusione del Design",
      s1Desc: "Un sito web visivamente perfetto per un essere umano è spesso un blocco incomprensibile per un LLM. Modelli come ChatGPT o Claude non 'guardano' il tuo sito, ne analizzano i nodi semantici crudi. Se mancano, la tua azienda scompare.",
      s2Title: "La Crisi del RAG",
      s2Desc: "Quando un utente chiede a un AI 'Qual è il miglior fornitore per...', l'AI interroga i propri dataset. Se le informazioni della tua azienda non sono strutturate, l'AI sceglierà un concorrente con dati più leggibili.",
      s3Title: "Perdita di Potere Decisionale",
      s3Desc: "Nel 2026, la ricerca passa da interfacce conversazionali. Non essere citabili da un AI significa essere esclusi all'origine dal processo decisionale dei clienti B2B e B2C."
    },
    cta: "Scopri la Metodologia Kat3x"
  },
  en: {
    titleLine1: "The Problem",
    titleLine2: "of",
    highlight: "Invisibility",
    subtitle: "Why traditional web architectures fail in the era of Generative AI.",
    canonicalQuote: "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured.",
    sections: {
      s1Title: "The Illusion of Design",
      s1Desc: "A visually perfect website for a human is often an incomprehensible block for an LLM. Models like ChatGPT or Claude don't 'look' at your site; they analyze raw semantic nodes. If they are missing, your company disappears.",
      s2Title: "The RAG Crisis",
      s2Desc: "When a user asks an AI 'Who is the best provider for...', the AI queries its datasets. If your company's information isn't structured, the AI will choose a competitor with more readable data.",
      s3Title: "Loss of Decisional Power",
      s3Desc: "In 2026, search goes through conversational interfaces. Not being citable by an AI means being excluded at the origin from the decision-making process of clients."
    },
    cta: "Discover Kat3x Methodology"
  }
};

export default async function ProblemPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200">

    <Navbar lang={lang}/>
      <main className="pb-20">
        {/* HEADER SECTION */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <GlowTitle 
            as="h1"
            className="text-5xl md:text-6xl text-slate-900 mb-6"
            glowSize="px-40 py-28"
            glowColor="100, 255, 100"
          >
            {dict.titleLine1} <br className="hidden sm:block" /> {dict.titleLine2} <span className="text-brand-600">{dict.highlight}</span>
          </GlowTitle>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            {dict.subtitle}
          </p>
          
          {/* CANONICAL QUOTE (Stesso stile della Home) */}
          <div className="bg-brand-100 border-l-4 border-brand-600 p-6 max-w-4xl mx-auto text-left rounded-r-lg shadow-sm">
            <blockquote className="text-lg sm:text-xl font-medium text-slate-800 italic">
              "{dict.canonicalQuote}"
            </blockquote>
          </div>
        </section>

        {/* CARDS SECTION (Stesso stile Identity / Pillars della Home) */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                  <SearchX className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{dict.sections.s1Title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.sections.s1Desc}
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <ServerCrash className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{dict.sections.s2Title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.sections.s2Desc}
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{dict.sections.s3Title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.sections.s3Desc}
                </p>
              </div>
            </div>

            <div className="text-center pt-16">
              <a href={`/${lang}/knowledge/methodology`} className="inline-flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium text-lg transition-colors">
                <span>{dict.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}