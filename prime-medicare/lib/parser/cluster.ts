import { ParsedNode } from "./traverse";

export interface Cluster {
  id: string;
  yStart: number;
  yEnd: number;
  nodes: ParsedNode[];
}

// Groups top-level nodes into vertical bands based on Y-overlap.
// Two nodes are in the same cluster if their Y ranges overlap or are
// within `gapThreshold` pixels of each other.
export function clusterByPosition(
  nodes: ParsedNode[],
  gapThreshold = 40
): Cluster[] {
  const withPos = nodes
    .filter((n) => n.layout?.y !== undefined && n.layout?.height !== undefined)
    .sort((a, b) => (a.layout!.y ?? 0) - (b.layout!.y ?? 0));

  const clusters: Cluster[] = [];

  for (const node of withPos) {
    const y1 = node.layout!.y!;
    const y2 = y1 + node.layout!.height!;

    const last = clusters[clusters.length - 1];
    if (last && y1 <= last.yEnd + gapThreshold) {
      // Overlaps or close enough — merge into current cluster
      last.nodes.push(node);
      last.yEnd = Math.max(last.yEnd, y2);
    } else {
      // Start a new cluster
      clusters.push({
        id: `cluster-${clusters.length + 1}`,
        yStart: y1,
        yEnd: y2,
        nodes: [node],
      });
    }
  }

  return clusters;
}