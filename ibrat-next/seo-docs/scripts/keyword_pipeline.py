#!/usr/bin/env python3
"""
GSC + competitor keyword cleanup: normalize, dedupe, brand/junk filter.
Also: extract inferred queries from ALL_PAGES_SEO_AND_FEATURE_FLOW.txt
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path
from typing import Iterable


def normalize(text: str) -> str:
    t = unicodedata.normalize("NFKC", text or "")
    t = t.lower().strip()
    t = re.sub(r"\s+", " ", t)
    t = re.sub(r"[\u200b\u200c\u200d\ufeff]", "", t)
    return t


def base_form(q: str) -> str:
    """Light dedup key: drop trailing 's' for simple plural collapse."""
    n = normalize(q)
    for suf in ("ies", "es", "s"):
        if len(n) > 4 and n.endswith(suf) and n not in (
            "brat",
            "memes",
            "quotes",
        ):
            if suf == "ies" and n.endswith("ies"):
                return n[:-3] + "y"
            return n[: -len(suf)]
    return n


def is_junk(q: str) -> bool:
    n = normalize(q)
    if len(n) < 2:
        return True
    if re.search(r"[^\w\s\-'&]", n) and len(re.sub(r"[\w\s\-'&]", "", n)) > len(n) * 0.3:
        return True
    if re.search(r"(.)\1{5,}", n):
        return True
    if sum(1 for c in n if ord(c) > 127) > len(n) * 0.4 and len(n) < 20:
        return True
    return False


def load_lines(path: Path) -> list[str]:
    if not path.exists():
        return []
    return [ln.strip() for ln in path.read_text(encoding="utf-8", errors="replace").splitlines() if ln.strip() and not ln.strip().startswith("#")]


def has_brand(q: str, brands: set[str]) -> bool:
    n = normalize(q)
    for b in brands:
        if not b:
            continue
        if normalize(b) in n:
            return True
    return False


def read_csv_flexible(path: Path) -> tuple[list[dict], str | None, str | None]:
    """Return rows and detected column names for query + optional page + metrics."""
    raw = path.read_text(encoding="utf-8", errors="replace").splitlines()
    if not raw:
        return [], None, None
    dialect = csv.Sniffer().sniff(raw[0] + "\n" + (raw[1] if len(raw) > 1 else ""))
    reader = csv.DictReader(raw, dialect=dialect)
    rows = list(reader)
    if not rows:
        return [], None, None
    fields = {normalize(k).replace(" ", "_"): k for k in rows[0].keys()}
    q_key = None
    for candidate in ("query", "keyword", "keywords", "top_queries", "search_query"):
        for fk, orig in fields.items():
            if candidate in fk.replace(" ", "_"):
                q_key = orig
                break
        if q_key:
            break
    if not q_key:
        q_key = list(rows[0].keys())[0]
    p_key = None
    for orig in rows[0].keys():
        if normalize(orig) in ("page", "url", "landing_page"):
            p_key = orig
            break
    return rows, q_key, p_key


def process_rows(
    rows: Iterable[dict],
    q_key: str,
    p_key: str | None,
    brands: set[str],
) -> list[dict]:
    """Normalize, filter junk/brand, merge duplicate keys keeping max clicks/impr."""
    merged: dict[str, dict] = {}
    for row in rows:
        q = row.get(q_key) or ""
        nq = normalize(q)
        if not nq or is_junk(nq):
            continue
        if has_brand(nq, brands):
            continue
        key = base_form(nq)
        page = normalize(row.get(p_key, "")) if p_key else ""
        try:
            clicks = int(float(str(row.get("clicks", row.get("Clicks", 0)) or 0)))
        except (TypeError, ValueError):
            clicks = 0
        try:
            impr = int(float(str(row.get("impressions", row.get("Impressions", 0)) or 0)))
        except (TypeError, ValueError):
            impr = 0
        existing = merged.get(key)
        rec = {
            "query": nq,
            "page": page,
            "clicks": clicks,
            "impressions": impr,
        }
        if not existing or clicks > existing["clicks"] or (
            clicks == existing["clicks"] and impr > existing["impressions"]
        ):
            merged[key] = rec
    return sorted(merged.values(), key=lambda x: (-x["clicks"], -x["impressions"], x["query"]))


def extract_inferred_from_all_pages(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8", errors="replace")
    blocks = re.split(r"={10,}", text)
    out: list[dict] = []
    current_url = "/"
    in_keywords = False
    for block in blocks:
        lines = block.strip().splitlines()
        for line in lines:
            m = re.match(r"^PAGE:\s*(\S*)", line.strip())
            if m:
                current_url = m.group(1).strip() or "/"
                in_keywords = False
                continue
            if "TARGET KEYWORDS" in line and "INFERRED" in line:
                in_keywords = True
                continue
            if in_keywords:
                if line.strip().startswith("ARTICLE") or line.strip().startswith("OPEN GRAPH") or line.strip().startswith("HEADING") or line.strip().startswith("SOURCE") or line.strip().startswith("META "):
                    if "ARTICLE" in line or "PARAGRAPH" in line:
                        in_keywords = False
                    continue
                km = re.match(r"^-\s*(.+)$", line.strip())
                if km:
                    q = km.group(1).strip()
                    if q:
                        out.append(
                            {
                                "query": q,
                                "page": f"https://ibratgenerator.com{current_url if current_url.startswith('/') else '/' + current_url}",
                                "clicks": 0,
                                "impressions": 0,
                                "source": "inferred_all_pages",
                            }
                        )
                elif line.strip() and not line.strip().startswith("-"):
                    in_keywords = False
    return out


def cmd_extract(args: argparse.Namespace) -> None:
    p = Path(args.all_pages)
    rows = extract_inferred_from_all_pages(p)
    out_path = Path(args.o)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["query", "page", "clicks", "impressions", "source"],
            extrasaction="ignore",
        )
        w.writeheader()
        for r in rows:
            w.writerow(
                {
                    "query": r["query"],
                    "page": r["page"],
                    "clicks": r["clicks"],
                    "impressions": r["impressions"],
                    "source": r.get("source", "inferred"),
                }
            )
    print(f"Wrote {len(rows)} rows to {out_path}", file=sys.stderr)


def cmd_process(args: argparse.Namespace) -> None:
    brands: set[str] = set()
    for b in args.brands or []:
        brands.add(b)
    brands.update(load_lines(Path(args.brand_file)) if args.brand_file else [])

    all_recs: list[dict] = []
    if args.gsc:
        rows, qk, pk = read_csv_flexible(Path(args.gsc))
        if not qk:
            print("No query column in GSC file", file=sys.stderr)
            sys.exit(1)
        for r in process_rows(rows, qk, pk, brands):
            r = dict(r)
            r["source"] = "gsc"
            all_recs.append(r)
    if args.competitor:
        rows, qk, pk = read_csv_flexible(Path(args.competitor))
        for r in process_rows(rows, qk, pk, brands):
            r = dict(r)
            r["source"] = "competitor"
            all_recs.append(r)

    merged: dict[str, dict] = {}
    for r in all_recs:
        key = base_form(r["query"])
        prev = merged.get(key)
        if not prev or r.get("clicks", 0) > prev.get("clicks", 0):
            merged[key] = {
                "query": r["query"],
                "page": r.get("page", ""),
                "clicks": r.get("clicks", 0),
                "impressions": r.get("impressions", 0),
                "source": r.get("source", ""),
            }

    out_list = sorted(merged.values(), key=lambda x: (-x["clicks"], -x["impressions"], x["query"]))
    out_path = Path(args.o)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["query", "page", "clicks", "impressions", "source"],
        )
        w.writeheader()
        for r in out_list:
            w.writerow(r)
    print(f"Wrote {len(out_list)} unique queries to {out_path}", file=sys.stderr)


def main() -> None:
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)

    p_ext = sub.add_parser("extract", help="Build baseline CSV from ALL_PAGES doc")
    p_ext.add_argument("--all-pages", required=True, help="Path to ALL_PAGES_SEO_AND_FEATURE_FLOW.txt")
    p_ext.add_argument("-o", required=True, help="Output CSV path")

    p_pr = sub.add_parser("process", help="Clean GSC + competitor CSVs")
    p_pr.add_argument("--gsc", help="GSC export CSV")
    p_pr.add_argument("--competitor", help="Competitor keywords CSV")
    p_pr.add_argument("--brand-file", help="Text file, one brand token per line")
    p_pr.add_argument(
        "--brands",
        nargs="*",
        default=[],
        help="Extra brand strings to filter out",
    )
    p_pr.add_argument("-o", required=True, help="Output cleaned CSV path")

    args = ap.parse_args()
    if args.cmd == "extract":
        cmd_extract(args)
    else:
        if not args.gsc and not args.competitor:
            print("Provide at least one of --gsc or --competitor", file=sys.stderr)
            sys.exit(1)
        cmd_process(args)


if __name__ == "__main__":
    main()
