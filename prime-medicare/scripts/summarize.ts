import fs from "fs";

const data = JSON.parse(fs.readFileSync("figma-raw.json", "utf-8"));

const typeCounts: Record<string, number> = {};

function walk(node: any) {
  typeCounts[node.type] = (typeCounts[node.type] || 0) + 1;
  if (node.children) {
    node.children.forEach(walk);
  }
}

walk(data.document);

console.log("Node types found in your file:");
console.log(typeCounts);
console.log("\nTop-level pages:", data.document.children.map((p: any) => p.name));