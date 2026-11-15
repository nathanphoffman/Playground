import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setContent("<h1>Hello, Puppeteer</h1>");
console.log("Heading text:", await page.$eval("h1", (el) => el.textContent));
await page.screenshot({ path: "screenshot.png" });
await browser.close();
