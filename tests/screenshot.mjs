import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
await new Promise((r) => setTimeout(r, 2000));

// Screenshot 1: Top of page (before scrolling to spotlight)
await page.screenshot({ path: "tests/ss-1-top.png", fullPage: false });
console.log("1. Top of page saved");

// Screenshot 2: Scroll to just above the spotlight section
await page.evaluate(() => window.scrollTo({ top: 600, behavior: "instant" }));
await new Promise((r) => setTimeout(r, 1000));
await page.screenshot({ path: "tests/ss-2-approaching.png", fullPage: false });
console.log("2. Approaching spotlight saved");

// Screenshot 3: Scroll to the spotlight section (Four Pillars)
await page.evaluate(() => {
  const headings = document.querySelectorAll("h2");
  for (const h of headings) {
    if (h.textContent?.includes("Four Pillars")) {
      h.scrollIntoView({ behavior: "instant", block: "center" });
      break;
    }
  }
});
await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: "tests/ss-3-spotlight-active.png", fullPage: false });
console.log("3. Spotlight active saved");

// Screenshot 4: Scroll back to top (spotlight should turn off)
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await new Promise((r) => setTimeout(r, 1500));
await page.screenshot({ path: "tests/ss-4-scrolled-away.png", fullPage: false });
console.log("4. Scrolled away saved");

// Screenshot 5: Full page screenshot for overall view
await page.screenshot({ path: "tests/ss-5-fullpage.png", fullPage: true });
console.log("5. Full page saved");

await browser.close();
console.log("Done!");
