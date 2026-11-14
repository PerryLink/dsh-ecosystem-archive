#!/usr/bin/env node
// Snapshot DSH ecosystem figures. Usage: GITHUB_TOKEN=... node scripts/snapshot.mjs
// Writes data/<YYYY-MM>/snapshot-<YYYY-MM-DD>.json and data/latest.json
import fs from 'node:fs';
import path from 'node:path';
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const H = TOKEN ? { headers: { Authorization: 'Bearer ' + TOKEN, Accept: 'application/vnd.github+json', 'User-Agent': 'dsh-archive' } } : { headers: { 'User-Agent': 'dsh-archive' } };
const j = async (u, o = {}) => { const r = await fetch(u, o); if (!r.ok) throw new Error(u + ' -> ' + r.status); return r.json(); };
const now = new Date(); const month = now.toISOString().slice(0, 7); const day = now.toISOString().slice(0, 10);
const repo = await j('https://api.github.com/repos/deepseek-ai/deepseek-harness', H);
const releases = await j('https://api.github.com/repos/deepseek-ai/deepseek-harness/releases?per_page=100', H);
const q = async (x) => { try { return (await j('https://api.github.com/search/repositories?q=' + encodeURIComponent(x) + '&per_page=1', H)).total_count; } catch { return null; } };
let top = []; try { top = (await j('https://api.github.com/search/repositories?q=' + encodeURIComponent('topic:dsh-plugin') + '&sort=stars&order=desc&per_page=100', H)).items.filter(x => /dsh|deepseek/i.test(x.full_name + ' ' + (x.description || ''))).slice(0, 20).map(x => ({ full_name: x.full_name, stars: x.stargazers_count, forks: x.forks_count, pushed_at: x.pushed_at, description: x.description })); } catch {}
let npmTotal = null; try { npmTotal = (await j('https://registry.npmjs.org/-/v1/search?text=dsh-plugin&size=1')).total; } catch {}
let npmTop = [];
for (const n of ['dsh-auto-review','dsh-permission-rules','dsh-research-report','dsh-industry-research','dsh-memento','dsh-mcp-panel','dsh-plugin-guide','dsh-doublecheck']) {
  try { const d = await j('https://api.npmjs.org/downloads/point/last-week/' + n); npmTop.push({ name: n, downloadsLastWeek: d.downloads }); } catch {}
}
const snapshot = {
  generatedAt: now.toISOString(), month, date: day,
  sources: { github: 'api.github.com', npm: 'registry.npmjs.org', dsh: 'github.com/deepseek-ai/deepseek-harness' },
  figures: {
    dsh: { stars: repo.stargazers_count, forks: repo.forks_count, releases: releases.length, latestRelease: releases[0]?.tag_name || null, latestReleaseAt: releases[0]?.published_at || null },
    github: { topicDshPlugin: await q('topic:dsh-plugin'), nameDshPlugin: await q('dsh-plugin in:name'), topicDeepseekHarness: await q('topic:deepseek-harness') },
    npm: { searchTotalBroad: npmTotal, top: npmTop }
  },
  topRepos: top,
  topReposMethod: 'filtered to name/description containing dsh|deepseek; topic is polluted by unrelated repos'
};
const out = path.join('data', month); fs.mkdirSync(out, { recursive: true });
const file = path.join(out, 'snapshot-' + day + '.json');
fs.writeFileSync(file, JSON.stringify(snapshot, null, 2));
fs.writeFileSync(path.join('data', 'latest.json'), JSON.stringify(snapshot, null, 2));
console.log(JSON.stringify(snapshot.figures, null, 2));
