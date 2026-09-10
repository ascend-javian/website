# Ascend Jvian

Responsive promotional website for Ascend Jvian’s app in development. Includes all 15 supplied service areas, a privacy policy, a navy/lime visual system and three generated editorial images. EWA means Earned Wage Access; CPS means Cost Per Sale. No financial terms, launch dates, endorsements, contact information or download links have been invented.

## Develop

Use Node.js 24 LTS, then `npm ci` and `npm run dev`. Open the local URL printed in the terminal. The build wrapper allows pending Windows handles to close before a successful CLI exit; build failures remain failures.

## Build

Run `npm run build`. Static public output is in `dist/client`. No backend is needed. BASE_PATH configures repository subpath hosting; the workflow takes this from GitHub Pages automatically.

## Publish to GitHub Pages

1. Add this project to the intended GitHub repository and push to `main`.
2. In the repository’s Settings > Pages, select GitHub Actions as the build source.
3. Run the Publish Ascend Jvian workflow, or push an update to `main`.
4. The deployment URL appears in the completed workflow and repository Pages settings.

Workflow reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Edit content

- `app/page.tsx`: homepage copy, categories and service descriptions.
- `app/globals.css`: responsive layout and visual theme.
- `app/layout.tsx`: page title and description.
- `public/lifestyle.png`, `public/mobility.png` and `public/lifestyle-discovery.png`: generated editorial imagery.

Supply approved branding when available. The current wordmark is a text-based design proposal.

