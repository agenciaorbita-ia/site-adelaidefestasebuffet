// Renderiza cada .slide do carrossel.html em PNG 1080x1350 (pasta instagram/)
// Uso: NODE_PATH="<pasta-com-node_modules>/node_modules" node render.js
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 1,
  });
  await page.goto("file://" + path.resolve(__dirname, "carrossel.html"));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200); // fotos + fontes

  const outDir = path.join(__dirname, "instagram");
  fs.mkdirSync(outDir, { recursive: true });

  const slides = await page.$$(".slide");
  for (let i = 0; i < slides.length; i++) {
    await slides[i].scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    const nome = `slide-${String(i + 1).padStart(2, "0")}.png`;
    await slides[i].screenshot({ path: path.join(outDir, nome) });
    console.log("ok", nome);
  }

  await browser.close();
  console.log(`RENDER OK — ${slides.length} slides em ${outDir}`);
})();
