#!/usr/bin/env node
// Compare two snapshots: node scripts/delta.mjs data/2026-11/snapshot-a.json data/2026-11/snapshot-b.json
import fs from 'node:fs';
const [aPath, bPath] = process.argv.slice(2);
if (!aPath || !bPath) { console.error('usage: node scripts/delta.mjs <base.json> <next.json>'); process.exit(2); }
const a = JSON.parse(fs.readFileSync(aPath, 'utf8'));
const b = JSON.parse(fs.readFileSync(bPath, 'utf8'));
const num = (x) => (typeof x === 'number' ? x : null);
const diff = (x, y) => (num(x) === null || num(y) === null ? null : y - x);
const dsh = (k) => diff(a.figures?.dsh?.[k], b.figures?.dsh?.[k]);
const gh = (k) => diff(a.figures?.github?.[k], b.figures?.github?.[k]);
const npm = (k) => diff(a.figures?.npm?.[k], b.figures?.npm?.[k]);
const topA = new Map((a.topRepos || []).map(x => [x.full_name, x.stars]));
const topB = new Map((b.topRepos || []).map(x => [x.full_name, x.stars]));
const added = [...topB.keys()].filter(k => !topA.has(k));
const removed = [...topA.keys()].filter(k => !topB.has(k));
const moved = [...topB.keys()].filter(k => topA.has(k) && topA.get(k) !== topB.get(k)).map(k => ({ repo: k, from: topA.get(k), to: topB.get(k) }));
const out = {
  base: { generatedAt: a.generatedAt, file: aPath }, next: { generatedAt: b.generatedAt, file: bPath },
  delta: { dshStars: dsh('stars'), dshForks: dsh('forks'), releases: dsh('releases'), topicDshPlugin: gh('topicDshPlugin'), nameDshPlugin: gh('nameDshPlugin'), npmSearchTotalBroad: npm('searchTotalBroad') },
  topRepos: { added, removed, moved }
};
console.log(JSON.stringify(out, null, 2));
