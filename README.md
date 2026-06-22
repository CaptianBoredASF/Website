# Resume & Tableau Portfolio Site

A single-page resume website with embedded **Tableau Public** dashboards.

## Quick start

```bash
cd resume-site
npm install
npm run dev
```

Open http://localhost:5173

## Customize your content

Edit **`src/data/portfolio.js`** — the single source of truth for all site content:

1. **`profile`** — name, title, email, LinkedIn, tagline, `showToolbox`
2. **`assets`** — resume PDF path, profile image
3. **`branding`** — logo initial for header monogram
4. **`seo`** / **`analytics`** — meta tags and GA4 ID (injected into `index.html` at build time)
5. **`experience`**, **`education`**, **`skillGroups`**, **`highlights`**
6. **`caseStudies`**, **`dashboards`**, **`toolbox`**, **`companies`**

### Adding your Tableau dashboards

1. Open your workbook on [Tableau Public](https://public.tableau.com).
2. Click **Share** → **Copy embed code**.
3. Copy the `url` value from the embed (looks like `https://public.tableau.com/views/WorkbookName/SheetName?:...`).
4. Add an entry to `dashboards.projects` in `portfolio.js`:

```js
{
  id: 'my-dashboard',
  title: 'My Dashboard Title',
  description: 'What this dashboard shows.',
  url: 'https://public.tableau.com/views/YourWorkbook/YourSheet?:language=en-US&:display_count=y',
  tags: ['Finance', 'KPIs'],
}
```

### Resume PDF (optional)

Place your PDF at `public/resume.pdf` — the Download Resume button will serve it.

## Deploy to nathanielnelsond.com

Recommended: **Vercel** or **Netlify** (free, fast, easy custom domains).

### Option A — Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → Import project.
3. Framework preset: **Vite** — deploy.
4. In Vercel → **Settings → Domains** → add:
   - `nathanielnelsond.com`
   - `www.nathanielnelsond.com`
5. At your domain registrar, add the DNS records Vercel shows you.

### Option B — Netlify

1. Push to GitHub.
2. [netlify.com](https://netlify.com) → Add new site → Import from Git.
3. Build command: `npm run build`  
   Publish directory: `dist`
4. **Domain settings** → add `nathanielnelsond.com` and `www.nathanielnelsond.com`.

### Connect Namecheap → your host

Your domain **nathanielnelsond.com** is on Namecheap. Use **Advanced DNS** (not URL redirect).

1. Log in at [namecheap.com](https://www.namecheap.com) → **Domain List** → **Manage** next to `nathanielnelsond.com`
2. Open the **Advanced DNS** tab
3. Remove conflicting records (old parking page `A`/`CNAME` for `@` or `www` if present)
4. Add the records below for whichever host you chose

#### If you deploy on Vercel (recommended)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| `A Record` | `@` | `76.76.21.21` | Automatic |
| `CNAME Record` | `www` | `cname.vercel-dns.com` | Automatic |

In Vercel → **Settings → Domains**, add both `nathanielnelsond.com` and `www.nathanielnelsond.com`. Vercel will issue HTTPS automatically once DNS propagates.

#### If you deploy on Netlify

After adding the domain in Netlify, it will show a target like `apex-loadbalancer.netlify.com` and a Netlify subdomain for `www`.

| Type | Host | Value | TTL |
|------|------|-------|-----|
| `ALIAS Record` | `@` | `apex-loadbalancer.netlify.com` | Automatic |
| `CNAME Record` | `www` | `your-site-name.netlify.app` | Automatic |

If Namecheap does not offer ALIAS on your plan, use Netlify’s **A records** for `@` instead (Netlify lists the IPs in Domain settings).

#### Namecheap tips

- Leave **Nameservers** on Namecheap BasicDNS unless you move DNS elsewhere
- **Redirect** settings should be off — the site is served by Vercel/Netlify, not Namecheap forwarding
- Changes usually take 5–30 minutes; allow up to 24 hours in rare cases

After deployment, your site will be live at **https://nathanielnelsond.com**.

## Build for production

```bash
npm run build
npm run preview
```

The `dist/` folder is what you deploy.
