import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurazione dei Redirect 301 dalle vecchie URL statiche alle nuove route
  async redirects() {
    return [
      {
        source: "/kat3x.html",
        destination: "/it/about",
        permanent: true,
      },
      {
        source: "/status.html",
        destination: "/it/knowledge/experiments",
        permanent: true,
      },
      {
        source: "/changelog.html",
        destination: "/it/knowledge/experiments",
        permanent: true,
      },
      {
        source: "/tools.html",
        destination: "/it/knowledge/glossary",
        permanent: true,
      },
      {
        source: "/versions.html",
        destination: "/it/knowledge/experiments",
        permanent: true,
      },
      {
        source: "/learning-triangle.html",
        destination: "/it/knowledge/methodology",
        permanent: true,
      },
      {
        source: "/tonl.html",
        destination: "/it/knowledge/tonl",
        permanent: true,
      },
      {
        source: "/machine-index.html",
        destination: "/it/knowledge/tonl",
        permanent: true,
      },
      // Redirect root senza lingua verso il prefisso /it
      {
        source: "/problem",
        destination: "/it/problem",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/it/about",
        permanent: true,
      },
      {
        source: "/diagnostic",
        destination: "/it/diagnostic",
        permanent: true,
      },
    ];
  },

  // Configurazione Headers per Knowledge Layer (UTF-8 e Caching)
  async headers() {
    return [
      {
        // Gestione file .txt e .tonl per AI crawlers e layer di conoscenza
        source: "/knowledge/:path*{.txt,.tonl}",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;