#!/usr/bin/env node
// Downloads every Lovable Asset referenced in src/**/*.asset.json into
// dist/client/lovable-assets/<asset_id>/<filename> so a static host (e.g.
// GitHub Pages) can serve them without the /__l5e/ CDN route.
import { readdirSync, statSync, readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const ORIGIN = process.env.ASSET_ORIGIN || "https://id-preview--f567ab3d-47ee-4955-9f6c-c437e5990e58.lovable.app";
const OUT_ROOT = process.env.ASSET_OUT || "dist/client/lovable-assets";

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (name.endsWith(".asset.json")) out.push(p);
  }
  return out;
}

const pointers = walk("src");
console.log(`Found ${pointers.length} asset pointer(s)`);

for (const p of pointers) {
  const j = JSON.parse(readFileSync(p, "utf8"));
  const outPath = join(OUT_ROOT, j.asset_id, j.original_filename);
  if (existsSync(outPath)) {
    console.log(`✓ cached ${outPath}`);
    continue;
  }
  const src = `${ORIGIN}${j.url}`;
  console.log(`↓ ${src}`);
  const res = await fetch(src);
  if (!res.ok) {
    console.error(`Failed ${src}: ${res.status}`);
    process.exit(1);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, buf);
  console.log(`✓ wrote ${outPath} (${buf.length} bytes)`);
}
