import fs from "fs";

const SEARCH_NAME = process.argv[2] || "Home";

const raw = JSON.parse(fs.readFileSync("figma-raw.json", "utf-8"));

const matches: { path: string; id: string; type: string }[] = [];

function walk(node: any, path: string) {
  if (node.name?.toLowerCase().includes(SEARCH_NAME.toLowerCase())) {
    matches.push({ path: `${path} > ${node.name}`, id: node.id, type: node.type });
  }
  node.children?.forEach((child: any) => walk(child, `${path} > ${node.name}`));
}

// Search across ALL top-level pages, not just one hardcoded name
raw.document.children.forEach((page: any) => {
  walk(page, "root");
});

console.log(`Found ${matches.length} matches for "${SEARCH_NAME}":`);
matches.forEach((m) => console.log(`  [${m.type}] ${m.id} — ${m.path}`));