# DSH Ecosystem Archive

> Independent, reproducible snapshots of the DeepSeek Harness (DSH) plugin ecosystem.
> **Not affiliated with DeepSeek.** Data license: CC-BY-4.0; code: MIT.

The DSH ecosystem is growing faster than anyone can track. Official numbers are self-reported and change monthly. This archive keeps **monthly snapshots** and an **event timeline**, so future claims can be checked against a dated record.

## Latest snapshot (2026-11-15)

Source files: [`data/2026-11/snapshot.json`](data/2026-11/snapshot.json) · [`data/timeline.jsonl`](data/timeline.jsonl)

| Signal | Latest value |
|---|---|
| DSH repository | 280,662 stars · 34,621 forks · 39 releases · latest `dsh-v0.2.2-rc.3` |
| GitHub `topic:dsh-plugin` | 30,924 repositories |
| npm `dsh-plugin` search (broad) | 309,294 |
| HCB | **v0.11.0** |
| HCB plugins | **143** |
| HCB evidence | **142 checked** · 0 declared · **1 tested** · 2 ENTRY failed · 3 FLOW manual |
| HCB tested row | `dsh-plugin-guide@0.5.9` (ENTRY runtime, host `0.2.2-rc.3`) |
| HCB coverage | **112/112 family** + **31/31 external** |
| HCB gate | 2 blocked · 21 review · 119 pilot · **1 production-candidate** |

## What is here

| Path | Meaning |
|---|---|
| `data/<YYYY-MM>/snapshot-<YYYY-MM-DD>.json` | dated snapshot: DSH repo stats, GitHub topic counts, npm search totals, top repos, top package downloads |
| `data/latest.json` | most recent snapshot |
| `data/timeline.jsonl` | dated events (releases, metrics, statements) with source URLs |
| `scripts/snapshot.mjs` | reproducible collector (writes a dated file + latest.json) |
| `scripts/delta.mjs` | compare two snapshots |
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
