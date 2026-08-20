import fs from "fs";

const raw = JSON.parse(fs.readFileSync("figma-raw.json", "utf-8"));

// Find the "website design" page
const websitePage = raw.document.children.find(
  (page: any) => page.name === "website design"
);

if (!websitePage) {
  throw new Error('Could not find "website design" page');
}

// Find the "Home" frame inside that page
const homeFrame = websitePage.children.find(
  (node: any) => node.name === "Home" && node.type === "FRAME"
);

if (!homeFrame) {
  throw new Error('Could not find "Home" frame');
}

fs.writeFileSync("home-raw.json", JSON.stringify(homeFrame, null, 2));
console.log("Saved home-raw.json");
console.log("Home frame has", homeFrame.children?.length ?? 0, "direct children");