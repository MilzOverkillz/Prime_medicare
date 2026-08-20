import { getFile } from "../lib/figma/client";
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

console.log("Token loaded:", process.env.FIGMA_ACCESS_TOKEN ? "YES" : "NO - MISSING");
console.log("File key loaded:", process.env.FIGMA_FILE_KEY ? "YES" : "NO - MISSING");

async function main() {
  try {
    console.log("Fetching from Figma...");
    const data = await getFile(process.env.FIGMA_FILE_KEY as string);
    fs.writeFileSync("figma-raw.json", JSON.stringify(data, null, 2));
    console.log("✅ Saved figma-raw.json — file size:", JSON.stringify(data).length, "characters");
  } catch (err) {
    console.error("❌ Script failed:", err);
  }
}

main();