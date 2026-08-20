import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { getImageUrls } from "../lib/figma/client";


interface AssetEntry {
  id: string;
  filename: string;
  format: "png" | "svg";
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Retries a single API call with long, increasing waits on 429
async function fetchWithRetry(
  fileKey: string,
  ids: string[],
  format: "png" | "svg",
  maxRetries = 6
): Promise<Record<string, string>> {
  let attempt = 0;
  while (true) {
    try {
      return await getImageUrls(fileKey, ids, format);
    } catch (err: any) {
      attempt++;
      const isRateLimit = err.message?.includes("429");
      if (!isRateLimit || attempt > maxRetries) throw err;
      const waitMs = 30000 * attempt; // 30s, 60s, 90s, 120s, 150s, 180s
      console.warn(
        `Rate limited. Waiting ${waitMs / 1000}s before retry (attempt ${attempt}/${maxRetries})...`
      );
      await sleep(waitMs);
    }
  }
}

async function downloadOne(asset: AssetEntry, url: string, photosDir: string, iconsDir: string) {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Failed to download ${asset.filename}: ${res.status}`);
    return;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const outDir = asset.format === "svg" ? iconsDir : photosDir;
  const outPath = path.join(outDir, `${asset.filename}.${asset.format}`);
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved ${outPath}`);
}

async function main() {
  const manifest: AssetEntry[] = JSON.parse(fs.readFileSync("assets-manifest.json", "utf-8"));
  const fileKey = process.env.FIGMA_FILE_KEY as string;

  const photosDir = path.join("public", "images");
  const iconsDir = path.join("public", "icons");
  fs.mkdirSync(photosDir, { recursive: true });
  fs.mkdirSync(iconsDir, { recursive: true });

  const pngAssets = manifest.filter((a) => a.format === "png");
  const svgAssets = manifest.filter((a) => a.format === "svg");

  console.log(`Exporting ${manifest.length} assets total (${pngAssets.length} PNG, ${svgAssets.length} SVG)`);
  console.log("Requesting all PNG URLs in one call...");

  const pngUrls = pngAssets.length
    ? await fetchWithRetry(fileKey, pngAssets.map((a) => a.id), "png")
    : {};

  for (const asset of pngAssets) {
    const url = pngUrls[asset.id];
    if (!url) {
      console.warn(`No URL returned for ${asset.id} (${asset.filename})`);
      continue;
    }
    await downloadOne(asset, url, photosDir, iconsDir);
  }

  if (svgAssets.length) {
    console.log("\nPausing 15s before SVG request...");
    await sleep(15000);
    console.log("Requesting all SVG URLs in one call...");

    const svgUrls = await fetchWithRetry(fileKey, svgAssets.map((a) => a.id), "svg");

    for (const asset of svgAssets) {
      const url = svgUrls[asset.id];
      if (!url) {
        console.warn(`No URL returned for ${asset.id} (${asset.filename})`);
        continue;
      }
      await downloadOne(asset, url, photosDir, iconsDir);
    }
  }

  console.log("\nDone.");
}

main();