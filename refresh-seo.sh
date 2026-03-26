#!/bin/bash

# Prende la cartella dove si trova fisicamente questo script
ROOT_DIR=$(cd "$(dirname "$0")" && pwd)

# --- CONFIGURAZIONE ---
URL="http://localhost:3000/api/seo-refresh"
TOKEN="percheiosonotroppoking"
LOG_FILE="$ROOT_DIR/seo-log.txt"
# ----------------------

# Esegue la chiamata e scrive il log nella stessa cartella dello script
curl -k -v -sS -X POST "$URL" -H "Authorization: Bearer $TOKEN" >> "$LOG_FILE" 2>&1

echo "Aggiornamento SEO inviato. Log: $LOG_FILE"