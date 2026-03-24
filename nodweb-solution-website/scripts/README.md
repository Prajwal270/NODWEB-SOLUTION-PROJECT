Sitemap generator
=================

This small script generates `public/sitemap.xml` before the site is built. It will include a set of static pages and, if Contentful credentials are provided via the environment, blog entries fetched from Contentful.

Usage
-----

- Locally (no credentials):

  node ./scripts/generate-sitemap.mjs

- With Contentful (recommended for CI/build):

  Set the following environment variables in your CI or local environment:

  - VITE_SPACE
  - VITE_ACCESS_TOKEN
  - SITE_URL (optional, defaults to https://www.nodwebsolution.in)

Then run the generator before build. The project `build` script already runs the generator (`npm run build`).

Notes
-----
- The script reads `.env` in the project root when present. It uses `dotenv` to load values.
- If Contentful credentials are missing, the script will still write a sitemap with static pages.
