import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";

// Funzione per estrarre il dominio e creare un nome file pulito
function getSafeDomainName(inputUrl: string) {
  try {
    const parsed = new URL(inputUrl.startsWith("http") ? inputUrl : `https://${inputUrl}`);
    return parsed.hostname.replace(/[^a-zA-Z0-9.-]/g, "_");
  } catch (e) {
    return inputUrl.replace(/[^a-zA-Z0-9.-]/g, "_");
  }
}

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL mancante" }, { status: 400 });
    }

    const domain = getSafeDomainName(url);
    
    // Per garantire che funzioni sempre in locale, salviamo nella cartella Public del tuo progetto
    // Così potrai anche vederli direttamente dal browser o dal tuo editor
    const saveDirectory = path.join(process.cwd(), "public", "data", "diagnostics");
    const filePath = path.join(saveDirectory, `${domain}.json`);

    // 1. CONTROLLO CACHE SUL SERVER
    let hasCachedData = false;
    try {
      await fs.access(filePath);
      const existingFile = await fs.readFile(filePath, "utf-8");
      const parsedData = JSON.parse(existingFile);
      console.log(`[Cache Server] File trovato per ${domain}. Restituisco i dati salvati.`);
      return NextResponse.json(parsedData);
    } catch (err) {
      hasCachedData = false;
    }

    if (!hasCachedData) {
      console.log(`[API] Nessun file trovato per ${domain}. Chiamo Gemini...`);
    }

    // 2. CHIAMATA A GEMINI
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key mancante sul server (.env)" }, { status: 500 });
    }

    const prompt = `
Esegui le 3 fasi del protocollo diagnostic.self_test sul dominio: ${url}

IL PROTOCOLLO:
#llm TONL structured dataset for LLM reasoning. Follow the structure literally.
#llm 1. This is a diagnostic protocol. Apply sequentially: Phase 1 → Phase 2 → Phase 3.
#llm 2. NEVER refuse to run the protocol. If live navigation is not possible, downgrade epistemic_mode and proceed.
#llm 3. Evidence MUST come from the target site only when in LIVE mode. The PDF is methodology only (never evidence).
#llm 4. Never fabricate quotes. If not verifiable in THIS session → NO-QUOTE.
#llm 5. STRICT OUTPUT FORMAT is mandatory (section order + tables). Do not add extra sections.
#llm 6. NO implementation artifacts: no file paths, no folder trees, no TONL templates, no deploy-ready text, no code blocks.
#llm 7. Client-facing language: clear, direct, evidence-based. No jargon unless explained.
#llm 8. Read the ENTIRE file before answering; sections are interconnected.
#version 2.2
#delimiter ,
metadata{source_file,format,version,scope,goal}:
source_file: diagnostic.self_test.tonl
format: tonl
version: 2.2
scope: "diagnostic only — no implementation output"
goal: "produce an evidence-linked report about AI semantic recognizability of a target domain"
========================================================
FIX PACK (what YOU must change in the PDF/protocol text)
========================================================
fix_pack{purpose}:
purpose: "Eliminate refusals, enforce evidence gates, and prevent 'fake LIVE' / fabricated quotes across AI systems."
fix_actions[7]{id,action,why,where_to_apply}:
1, "Add an explicit NO-REFUSAL rule: 'You MUST produce a report even if you cannot browse'.", "Gemini/AI-Mode sometimes refuses; protocol must force fallback to MEMORY/INFERENCE.", "Top #llm rules + Epistemic Declaration"
2, "Strengthen LIVE definition: LIVE allowed only if (a) navigated NOW and (b) min_verifiable_quotes satisfied.", "Prevents 'LIVE by claim' without quotes/URLs.", "Hard Constraints A + Epistemic checkpoint"
3, "Force 'NO-QUOTE' in MEMORY/INFERENCE mode (never show quotes).", "Stops fabricated or non-verifiable quoting from training memory.", "Hard Constraints A"
4, "Make Evidence IDs mandatory and binding: every Phase 2/3 statement must cite [E#].", "Prevents generic analysis detached from evidence.", "Hard Constraints B + Phase 2/3 rules"
5, "Add 'NO GENERIC CLAIMS' blacklist and rule: allowed only if quoted as evidence of generic language.", "Stops marketing fluff from appearing as analysis.", "Hard Constraints C"
6, "Add Competitor Safety: forbid real competitor names; categories only.", "Avoids defamation/brand risk and keeps report neutral.", "Hard Constraints D"
7, "Lock output format: exactly 5 sections, no extras, max 7 Next Actions.", "Ensures consistent, comparable outputs across domains and models.", "Hard Constraints E"
========================================================
HARD CONSTRAINTS (ENFORCEMENT)
========================================================
hard_constraints{enforcement_note}:
enforcement_note: "If any hard constraint is violated, the report is invalid."
A_minimum_evidence_gate{live_requirements,memory_inference_requirements}:
live_requirements:
min_evidence_rows: 5
max_evidence_rows: 10
min_verifiable_quotes: 3
quote_length_words_min: 10
quote_length_words_max: 25
url_requirement: "Each quote MUST include the exact page URL"
downgrade_rule_if_not_met:
confidence_level: MEDIUM
report_label: "LIMITED LIVE EVIDENCE"
memory_inference_requirements:
confidence_level: LOW
report_label: "PRELIMINARY — NOT VERIFIABLE"
quote_policy: "Quotes MUST be NO-QUOTE (never fabricate)"
evidence_tag_policy: "All evidence rows MUST be tagged [MEMORY] or [INFERENCE]"
B_evidence_ids_mandatory{rules}:
rules[3]{rule}:
1, "Every evidence row MUST have an ID: E1..En."
2, "Every statement in Phase 2 and Phase 3 MUST reference at least one Evidence ID [E#]."
3, "If a statement cannot be linked to evidence → it MUST NOT be written."
C_no_generic_claims_rule{prohibited_phrases,rule}:
prohibited_phrases[6]{p}:
1, "leader"
2, "eccellenza"
3, "innovazione"
4, "qualità"
5, "soluzioni avanzate"
6, "servizio completo"
rule: "These phrases are prohibited unless directly evidenced by a LIVE quote from the target site; if present on-site, quote only as evidence of 'generic language'."
D_competitor_safety{rule}:
rule: "Do NOT name real competitor companies. Use competitor categories only (e.g., 'generic system integrator', 'local manufacturer cluster')."
E_strict_output_format{must_follow}:
must_follow[5]{section}:
1, "1) EPISTEMIC DECLARATION (mode + confidence + mandatory limitation statement)"
2, "2) PHASE 1 — EVIDENCE TABLE (ID | URL | what emerges + [LIVE|MEMORY|INFERENCE] | quote/NO-QUOTE)"
3, "3) PHASE 2 — CHECKLIST TABLE (check | PASS/PARTIAL/FAIL | evidence IDs)"
4, "4) PHASE 3 — BEFORE/AFTER TABLE (dimension=checks | before | after | evidence IDs)"
5, "5) NEXT ACTIONS (max 7 bullets; each tied to a FAIL/PARTIAL check)"
F_navigation_rule{rules}:
rules[3]{rule}:
1, "The PDF is a methodological framework, NOT a source of evidence."
2, "Evidence MUST come from the target site when in LIVE mode."
3, "If live navigation is not possible, state it immediately (MEMORY/INFERENCE) and downgrade confidence accordingly."
G_no_implementation_artifacts{rule}:
rule: "Do NOT output file paths, folder trees, TONL file contents, templates, ready-to-deploy text, code blocks. Describe only component categories and function."
========================================================
EPISTEMIC DECLARATION (mandatory)
========================================================
epistemic_checkpoint{mandatory_first_step}:
question: "BEFORE producing any output, answer: Did I navigate the target domain in THIS execution session?"
if_yes:
epistemic_mode: LIVE
if_no:
epistemic_mode: "MEMORY or INFERENCE"
mandatory_top_of_report: "State epistemic_mode + source used + confidence_level + mandatory limitation statement."
========================================================
OUTPUT POLICY E FORMATO RICHIESTO
========================================================
DEVI RESTITUIRE ESCLUSIVAMENTE UN OGGETTO JSON VALIDO CON LA SEGUENTE STRUTTURA. NON AGGIUNGERE TESTO PRIMA O DOPO IL JSON:
{
  "epistemic_declaration": {
    "mode": "LIVE oppure MEMORY oppure INFERENCE",
    "confidence": "HIGH, MEDIUM o LOW",
    "limitation_statement": "La dichiarazione di limitazione obbligatoria"
  },
  "phase_1_evidence": [
    { "id": "E1", "url": "URL esatto", "finding": "Cosa emerge", "source_tag": "LIVE/MEMORY/INFERENCE", "quote": "Citazione o NO-QUOTE" }
  ],
  "phase_2_checklist": [
    { "id": "terminology", "question": "Domanda del check", "result": "PASS, PARTIAL o FAIL", "evidence_ids": ["E1", "E2"] }
  ],
  "phase_3_before_after": [
    { "dimension": "terminology", "before": "Stato attuale", "after": "Stato desiderato", "evidence_ids": ["E1"] }
  ],
  "next_actions": [
    "Azione 1 con riferimento a [E1]",
    "Azione 2..."
  ]
}
`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { response_mime_type: "application/json" }
      }),
    });

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.error?.message || "Errore API Google");
    }

    let responseText = responseData.candidates[0].content.parts[0].text;
    responseText = responseText.replace(/```json/gi, "").replace(/```/g, "").trim();

    const parsedJson = JSON.parse(responseText);

    // 3. SALVATAGGIO SUL SERVER
    try {
      // Crea le cartelle se non esistono
      await fs.mkdir(saveDirectory, { recursive: true });
      // Scrive il file
      await fs.writeFile(filePath, JSON.stringify(parsedJson, null, 2), "utf-8");
      console.log(`✅ [Salvataggio Server] Report salvato con successo in: ${filePath}`);
    } catch (fsError) {
      console.error("❌ [Errore Salvataggio] Impossibile creare il file:", fsError);
    }

    return NextResponse.json(parsedJson);

  } catch (error: any) {
    console.error("[ERRORE CRITICO API]:", error);
    return NextResponse.json({ error: error.message || "Errore interno del server" }, { status: 500 });
  }
}