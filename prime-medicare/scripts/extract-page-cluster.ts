import fs from "fs";
import { ParsedNode } from "../lib/parser/traverse";

const PAGE_NAME = process.argv[2];
const CLUSTER_ID = process.argv[3];

if (!PAGE_NAME || !CLUSTER_ID) {
  throw new Error("Usage: extract-page-cluster.ts <pageName> <clusterId>");
}

const parsed: ParsedNode = JSON.parse(fs.readFileSync(`${PAGE_NAME}-parsed.json`, "utf-8"));
const clusters = JSON.parse(fs.readFileSync(`${PAGE_NAME}-clusters-summary.json`, "utf-8"));

const cluster = clusters.find((c: any) => c.id === CLUSTER_ID);
if (!cluster) throw new Error(`Cluster ${CLUSTER_ID} not found`);

const topLevel = parsed.children ?? [];
const memberNodes = cluster.memberIds
  .map((id: string) => topLevel.find((n) => n.id === id))
  .filter(Boolean);

fs.writeFileSync(
  `${PAGE_NAME}-cluster-${CLUSTER_ID}.json`,
  JSON.stringify(memberNodes, null, 2)
);
console.log(`Saved ${PAGE_NAME}-cluster-${CLUSTER_ID}.json with ${memberNodes.length} nodes`);