#!/bin/bash

# Percorso assoluto della cartella corrente
PROJECT_ROOT=$(cd "$(dirname "$0")" && pwd)
SCRIPT_NAME="refresh-seo.sh"
FULL_PATH="$PROJECT_ROOT/$SCRIPT_NAME"
# La riga esatta per il Crontab
CRON_LINE="0 0 * * 0 /bin/bash $FULL_PATH"

echo "--- GESTIONE SEO CRON (Root: $PROJECT_ROOT) ---"
echo "1) Abilita Automazione (Domenica 00:00)"
echo "2) Disabilita Automazione"
echo "3) Esci"
read -p "Scegli [1-3]: " choice

case $choice in
    1)
        if [ ! -f "$FULL_PATH" ]; then
            echo "❌ Errore: $SCRIPT_NAME non trovato in $PROJECT_ROOT"
            exit 1
        fi
        chmod +x "$FULL_PATH"
        (crontab -l 2>/dev/null | grep -v "$SCRIPT_NAME"; echo "$CRON_LINE") | crontab -
        echo "✅ Abilitato con successo."
        ;;
    2)
        crontab -l 2>/dev/null | grep -v "$SCRIPT_NAME" | crontab -
        echo "🚫 Disabilitato."
        ;;
    *)
        echo "Operazione annullata."
        ;;
esac