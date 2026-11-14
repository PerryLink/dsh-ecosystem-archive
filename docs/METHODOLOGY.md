# Methodology

## Snapshot fields
- `dsh.stars/forks`: GitHub repo at collection time.
- `dsh.releases`: count of GitHub releases (all prereleases; DSH has no stable release as of 2026-11).
- `github.topicDshPlugin`: repositories tagged `dsh-plugin`; lower bound.
- `github.nameDshPlugin`: repositories with `dsh-plugin` in the name; noisy.
- `npm.searchTotalBroad`: npm search hits for "dsh-plugin"; broad, fuzzy, trend only.
- `topRepos`: top 20 by stars, not by usage.
- `officialClaims`: self-reported figures, copied with source/date.

## Known limitations
- GitHub search counts fluctuate with indexing and query syntax.
- npm search includes non-plugin packages.
- No deduplication between GitHub and npm.
- Official claims are not audited.

## Change policy
Never edit a past snapshot. Add a new month. Corrections go to `data/ERRATA.md`.
