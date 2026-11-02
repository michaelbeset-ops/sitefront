#!/bin/bash
# Controleert dat elke demopagina in deze repo noindex heeft.
#
# Waarom dit bestaat: op 02-11-2026 was care2live in Google verschenen en had
# 2x-contact-planner helemaal geen robots-meta. Elke demo draagt de naam van
# een ander bedrijf, dus geen enkele demopagina mag in een zoekmachine komen.
#
# Het deployscript (deploy-demo.sh, buiten de repo) kijkt alleen naar
# dist/index.html van de demo die je uitrolt. Dit script kijkt naar alles wat
# er al staat. Draai het voor elke push:
#
#     bash .controle/noindex-check.sh
#
# GEEN UITZONDERING meer voor mappen met een eigen CNAME-bestand (sinds
# 02-11-2026, weekronde). GitHub Pages leest alleen de CNAME in de root van de
# repo, dus zo'n map wordt hier gewoon onder voorstel.sitefront.nl/<map>/
# geserveerd. Staat die op index, dan komt er een tweede kopie van de
# klantsite in Google die straks concurreert met het eigen domein. De echte
# klantsite draait vanuit een eigen repo (bei-couture -> www.beicouture.nl).
# Een map met CNAME wordt nog wel gemeld, als herinnering om hem te verhuizen.
#
# Afsluitcode 0 = alles goed, 1 = er staat een demo open.

cd "$(dirname "$0")/.." || exit 1

fout=0
overgeslagen=()

for map in */; do
  if [ -f "${map}CNAME" ]; then
    overgeslagen+=("${map%/} -> $(cat "${map}CNAME")")
  fi
done

hoort_erbij() {
  for o in "${overgeslagen[@]}"; do
    [ "${1%%/*}" = "${o%% *}" ] && return 1
  done
  return 0
}

geteld=0
while IFS= read -r f; do
  pad="${f#./}"
  geteld=$((geteld + 1))
  meta=$(grep -o '<meta name="robots"[^>]*>' "$f" | head -1)
  case "$meta" in
    *noindex*) ;;
    *) echo "OPEN: $pad  ${meta:-(geen robots-meta)}"; fout=1 ;;
  esac
done < <(find . -name '*.html' -not -path './.git/*')

if [ ${#overgeslagen[@]} -gt 0 ]; then
  echo "Let op, map met eigen CNAME (hoort in een eigen repo, wordt wel gecontroleerd):"
  for o in "${overgeslagen[@]}"; do echo "  $o"; done
  echo
fi

if [ "$fout" = 0 ]; then
  echo "Alle $geteld demopagina's staan op noindex."
else
  echo
  echo "Niet pushen. Zet de robots-meta van bovenstaande pagina's op noindex, nofollow."
fi
exit $fout
