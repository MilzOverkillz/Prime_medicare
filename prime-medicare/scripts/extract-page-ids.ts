import fs from "fs";
import { ParsedNode } from "../lib/parser/traverse";

const PAGE_NAME = process.argv[2];
const NODE_IDS = process.argv[3]?.split(",");
const OUTPUT_NAME = process.argv[4];

if (!PAGE_NAME || !NODE_IDS || !OUTPUT_NAME) {
  throw new Error("Usage: extract-page-ids.ts <pageName> <id1,id2,...> <outputName>");
}

const parsed: ParsedNode = JSON.parse(fs.readFileSync(`${PAGE_NAME}-parsed.json`, "utf-8"));
const topLevel = parsed.children ?? [];

const nodes = NODE_IDS.map((id) => topLevel.find((n) => n.id === id.trim())).filter(Boolean);

fs.writeFileSync(
  `extract-${PAGE_NAME}-${OUTPUT_NAME}.json`,
  JSON.stringify(nodes, null, 2)
);
console.log(`Saved extract-${PAGE_NAME}-${OUTPUT_NAME}.json with ${nodes.length} nodes`);