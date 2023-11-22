import { test, expect } from './fixtures/fixtures';

test('has title', async ({ page }) => {
  // user is already authenticated

  await page.goto('https://github.com/dzena/github-search-ddd');
});

