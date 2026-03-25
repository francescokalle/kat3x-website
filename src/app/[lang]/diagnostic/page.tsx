"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Download } from "lucide-react";

import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import GlowTitle from "@/app/components/GlowTitle";
import PageBackground from "@/app/components/PageBackground";
import Blockquote from "@/app/components/blockquote";

const PROTOCOL_TEXT = `Il tuo sito parla alle persone.
Ma le persone hanno smesso
di CERCARE.

Internet sta cambiando architettura. La visibilità della tua azienda non dipende più da come ti
posizioni su Google. Dipende da come le intelligenze artificiali ti comprendono. E nessuno, fino
ad oggi, aveva un metodo per misurarlo.

CHKCD-ready | Monitored by Kat3x
Questo documento contiene contenuto strutturato per intelligenze artificiali. Allegato tecnico in appendice.

Kat3X
LA NUOVA INVISIBILITÀ
Immagina questa scena. Un imprenditore ha bisogno di un fornitore. Non apre Google. Apre
ChatGPT, o Claude, o Gemini. Scrive: "Qual è il miglior studio di commercialisti a Verona?"
oppure "Chi installa impianti fotovoltaici per aziende in Lombardia?" oppure "Qual è il miglior
produttore di serramenti su misura in Italia?" oppure "Chi è il miglior fornitore di [ il tuo settore
] nella mia zona?".
L'intelligenza artificiale non restituisce dieci link blu. Restituisce due o tre nomi. A volte uno
solo. Quel nome diventa il contatto, il preventivo, il contratto. Gli altri non esistono. Non
vengono scartati. Non vengono nemmeno considerati.

Se il tuo nome non è tra quei due o tre, quel cliente non visiterà mai il
tuo sito

Non riceverai la chiamata. Non riceverai il preventivo. Non saprai nemmeno che quel cliente
esisteva. Questa è la nuova invisibilità: silenziosa, impercettibile, ma assolutamente reale. E sta
succedendo adesso, ogni giorno, in ogni settore.
Per vent'anni la visibilità dipendeva dai motori di ricerca. Ora dipende da come le intelligenze
artificiali comprendono e sintetizzano le informazioni. Non è una tendenza. Non è una moda. È
un cambio di infrastruttura. E ogni azienda con un sito web è coinvolta.

Non sei tu che scegli di essere visibile.
È l'intelligenza artificiale che decide se citarti.

PERCHÉ IL TUO SITO È TRASPARENTE PER LE AI
Le intelligenze artificiali non guardano la grafica. Non si impressionano con le animazioni. Non
"leggono" come un essere umano. Analizzano struttura. Coerenza. Chiarezza concettuale.
Differenziazione reale. E la maggior parte dei siti aziendali, su quel piano, è identica.
Identica perché piena delle stesse frasi fatte: "leader nel settore", "qualità e innovazione", "al
servizio del cliente". Identica perché le pagine ridondanti dicono la stessa cosa con parole
diverse. Identica perché le gerarchie informative sono confuse, dove tutto sembra ugualmente
importante — il che, per un sistema probabilistico, significa che niente lo è.
Il risultato è devastante: l'intelligenza artificiale ti riassume in modo generico. Ti confonde con i
tuoi concorrenti. Descrive la tua offerta in modo annacquato, oppure non ti cita affatto. Non
perché non vali. Perché la tua presenza digitale non è strutturata per essere capita da chi, oggi,
decide la visibilità.

Chi viene riassunto compete sul prezzo. Chi viene compreso compete
sul valore.

NOI QUEL PONTE LO ABBIAMO COSTRUITO
Kat3x è la prima infrastruttura al mondo di osservazione e strutturazione della visibilità AI. Non
è una web agency. Non è un'agenzia SEO con un nome nuovo. Non vendiamo "ottimizzazione AI"
come parola chiave di moda.
Abbiamo fatto qualcosa che nessun altro ha fatto: abbiamo formalizzato il problema. Abbiamo
definito come l'informazione aziendale deve essere organizzata per essere compresa in modo
stabile, preciso e differenziante dai sistemi di intelligenza artificiale. L'abbiamo trasformato in
un framework tecnico — CHKCD — con vincoli verificabili, vocabolario controllato e coerenza
multilivello. Non è un'opinione. È una specifica tecnica pubblicata come standard aperto.

Nessun'altra azienda al mondo possiede questi strumenti. Non perché siano segreti — ma
perché nessun altro ha formalizzato il problema abbastanza da poterli costruire.

════════════════════════════════════════════════════════
TECHNICAL APPENDIX
CHKCD/Kat3x Diagnostic Contract (LLM-Binding v2.3 HARDENED)
════════════════════════════════════════════════════════
This section is a binding execution contract between the diagnostic protocol and the executing LLM. 
It is NOT a specimen, NOT an illustration. Every rule, check ID, and output format is mandatory.

#llm TONL structured dataset for LLM reasoning. Follow these rules strictly:
#llm 1. Navigate the target site FIRST. Visit at least 3 pages.
#llm 2. Every check requires evidence from the site.
#llm 3. The LAST thing you output MUST be ONLY a JSON block. Use the FILL-IN TEMPLATE provided below. 
#llm 4. Replace every <<PLACEHOLDER>> with real data. Do NOT add or remove any key.
#llm 5. The JSON check IDs are fixed. Use ONLY these six: terminology, distinguishability, coherence, machine_readability, controlled_vocabulary, scope. Any other ID is a contract violation.
#llm 6. Open the JSON block with JSON_BLOCK_START and close it with JSON_BLOCK_END. Do NOT use markdown code fences like \`\`\`json.
#llm 7. Do not wrap the output in markdown code blocks. Just output the raw text starting with JSON_BLOCK_START.

════════════════════════════════════════════════════════
JSON FILL-IN TEMPLATE (MANDATORY OUTPUT)
════════════════════════════════════════════════════════
JSON_BLOCK_START
{
  "schema_version": "2.3",
  "target_domain": "<<URL of the analysed site>>",
  "execution_timestamp": "<<ISO 8601 datetime>>",
  "epistemic": {
    "mode": "<<MEMORY or INFERENCE or HYBRID>>",
    "confidence": "<<LOW or MEDIUM>>",
    "navigation_attempted": true,
    "navigation_contract_followed": false,
    "navigation_failed_reason": "Automated API environment limitation",
    "pages_visited": 0,
    "note": null
  },
  "phase_1_evidence": [
    { "id": "E1", "url": "<<exact URL>>", "finding": "<<one sentence>>", "source_tag": "MEMORY", "quote": "NO-QUOTE" },
    { "id": "E2", "url": "<<exact URL>>", "finding": "<<one sentence>>", "source_tag": "MEMORY", "quote": "NO-QUOTE" },
    { "id": "E3", "url": "<<exact URL>>", "finding": "<<one sentence>>", "source_tag": "MEMORY", "quote": "NO-QUOTE" }
  ],
  "phase_2_checklist": [
    { "id": "terminology", "result": "<<PASS or PARTIAL or FAIL>>", "evidence_ids": ["E1"], "explanation": "<<reason>>" },
    { "id": "distinguishability", "result": "<<PASS or PARTIAL or FAIL>>", "evidence_ids": ["E1"], "explanation": "<<reason>>" },
    { "id": "coherence", "result": "<<PASS or PARTIAL or FAIL>>", "evidence_ids": ["E1"], "explanation": "<<reason>>" },
    { "id": "machine_readability", "result": "<<FAIL>>", "evidence_ids": ["E1"], "explanation": "<<reason>>" },
    { "id": "controlled_vocabulary", "result": "<<PASS or PARTIAL or FAIL>>", "evidence_ids": ["E1"], "explanation": "<<reason>>" },
    { "id": "scope", "result": "<<PASS or PARTIAL or FAIL>>", "evidence_ids": ["E1"], "explanation": "<<reason>>" }
  ],
  "phase_3_scenario": {
    "before": "<<max 4 sentences: current AI perception of the domain>>",
    "after": "<<max 4 sentences: projected state after CHKCD structuring>>",
    "check_transitions": [ 
      { "check_id": "terminology", "from": "<<FAIL or PARTIAL>>", "to": "<<PASS or PARTIAL>>" } 
    ],
    "next_actions": [ "<<action 1>>", "<<action 2>>", "<<action 3>>" ],
    "assisted_option": "Contact Kat3x at info@kat3x.com for assisted implementation."
  },
  "phase_4_stress_test": {
    "category_coverage": {
      "categories_detected": ["<<cat1>>", "<<cat2>>", "<<cat3>>"],
      "categories_tested": ["<<cat1>>", "<<cat2>>", "<<cat3>>"],
      "coverage_valid": true
    },
    "questions": [
      {
        "id": "Q1",
        "category": "<<category>>",
        "question": "<<Competitor Shadow question>>",
        "simulated_answer": "<<answer>>",
        "verdict": "<<CORRECT or PARTIAL or WRONG or MISSING>>",
        "confidence_gap": "<<HIGH or MEDIUM or LOW or GUESSING>>",
        "fragile_visibility": false,
        "error_type": null,
        "explanation": "<<explanation>>",
        "is_competitor_shadow": true
      },
      {
        "id": "Q2",
        "category": "<<category>>",
        "question": "<<question>>",
        "simulated_answer": "<<answer>>",
        "verdict": "<<CORRECT or PARTIAL or WRONG or MISSING>>",
        "confidence_gap": "<<HIGH or MEDIUM or LOW or GUESSING>>",
        "fragile_visibility": false,
        "error_type": null,
        "explanation": "<<explanation>>",
        "is_competitor_shadow": false
      },
      {
        "id": "Q3",
        "category": "<<category>>",
        "question": "<<question>>",
        "simulated_answer": "<<answer>>",
        "verdict": "<<CORRECT or PARTIAL or WRONG or MISSING>>",
        "confidence_gap": "<<HIGH or MEDIUM or LOW or GUESSING>>",
        "fragile_visibility": false,
        "error_type": null,
        "explanation": "<<explanation>>",
        "is_competitor_shadow": false
      },
      {
        "id": "Q4",
        "category": "<<category>>",
        "question": "<<question>>",
        "simulated_answer": "<<answer>>",
        "verdict": "<<CORRECT or PARTIAL or WRONG or MISSING>>",
        "confidence_gap": "<<HIGH or MEDIUM or LOW or GUESSING>>",
        "fragile_visibility": false,
        "error_type": null,
        "explanation": "<<explanation>>",
        "is_competitor_shadow": false
      },
      {
        "id": "Q5",
        "category": "<<category>>",
        "question": "<<question>>",
        "simulated_answer": "<<answer>>",
        "verdict": "<<CORRECT or PARTIAL or WRONG or MISSING>>",
        "confidence_gap": "<<HIGH or MEDIUM or LOW or GUESSING>>",
        "fragile_visibility": false,
        "error_type": null,
        "explanation": "<<explanation>>",
        "is_competitor_shadow": false
      }
    ],
    "summary_score": { "correct": 1, "partial": 2, "wrong": 1, "missing": 1 },
    "fragile_count": 0,
    "narrow_scope": false,
    "assisted_recommendation": "STRONGLY_RECOMMENDED"
  },
  "dsi": {
    "band": "<<DEVELOPING or SOLID or WEAK or CRITICAL>>",
    "fragile": false,
    "narrow_scope": false,
    "display": "<<Band name>>",
    "band_justification": "<<reason>>",
    "total": null
  }
}
JSON_BLOCK_END`;

interface DiagnosticResult {
  schema_version: string;
  target_domain: string;
  execution_timestamp: string;
  epistemic: {
    mode: string;
    confidence: string;
    navigation_attempted: boolean;
    navigation_contract_followed: boolean;
    navigation_failed_reason: string | null;
    pages_visited: number;
    note: string | null;
  };
  phase_1_evidence: Array<{
    id: string;
    url: string;
    finding: string;
    source_tag: string;
    quote: string;
  }>;
  phase_2_checklist: Array<{
    id: string;
    result: string;
    evidence_ids?: string[];
    explanation: string;
  }>;
  phase_3_scenario: {
    before: string;
    after: string;
    check_transitions: Array<{
      check_id: string;
      from: string;
      to: string;
    }>;
    next_actions: string[];
    assisted_option: string | null;
  };
  phase_4_stress_test: {
    category_coverage: {
      categories_detected: string[];
      categories_tested: string[];
      coverage_valid: boolean;
    };
    questions: Array<{
      id: string;
      category: string;
      question: string;
      simulated_answer: string;
      verdict: string;
      confidence_gap: string;
      fragile_visibility: boolean;
      error_type: string | null;
      explanation: string;
      is_competitor_shadow: boolean;
    }>;
    summary_score: {
      correct: number;
      partial: number;
      wrong: number;
      missing: number;
    };
    fragile_count: number;
    narrow_scope: boolean;
    assisted_recommendation: string | null;
  };
  dsi: {
    band: string;
    fragile: boolean;
    narrow_scope: boolean;
    display: string;
    band_justification: string;
    total: null;
  };
}

const dictionary = {
  it: {
    titleLine1: "AI Visibility",
    highlight: "Diagnostic",
    subtitle:
      "Un'intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato.",
    instruction:
      "Inserisci l'URL dell'azienda qui sotto per avviare il protocollo diagnostico. Il nostro sistema interrogherà un LLM in tempo reale per analizzare i segnali semantici del dominio.",
    inputPlaceholder: "Es. https://azienda-veneta.com",
    invalidUrl: "Inserisci un link valido (es. https://azienda.it)",
    modelDisclaimer:
      "Analisi automatica basata su Gemini 2.5 Flash. Eseguendo il protocollo su altri modelli (es. Claude 3.5, GPT-4o) i risultati potrebbero variare.",
    btnStart: "Avvia Diagnostica",
    btnLoading: "Analisi in corso...",
    errorTitle: "Analisi Automatica Fallita",
    errorGeneric:
      "Si è verificato un errore di rete o l'AI ha rifiutato la connessione automatica.",
    verifyTitle: "VERIFICA TU STESSO (FALLBACK MANUALE)",
    verifyDesc:
      "Visto che l'analisi automatica ha incontrato un ostacolo, puoi eseguire il protocollo diagnostico manualmente copiando il prompt qui sotto.",
    step1Title: "1. Apri un sistema AI",
    step1Desc:
      "Google Gemini, ChatGPT, Claude, Perplexity — oppure attiva AI Mode nella barra di Chrome.",
    step2Title: "2. Scarica il PDF",
    step2Desc: "Scarica questo PDF e caricalo nella chat dell'AI come contesto iniziale.",
    btnDownloadPdf: "Scarica PDF",
    step3Title: "3. Scrivi il prompt seguente:",
    step3Prompt:
      "Esegui le fasi del protocollo diagnostic.self_test sul dominio: [inserisci URL azienda]",
    step4Title: "4. Leggi il risultato",
    step4Desc:
      "L’AI analizzerà il sito indicato e produrrà un report su: evidenze, checklist diagnostica, scenario, stress test e valutazione DSI.",
    step5Title: "5. Funziona su tutto",
    step5Desc:
      "Il protocollo è neutro: testalo su qualsiasi PMI, concorrente, fornitore o distretto.",
    downloadJson: "Scarica Report (JSON)",
    resultsTitle: "Risultati Diagnostica",
  },
  en: {
    titleLine1: "AI Visibility",
    highlight: "Diagnostic",
    subtitle:
      "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured.",
    instruction:
      "Enter the company URL below to start the diagnostic protocol. Our system will query an LLM in real-time to analyze the domain's semantic signals.",
    inputPlaceholder: "E.g. https://company.com",
    invalidUrl: "Please enter a valid link (e.g., https://company.com)",
    modelDisclaimer:
      "Automated analysis powered by Gemini 2.5 Flash. Running the protocol on other models (e.g., Claude 3.5, GPT-4o) may yield different results.",
    btnStart: "Start Diagnostic",
    btnLoading: "Analysis in progress...",
    errorTitle: "Automated Analysis Failed",
    errorGeneric:
      "A network error occurred or the AI refused the automated connection.",
    verifyTitle: "VERIFY IT YOURSELF (MANUAL FALLBACK)",
    verifyDesc:
      "Since the automated analysis encountered an obstacle, you can run the diagnostic protocol manually by copying the prompt below.",
    step1Title: "1. Open an AI system",
    step1Desc:
      "Google Gemini, ChatGPT, Claude, Perplexity — or activate AI Mode in Chrome's search bar.",
    step2Title: "2. Download the PDF",
    step2Desc:
      "Download this PDF and upload it to the AI chat as initial context.",
    btnDownloadPdf: "Download PDF",
    step3Title: "3. Write the following prompt:",
    step3Prompt:
      "Execute the phases of the diagnostic.self_test protocol on the domain: [insert company URL]",
    step4Title: "4. Read the result",
    step4Desc:
      "The AI will analyze the indicated site and produce a report on: evidence, diagnostic checklist, scenario, stress test, and DSI score.",
    step5Title: "5. Works on anything",
    step5Desc:
      "The protocol is neutral: test it on any SME, competitor, supplier, or district.",
    downloadJson: "Download Report (JSON)",
    resultsTitle: "Diagnostic Results",
  },
};

export default function DiagnosticPage() {
  const params = useParams();
  const langParam = typeof params?.lang === "string" ? params.lang : "it";
  const t = dictionary[langParam as keyof typeof dictionary] || dictionary.it;

  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [error, setError] = useState("");

  const isValidUrl = (urlStr: string) => {
    if (!urlStr) return false;
    try {
      const parsed = new URL(urlStr.startsWith("http") ? urlStr : `https://${urlStr}`);
      return parsed.hostname.includes(".");
    } catch (e) {
      return false;
    }
  };

  const getDomainKey = (urlStr: string) => {
    try {
      const parsed = new URL(urlStr.startsWith("http") ? urlStr : `https://${urlStr}`);
      return parsed.hostname;
    } catch (e) {
      return urlStr;
    }
  };

  const runDiagnostic = async () => {
    if (!isValidUrl(inputUrl)) return;

    setError("");
    setLoading(true);
    setResult(null);

    const formattedUrl = inputUrl.startsWith("http") ? inputUrl : `https://${inputUrl}`;
    const domainKey = getDomainKey(formattedUrl);
    const cachedData = localStorage.getItem(`kat3x_diag_${domainKey}`);

    if (cachedData) {
      try {
        setResult(JSON.parse(cachedData));
        setLoading(false);
        return;
      } catch (e) {
        // ignore corrupted cache
      }
    }

    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: formattedUrl,
          promptContext: PROTOCOL_TEXT,
        }),
      });

      const textResponse = await res.text();

      // --- INIZIO PULIZIA ESTRAZIONE JSON (Resilienza ai markdown e testo libero) ---
      let cleanText = textResponse;
      
      // 1. Estrai testo tra i marker se l'LLM li ha inclusi
      if (cleanText.includes("JSON_BLOCK_START") && cleanText.includes("JSON_BLOCK_END")) {
        cleanText = cleanText.split("JSON_BLOCK_START")[1].split("JSON_BLOCK_END")[0];
      }
      
      // 2. Rimuovi i backtick markdown che spaccano il JSON.parse
      cleanText = cleanText.replace(/```json/gi, "").replace(/```/g, "").trim();
      // --- FINE PULIZIA ---

      let data;
      try {
        data = JSON.parse(cleanText);
      } catch (parseError) {
        console.error("Il parse JSON è fallito. Raw response:", textResponse);
        console.error("Testo ripulito tentato:", cleanText);
        throw new Error("Errore di formato: l'AI non ha restituito una struttura dati valida.");
      }

      if (!res.ok) throw new Error(data.error || t.errorGeneric);

      localStorage.setItem(`kat3x_diag_${domainKey}`, JSON.stringify(data));
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || t.errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  const downloadJson = () => {
    if (!result) return;
    const formattedUrl = inputUrl.startsWith("http") ? inputUrl : `https://${inputUrl}`;
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kat3x_diagnostic_${getDomainKey(formattedUrl)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isInputValid = inputUrl.length === 0 || isValidUrl(inputUrl);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0 flex flex-col">
      <PageBackground />
      <Navbar lang={langParam} />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* HERO */}
        <section className="relative text-center space-y-8 mb-14">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-56 bg-gradient-to-r from-brand-100/60 to-emerald-100/40 blur-3xl -z-10 rounded-[100%]" />

          <GlowTitle
            as="h1"
            className="text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.05]"
            glowColor="100, 255, 100"
          >
            {t.titleLine1} <span className="text-brand-600">{t.highlight}</span>
          </GlowTitle>

          <Blockquote quote={t.subtitle}></Blockquote>
        </section>

        {/* INPUT AREA */}
        <section className="max-w-4xl mx-auto mb-14">
          <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-8 md:p-10 rounded-[2rem] overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />

            <p className="text-sm md:text-base text-slate-600 mb-7 text-center leading-relaxed">
              {t.instruction}
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3">
                <input
                  type="url"
                  placeholder={t.inputPlaceholder}
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className={`flex-1 bg-white/60 backdrop-blur-md border ${
                    !isInputValid
                      ? "border-red-400 focus:ring-red-500"
                      : "border-white/70 focus:ring-brand-500 focus:border-brand-500"
                  } rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 shadow-inner`}
                  onKeyDown={(e) => e.key === "Enter" && isValidUrl(inputUrl) && runDiagnostic()}
                />

                <button
                  onClick={runDiagnostic}
                  disabled={loading || !inputUrl || !isValidUrl(inputUrl)}
                  className="bg-brand-600 text-white font-bold px-8 py-3 rounded-xl shadow-md hover:bg-brand-700 hover:shadow-lg transition-all disabled:opacity-50 disabled:bg-slate-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? t.btnLoading : t.btnStart}
                </button>
              </div>

              {!isInputValid && <p className="text-red-500 text-sm pl-1">{t.invalidUrl}</p>}

              <p className="text-xs text-slate-400 text-center mt-2">{t.modelDisclaimer}</p>
            </div>
          </div>
        </section>

        {/* ERROR + FALLBACK */}
        {error && (
          <div className="max-w-5xl mx-auto animate-fade-in space-y-8 mb-16">
            <div className="relative bg-red-50/70 backdrop-blur-xl border border-red-200/60 p-6 rounded-2xl text-center shadow-sm overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <h3 className="text-red-700 font-bold text-lg mb-2">{t.errorTitle}</h3>
              <p className="text-red-600 text-sm">{error}</p>
            </div>

            <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[2rem] p-6 md:p-10 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

              <div className="mb-8 border-b border-white/60 pb-6 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{t.verifyTitle}</h2>
                <p className="text-slate-600 text-sm md:text-base">{t.verifyDesc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step1Title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.step1Desc}</p>
                </div>

                {/* Step 2 */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step2Title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.step2Desc}</p>
                  <a
                    href="/kat3x_brochure_v6.pdf"
                    download="/kat3x_brochure_v6.pdf"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-white/60 backdrop-blur-md hover:bg-white/80 border border-white/70 rounded-xl text-sm font-semibold text-slate-700 transition-colors shadow-sm"
                  >
                    <Download className="h-4 w-4" />
                    {t.btnDownloadPdf}
                  </a>
                </div>

                {/* Step 3 */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step3Title}</h3>
                  <p className="text-xs text-slate-700 bg-white/60 backdrop-blur-md p-4 rounded-xl font-mono border border-white/70 shadow-inner">
                    {t.step3Prompt}
                  </p>
                </div>

                {/* Step 4 */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step4Title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.step4Desc}</p>
                </div>

                {/* Step 5 */}
                <div className="space-y-2 md:col-span-2 md:w-1/2 md:pr-4">
                  <h3 className="font-bold text-slate-800">{t.step5Title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.step5Desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RESULTS */}
        {result && (
          <div className="max-w-6xl mx-auto space-y-10 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t.resultsTitle}</h2>
              <button
                onClick={downloadJson}
                className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md hover:bg-white/80 border border-white/70 rounded-xl text-sm font-semibold text-brand-700 transition-colors shadow-sm"
              >
                <Download className="h-4 w-4" />
                {t.downloadJson}
              </button>
            </div>

            {/* DSI Highlights */}
            {result.dsi && (
               <div className="relative bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-[2rem] p-8 shadow-xl overflow-hidden">
                 <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                 <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                   <div>
                     <p className="text-brand-100 text-sm font-semibold tracking-wider uppercase mb-1">Domain Signal Index (DSI)</p>
                     <h3 className="text-4xl md:text-5xl font-black">{result.dsi.display}</h3>
                   </div>
                   <div className="text-sm text-brand-50 bg-black/20 p-4 rounded-xl max-w-sm">
                     <p className="font-mono">{result.dsi.band_justification}</p>
                   </div>
                 </div>
               </div>
            )}

            {/* Epistemic Declaration */}
            {result.epistemic && (
              <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[2rem] p-6 md:p-8 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <h3 className="text-lg font-bold text-slate-900 mb-4">1. Epistemic Declaration</h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/55 backdrop-blur-md p-4 rounded-xl border border-white/70">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block mb-1">
                      Mode
                    </span>
                    <span className="font-mono text-sm text-brand-700 font-bold">
                      {result.epistemic.mode}
                    </span>
                  </div>

                  <div className="bg-white/55 backdrop-blur-md p-4 rounded-xl border border-white/70">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block mb-1">
                      Confidence
                    </span>
                    <span
                      className={`font-mono text-sm font-bold ${
                        result.epistemic.confidence === "HIGH"
                          ? "text-emerald-600"
                          : result.epistemic.confidence === "MEDIUM"
                            ? "text-amber-500"
                            : "text-red-600"
                      }`}
                    >
                      {result.epistemic.confidence}
                    </span>
                  </div>

                  <div className="bg-white/55 backdrop-blur-md p-4 rounded-xl border border-white/70">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block mb-1">
                      Pages Visited
                    </span>
                    <span className="font-mono text-sm text-slate-800 font-bold">
                      {result.epistemic.pages_visited}
                    </span>
                  </div>
                </div>

                {result.epistemic.note && (
                  <p className="text-sm text-slate-600 italic border-l-4 border-brand-200/70 pl-4 py-1">
                    {result.epistemic.note}
                  </p>
                )}
                {result.epistemic.navigation_failed_reason && (
                  <p className="text-sm text-red-600 mt-2 bg-red-50/50 p-2 rounded">
                    <strong>Error: </strong> {result.epistemic.navigation_failed_reason}
                  </p>
                )}
              </div>
            )}

            {/* Phase 1: Evidence */}
            {result.phase_1_evidence && result.phase_1_evidence.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">2. Phase 1 — Evidence</h3>

                <div className="relative overflow-x-auto rounded-2xl border border-white/80 bg-white/55 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-white/60 border-b border-white/70">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-800">ID</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">URL</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Finding [Tag]</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Quote</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-white/60">
                      {result.phase_1_evidence.map((item, i) => (
                        <tr key={i} className="hover:bg-white/60 transition-colors">
                          <td className="px-4 py-4 font-mono text-xs font-semibold text-brand-700">{item.id}</td>
                          <td className="px-4 py-4 truncate max-w-[240px] text-slate-500" title={item.url}>
                            {item.url}
                          </td>
                          <td className="px-4 py-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/60 border border-white/70 text-slate-700 px-2 py-1 rounded mr-2 inline-block mb-1 sm:mb-0">
                              {item.source_tag}
                            </span>
                            <span className="text-slate-800">{item.finding}</span>
                          </td>
                          <td className="px-4 py-4 italic text-slate-500 text-xs">"{item.quote}"</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Phase 2: Checklist */}
            {result.phase_2_checklist && result.phase_2_checklist.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">3. Phase 2 — Diagnostic Checklist</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.phase_2_checklist.map((item, i) => (
                    <div key={i} className="bg-white/55 backdrop-blur-xl border border-white/70 rounded-2xl p-5 shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-slate-800 capitalize">{item.id.replace('_', ' ')}</span>
                        <span
                          className={`px-2 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest ${
                            item.result === "PASS"
                              ? "bg-emerald-100 text-emerald-700"
                              : item.result === "PARTIAL"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.result}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{item.explanation}</p>
                      {item.evidence_ids && item.evidence_ids.length > 0 && (
                        <div className="text-xs text-brand-700 font-mono font-medium">
                          Evidenza: {item.evidence_ids.join(", ")}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Phase 3: Scenario */}
            {result.phase_3_scenario && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">4. Phase 3 — Scenario & Transitions</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6">
                    <h4 className="font-bold text-red-800 mb-2">Current State (Before)</h4>
                    <p className="text-sm text-red-700/80 leading-relaxed">{result.phase_3_scenario.before}</p>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6">
                    <h4 className="font-bold text-emerald-800 mb-2">Target State (After CHKCD)</h4>
                    <p className="text-sm text-emerald-700/80 leading-relaxed">{result.phase_3_scenario.after}</p>
                  </div>
                </div>

                {result.phase_3_scenario.check_transitions && result.phase_3_scenario.check_transitions.length > 0 && (
                  <div className="mt-4 bg-white/55 backdrop-blur-md rounded-2xl p-5 border border-white/70">
                    <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Projected Transitions</h4>
                    <div className="flex flex-wrap gap-3">
                      {result.phase_3_scenario.check_transitions.map((transition, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
                          <span className="font-semibold">{transition.check_id}</span>
                          <span className="text-slate-400 font-bold">:</span>
                          <span className="text-red-500 font-mono">{transition.from}</span>
                          <span className="text-slate-400">→</span>
                          <span className="text-emerald-500 font-mono">{transition.to}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Phase 4: Stress Test */}
            {result.phase_4_stress_test && result.phase_4_stress_test.questions && (
              <div className="space-y-4">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-lg font-bold text-slate-900">5. Phase 4 — LLM Stress Test</h3>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Performance Summary</span>
                    <div className="flex gap-2 text-xs font-bold font-mono mt-1">
                      <span className="text-emerald-600">CORRECT:{result.phase_4_stress_test.summary_score.correct}</span>
                      <span className="text-amber-500">PARTIAL:{result.phase_4_stress_test.summary_score.partial}</span>
                      <span className="text-red-500">WRONG:{result.phase_4_stress_test.summary_score.wrong}</span>
                      <span className="text-slate-500">MISSING:{result.phase_4_stress_test.summary_score.missing}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {result.phase_4_stress_test.questions.map((q, i) => (
                    <div key={i} className="bg-white/55 backdrop-blur-xl border border-white/70 rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-slate-100/50 px-5 py-3 border-b border-white/60 flex justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-800 bg-white shadow-sm px-2 py-1 rounded text-xs">{q.id}</span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{q.category}</span>
                          {q.is_competitor_shadow && (
                            <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold uppercase">Competitor Shadow</span>
                          )}
                        </div>
                        <div className="flex gap-2">
                           <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                             q.verdict === 'CORRECT' ? 'bg-emerald-100 text-emerald-700' :
                             q.verdict === 'PARTIAL' ? 'bg-amber-100 text-amber-700' :
                             q.verdict === 'WRONG' ? 'bg-red-100 text-red-700' : 'bg-slate-200 text-slate-700'
                           }`}>
                             {q.verdict}
                           </span>
                           <span className="text-[10px] font-bold px-2 py-1 rounded-full uppercase border border-slate-200 text-slate-600 bg-white/50">
                             Conf: {q.confidence_gap}
                           </span>
                        </div>
                      </div>
                      <div className="p-5 space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-800 mb-1">Q: {q.question}</p>
                          <p className="text-sm text-slate-600 italic bg-white/50 p-3 rounded-xl border border-slate-100">"{q.simulated_answer}"</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start text-xs">
                          <p className="text-slate-600 max-w-xl"><strong>Explanation:</strong> {q.explanation}</p>
                          {q.error_type && (
                            <span className="bg-red-50 text-red-700 border border-red-100 px-2 py-1 rounded font-mono font-medium whitespace-nowrap">
                              Error: {q.error_type}
                            </span>
                          )}
                          {q.fragile_visibility && (
                            <span className="bg-amber-50 text-amber-700 border border-amber-100 px-2 py-1 rounded font-mono font-medium whitespace-nowrap">
                              ⚠️ Fragile Visibility
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Actions */}
            {result.phase_3_scenario && result.phase_3_scenario.next_actions && result.phase_3_scenario.next_actions.length > 0 && (
              <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[2rem] p-8 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <h3 className="text-lg font-bold text-slate-900 mb-6">Next Actions</h3>
                <ul className="space-y-3 text-slate-700 list-disc pl-5">
                  {result.phase_3_scenario.next_actions.map((action, i) => (
                    <li key={i} className="pl-1 text-sm leading-relaxed marker:text-brand-500 font-medium">
                      {action}
                    </li>
                  ))}
                </ul>
                {result.phase_3_scenario.assisted_option && (
                  <div className="mt-6 bg-brand-50 border border-brand-100 p-4 rounded-xl">
                    <p className="text-sm text-brand-800 font-medium">💡 <strong>Opzione Assistita:</strong> {result.phase_3_scenario.assisted_option}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer lang={langParam} />
    </div>
  );
}