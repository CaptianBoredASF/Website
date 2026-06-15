# Resume Site — Project Context

Use `@PROJECT.md` in a new Cursor chat to restore context quickly.

**Supply chain / Tableau dashboards:** also use `@SUPPLY_CHAIN.md` (synced with `../tableau-data-v2/PROJECT.md`).

## Overview

| Item | Value |
|------|--------|
| **Folder** | `c:\Users\CaptianBoredASF\OneDrive\Desktop\Cursor\resume-site` |
| **Live site** | https://www.nathanielnelsond.com |
| **Stack** | Vite + React + React Router |
| **Deploy** | Vercel (auto-deploy on `git push`) |
| **Domain DNS** | Namecheap |
| **GitHub** | https://github.com/CaptianBoredASF/Website.git |

## Pages

| Route | File | Notes |
|-------|------|--------|
| `/` | `src/pages/HomePage.jsx` | Blue hero, profile photo, about, experience, skills, contact |
| `/dashboards` | `src/pages/DashboardsPage.jsx` | Single Tableau dashboard + “About the Data” disclaimer |
| `/case-studies` | `src/pages/CaseStudiesPage.jsx` | 3 case studies with header nav buttons + hero infographics |
| `/toolbox` | `src/pages/ToolBoxPage.jsx` | Demand Planning intro box + 4-column image grid |

## Key files

- `src/data/resume.js` — `siteConfig`, experience, skills, education, case studies, `tableauProjects`
- `src/data/toolbox.js` — toolbox image entries
- `src/data/highlights.js` — hero stat cards
- `src/components/Header.jsx` — nav, logo, resume download
- `src/components/TableauEmbed.jsx` — Tableau iframe; scales native size to container width
- `src/components/DashboardPreview.jsx` — hero profile photo (`/profile.png`)
- `src/pages/CaseStudiesPage.jsx` — case study nav in blue page hero; content below
- `src/index.css` — full design system
- `public/resume.pdf` — downloadable resume
- `vercel.json` — SPA routing

## Header navigation

About · Experience · Skills · Dashboards · Case Studies · Tool Box · Contact

Sticky dark header on all pages. About is active by default on home (no hash).

## Homepage hero (`siteConfig` in `resume.js`)

- **Name:** Nathaniel Nelson
- **Badge:** Supply Chain Executive
- **Title:** Senior Operations and Program Leader
- **Tagline:** Results-driven Supply Chain Executive with 13+ years… $100M+ in value… S&OP… working capital… high-performing teams…
- **Email:** Nathan.Nelson.D@gmail.com
- **Phone:** (314) 566-4757
- **LinkedIn:** https://linkedin.com/in/NathanNel
- **Profile photo:** `/profile.png`

## Contact section

Shows **email, phone, LinkedIn only** — domain and Florida location were removed from display.

## Layout notes

- **Experience** and **Education** headings are centered (like Skills), with centered blue underline bar.
- **Dashboards, Case Studies, Tool Box** top sections use the same **blue hero background** as the homepage hero.
- **Skills:** single flat list (no Professional/Technical split) — see `skillGroups` in `resume.js`.
- Contact section has no “open to roles” line.

## Experience highlights

All roles have content. Early-career roles include:

- **Supply Chain Analyst** (PepsiCo, Denver) — Mountain region logistics, 9% KPI beat, $300K savings, dashboards
- **Warehouse Inventory Analyst** (Kasco) — 100+ locations, $200K savings, vendor returns +300%
- **Transportation and Logistics Analyst** (Anheuser-Busch) — cold-chain, 5 carriers / 100+ lanes, 15% temp excursions, 10% OTD, 20% issue reduction

Chewy roles include RRC Entitlements (Jun 2026 — Present), Vendor Compliance (Aug 2024 — Jun 2026), CPFR and Supply (Mar 2022 — Aug 2024).

## Tableau & supply chain data

**Full context:** `@SUPPLY_CHAIN.md` — data paths, calculated fields, dashboard status, todo list.

| Dashboard | Status | Data source |
|-----------|--------|-------------|
| Executive (Dashboard 1) | Done, on site | `tableau-data-v2/supply_chain_executive_rollup.csv` |
| Weekly Forecast Review (Dashboard 2) | Done, on site | `tableau-data-v2/supply_chain_sku_master.csv` |
| Oversupply (Dashboard 3) | Not started | `sku_dc_oversupply_summary.csv` |

**On site today:**

1. **Supply Chain Dashboard** — `SupplyChainDashboard_17813813310900/Dashboard1`
2. **Weekly Forecast Review** — `ForecastAccuracy_17814856522190/Dashboard1`

- **Native embed size:** 1600 × 927 (both dashboards)
- **Layout:** Wide container `min(1600px, calc(100vw - 2rem))` in `DashboardsPage.jsx`
- **Embed logic:** `TableauEmbed.jsx` renders at native size and CSS-scales to fit container width

**About the Data** (on dashboards page): AI-generated sample data disclaimer.

## Case Studies

Three tabs in the **blue page hero** (not separate page tabs below):

| Button label | ID | PDF | Hero image |
|--------------|-----|-----|------------|
| Supplier Collaboration | `cpfr-planning` | `/cpfr-case-study.pdf` | `/cpfr-case-study-hero.png` |
| Supply Chain Planning | `supply-planning` | `/supply-planning-case-study.pdf` | `/supply-planning-case-study-hero.png` |
| Supplier Governance | `vendor-compliance` | `/vendor-compliance-case-study.pdf` | `/vendor-compliance-case-study-hero.png` |

Each case study shows: hero infographic → Challenge → Approach → Results → Impact.

**No duplicate title/description block** below the infographic (removed intentionally).

Source PDFs (on user's PC): `Desktop\Website\CPFR Case Study.pdf`, `Supply Case Study.pdf`, `VC Case Study.pdf`

## Tool Box

Intro box: centered **Demand Planning** heading + paragraph.

**Images (slots 1–3 filled, slot 4 empty):**

1. `/toolbox-demand-planning-roadmap.png`
2. `/toolbox-mastering-demand-planning.png`
3. `/toolbox-demand-forecasting-vs-planning.png`
4. Empty placeholder

## Public assets

```
public/resume.pdf
public/profile.png
public/cpfr-case-study.pdf
public/cpfr-case-study-hero.png
public/supply-planning-case-study.pdf
public/supply-planning-case-study-hero.png
public/vendor-compliance-case-study.pdf
public/vendor-compliance-case-study-hero.png
public/toolbox-*.png
public/logo.svg
```

## Deploy

From `resume-site` in PowerShell:

```powershell
cd c:\Users\CaptianBoredASF\OneDrive\Desktop\Cursor\resume-site
git add .
git commit -m "your message"
git push
```

Preview locally:

```powershell
npm install
npm run dev
```

Open http://localhost:5173

**Windows note:** Use `;` instead of `&&` in PowerShell.

## User preferences for the agent

- **Always include git commands** at the end when files are changed (user runs them manually).
- **Do not run git commit/push** unless the user explicitly asks.
- **Do not commit** without user request.

## Common tasks

- **Update resume PDF:** Replace `public/resume.pdf` (source often `Desktop\2026 Applying\June 2026\Resume.pdf`).
- **Update hero text:** Edit `siteConfig` in `src/data/resume.js` and `index.html` meta tags.
- **New Tableau dashboard:** Update `tableauProjects` in `resume.js` with `url`, `embedWidth`, `embedHeight`. Update `SUPPLY_CHAIN.md` + `tableau-data-v2/PROJECT.md`.
- **Supply chain data regen:** `python tableau-data-v2/scripts/generate_supply_chain_data.py` then Replace Data Source in Tableau.
- **New case study PDF/image:** Add to `public/`, update `caseStudies` in `resume.js`; extract hero PNG from PDF page 1 if needed.
- **New toolbox image:** Add PNG to `public/`, add entry in `src/data/toolbox.js`.
- **SSL error on local PC only:** Site may work elsewhere; try incognito, `ipconfig /flushdns`, or mobile data.

## Do not do unless asked

- Create git commits without user request
- Force push to main
- Change unrelated files when fixing one issue
