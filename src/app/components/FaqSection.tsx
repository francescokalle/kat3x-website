"use client"

import React from "react"

export interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  faq: FaqItem[]
  title?: string
}

/**
 * COMPONENTE: FaqSection
 * ============================================================
 * Rendering HTML5 <details>/<summary> per FAQ visibili nel DOM.
 * Google AI Overview richiede FAQ VISIBILI sulla pagina,
 * non solo nel JSON-LD.
 *
 * STILE: Glassmorphism coerente con Kat3x design system
 * - bg-white/5 + backdrop-blur
 * - border-white/10
 * - Colore accent: #00e87e (brand green)
 *
 * ACCESSIBILITÀ: <details>/<summary> nativi HTML — Google li legge
 * perfettamente e sono accessibili. NO JavaScript per toggle.
 *
 * IMPORTANTE: Il contenuto visibile DEVE essere IDENTICO al JSON-LD
 * FAQPage schema — zero discrepanze per Google AI Overview.
 * ============================================================
 */
export default function FaqSection({
  faq,
  title = "Domande Frequenti"
}: FaqSectionProps) {
  return (
    <section
      className="w-full max-w-4xl mx-auto py-16 px-4"
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>

      <div className="space-y-3">
        {faq.map((item, i) => (
          <details
            key={i}
            className="border border-white/10 rounded-lg bg-white/5 backdrop-blur overflow-hidden hover:bg-white/[0.08] transition-colors"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <summary className="p-4 cursor-pointer text-white font-medium hover:text-[#00e87e] transition-colors list-none"
              itemProp="name">
              {item.question}
            </summary>

            <div
              className="px-4 pb-4 text-gray-300 leading-relaxed border-t border-white/5"
              itemProp="acceptedAnswer"
              itemScope
              itemType="https://schema.org/Answer"
            >
              <div itemProp="text">{item.answer}</div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
