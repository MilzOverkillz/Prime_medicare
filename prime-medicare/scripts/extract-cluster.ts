import fs from "fs";
import { ParsedNode } from "../lib/parser/traverse";

const CLUSTER_ID = process.argv[2] || "cluster-1"; // pass cluster id as arg

const parsed: ParsedNode = JSON.parse(fs.readFileSync("home-parsed.json", "utf-8"));
const clusters = JSON.parse(fs.readFileSync("home-clusters-summary.json", "utf-8"));

const cluster = clusters.find((c: any) => c.id === CLUSTER_ID);
if (!cluster) throw new Error(`Cluster ${CLUSTER_ID} not found`);

// Find each member node by id, searching top-level children
const topLevel = parsed.children ?? [];
const memberNodes = cluster.memberIds
  .map((id: string) => topLevel.find((n) => n.id === id))
  .filter(Boolean);

fs.writeFileSync(
  `cluster-${CLUSTER_ID}.json`,
  JSON.stringify(memberNodes, null, 2)
);
console.log(`Saved cluster-${CLUSTER_ID}.json with ${memberNodes.length} nodes`);