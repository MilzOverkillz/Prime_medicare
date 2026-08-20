import fs from "fs";
import { parseNode } from "../lib/parser/traverse";

const homeRaw = JSON.parse(fs.readFileSync("home-raw.json", "utf-8"));
const parsed = parseNode(homeRaw);

fs.writeFileSync("home-parsed.json", JSON.stringify(parsed, null, 2));
console.log("Saved home-parsed.json");
console.log("File size:", JSON.stringify(parsed).length, "characters");