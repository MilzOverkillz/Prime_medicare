import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { ParsedNode } from "../lib/parser/traverse";
import { clusterByPosition } from "../lib/parser/cluster";
import { summarizeNode } from "../lib/parser/summarize";
import { callAI } from "../lib/ai/client";

const PAGE_NAME = process.argv[2];
if (!PAGE_NAME) throw new Error("Usage: classify-page.ts <pageName>");

async function main() {
  const parsed: ParsedNode = JSON.parse(
    fs.readFileSync(`${PAGE_NAME}-parsed.json`, "utf-8")
  );

  const topLevel = (parsed.children ?? []).filter(
    (c) => (c.layout?.width ?? 0) > 20 && (c.layout?.height ?? 0) > 20
  );

  const clusters = clusterByPosition(topLevel);

  const clusterSummaries = clusters.map((cluster) => ({
    id: cluster.id,
    yRange: [cluster.yStart, cluster.yEnd],
    memberNames: cluster.nodes.map((n) => n.name),
    memberIds: cluster.nodes.map((n) => n.id),
    combinedTexts: cluster.nodes.flatMap((n) => summarizeNode(n).sampleTexts).slice(0, 8),
    hasComponentInstance: cluster.nodes.some((n) => summarizeNode(n).hasComponentInstance),
  }));

  fs.writeFileSync(
    `${PAGE_NAME}-clusters-summary.json`,
    JSON.stringify(clusterSummaries, null, 2)
  );
  console.log(`Grouped ${topLevel.length} top-level nodes into ${clusters.length} clusters`);

  const prompt = `
You are analyzing vertical bands ("clusters") of a webpage's Figma design.
Some clusters are real content sections, others are decorative background
shapes that should be attached to a neighboring real section rather than
treated as their own.

For each cluster, decide:
- "sectionType": hero, navbar, footer, stats, cards, blog, cta, faq,
  testimonials, trusted-partners, team, about, decorative, unknown
- "isSection": true if this is a real meaningful content block

Respond ONLY with a JSON array:
[{ "id": "...", "sectionType": "...", "isSection": true }]

Data:
${JSON.stringify(clusterSummaries, null, 2)}
`;

  const result = await callAI(prompt);
  fs.writeFileSync(`${PAGE_NAME}-classification.json`, result);
  console.log(`Saved ${PAGE_NAME}-classification.json`);
  console.log(result);
}

main();