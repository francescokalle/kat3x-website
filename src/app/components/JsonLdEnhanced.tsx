/**
 * COMPONENTE: JsonLdEnhanced
 * ============================================================
 * JSON-LD dinamico per Google AI Overview optimization.
 * Esporta 3 funzioni per generare schema.org JSON-LD per pagina.
 *
 * USO:
 * - FUNZIONE 1: generatePageJsonLd(page, lang) — ritorna @graph con FAQPage + WebPage + HowTo
 * - FUNZIONE 2: getEntityMap(page) — mappa pagina → entita' per "about" e "mentions"
 * - FUNZIONE 3: getHowToSteps(page, lang) — ritorna HowToStep per pagine CONVERSION
 *
 * INTEGRAZIONE:
 * Nel layout.tsx o in pagine specifiche:
 *   import { generatePageJsonLd } from "@/components/JsonLdEnhanced"
 *   <script type="application/ld+json">
 *     {JSON.stringify(generatePageJsonLd("home", "it"))}
 *   </script>
 * ============================================================
 */

// ============================================================
// IMPORT: getPageFaq da config/metadata-per-page
// ============================================================
import { getPageFaq } from "../config/metadata-per-page"

// ============================================================
// TIPO: Entity per Schema.org
// ============================================================
interface Entity {
  "@type": "Thing"
  name: string
  sameAs: string
}

// ============================================================
// TIPO: HowToStep per Schema.org HowTo
// ============================================================
interface HowToStep {
  "@type": "HowToStep"
  name: string
  text: string
}

// ============================================================
// TIPO: PageJsonLd Ritornato
// ============================================================
interface PageJsonLd {
  "@context": string
  "@graph": Array<Record<string, any>>
}

// ============================================================
// FUNZIONE 2: getEntityMap(page) — Mappa Entita' per Pagina
// ============================================================
export function getEntityMap(page: string): {
  about: Entity[]
  mentions: Entity[]
} {
  const entityDatabase: Record<
    string,
    { about: Entity[]; mentions: Entity[] }
  > = {
    home: {
      about: [
        {
          "@type": "Thing",
          name: "AI Citability",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        },
        {
          "@type": "Thing",
          name: "Kat3x",
          sameAs: "https://kat3x.com"
        }
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "CAMS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "LAR",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "TONL",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        }
      ]
    },
    problem: {
      about: [
        {
          "@type": "Thing",
          name: "Semantic Invisibility",
          sameAs:
            "https://kat3x.com/knowledge/nuova-invisibilita.txt"
        },
        {
          "@type": "Thing",
          name: "New Invisibility",
          sameAs:
            "https://kat3x.com/knowledge/nuova-invisibilita.txt"
        }
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "CAMS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "Knowledge Seeding",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        }
      ]
    },
    diagnostic: {
      about: [
        {
          "@type": "Thing",
          name: "AI Citability",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        },
        {
          "@type": "Thing",
          name: "CAMS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        }
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "LAR",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "Kat3x",
          sameAs: "https://kat3x.com"
        }
      ]
    },
    invisibilita: {
      about: [
        {
          "@type": "Thing",
          name: "Semantic Invisibility",
          sameAs:
            "https://kat3x.com/knowledge/nuova-invisibilita.txt"
        }
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "CAMS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "Knowledge Seeding",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        },
        {
          "@type": "Thing",
          name: "TONL",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        }
      ]
    },
    chatgpt: {
      about: [
        {
          "@type": "Thing",
          name: "AI Visibility",
          sameAs:
            "https://kat3x.com/knowledge/glossary-extended.txt"
        },
        {
          "@type": "Thing",
          name: "Knowledge Seeding",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        }
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "TONL",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        },
        {
          "@type": "Thing",
          name: "CAMS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "ChatGPT",
          sameAs: "https://chat.openai.com"
        }
      ]
    },
    about: {
      about: [
        {
          "@type": "Thing",
          name: "Kat3x",
          sameAs: "https://kat3x.com"
        },
        {
          "@type": "Thing",
          name: "CHKCD",
          sameAs: "https://chkcd.com"
        }
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "CAMS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "LAR",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "DSP",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "CRS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "CRD",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        }
      ]
    },
    knowledge: {
      about: [
        {
          "@type": "Thing",
          name: "TONL",
          sameAs: "https://kat3x.com/knowledge/glossary-extended.txt"
        },
        {
          "@type": "Thing",
          name: "CAMS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "LAR",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        }
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "DSP",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "CRS",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "CRD",
          sameAs: "https://kat3x.com/knowledge/instruments.txt"
        },
        {
          "@type": "Thing",
          name: "CHKCD",
          sameAs: "https://chkcd.com"
        }
      ]
    }
  }

  return entityDatabase[page] || { about: [], mentions: [] }
}

// ============================================================
// FUNZIONE 3: getHowToSteps(page, lang) — HowTo Steps per Conversion
// ============================================================
export function getHowToSteps(
  page: string,
  lang: string
): { name: string; steps: HowToStep[] } | null {
  const stepsDatabase: Record<
    string,
    Record<string, { name: string; steps: HowToStep[] }>
  > = {
    diagnostic: {
      it: {
        name: "Come misurare la tua AI Citability",
        steps: [
          {
            "@type": "HowToStep",
            name: "Vai su kat3x.com/diagnostic",
            text: "Vai su kat3x.com/diagnostic e inserisci il nome della tua azienda"
          },
          {
            "@type": "HowToStep",
            name: "Il sistema analizza i modelli AI",
            text: "Il sistema analizza come i principali LLM (ChatGPT, Claude, Gemini) comprendono il tuo brand"
          },
          {
            "@type": "HowToStep",
            name: "Ricevi il tuo punteggio CAMS",
            text: "Ricevi il tuo punteggio CAMS e LAR con spiegazione dettagliata"
          },
          {
            "@type": "HowToStep",
            name: "Scopri le azioni per migliorare",
            text: "Scopri le azioni per migliorare la tua visibilita' nei modelli AI"
          }
        ]
      },
      en: {
        name: "How to measure your AI Citability",
        steps: [
          {
            "@type": "HowToStep",
            name: "Go to kat3x.com/diagnostic",
            text: "Go to kat3x.com/diagnostic and enter your company name"
          },
          {
            "@type": "HowToStep",
            name: "The system analyzes AI models",
            text: "The system analyzes how major LLMs (ChatGPT, Claude, Gemini) understand your brand"
          },
          {
            "@type": "HowToStep",
            name: "Receive your CAMS score",
            text: "Receive your CAMS and LAR score with detailed explanation"
          },
          {
            "@type": "HowToStep",
            name: "Discover actions to improve",
            text: "Discover actions to improve your visibility in AI models"
          }
        ]
      }
    },
    "prova-tu-stesso": {
      it: {
        name: "Come verificare la tua presenza nelle AI",
        steps: [
          {
            "@type": "HowToStep",
            name: "Apri un'AI e chiedi della tua azienda",
            text: "Apri ChatGPT, Claude o Perplexity e chiedi della tua azienda"
          },
          {
            "@type": "HowToStep",
            name: "Confronta la risposta dell'AI",
            text: "Confronta la risposta dell'AI con la realta': ti conosce? Ti descrive correttamente?"
          },
          {
            "@type": "HowToStep",
            name: "Misura la tua invisibilita' semantica",
            text: "Se l'AI non ti cita o ti descrive male, hai un problema di invisibilita' semantica. Misuralo con CAMS."
          }
        ]
      },
      en: {
        name: "How to verify your AI presence",
        steps: [
          {
            "@type": "HowToStep",
            name: "Open an AI and ask about your company",
            text: "Open ChatGPT, Claude or Perplexity and ask about your company"
          },
          {
            "@type": "HowToStep",
            name: "Compare the AI response",
            text: "Compare the AI response with reality: does it know you? Does it describe you correctly?"
          },
          {
            "@type": "HowToStep",
            name: "Measure your semantic invisibility",
            text: "If the AI doesn't cite you or misdescribes you, you have a semantic invisibility problem. Measure it with CAMS."
          }
        ]
      }
    }
  }

  const pageSteps = stepsDatabase[page]?.[lang]
  return pageSteps || null
}

// ============================================================
// FUNZIONE 1: generatePageJsonLd(page, lang) — Main Generator
// ============================================================
export function generatePageJsonLd(
  page: string = "home",
  lang: string = "it"
): PageJsonLd {
  const entityMap = getEntityMap(page)
  const howToData = getHowToSteps(page, lang)

  const graph: Array<Record<string, any>> = []

  // === A) FAQPage Schema — FAQ reali da seo-metadata.json ===
  const faqItems = getPageFaq(page, lang)
  if (faqItems.length > 0) {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `https://kat3x.com/#faq-${page}-${lang}`,
      mainEntity: faqItems.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
    graph.push(faqSchema)
  }

  // === B) WebPage con Speakable ===
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `https://kat3x.com/#page-${page}-${lang}`,
    name: `Kat3x - ${page}`,
    url: `https://kat3x.com/${lang}/${page}`,
    inLanguage: lang,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".hero-definition",
        ".definition-snippet",
        "h1",
        ".faq-answer",
        ".faq section"
      ]
    },
    about: entityMap.about,
    mentions: entityMap.mentions
  }
  graph.push(webPageSchema)

  // === C) HowTo (SOLO per pagine CONVERSION) ===
  if (howToData) {
    const howToSchema = {
      "@type": "HowTo",
      "@id": `https://kat3x.com/#howto-${page}-${lang}`,
      name: howToData.name,
      description: `Step-by-step guide for ${howToData.name}`,
      step: howToData.steps
    }
    graph.push(howToSchema)
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  }
}

// ============================================================
// EXPORT DEFAULT per uso diretto in layout
// ============================================================
export default {
  generatePageJsonLd,
  getEntityMap,
  getHowToSteps
}
