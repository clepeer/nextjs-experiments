This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with some extra adjustments.

## Getting Started

First, run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) to see the landing page.
- Open [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql) to access the interactive Graphiql interface.

### Run the e2e tests with Playwright
All e2e tests are meant to test the functionality of a GitHub repository and require authentication. Make sure you don't have MFA enabled on your GitHub account.

Create a `.env` file in the root of the project and add the following:
```
GITHUB_USERNAME=your_username
GITHUB_PASSWORD=your_password
```

All test cases should be in the `./e2e-playwright/e2e.spec.ts` file.

* Run all the tests
  ```npx playwright test```

* Run the test with the title
  ```npx playwright test -g "add a todo item"```

* Run tests in interactive UI mode, with a built-in watch mode (Preview)
  ```npx playwright test --ui```