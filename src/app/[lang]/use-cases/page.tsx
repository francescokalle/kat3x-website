import React from 'react';
import { Factory, UtensilsCrossed, Hotel, Code, ArrowRight } from 'lucide-react';
import GlowTitle from '../../components/GlowTitle';
import Navbar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import PageBackground from '../../components/PageBackground';

const dictionaries: Record<string, any> = {
  it: {
    title: "Casi d'Uso e Applicazioni",
    subtitle: "Dalla teoria all'industria. Come la strutturazione dati trasforma la rintracciabilità in settori reali.",
    cases: [
      {
        icon: Hotel,
        title: "Hospitality & Turismo",
        desc: "Un hotel di lusso spende migliaia di euro in SEO, ma gli assistenti AI consigliano i competitor perché i dati sui servizi non sono parsabili. Con il Knowledge Seeding, l'hotel diventa la risposta nativa dell'AI per richieste complesse."
      },
      {
        icon: Factory,
        title: "Manifattura Avanzata",
        desc: "I manuali tecnici dei macchinari sono chiusi in file PDF pesanti. Strutturando cataloghi e specifiche in formato TONL, gli ingegneri che interrogano i sistemi RAG trovano immediatamente i tuoi componenti."
      },
      {
        icon: Code,
        title: "Software & SaaS",
        desc: "La documentazione software disorganizzata impedisce a GitHub Copilot o Claude di consigliare le tue API. Implementando nodi semantici pubblici, il tuo software entra nel workflow dei dev."
      },
      {
        icon: UtensilsCrossed,
        title: "Food & Ristorazione",
        desc: "Le recensioni non bastano più. Strutturare i menu, le policy sugli allergeni e gli ingredienti permette agli LLM di fare raccomandazioni iper-specifiche agli utenti."
      }
    ],
    cta: "Vai agli Esempi Tecnici"
  },
  en: {
    title: "Use Cases & Applications",
    subtitle: "From theory to industry. How data structuring transforms discoverability in real sectors.",
    cases: [
      {
        icon: Hotel,
        title: "Hospitality & Tourism",
        desc: "A luxury hotel spends thousands on SEO, but AI assistants recommend competitors because data is not easily parseable. With Knowledge Seeding, the hotel becomes the native AI answer."
      },
      {
        icon: Factory,
        title: "Advanced Manufacturing",
        desc: "Technical manuals are locked in heavy PDFs. By structuring specs in TONL format, engineers querying RAG systems instantly find your components."
      },
      {
        icon: Code,
        title: "Software & SaaS",
        desc: "Unorganized documentation prevents Copilot or Claude from recommending your APIs. By implementing semantic nodes, your software enters the global developer workflow."
      },
      {
        icon: UtensilsCrossed,
        title: "Food & Dining",
        desc: "Reviews are no longer enough. Structuring menus and allergen policies allows LLMs to make highly specific recommendations to users with complex requests."
      }
    ],
    cta: "Go to Technical Examples"
  }
};

export default async function UseCasesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">

      <PageBackground />
    <Navbar lang={lang}/>
      <main className="pb-20">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <GlowTitle 
            as="h1" 
            className="text-5xl md:text-6xl text-slate-900 mb-6"
            glowColor="100, 255, 100"
          >
            {dict.title}
          </GlowTitle>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            {dict.subtitle}
          </p>
        </section>

        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {dict.cases.map((useCase: any, index: number) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="relative bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-xl p-8 overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                    <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{useCase.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {useCase.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-16">
              <a href={`/${lang}/knowledge/examples`} className="inline-flex items-center justify-center bg-brand-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-brand-700 transition-colors shadow-sm">
                <span>{dict.cta}</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}