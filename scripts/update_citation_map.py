#!/usr/bin/env python3
"""Build a static citation geography dataset from DOI links via OpenAlex."""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
PUBLICATIONS = ROOT / "_pages" / "publications.md"
OUTPUT = ROOT / "assets" / "data" / "citation-map.json"
JEKYLL_DATA_OUTPUT = ROOT / "_data" / "citation_map.json"
OPENALEX = "https://api.openalex.org"
MAILTO = "li4808@purdue.edu"

COUNTRY_CENTROIDS = {
    "US": ("United States", 39.8, -98.6), "CA": ("Canada", 56.1, -106.3),
    "MX": ("Mexico", 23.6, -102.6), "BR": ("Brazil", -14.2, -51.9),
    "AR": ("Argentina", -38.4, -63.6), "CL": ("Chile", -35.7, -71.5),
    "CO": ("Colombia", 4.6, -74.3), "PE": ("Peru", -9.2, -75.0),
    "GB": ("United Kingdom", 55.4, -3.4), "IE": ("Ireland", 53.1, -8.2),
    "FR": ("France", 46.2, 2.2), "DE": ("Germany", 51.2, 10.5),
    "NL": ("Netherlands", 52.1, 5.3), "BE": ("Belgium", 50.5, 4.5),
    "CH": ("Switzerland", 46.8, 8.2), "AT": ("Austria", 47.5, 14.6),
    "ES": ("Spain", 40.5, -3.7), "PT": ("Portugal", 39.4, -8.2),
    "IT": ("Italy", 41.9, 12.6), "GR": ("Greece", 39.1, 21.8),
    "SE": ("Sweden", 60.1, 18.6), "NO": ("Norway", 60.5, 8.5),
    "DK": ("Denmark", 56.3, 9.5), "FI": ("Finland", 61.9, 25.7),
    "PL": ("Poland", 51.9, 19.1), "CZ": ("Czechia", 49.8, 15.5),
    "HU": ("Hungary", 47.2, 19.5), "RO": ("Romania", 45.9, 24.9),
    "TR": ("Turkey", 39.0, 35.2), "RU": ("Russia", 61.5, 105.3),
    "CN": ("China", 35.9, 104.2), "HK": ("Hong Kong", 22.3, 114.2),
    "TW": ("Taiwan", 23.7, 121.0), "JP": ("Japan", 36.2, 138.3),
    "KR": ("South Korea", 36.5, 127.8), "IN": ("India", 20.6, 78.9),
    "SG": ("Singapore", 1.4, 103.8), "MY": ("Malaysia", 4.2, 101.9),
    "TH": ("Thailand", 15.9, 101.0), "VN": ("Vietnam", 14.1, 108.3),
    "ID": ("Indonesia", -0.8, 113.9), "PH": ("Philippines", 12.9, 121.8),
    "AU": ("Australia", -25.3, 133.8), "NZ": ("New Zealand", -40.9, 174.9),
    "ZA": ("South Africa", -30.6, 22.9), "EG": ("Egypt", 26.8, 30.8),
    "NG": ("Nigeria", 9.1, 8.7), "KE": ("Kenya", -0.0, 37.9),
    "IL": ("Israel", 31.0, 35.0), "SA": ("Saudi Arabia", 23.9, 45.1),
    "AE": ("United Arab Emirates", 23.4, 53.8), "QA": ("Qatar", 25.4, 51.2),
}


def request_json(url: str, retries: int = 3) -> dict:
    last_error = None
    for attempt in range(retries):
        try:
            req = Request(url, headers={"User-Agent": f"BelleLiCitationMap/1.0 mailto:{MAILTO}"})
            with urlopen(req, timeout=30) as response:
                return json.loads(response.read().decode("utf-8"))
        except Exception as exc:  # noqa: BLE001 - network API should not abort immediately.
            last_error = exc
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"OpenAlex request failed: {url}") from last_error


def extract_dois(markdown: str) -> list[str]:
    found = re.findall(r"https?://(?:dx\.)?doi\.org/([A-Za-z0-9._;()/:-]+)", markdown)
    cleaned = []
    seen = set()
    for doi in found:
        doi = doi.rstrip('".,);]').lower()
        if doi and doi not in seen:
            cleaned.append(doi)
            seen.add(doi)
    return cleaned


def get_source_work(doi: str) -> dict | None:
    params = urlencode({"filter": f"doi:https://doi.org/{doi}", "per-page": 1, "mailto": MAILTO})
    data = request_json(f"{OPENALEX}/works?{params}")
    results = data.get("results") or []
    return results[0] if results else None


def iter_citing_works(openalex_id: str, max_items: int) -> list[dict]:
    cursor = "*"
    works = []
    while len(works) < max_items:
        params = urlencode({
            "filter": f"cites:{openalex_id}",
            "per-page": min(200, max_items - len(works)),
            "cursor": cursor,
            "mailto": MAILTO,
        })
        data = request_json(f"{OPENALEX}/works?{params}")
        batch = data.get("results") or []
        works.extend(batch)
        next_cursor = (data.get("meta") or {}).get("next_cursor")
        if not batch or not next_cursor or next_cursor == cursor:
            break
        cursor = next_cursor
    return works


def countries_for_work(work: dict) -> set[str]:
    codes = set()
    for authorship in work.get("authorships") or []:
        for institution in authorship.get("institutions") or []:
            code = institution.get("country_code")
            if code in COUNTRY_CENTROIDS:
                codes.add(code)
    return codes


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--max-citing-per-source", type=int, default=200)
    parser.add_argument("--output", type=Path, default=OUTPUT)
    parser.add_argument("--jekyll-data-output", type=Path, default=JEKYLL_DATA_OUTPUT)
    args = parser.parse_args()

    dois = extract_dois(PUBLICATIONS.read_text(encoding="utf-8"))
    country_counts: Counter[str] = Counter()
    paper_rows = []
    selected = []
    citation_ids = set()
    errors = []

    for doi in dois:
        try:
            source = get_source_work(doi)
            if not source:
                errors.append({"doi": doi, "error": "No OpenAlex source work found"})
                continue
            source_id = source.get("id")
            citing = iter_citing_works(source_id, args.max_citing_per_source)
        except Exception as exc:  # noqa: BLE001
            errors.append({"doi": doi, "error": str(exc)})
            continue

        source_country_counts: Counter[str] = Counter()
        for work in citing:
            work_id = work.get("id") or work.get("doi") or work.get("display_name")
            if work_id:
                citation_ids.add(work_id)
            codes = countries_for_work(work)
            for code in codes:
                country_counts[code] += 1
                source_country_counts[code] += 1
            if codes and len(selected) < 36:
                selected.append({
                    "title": work.get("display_name"),
                    "year": work.get("publication_year"),
                    "doi": work.get("doi"),
                    "openalex_url": work.get("id"),
                    "citing_country_codes": sorted(codes),
                })

        paper_rows.append({
            "doi": doi,
            "title": source.get("display_name"),
            "publication_year": source.get("publication_year"),
            "citation_count": len(citing),
            "top_countries": [
                {"code": code, "name": COUNTRY_CENTROIDS[code][0], "count": count}
                for code, count in source_country_counts.most_common(6)
            ],
        })

    countries = []
    for code, count in sorted(country_counts.items(), key=lambda item: (-item[1], item[0])):
        name, lat, lon = COUNTRY_CENTROIDS[code]
        countries.append({"code": code, "name": name, "count": count, "latitude": lat, "longitude": lon})

    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
        "source_count": len(paper_rows),
        "citation_count": len(citation_ids),
        "countries": countries,
        "papers": sorted(paper_rows, key=lambda paper: (-paper["citation_count"], paper["title"] or "")),
        "selected_citing_works": selected,
    }
    if errors:
        payload["errors"] = errors

    args.output.parent.mkdir(parents=True, exist_ok=True)
    formatted = json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    args.output.write_text(formatted, encoding="utf-8")
    if args.jekyll_data_output:
        args.jekyll_data_output.parent.mkdir(parents=True, exist_ok=True)
        args.jekyll_data_output.write_text(formatted, encoding="utf-8")
    print(f"Wrote {args.output} with {len(countries)} countries and {len(citation_ids)} citing works.")
    if args.jekyll_data_output:
        print(f"Wrote {args.jekyll_data_output}.")
    if errors:
        print(f"Completed with {len(errors)} DOI lookup errors.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
