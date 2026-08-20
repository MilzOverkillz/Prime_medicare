import fs from "fs";

const NODE_ID = process.argv[2];
const PAGE_NAME = process.argv[3];

if (!NODE_ID || !PAGE_NAME) {
  throw new Error("Usage: extract-page.ts <nodeId> <pageName>");
}

const raw = JSON.parse(fs.readFileSync("figma-raw.json", "utf-8"));

function findById(node: any, id: string): any {
  if (node.id === id) return node;
  for (const child of node.children ?? []) {
    const found = findById(child, id);
    if (found) return found;
  }
  return null;
}

// Search across ALL top-level pages, not one hardcoded name
let frame: any = null;
for (const page of raw.document.children) {
  frame = findById(page, NODE_ID);
  if (frame) break;
}

if (!frame) throw new Error(`Node ${NODE_ID} not found in any page`);

fs.writeFileSync(`${PAGE_NAME}-raw.json`, JSON.stringify(frame, null, 2));
console.log(`Saved ${PAGE_NAME}-raw.json`);