"use client"

import React from "react"

interface DefinitionSnippetProps {
  term: string
  definition: string
  className?: string
}

/**
 * COMPONENTE: DefinitionSnippet
 * ============================================================
 * "Definitional snippet" — la frase che Google AI Overview
 * puo' estrarre direttamente come snippet nella SERP.
 *
 * DEVE APPARIRE nei primi 150 parole della pagina.
 *
 * PATTERN CRITICO:
 * "[Termine] è [definizione]." oppure "[Term] is [definition]."
 * Questo è il formato "Position Zero" che Google AI Overview
 * estrae automaticamente come snippet diretto.
 *
 * CSS CLASS: "definition-snippet" — referenziata dal Speakable
 * schema nel JSON-LD per indicare contenuto leggibile dagli LLM.
 * ============================================================
 */
export default function DefinitionSnippet({
  term,
  definition,
  className = ""
}: DefinitionSnippetProps) {
  return (
    <p className={`definition-snippet text-lg text-gray-300 leading-relaxed max-w-3xl ${className}`}>
      <strong className="text-white">{term}</strong> {definition}
    </p>
  )
}
