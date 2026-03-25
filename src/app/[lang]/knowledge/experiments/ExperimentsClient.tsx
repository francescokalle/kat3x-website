"use client";

import React, { useState, useMemo } from "react";
import { FileText, Search, X } from "lucide-react";
import Navbar from "@/app/components/NavBar";
import reportsData from "@res/data/reports/reports-data.json";
import Footer from "@/app/components/Footer";
import PageBackground from "@/app/components/PageBackground";

interface Report {
  id: string;
  category: string;
  title: string;
  description?: string;
  status: string;
  formats: string[];
  tags: string[];
}

// --- DIZIONARI DI TRADUZIONE ---
const dictionaries: Record<string, any> = {
  it: {
    hero: {
      title: "AI Visibility Experiments",
      description:
        "Esperimenti di Knowledge Seeding e analisi di assimilazione semantica. Ogni esperimento misura la capacità dei Large Language Models di riconoscere e citare strutture di dati aziendali.",
    },
    search: {
      placeholder: "Cerca per titolo o descrizione...",
      allCategories: "Tutte le categorie",
      noResults: "Nessun esperimento trovato. Prova a modificare i filtri.",
      clearFilters: "Rimuovi filtri",
      resultsCount: (n: number) =>
        `${n} esperiment${n === 1 ? "o trovato" : "i trovati"}`,
    },
    report: {
      comingSoon: "In Arrivo",
      processing: "Dati in elaborazione...",
    },
  },
  en: {
    hero: {
      title: "AI Visibility Experiments",
      description:
        "Knowledge Seeding experiments and semantic assimilation analyses. Each experiment measures the ability of Large Language Models to recognize and cite corporate data structures.",
    },
    search: {
      placeholder: "Search by title or description...",
      allCategories: "All categories",
      noResults: "No experiments found. Try adjusting your filters.",
      clearFilters: "Clear filters",
      resultsCount: (n: number) => `${n} experiment${n === 1 ? "" : "s"} found`,
    },
    report: {
      comingSoon: "Coming Soon",
      processing: "Data processing...",
    },
  },
};

interface ReportsPageClientProps {
  lang: string;
}

export default function ReportsPageClient({ lang }: ReportsPageClientProps) {
  const dict = dictionaries[lang] || dictionaries.it;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Derive unique categories and tags from data
  const categories = useMemo(
    () => Array.from(new Set(reportsData.map((r) => r.category))),
    []
  );
  const allTags = useMemo(
    () => Array.from(new Set(reportsData.flatMap((r) => r.tags))),
    []
  );

  // Filter reports based on active search/filters
  const filteredReports = useMemo(() => {
    return (reportsData as Report[]).filter((report) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        report.title.toLowerCase().includes(q) ||
        (report.description?.toLowerCase().includes(q) ?? false);

      const matchesCategory = !selectedCategory || report.category === selectedCategory;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => report.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  const hasActiveFilters = !!searchQuery || !!selectedCategory || selectedTags.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      <PageBackground />
      <Navbar lang={lang} />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* soft glow behind */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-56 bg-gradient-to-r from-brand-100/60 to-emerald-100/40 blur-3xl -z-10 rounded-[100%]" />

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.05]">
              {dict.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {dict.hero.description}
            </p>
          </div>

          {/* subtle hero glass separator */}
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl p-5 sm:p-6 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand-200/35 rounded-full blur-3xl" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-sm text-slate-600">
                  Filtra gli esperimenti per categoria, tag e testo libero.
                </p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 border border-white/70 bg-white/50 hover:bg-white/70 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                    {dict.search.clearFilters}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH & FILTER BAR */}
        <section className="py-6 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[2rem] p-6 sm:p-8 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl" />

              {/* Search input */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder={dict.search.placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/60 backdrop-blur-md text-slate-900 placeholder:text-slate-400 border border-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow"
                />
              </div>

              {/* Category filter buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors border ${
                    !selectedCategory
                      ? "bg-brand-600 text-white border-brand-600"
                      : "bg-white/60 text-slate-700 border-white/70 hover:bg-white/80"
                  }`}
                >
                  {dict.search.allCategories}
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors border ${
                      selectedCategory === cat
                        ? "bg-brand-600 text-white border-brand-600"
                        : "bg-white/60 text-slate-700 border-white/70 hover:bg-white/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Tag filter pills */}
              <div className="flex flex-wrap gap-2 items-center">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold border transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-brand-100/70 border-brand-300 text-brand-700"
                        : "bg-white/55 border-white/70 text-slate-600 hover:border-brand-200 hover:text-brand-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REPORTS GRID */}
        <section className="py-20 relative text-white overflow-hidden">
          {/* Dark base */}
          <div className="absolute inset-0 bg-slate-900/90" />
          {/* background orbs */}
          <div className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 bg-brand-500/20 blur-[120px] rounded-full" />
          <div className="pointer-events-none absolute -bottom-40 -right-24 w-[34rem] h-[34rem] bg-emerald-500/15 blur-[140px] rounded-full" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.18)_1px,transparent_0)] [background-size:24px_24px] opacity-30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results count */}
            {hasActiveFilters && (
              <p className="text-slate-300 text-sm mb-6">
                {dict.search.resultsCount(filteredReports.length)}
              </p>
            )}

            {filteredReports.length === 0 ? (
              <div className="max-w-3xl mx-auto">
                <div className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-2xl p-10 text-center">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <p className="text-slate-300">{dict.search.noResults}</p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReports.map((report) => (
                  <article
                    key={report.id}
                    className={`relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[1.25rem] p-6 flex flex-col h-full transition-all overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:border-white/20 ${
                      report.status === "coming_soon" ? "opacity-70" : ""
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />

                    {/* Category + Coming Soon badge */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
                        {report.category}
                      </div>
                      {report.status === "coming_soon" && (
                        <span className="text-xs font-semibold bg-white/10 border border-white/10 text-slate-200 px-2 py-1 rounded-lg shrink-0 ml-2">
                          {dict.report.comingSoon}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold mb-3 leading-snug text-white">
                      {report.title}
                    </h2>

                    {/* Description */}
                    {report.description && (
                      <p className="text-sm text-slate-300 mb-4 flex-grow leading-relaxed">
                        {report.description}
                      </p>
                    )}

                    {/* Tags */}
                    {report.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {report.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-white/10 border border-white/10 text-slate-200 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Format links */}
                    <div className="mt-auto">
                      {report.status !== "coming_soon" && report.formats.length > 0 ? (
                        <div className="flex gap-2 flex-wrap">
                          {report.formats.map((format) => (
                            <a
                              key={format}
                              href={`/data/reports/${report.id}/${report.id}.${format.toLowerCase()}`}
                              className="flex items-center gap-1.5 text-sm text-slate-100 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-xl transition-colors"
                            >
                              <FileText className="h-4 w-4" />
                              {format}
                            </a>
                          ))}
                        </div>
                      ) : report.status !== "coming_soon" ? (
                        <div className="text-sm text-slate-300/70 italic">
                          {dict.report.processing}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}