import { ParsedNode } from "./traverse";

export interface NodeSummary {
  id: string;
  name: string;
  type: string;
  width?: number;
  height?: number;
  sampleTexts: string[];
  hasComponentInstance: boolean;
}

// Collect up to `limit` text strings found anywhere inside a node
function collectTexts(node: ParsedNode, limit = 4): string[] {
  const texts: string[] = [];

  function walk(n: ParsedNode) {
    if (texts.length >= limit) return;
    if (n.text) texts.push(n.text.slice(0, 80)); // trim long paragraphs
    n.children?.forEach(walk);
  }

  walk(node);
  return texts;
}

function hasInstance(node: ParsedNode): boolean {
  if (node.isComponentInstance) return true;
  return node.children?.some(hasInstance) ?? false;
}

export function summarizeNode(node: ParsedNode): NodeSummary {
  return {
    id: node.id,
    name: node.name,
    type: node.type,
    width: node.layout?.width,
    height: node.layout?.height,
    sampleTexts: collectTexts(node),
    hasComponentInstance: hasInstance(node),
  };
}