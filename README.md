# Nintek website

Marketing site for **Nintek** — served at **www.nintek.com**.

Built with [Astro](https://astro.build) and deployed to **Azure Static Web Apps**.

## Structure

- `www.nintek.com/` — company landing page listing all apps (showcase only).
- `www.nintek.com/<app>` — per-app marketing landing page. These are **not**
  linked from the public site; they exist for App Store listings and as the
  target of each app's **Privacy Policy URL**. They are marked `noindex`.
- `www.nintek.com/<app>/privacy` — the privacy policy used as the App Store
  Privacy URL for that app.

> Note: `www.nintek.com/cairn` (marketing/legal) is **separate** from
> `cairn.nintek.com` (the running web app).

### Key files

| Path | Purpose |
| --- | --- |
| `src/data/apps.ts` | Single source of truth for every app (name, tagline, icon, bundle ID). Add an app here. |
| `src/layouts/BaseLayout.astro` | Shared HTML shell, header, footer, SEO/`noindex`. |
| `src/components/AppCard.astro` | Home-page showcase card (no links by design). |
| `src/pages/index.astro` | Company home page. |
| `src/pages/<app>/index.astro` | Per-app marketing page. |
| `src/pages/<app>/privacy.astro` | Per-app privacy policy. |
| `public/apps/<slug>.png` | App icon (copied from each app's `app-store/AppIcon-1024.png`). |
| `staticwebapp.config.json` | SWA routing + security headers. |
| `.github/workflows/azure-static-web-apps.yml` | CI/CD deploy. |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
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
3. Create `src/pages/<slug>/index.astro` and `src/pages/<slug>/privacy.astro`.
4. Add the slug to the `Disallow` list in `public/robots.txt`.
