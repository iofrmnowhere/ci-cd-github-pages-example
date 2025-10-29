# ci-cd-github-pages-example

This repository demonstrates a GitHub Actions CI/CD pipeline that lints code with ESLint
(enforcing semicolons) and deploys a static `src/` site to GitHub Pages only when lint passes.

## Project contents

- `.github/workflows/lint-and-deploy.yml` — CI workflow: lint then deploy.
- `.eslintrc.json` — ESLint config (enforces semicolons).
- `package.json` — includes `lint` script and ESLint devDependency.
- `src/` — static site files, including the provided screenshot.
- `src/assets/ugliest-ui.png` — the included screenshot (you provided this image).
- `src/script.js` — intentionally contains a missing semicolon to trigger a lint failure.

## How to reproduce the failing CI (first run)

1. Ensure you have this repository as the `main` branch in GitHub.
2. Push these files to GitHub.
3. The GitHub Actions workflow runs: the `lint` job will fail because of a missing semicolon in `src/script.js`.
4. Because the `deploy` job depends on `lint`, it will not run when lint fails.

## How to fix the lint error and redeploy

1. Open `src/script.js`.
2. Locate the line:
   ```js
   console.log('Script loaded')
   ```
   and add the missing semicolon:
   ```js
   console.log('Script loaded');
   ```
3. Install dependencies locally and run lint (optional):
   ```bash
   npm install
   npm run lint
   ```
   You should see no ESLint errors.
4. Commit and push the fix:
   ```bash
   git add src/script.js
   git commit -m "Fix: add missing semicolon"
   git push origin main
   ```
5. GitHub Actions will run again; `lint` should pass and `deploy` will publish the `src/` directory to the `gh-pages` branch.

## Notes

- The workflow uses the automatically provided `GITHUB_TOKEN`. No additional secrets are required for a standard pages deployment.
- If you prefer the newer GitHub Pages deploy action flow (configure-pages + upload-pages-artifact + deploy-pages), you can replace the deploy job accordingly.
