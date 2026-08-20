const FIGMA_BASE = "https://api.figma.com/v1";

async function figmaFetch(path: string) {
  const res = await fetch(`${FIGMA_BASE}${path}`, {
    headers: {
      "X-Figma-Token": process.env.FIGMA_ACCESS_TOKEN as string,
    },
  });

  if (!res.ok) {
    throw new Error(`Figma API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getFile(fileKey: string) {
  return figmaFetch(`/files/${fileKey}`);
}

export async function getImageUrls(
  fileKey: string,
  nodeIds: string[],
  format: "png" | "svg" = "png",
  scale = 2
) {
  const ids = nodeIds.join(",");
  const data = await figmaFetch(
    `/images/${fileKey}?ids=${ids}&format=${format}&scale=${scale}`
  );
  return data.images as Record<string, string>;
}