import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['it', 'en'];
const defaultLocale = 'it';

function getLocale(request: NextRequest): string {
  // Trasforma gli header della richiesta in un formato leggibile da Negotiator
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Ottieni le lingue preferite dall'utente (browser)
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  try {
    // Trova la corrispondenza migliore tra lingue browser e lingue supportate
    return match(languages, locales, defaultLocale);
  } catch (e) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Ignora file statici, API e cartelle interne
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') || 
    pathname.startsWith('/api')
  ) {
    return;
  }

  // 2. Verifica se il percorso inizia con una lingua valida
  const pathnameHasValidLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasValidLocale) return;

  // --- LOGICA AGGIUNTIVA PER LINGUA NON ESISTENTE ---
  // Se l'utente scrive /fr/qualcosa, pathname.split('/')[1] sarà 'fr'
  const firstSegment = pathname.split('/')[1];
  const isInvalidLocale = firstSegment && firstSegment.length === 2 && !locales.includes(firstSegment);

  // Se la lingua è invalida o manca del tutto, rileviamo quella corretta
  const locale = getLocale(request);
  
  // Se è una lingua non esistente (es. /fr/test), puliamo il path rimuovendo 'fr'
  const cleanPathname = isInvalidLocale 
    ? pathname.replace(`/${firstSegment}`, '') 
    : pathname;

  // Reindirizzamento (es. da /fr/problem a /it/problem o da /problem a /it/problem)
  const newUrl = new URL(`/${locale}${cleanPathname}`, request.url);
  
  // È importante usare un redirect temporaneo (307) per evitare cache errate nel browser
  return NextResponse.redirect(newUrl);
}

export const config = {
  // Ignora le API, i file statici e le immagini
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};