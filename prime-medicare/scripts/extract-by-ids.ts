import fs from "fs";
import { ParsedNode } from "../lib/parser/traverse";

const NODE_IDS = process.argv[2].split(","); // comma-separated
const OUTPUT_NAME = process.argv[3];

const parsed: ParsedNode = JSON.parse(fs.readFileSync("home-parsed.json", "utf-8"));
const topLevel = parsed.children ?? [];

const nodes = NODE_IDS.map((id) => topLevel.find((n) => n.id === id.trim())).filter(Boolean);

fs.writeFileSync(`extract-${OUTPUT_NAME}.json`, JSON.stringify(nodes, null, 2));
console.log(`Saved extract-${OUTPUT_NAME}.json with ${nodes.length} nodes`);