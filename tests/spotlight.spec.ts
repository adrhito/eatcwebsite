import { test, expect } from "@playwright/test";

test.describe("SpotlightSection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);
  });

  test("spotlight overlay exists on the page", async ({ page }) => {
    const overlay = page.getByTestId("spotlight-overlay");
    await expect(overlay).toBeAttached();
  });

  test("spotlight overlay snaps on when scrolling into view", async ({ page }) => {
    // Scroll to the "Four Pillars" section
    await page.evaluate(() => {
      const headings = document.querySelectorAll("h2");
      for (const h of headings) {
        if (h.textContent?.includes("Four Pillars")) {
          h.scrollIntoView({ behavior: "instant", block: "center" });
          break;
        }
      }
    });
    await page.waitForTimeout(2000);

    // The fixed overlay should be fully opaque when in view
    const overlay = page.getByTestId("spotlight-overlay");
    const opacity = await overlay.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).opacity);
    });

    expect(opacity).toBeGreaterThan(0.7);
  });

  test("spotlight overlay snaps off when scrolling away", async ({ page }) => {
    // Scroll into the spotlight section first
    await page.evaluate(() => {
      const headings = document.querySelectorAll("h2");
      for (const h of headings) {
        if (h.textContent?.includes("Four Pillars")) {
          h.scrollIntoView({ behavior: "instant", block: "center" });
          break;
        }
      }
    });
    await page.waitForTimeout(2000);

    // Scroll back to top
    await page.evaluate(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    await page.waitForTimeout(1000);

    // The overlay should be transparent when not in view
    const overlay = page.getByTestId("spotlight-overlay");
    const opacity = await overlay.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).opacity);
    });

    expect(opacity).toBeLessThan(0.3);
  });

  test("audio context is created when scrolling into view", async ({
    page,
  }) => {
    await page.evaluate(() => {
      (window as unknown as Record<string, unknown>).__audioContextCreated =
        false;
      const OrigAudioContext = window.AudioContext;
      window.AudioContext = class extends OrigAudioContext {
        constructor() {
          super();
          (window as unknown as Record<string, unknown>).__audioContextCreated =
            true;
        }
      };
    });

    await page.evaluate(() => {
      const headings = document.querySelectorAll("h2");
      for (const h of headings) {
        if (h.textContent?.includes("Four Pillars")) {
          h.scrollIntoView({ behavior: "instant", block: "center" });
          break;
        }
      }
    });
    await page.waitForTimeout(1500);

    const audioCreated = await page.evaluate(
      () =>
        (window as unknown as Record<string, unknown>).__audioContextCreated
    );
    expect(audioCreated).toBe(true);
  });
});
