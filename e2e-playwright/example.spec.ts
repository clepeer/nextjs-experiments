import { test, expect } from './fixtures/fixtures';

test('has title', async ({ page }) => {
  await page.goto('https://github.com/dzena/github-search-ddd');
  await page.getByRole('link', { name: 'Issues' }).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'New issue' }).click();
  await page.waitForLoadState('networkidle');
  await page.fill('input[name="issue[title]"]', 'Test issue');
  await page.fill('textarea[name="issue[body]"]', 'Test issue body');
  await page.getByRole('button', { name: 'Submit new issue' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Issues' }).click();
});

