import fs from "fs";
import { parseNode } from "../lib/parser/traverse";

const PAGE_NAME = process.argv[2];
if (!PAGE_NAME) throw new Error("Usage: parse-page.ts <pageName>");

const raw = JSON.parse(fs.readFileSync(`${PAGE_NAME}-raw.json`, "utf-8"));
const parsed = parseNode(raw);

fs.writeFileSync(`${PAGE_NAME}-parsed.json`, JSON.stringify(parsed, null, 2));
console.log(`Saved ${PAGE_NAME}-parsed.json`);
console.log("File size:", JSON.stringify(parsed).length, "characters");