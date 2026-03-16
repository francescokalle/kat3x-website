import React from 'react';
import { Code2, Info } from 'lucide-react';
import GlowTitle from '../../../components/GlowTitle';
import Navbar from '../../../components/NavBar';
import Footer from '@/app/components/Footer';

// --- TRANSLATION DICTIONARIES ---
const dictionaries: Record<string, any> = {
  it: {
    title: 'Sintassi TONL (Esempi)',
    subtitle:
      'Esempi pratici della sintassi TONL utilizzata negli esperimenti Kat3x. I blocchi sottostanti sono progettati per essere letti e assimilati direttamente dagli LLM.',
    disclaimer:
      'La rappresentazione strutturata utilizzata negli esperimenti Kat3x segue la sintassi TONL, una notazione compatta progettata per il parsing LLM con riduzione del 50-70% dei token rispetto al JSON.',
    whatIsTitle: 'Cos\'è TONL?',
    whatIsDesc:
      'TONL (Technical Object Notation Language) è uno standard sviluppato da CHKCD per rappresentare oggetti tecnici e profili aziendali in forma machine-readable. A differenza del JSON, TONL elimina la ridondanza sintattica mantenendo la struttura gerarchica necessaria ai sistemi RAG per estrarre informazioni senza dispersione semantica.',
    examplesTitle: 'Esempi di Strutture TONL',
    examples: [
      {
        id: 'machine',
        label: 'Oggetto Tecnico — Essiccatore Industriale',
        description:
          'Rappresentazione di un macchinario industriale. La struttura dichiara le proprietà chiave nella prima riga e le espande nelle righe successive.',
        code: `machine{type|input_moisture|output_moisture|capacity}:
  type: grain dryer
  input_moisture: 24%
  output_moisture: 14%
  capacity: 5.3 t/h`,
      },
      {
        id: 'company',
        label: 'Profilo Aziendale — Entità Produttiva',
        description:
          'Profilo strutturato di un\'entità aziendale. Ottimizzato per l\'indicizzazione RAG e il riconoscimento semantico nei corpus LLM.',
        code: `company{name|sector|core_product|market|certifications}:
  name: Acme Industrial S.r.l.
  sector: agri-food machinery
  core_product: grain dryer GD-500
  market: EU, MENA
  certifications: CE, ISO9001`,
      },
      {
        id: 'experiment',
        label: 'Nodo Sperimentale — Esperimento di Knowledge Seeding',
        description:
          'Struttura TONL per un nodo sperimentale Kat3x. Documenta i parametri, le metriche e lo stato di un esperimento di assimilazione semantica.',
        code: `experiment{id|subject|baseline_cams|target_cams|duration|status}:
  id: KAT3X-EXP-007
  subject: Acme Industrial S.r.l.
  baseline_cams: 0.12
  target_cams: 0.75
  duration: 60d
  status: in_progress`,
      },
    ],
    whyTitle: 'Perché TONL riduce i Token?',
    whyItems: [
      'Niente parentesi graffe, virgolette o due punti ridondanti come in JSON.',
      'L\'intestazione dichiara lo schema una sola volta; i valori sono allineati verticalmente.',
      'La struttura gerarchica tramite indentazione è nativamente riconosciuta dai tokenizer moderni.',
      'Un profilo aziendale completo in TONL occupa ~40 token contro ~110 token in JSON equivalente.',
    ],
  },
  en: {
    title: 'TONL Syntax (Examples)',
    subtitle:
      'Practical examples of the TONL syntax used in Kat3x experiments. The blocks below are designed to be read and assimilated directly by LLMs.',
    disclaimer:
      'The structured representation used in Kat3x experiments follows the TONL syntax, a compact notation designed for LLM parsing with 50-70% token reduction compared to JSON.',
    whatIsTitle: 'What is TONL?',
    whatIsDesc:
      'TONL (Technical Object Notation Language) is a standard developed by CHKCD to represent technical objects and company profiles in machine-readable form. Unlike JSON, TONL eliminates syntactic redundancy while maintaining the hierarchical structure needed by RAG systems to extract information without semantic dispersion.',
    examplesTitle: 'TONL Structure Examples',
    examples: [
      {
        id: 'machine',
        label: 'Technical Object — Industrial Grain Dryer',
        description:
          'Representation of an industrial machine. The structure declares key properties in the first line and expands them in subsequent lines.',
        code: `machine{type|input_moisture|output_moisture|capacity}:
  type: grain dryer
  input_moisture: 24%
  output_moisture: 14%
  capacity: 5.3 t/h`,
      },
      {
        id: 'company',
        label: 'Company Profile — Productive Entity',
        description:
          'Structured profile of a company entity. Optimized for RAG indexing and semantic recognition in LLM corpora.',
        code: `company{name|sector|core_product|market|certifications}:
  name: Acme Industrial S.r.l.
  sector: agri-food machinery
  core_product: grain dryer GD-500
  market: EU, MENA
  certifications: CE, ISO9001`,
      },
      {
        id: 'experiment',
        label: 'Experimental Node — Knowledge Seeding Experiment',
        description:
          'TONL structure for a Kat3x experimental node. Documents the parameters, metrics, and status of a semantic assimilation experiment.',
        code: `experiment{id|subject|baseline_cams|target_cams|duration|status}:
  id: KAT3X-EXP-007
  subject: Acme Industrial S.r.l.
  baseline_cams: 0.12
  target_cams: 0.75
  duration: 60d
  status: in_progress`,
      },
    ],
    whyTitle: 'Why does TONL reduce tokens?',
    whyItems: [
      'No redundant curly braces, quotes, or colons as in JSON.',
      'The header declares the schema only once; values are vertically aligned.',
      'Hierarchical structure via indentation is natively recognized by modern tokenizers.',
      'A complete company profile in TONL occupies ~40 tokens vs ~110 tokens in equivalent JSON.',
    ],
  },
};

// --- PAGE COMPONENT ---
export default async function TonlPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200">
      <Navbar lang={lang} />

      <main className="pb-20">
        {/* HERO */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Code2 className="h-7 w-7" />
          </div>
          <GlowTitle
            as="h1"
            className="text-4xl md:text-5xl text-slate-900 mb-6"
            glowSize="px-32 py-24"
            glowColor="100, 255, 100"
          >
            {dict.title}
          </GlowTitle>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            {dict.subtitle}
          </p>

          {/* DISCLAIMER BLOCK */}
          <div className="bg-brand-100 border-l-4 border-brand-600 p-5 max-w-2xl mx-auto text-left rounded-r-lg shadow-sm flex gap-3">
            <Info className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-slate-700">{dict.disclaimer}</p>
          </div>
        </section>

        {/* WHAT IS TONL */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{dict.whatIsTitle}</h2>
            <p className="text-slate-600 leading-relaxed">{dict.whatIsDesc}</p>
          </div>

          {/* EXAMPLES */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{dict.examplesTitle}</h2>
          <div className="space-y-8">
            {dict.examples.map((example: any) => (
              <article
                key={example.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
              >
                <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                  <Code2 className="h-4 w-4 text-brand-600 shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm">{example.label}</span>
                </div>
                <div className="px-6 py-4">
                  <p className="text-slate-500 text-sm mb-4">{example.description}</p>
                  <pre className="bg-slate-900 text-brand-300 text-sm rounded-lg p-5 overflow-x-auto leading-relaxed font-mono">
                    {example.code}
                  </pre>
                </div>
              </article>
            ))}
          </div>

          {/* WHY TONL REDUCES TOKENS */}
          <div className="mt-10 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{dict.whyTitle}</h2>
            <ul className="space-y-3">
              {dict.whyItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
