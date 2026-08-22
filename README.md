# Nintek website

Marketing site for **Nintek** — served at **www.nintek.com**.

Built with [Astro](https://astro.build) and deployed to **Azure Static Web Apps**.

## Structure

- `www.nintek.com/` — public portfolio home linking to product pages.
- `www.nintek.com/<app>` — product marketing and current release-state page.
- `www.nintek.com/<app>/privacy` — app-specific privacy policy.
- `www.nintek.com/<app>/support` — app-specific support page where release
  evidence requires one.
- `www.nintek.com/terms` — shared studio terms linked from product and legal pages.

> Note: `www.nintek.com/cairn` (marketing/legal) is **separate** from
> `cairn.nintek.com` (the running web app).

### Key files

| Path | Purpose |
| --- | --- |
| `src/data/apps.ts` | Single source of truth for every app (name, tagline, icon, bundle ID). Add an app here. |
| `docs/MARKETING_EVIDENCE.md` | Claim, release-state, and asset provenance ledger. |
| `src/layouts/BaseLayout.astro` | Shared HTML shell, header, footer, SEO/`noindex`. |
| `src/layouts/LegalLayout.astro` | Shared reading layout for terms and reviewed app legal/support pages. |
| `src/components/DataLifecycleTable.astro` | Accessible export/deletion/retention boundary table. |
| `src/components/AppPromo.astro` | Home-page product showcase. |
| `src/pages/index.astro` | Company home page. |
| `src/pages/<app>/index.astro` | Per-app marketing page. |
| `src/pages/<app>/privacy.astro` | Per-app privacy policy. |
| `src/pages/<app>/support.astro` | Per-app support and account-lifecycle guidance. |
| `public/apps/<slug>.png` | App icon (copied from each app's `app-store/AppIcon-1024.png`). |
| `public/social/<slug>.png` | 1200×630 social preview for reviewed public product routes. |
| `staticwebapp.config.json` | SWA routing + security headers. |
| `.github/workflows/azure-static-web-apps.yml` | CI/CD deploy. |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run check    # build + route/link/asset/metadata assertions
npm run preview
```

## Deploy (Azure Static Web Apps)

This site deploys via GitHub Actions, **not** the ACR/App Service pipeline used by
the other apps. Static Web Apps is its own resource (Free tier) and does **not**
run on the shared App Service Plan.

One-time setup:

1. Create a Static Web App resource (Free tier) in `rg-personal-apps-prod`,
   connected to this repo / `main` branch.
2. Copy its deployment token into the repo secret
   `AZURE_STATIC_WEB_APPS_API_TOKEN`.
3. Add custom domains `nintek.com` and `www.nintek.com`; set `www` as the
   canonical host and redirect the apex to it.

## Adding a new app page

1. Add an entry to `src/data/apps.ts` and set `hasPage: true`.
2. Copy its icon to `public/apps/<slug>.png`.
3. Create `src/pages/<slug>/index.astro`, privacy, and support routes as required
   by the product’s release and account lifecycle.
4. Add indexable routes to `public/sitemap.xml`; use page-level `noindex` for
   routes that should remain out of search.
5. Add claim and asset provenance to `docs/MARKETING_EVIDENCE.md`.

## Publication and platform policy

Only genuine public studio and product-marketing routes belong in the sitemap.
Privacy, support, retired, and private/gated product surfaces stay reachable but
carry `noindex, follow`. `npm run check` enforces the route set, canonical host,
structured data, social metadata, image dimensions, and local links.

PWA status is product-specific. Tare's browser product is retired and production
web traffic is relay-only. Workshop and Cairn are online, account-backed web
workspaces, not installable/offline PWAs. CairnNative is a separate offline
private-iCloud product with no shared web data; Workshop's native app is a
separate client.
