import fs from "fs";

const PAGE_NAME = process.argv[2] || "Development";

const raw = JSON.parse(fs.readFileSync("figma-raw.json", "utf-8"));
const page = raw.document.children.find((p: any) => p.name === PAGE_NAME);

if (!page) {
  throw new Error(`Page "${PAGE_NAME}" not found`);
}

console.log(`Frames inside "${PAGE_NAME}" page:`);
page.children?.forEach((child: any, i: number) => {
  console.log(`${i}: [${child.id}] ${child.name} (${child.type})`);
});