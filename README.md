# DSH Ecosystem Archive

> Independent, reproducible snapshots of the DeepSeek Harness (DSH) plugin ecosystem.
> **Not affiliated with DeepSeek.** Data license: CC-BY-4.0; code: MIT.

The DSH ecosystem is growing faster than anyone can track. Official numbers are self-reported and change monthly. This archive keeps **monthly snapshots** and an **event timeline**, so future claims can be checked against a dated record.

## What is here

| Path | Meaning |
|---|---|
| `data/2026-11/snapshot.json` | first snapshot: DSH repo stats, GitHub topic counts, npm search totals, top repos, top package downloads |
| `data/timeline.jsonl` | dated events (releases, metrics, statements) with source URLs |
| `scripts/snapshot.mjs` | reproducible collector |
| `index.html` | static dashboard |
| `docs/METHODOLOGY.md` | definitions, known limitations |

## Definitions (important)

- **Official claims** are recorded verbatim with source/date; they are not independently verified.
- **GitHub topic count** is `topic:dsh-plugin`, a lower bound (many plugins do not set topics).
- **npm search total** is broad and fuzzy; use it only as a trend line, not a count.
- **Top repos** are sorted by stars; stars are not usage.

## Why this exists

Time series cannot be backfilled. If the ecosystem is 10x bigger in 2028, the only way to know what 2026 looked like is to have recorded it in 2026.

## Roadmap

- Monthly snapshots (cron).
- Quarterly "state of the ecosystem" brief.
- v1.0: stable schema + API + Zenodo DOI.

## License

- Data: CC-BY-4.0 (attribute "DSH Ecosystem Archive, PerryLink").
- Code: MIT.

## Related seeds

- [dsh-compat-baseline](https://github.com/PerryLink/dsh-compat-baseline) — HCB: declared plugin × host compatibility matrix.
- [dsh-enterprise-reference](https://github.com/PerryLink/dsh-enterprise-reference) — enterprise reference architecture and checklist.
