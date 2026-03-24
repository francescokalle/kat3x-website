import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

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
    // 1. ORA ESTRAIAMO ANCHE promptContext DAL FRONTEND!
    const { url, promptContext } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL mancante" }, { status: 400 });
    }
    
    if (!promptContext) {
      return NextResponse.json({ error: "Contesto del protocollo mancante" }, { status: 400 });
    }

    const domain = getSafeDomainName(url);
    
    // Directory di salvataggio nella cartella public
    const saveDirectory = path.join(process.cwd(), "public", "data", "diagnostics");
    const filePath = path.join(saveDirectory, `${domain}.json`);

    // 2. CONTROLLO CACHE SUL SERVER
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

    // 3. CHIAMATA A GEMINI
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key mancante sul server (.env)" }, { status: 500 });
    }

    // 4. COSTRUZIONE DEL PROMPT DINAMICO
    // Uniamo il protocollo che arriva dal frontend con l'URL da analizzare
    const prompt = `
${promptContext}

========================================================
ISTRUZIONE FINALE DI ESECUZIONE
========================================================
Esegui immediatamente il protocollo diagnostico (diagnostic.self_test v2.3) sul seguente dominio: ${url}

REGOLA FONDAMENTALE: Restituisci ESCLUSIVAMENTE un singolo oggetto JSON valido che rispetti rigorosamente il JSON FILL-IN TEMPLATE fornito nelle istruzioni. 
Nota tecnica: Poiché questa è una chiamata API con application/json attivato, non stampare i marcatori testuali "JSON_BLOCK_START" o "JSON_BLOCK_END", restituisci semplicemente l'oggetto JSON puro partendo dalla parentesi graffa {.
`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        // Questo parametro forza Gemini a restituire SEMPRE un JSON valido
        generationConfig: { response_mime_type: "application/json" }
      }),
    });

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.error?.message || "Errore API Google");
    }

    let responseText = responseData.candidates[0].content.parts[0].text;
    
    // Pulizia di sicurezza da eventuali markdown residui (nonostante il mime_type)
    responseText = responseText.replace(/```json/gi, "").replace(/```/g, "").trim();

    const parsedJson = JSON.parse(responseText);

    // 5. SALVATAGGIO SUL SERVER
    try {
      await fs.mkdir(saveDirectory, { recursive: true });
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