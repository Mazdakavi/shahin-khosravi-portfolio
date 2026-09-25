// Prints portfolio.html to SCALE_Portfolio_Selected_Works.pdf: node render.mjs
import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("file://" + path.join(dir, "portfolio.html"), { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: path.join(dir, "SCALE_Portfolio_Selected_Works.pdf"), width: "297mm", height: "210mm",
                 printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("pdf written");
