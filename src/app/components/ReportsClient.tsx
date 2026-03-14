"use client";

import React, { useState, useMemo } from 'react';
import { FileText, Search, X } from 'lucide-react';
import Navbar from './NavBar';
import reportsData from '@res/data/reports/reports-data.json';

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
      description: "Esperimenti di Knowledge Seeding e analisi di assimilazione semantica. Ogni esperimento misura la capacità dei Large Language Models di riconoscere e citare strutture di dati aziendali.",
    },
    search: {
      placeholder: "Cerca per titolo o descrizione...",
      allCategories: "Tutte le categorie",
      noResults: "Nessun esperimento trovato. Prova a modificare i filtri.",
      clearFilters: "Rimuovi filtri",
      resultsCount: (n: number) => `${n} esperiment${n === 1 ? 'o trovato' : 'i trovati'}`,
    },
    report: {
      comingSoon: "In Arrivo",
      processing: "Dati in elaborazione...",
    },
  },
  en: {
    hero: {
      title: "AI Visibility Experiments",
      description: "Knowledge Seeding experiments and semantic assimilation analyses. Each experiment measures the ability of Large Language Models to recognize and cite corporate data structures.",
    },
    search: {
      placeholder: "Search by title or description...",
      allCategories: "All categories",
      noResults: "No experiments found. Try adjusting your filters.",
      clearFilters: "Clear filters",
      resultsCount: (n: number) => `${n} experiment${n === 1 ? '' : 's'} found`,
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

  const [searchQuery, setSearchQuery] = useState('');
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

      const matchesCategory =
        !selectedCategory || report.category === selectedCategory;

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
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  const hasActiveFilters =
    !!searchQuery || !!selectedCategory || selectedTags.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200">
      <Navbar lang={lang} />

      <main>
        {/* HERO SECTION */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            {dict.hero.title}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {dict.hero.description}
          </p>
        </section>

        {/* SEARCH & FILTER BAR */}
        <section className="py-8 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search input */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder={dict.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-shadow"
              />
            </div>

            {/* Category filter buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dict.search.allCategories}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setSelectedCategory(cat === selectedCategory ? null : cat)
                  }
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
                  className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-brand-100 border-brand-400 text-brand-700'
                      : 'bg-white border-slate-200 text-slate-500 hover:border-brand-300 hover:text-brand-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium text-slate-400 hover:text-slate-600 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <X className="h-3 w-3" />
                  {dict.search.clearFilters}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* REPORTS GRID */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results count */}
            {hasActiveFilters && (
              <p className="text-slate-400 text-sm mb-6">
                {dict.search.resultsCount(filteredReports.length)}
              </p>
            )}

            {filteredReports.length === 0 ? (
              <p className="text-slate-400 text-center py-16">
                {dict.search.noResults}
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReports.map((report) => (
                  <article
                    key={report.id}
                    className={`bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col h-full transition-opacity ${
                      report.status === 'coming_soon' ? 'opacity-70' : ''
                    }`}
                  >
                    {/* Category + Coming Soon badge */}
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                        {report.category}
                      </div>
                      {report.status === 'coming_soon' && (
                        <span className="text-xs font-medium bg-slate-700 text-slate-300 px-2 py-1 rounded shrink-0 ml-2">
                          {dict.report.comingSoon}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold mb-3 leading-snug">
                      {report.title}
                    </h2>

                    {/* Description */}
                    {report.description && (
                      <p className="text-sm text-slate-400 mb-4 flex-grow leading-relaxed">
                        {report.description}
                      </p>
                    )}

                    {/* Tags */}
                    {report.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {report.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Format links */}
                    <div className="mt-auto">
                      {report.status !== 'coming_soon' &&
                      report.formats.length > 0 ? (
                        <div className="flex gap-2 flex-wrap">
                          {report.formats.map((format) => (
                            <a
                              key={format}
                              href={`/data/reports/${report.id}/${report.id}.${format.toLowerCase()}`}
                              className="flex items-center gap-1.5 text-sm text-slate-300 bg-slate-700 hover:bg-slate-600 hover:text-white px-3 py-1.5 rounded transition-colors"
                            >
                              <FileText className="h-4 w-4" />
                              {format}
                            </a>
                          ))}
                        </div>
                      ) : report.status !== 'coming_soon' ? (
                        <div className="text-sm text-slate-500 italic">
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
    </div>
  );
}
