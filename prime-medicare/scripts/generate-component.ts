import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { callAI } from "../lib/ai/client";

const INPUT_FILE = process.argv[2];
const COMPONENT_NAME = process.argv[3] || "Component";

async function main() {
  const nodeData = JSON.parse(
    fs.readFileSync(INPUT_FILE, "utf-8")
  );

  const prompt = `
You are generating a React + Next.js 15 (App Router) component styled with
Tailwind CSS, based on structured Figma design data.

Requirements:
- Functional component, TypeScript, default export
- Use semantic HTML (section, h1, p, etc.)
- Convert pixel widths/heights into responsive Tailwind classes where sensible
  (don't hardcode arbitrary pixel values unless necessary)
- Use the "textColor" and "bgColor" hex values as Tailwind arbitrary values
  e.g. bg-[#d11417], text-[#101a24]
- Use the actual text content found in the data, don't invent new copy
- Mobile-first responsive layout
- No inline styles
- Add next/image only if there's clearly an image node; otherwise skip images
- Output ONLY the code, no explanation, no markdown fences

Component name: ${COMPONENT_NAME}

Figma section data:
${JSON.stringify(nodeData, null, 2)}
`;

  const code = await callAI(prompt);

  // Strip markdown fences if the model added them anyway
  const cleaned = code.replace(/^```tsx?\n?/, "").replace(/```$/, "").trim();

  fs.mkdirSync("components", { recursive: true });
  fs.writeFileSync(`components/${COMPONENT_NAME}.tsx`, cleaned);
  console.log(`Saved components/${COMPONENT_NAME}.tsx`);
}

main();