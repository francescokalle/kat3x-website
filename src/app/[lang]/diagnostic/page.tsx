"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Download } from "lucide-react";

// Assicurati che i percorsi di importazione siano corretti rispetto alla tua struttura
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import GlowTitle from "@/app/components/GlowTitle";

interface DiagnosticResult {
  epistemic_declaration: {
    mode: string;
    confidence: string;
    limitation_statement: string;
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
    question: string;
    result: string;
    evidence_ids?: string[];
  }>;
  phase_3_before_after: Array<{
    dimension: string;
    before: string;
    after: string;
    evidence_ids?: string[];
  }>;
  next_actions: string[];
}

const dictionary = {
  it: {
    titleLine1: "AI Visibility",
    highlight: "Diagnostic",
    subtitle: "Un'intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato.",
    instruction: "Inserisci l'URL dell'azienda qui sotto per avviare il protocollo diagnostico. Il nostro sistema interrogherà un LLM in tempo reale per analizzare i segnali semantici del dominio.",
    inputPlaceholder: "Es. https://azienda-veneta.com",
    invalidUrl: "Inserisci un link valido (es. https://azienda.it)",
    modelDisclaimer: "Analisi automatica basata su Gemini 2.5 Flash. Eseguendo il protocollo su altri modelli (es. Claude 3.5, GPT-4o) i risultati potrebbero variare.",
    btnStart: "Avvia Diagnostica",
    btnLoading: "Analisi in corso...",
    errorTitle: "Analisi Automatica Fallita",
    errorGeneric: "Si è verificato un errore di rete o l'AI ha rifiutato la connessione automatica.",
    verifyTitle: "VERIFICA TU STESSO (FALLBACK MANUALE)",
    verifyDesc: "Visto che l'analisi automatica ha incontrato un ostacolo, puoi eseguire il protocollo diagnostico manualmente copiando il prompt qui sotto.",
    step1Title: "1. Apri un sistema AI",
    step1Desc: "Google Gemini, ChatGPT, Claude, Perplexity — oppure attiva AI Mode nella barra di Chrome.",
    step2Title: "2. Scrivi il prompt seguente:",
    step2Prompt: "Esegui le 3 fasi del protocollo diagnostic.self_test sul dominio: [inserisci URL azienda]",
    step3Title: "3. Leggi il risultato",
    step3Desc: "L’AI analizzerà il sito indicato e produrrà un report su: evidenze trovate, checklist diagnostica, scenario prima/dopo strutturazione.",
    step4Title: "4. Funziona su tutto",
    step4Desc: "Il protocollo è neutro: testalo su qualsiasi PMI, concorrente, fornitore o distretto.",
    downloadJson: "Scarica Report (JSON)",
    resultsTitle: "Risultati Diagnostica"
  },
  en: {
    titleLine1: "AI Visibility",
    highlight: "Diagnostic",
    subtitle: "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured.",
    instruction: "Enter the company URL below to start the diagnostic protocol. Our system will query an LLM in real-time to analyze the domain's semantic signals.",
    inputPlaceholder: "E.g. https://company.com",
    invalidUrl: "Please enter a valid link (e.g., https://company.com)",
    modelDisclaimer: "Automated analysis powered by Gemini 2.5 Flash. Running the protocol on other models (e.g., Claude 3.5, GPT-4o) may yield different results.",
    btnStart: "Start Diagnostic",
    btnLoading: "Analysis in progress...",
    errorTitle: "Automated Analysis Failed",
    errorGeneric: "A network error occurred or the AI refused the automated connection.",
    verifyTitle: "VERIFY IT YOURSELF (MANUAL FALLBACK)",
    verifyDesc: "Since the automated analysis encountered an obstacle, you can run the diagnostic protocol manually by copying the prompt below.",
    step1Title: "1. Open an AI system",
    step1Desc: "Google Gemini, ChatGPT, Claude, Perplexity — or activate AI Mode in Chrome's search bar.",
    step2Title: "2. Write the following prompt:",
    step2Prompt: "Execute the 3 phases of the diagnostic.self_test protocol on the domain: [insert company URL]",
    step3Title: "3. Read the result",
    step3Desc: "The AI will analyze the indicated site and produce a report on: evidence found, diagnostic checklist, before/after structuring scenario.",
    step4Title: "4. Works on anything",
    step4Desc: "The protocol is neutral: test it on any SME, competitor, supplier, or district.",
    downloadJson: "Download Report (JSON)",
    resultsTitle: "Diagnostic Results"
  }
};

export default function DiagnosticPage() {
  const params = useParams();
  const langParam = typeof params?.lang === "string" ? params.lang : "it";
  // Se la lingua non esiste (es. "api"), usa "it" come fallback
  const t = dictionary[langParam as keyof typeof dictionary] || dictionary.it;

  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [error, setError] = useState("");

  // Controllo validità dell'URL
  const isValidUrl = (urlStr: string) => {
    if (!urlStr) return false;
    try {
      const parsed = new URL(urlStr.startsWith("http") ? urlStr : `https://${urlStr}`);
      return parsed.hostname.includes("."); // Controlla che ci sia almeno un dominio di primo livello
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

    // Formatta correttamente l'URL prima di inviarlo
    const formattedUrl = inputUrl.startsWith("http") ? inputUrl : `https://${inputUrl}`;
    const domainKey = getDomainKey(formattedUrl);
    const cachedData = localStorage.getItem(`kat3x_diag_${domainKey}`);

    if (cachedData) {
      try {
        setResult(JSON.parse(cachedData));
        setLoading(false);
        return;
      } catch (e) {
        // Se la cache è corrotta, continuiamo
      }
    }

    try {
      const res = await fetch('/api/diagnostic', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: formattedUrl }),
      });

      const textResponse = await res.text();
      
      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (parseError) {
        console.error("Il server NON ha restituito JSON. Ecco cosa ha restituito:", textResponse);
        throw new Error("Errore di rete: l'API ha restituito un formato non valido.");
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 flex flex-col">
      
      <Navbar lang={langParam} />

      <main className="flex-grow pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Intestazione */}
        <section className="text-center space-y-8 mb-16">
          <GlowTitle 
            as="h1" 
            className="text-5xl md:text-6xl text-slate-900"
            glowSize="px-40 py-28"
            glowColor="100, 255, 100"
          >
            {t.titleLine1} <span className="text-brand-600">{t.highlight}</span>
          </GlowTitle>
          
          <div className="bg-brand-100 border-l-4 border-brand-600 p-6 max-w-3xl mx-auto text-left rounded-r-lg shadow-sm">
            <blockquote className="text-lg font-medium text-slate-800 italic">
              "{t.subtitle}"
            </blockquote>
          </div>
        </section>

        {/* Area di Input */}
        <section className="max-w-3xl mx-auto mb-16">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <p className="text-sm text-slate-600 mb-6 text-center">
              {t.instruction}
            </p>
            
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3">
                <input
                  type="url"
                  placeholder={t.inputPlaceholder}
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className={`flex-1 bg-slate-50 border ${!isInputValid ? 'border-red-400 focus:ring-red-500' : 'border-slate-300 focus:ring-brand-500 focus:border-brand-500'} rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400`}
                  onKeyDown={(e) => e.key === "Enter" && isValidUrl(inputUrl) && runDiagnostic()}
                />
                <button
                  onClick={runDiagnostic}
                  disabled={loading || !inputUrl || !isValidUrl(inputUrl)}
                  className="bg-brand-600 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-brand-700 hover:shadow-lg transition-all disabled:opacity-50 disabled:bg-slate-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? t.btnLoading : t.btnStart}
                </button>
              </div>
              {!isInputValid && (
                <p className="text-red-500 text-sm pl-1">{t.invalidUrl}</p>
              )}
              {/* DISCLAIMER MODELLO AI */}
              <p className="text-xs text-slate-400 text-center mt-2">
                {t.modelDisclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* Gestione degli Errori e Tutorial Fallback */}
        {error && (
          <div className="max-w-4xl mx-auto animate-fade-in space-y-8 mb-16">
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center shadow-sm">
              <h3 className="text-red-700 font-bold text-lg mb-2">{t.errorTitle}</h3>
              <p className="text-red-600 text-sm">{error}</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
              <div className="mb-8 border-b border-slate-100 pb-6 text-center">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{t.verifyTitle}</h2>
                <p className="text-slate-600 text-sm">
                  {t.verifyDesc}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step1Title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.step1Desc}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step2Title}</h3>
                  <p className="text-xs text-slate-700 bg-slate-50 p-4 rounded-lg font-mono border border-slate-200 shadow-inner">
                    {t.step2Prompt}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step3Title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.step3Desc}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800">{t.step4Title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t.step4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visualizzazione Risultati */}
        {result && (
          <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold text-slate-900">{t.resultsTitle}</h2>
              <button 
                onClick={downloadJson}
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold text-brand-600 transition-colors shadow-sm"
              >
                <Download className="h-4 w-4" />
                {t.downloadJson}
              </button>
            </div>
            
            {/* Epistemic Declaration */}
            {result.epistemic_declaration && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">1. Epistemic Declaration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block mb-1">Mode</span>
                    <span className="font-mono text-sm text-brand-600 font-bold">{result.epistemic_declaration.mode}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block mb-1">Confidence</span>
                    <span className={`font-mono text-sm font-bold ${result.epistemic_declaration.confidence === 'HIGH' ? 'text-emerald-600' : result.epistemic_declaration.confidence === 'MEDIUM' ? 'text-amber-500' : 'text-red-600'}`}>
                      {result.epistemic_declaration.confidence}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic border-l-4 border-brand-200 pl-4 py-1">
                  {result.epistemic_declaration.limitation_statement}
                </p>
              </div>
            )}

            {/* Phase 1: Evidence */}
            {result.phase_1_evidence && result.phase_1_evidence.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">2. Phase 1 — Evidence Table</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-700 bg-white">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-800">ID</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">URL</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Finding [Tag]</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Quote</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {result.phase_1_evidence.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-4 font-mono text-xs font-semibold text-brand-600">{item.id}</td>
                          <td className="px-4 py-4 truncate max-w-[200px] text-slate-500" title={item.url}>{item.url}</td>
                          <td className="px-4 py-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700 px-2 py-1 rounded mr-2 inline-block mb-1 sm:mb-0">{item.source_tag}</span>
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
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-700 bg-white">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-800">Dimension</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Question</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Result</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Evidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {result.phase_2_checklist.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-4 capitalize font-bold text-slate-800">{item.id}</td>
                          <td className="px-4 py-4 text-slate-600">{item.question}</td>
                          <td className="px-4 py-4 font-bold text-xs tracking-wider">
                            <span className={`px-2 py-1 rounded-full ${item.result === 'PASS' ? 'bg-emerald-100 text-emerald-700' : item.result === 'PARTIAL' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                              {item.result}
                            </span>
                          </td>
                          <td className="px-4 py-4 font-mono text-xs font-semibold text-brand-600">
                            {(item.evidence_ids || []).join(", ")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Phase 3: Before / After */}
            {result.phase_3_before_after && result.phase_3_before_after.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">4. Phase 3 — Before / After Scenario</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-sm text-slate-700 bg-white">
                    <thead className="bg-slate-100 border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-800 w-1/4">Dimension</th>
                        <th className="px-4 py-3 font-semibold text-slate-800 w-1/3">Current State (Before)</th>
                        <th className="px-4 py-3 font-semibold text-slate-800 w-1/3">Target State (After)</th>
                        <th className="px-4 py-3 font-semibold text-slate-800">Evidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {result.phase_3_before_after.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-4 capitalize font-bold text-slate-800">{item.dimension}</td>
                          <td className="px-4 py-4 text-red-700/80 text-xs leading-relaxed bg-red-50/30">{item.before}</td>
                          <td className="px-4 py-4 text-emerald-700/80 text-xs leading-relaxed bg-emerald-50/30">{item.after}</td>
                          <td className="px-4 py-4 font-mono text-xs font-semibold text-brand-600">
                            {(item.evidence_ids || []).join(", ")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Next Actions */}
            {result.next_actions && result.next_actions.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">5. Next Actions</h3>
                <ul className="space-y-3 text-slate-700 list-disc pl-5">
                  {result.next_actions.map((action, i) => (
                    <li key={i} className="pl-1 text-sm leading-relaxed marker:text-brand-500 font-medium">{action}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}

      </main>

      <Footer lang={langParam} />
    </div>
  );
}