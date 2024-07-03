import { test, expect } from './fixtures/fixtures';

test('fix me please', async ({ page }) => {
  // user is already authenticated

  await page.goto('https://github.com/dzena/github-search-ddd');
  await page.getByRole('link', { name: 'Issues' }).click();

  await page.getByRole('link', { name: 'New issue' }).click();
  await page.fill('input[name="issue[title]"]', 'Test issue');
  await page.fill('textarea[name="issue[body]"]', 'Test issue body');
  await page.getByRole('button', { name: 'Submit new issue' }).click();
  await page.getByRole('link', { name: 'Issues' }).click();
});

test('my testcase', async ({ page }) => {});
