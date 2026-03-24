#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { createClient } from 'contentful';
import dotenv from 'dotenv';

// Load .env from project root if present
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const siteUrl = process.env.SITE_URL || 'https://www.nodwebsolution.in';
const space = process.env.VITE_SPACE;
const accessToken = process.env.VITE_ACCESS_TOKEN;

const staticPages = [
  { url: '/', priority: '1.0' },
  { url: '/about', priority: '0.8' },
  { url: '/services', priority: '0.8' },
  { url: '/contact', priority: '0.7' },
  { url: '/careers', priority: '0.6' },
  { url: '/blog', priority: '0.7' }
];

async function fetchBlogUrls() {
  if (!space || !accessToken) {
    console.warn('Contentful credentials (VITE_SPACE / VITE_ACCESS_TOKEN) not set — skipping dynamic blog entries.');
    return [];
  }

  try {
    const client = createClient({ space, accessToken });
    const res = await client.getEntries({ limit: 1000 });
    return res.items
      .map((item) => {
        const slug = item.fields?.slug || item.fields?.url || null;
        if (!slug) return null;
        const lastmod = item.sys?.updatedAt || item.sys?.createdAt || null;
        return { url: `/blog/${slug}`, lastmod };
      })
      .filter(Boolean);
  } catch (err) {
    console.error('Error fetching Contentful entries:', err.message || err);
    return [];
  }
}

function buildXml(urls) {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const open = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const close = '</urlset>';
  const body = urls
    .map(({ url, lastmod, priority = '0.5' }) => {
      const loc = `${siteUrl}${url}`;
      const lm = lastmod ? `    <lastmod>${new Date(lastmod).toISOString()}</lastmod>\n` : '';
      return `  <url>\n    <loc>${loc}</loc>\n${lm}    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');
  return header + open + body + '\n' + close;
}

(async () => {
  const blogUrls = await fetchBlogUrls();
  const allUrls = [
    ...staticPages,
    ...blogUrls.map((b) => ({ ...b, priority: '0.6' }))
  ];

  const xml = buildXml(allUrls);
  const outPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log('Sitemap written to', outPath);
})();
