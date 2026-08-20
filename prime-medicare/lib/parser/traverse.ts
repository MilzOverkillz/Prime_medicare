export interface ParsedNode {
  id: string;
  name: string;
  type: string;
  isComponentInstance?: boolean;
  componentId?: string;
  isImage?: boolean;
  layout?: {
    mode?: "NONE" | "HORIZONTAL" | "VERTICAL";
    padding?: [number, number, number, number];
    gap?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    cornerRadius?: number;
  };
  style?: {
    bgColor?: string | null;
    textColor?: string | null;
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: number;
    letterSpacing?: number;
    lineHeight?: number;
  };
  text?: string;
  children?: ParsedNode[];
}

// Convert Figma's 0-1 RGB floats to a hex string
function toHex(color: { r: number; g: number; b: number }): string {
  const c = (v: number) => Math.round(v * 255).toString(16).padStart(2, "0");
  return `#${c(color.r)}${c(color.g)}${c(color.b)}`;
}

function getSolidFillColor(fills: any[] | undefined): string | null {
  if (!fills?.length) return null;
  const solid = fills.find((f) => f.type === "SOLID" && f.visible !== false);
  return solid ? toHex(solid.color) : null;
}

function hasImageFill(fills: any[] | undefined): boolean {
  return !!fills?.some((f) => f.type === "IMAGE" && f.visible !== false);
}

// Nodes that are purely decorative/noise we don't need in detail
const SKIP_DEEP_TYPES = ["VECTOR", "BOOLEAN_OPERATION", "LINE", "ELLIPSE"];

export function parseNode(node: any, depth = 0): ParsedNode | null {
  // Skip invisible nodes entirely
  if (node.visible === false) return null;

  const parsed: ParsedNode = {
    id: node.id,
    name: node.name,
    type: node.type,
  };

  // Flag Figma component instances — these are your best signal for reusable components
  if (node.type === "INSTANCE" && node.componentId) {
    parsed.isComponentInstance = true;
    parsed.componentId = node.componentId;
  }

  // Layout info
  if (node.layoutMode || node.absoluteBoundingBox || node.cornerRadius) {
    parsed.layout = {
      mode: node.layoutMode ?? "NONE",
      padding: [
        node.paddingTop ?? 0,
        node.paddingRight ?? 0,
        node.paddingBottom ?? 0,
        node.paddingLeft ?? 0,
      ],
      gap: node.itemSpacing ?? 0,
      x: node.absoluteBoundingBox?.x
        ? Math.round(node.absoluteBoundingBox.x)
        : undefined,
      y: node.absoluteBoundingBox?.y
        ? Math.round(node.absoluteBoundingBox.y)
        : undefined,
      width: node.absoluteBoundingBox?.width
        ? Math.round(node.absoluteBoundingBox.width)
        : undefined,
      height: node.absoluteBoundingBox?.height
        ? Math.round(node.absoluteBoundingBox.height)
        : undefined,
      cornerRadius: node.cornerRadius,
    };
  }

  // TEXT nodes use `fills` for font color only — never treat that as a background
  const bgColor =
    node.type === "TEXT" ? null : getSolidFillColor(node.fills || node.background);
  const textColor = node.type === "TEXT" ? getSolidFillColor(node.fills) : null;

  if (bgColor || textColor || node.style?.fontFamily) {
    parsed.style = {
      bgColor,
      textColor,
      fontFamily: node.style?.fontFamily,
      fontWeight: node.style?.fontWeight,
      fontSize: node.style?.fontSize,
      letterSpacing: node.style?.letterSpacing,
      lineHeight: node.style?.lineHeightPx
        ? Math.round(node.style.lineHeightPx)
        : undefined,
    };
  }

  if (hasImageFill(node.fills)) {
    parsed.isImage = true;
  }

  if (node.type === "TEXT") {
    parsed.text = node.characters?.trim();
  }

  // Don't recurse deeply into pure vector/icon geometry — just note it's an icon
  if (SKIP_DEEP_TYPES.includes(node.type) && depth > 0) {
    return parsed; // no children — treat as a leaf/icon
  }

  if (node.children?.length) {
    const children = node.children
      .map((child: any) => parseNode(child, depth + 1))
      .filter((c: ParsedNode | null): c is ParsedNode => c !== null);
    if (children.length) parsed.children = children;
  }

  return parsed;

  // Names that signal a pure decorative illustration cluster — skip deep recursion
  const DECORATIVE_NAME_PATTERNS = /^(trouser|t shirt|frock|jacket|shirt|dress|icon|illustration)/i;

  // ...inside parseNode, right before the SKIP_DEEP_TYPES check:
  if (DECORATIVE_NAME_PATTERNS.test(node.name) && depth > 0) {
    return parsed; // treat as a leaf — don't recurse into its vector guts
  }
}