import { chromium } from 'k6/x/browser';

export default function () {
  const browser = chromium.launch();
  const context = browser.newContext();
  const page = context.newPage();

  page
    .goto('https://test.k6.io/', {
      waitUntil: 'networkidle',
    })
    .finally(() => {
      page.close();
      browser.close();
    });
}
