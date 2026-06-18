# Resume Site — Project Context

Use `@PROJECT.md` in a new Cursor chat to restore context quickly.

**Last saved:** 2026-06-14  
**Supply chain / Tableau:** also use `@SUPPLY_CHAIN.md` (synced with `../tableau-data-v2/PROJECT.md`).

---

## Session handoff — everything done (resume + portfolio)

### Live site
- **URL:** https://www.nathanielnelsond.com
- **Repo:** https://github.com/CaptianBoredASF/Website.git
- **Deploy:** Vercel on `git push`

### Resume site (`resume-site/`)
- **Hero:** Supply Chain and Transformation Leader (`siteConfig` in `resume.js` + `index.html` meta)
- **Experience:** synced to June 2026 resume PDF (`Desktop\2026 Applying\June 2026\Resume.pdf`)
- **Case studies:** Supplier Governance (VC) fully rewritten from June 2026 PDF; title header + PDF download; direct URL `/case-studies/vendor-compliance`; no hero infographic on VC
- **Tool Box:** hidden (`showToolbox: false`); restore rule at `.cursor/rules/restore-toolbox-tab.mdc`
- **Dashboards page:** 3 Tableau embeds + Q4 2025 executive summary (`dashboardExecutiveSummary` in `resume.js`)
- **Google Analytics:** ID `G-QKVHHVPKRD` in `index.html`; custom event `resume_download` (header + hero); opt-out via `localStorage.setItem('ga_opt_out','1')`; skipped on localhost

### Tableau dashboards (3 live, 1 to build)
| # | Title | Public URL slug | CSV source |
|---|-------|-----------------|------------|
| 1 | Supply Chain Executive Dashboard | `SupplyChainDashboard_17813813310900/Dashboard1` | `supply_chain_executive_rollup.csv` |
| 2 | Forecast Accuracy Dashboard | `ForecastAccuracy_17814856522190/Dashboard1` | `supply_chain_sku_master.csv` |
| 3 | Fill Service Exception Queue | `FillServiceExceptionQue/Dashboard1` | `sku_dc_underperformer_summary.csv` |
| 4 | Inventory & Oversupply | **NOT BUILT** | `sku_dc_oversupply_summary.csv` |

### Supply chain data (`tableau-data-v2/`)
- **Generator:** `scripts/generate_supply_chain_data.py`
- **Scope:** 400 SKUs, 10 DCs, Jan 2023 – Dec 2025
- **Do NOT use:** `tableau-data\` (no `-v2`), `tableau-data.zip`
- **CSVs local only** — too large for git

### Next when returning to this project
1. **Dashboard 4** — Tableau guide for oversupply (`sku_dc_oversupply_summary.csv`)
2. **Update executive summary** after Dashboard 4 is live
3. Optional: restore Tool Box, GA IP filter, Dashboard 2 enhancements (WAPE trend)

### Analytics access
- **Dashboard:** https://analytics.google.com
- **Property:** NathanielNelsonD.com · **ID:** `G-QKVHHVPKRD`
- **Resume downloads:** Reports → Engagement → Events → `resume_download`

---

## TODO — restore Tool Box tab

**Hidden:** June 2025. Tool Box is removed from header nav and homepage hero; `/toolbox` still works for preview.

**To restore:** In `src/data/resume.js`, set `siteConfig.showToolbox` to `true`, then commit and push.

Cursor rule: `.cursor/rules/restore-toolbox-tab.mdc` (reminds the agent when editing `resume-site/`).

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
| `/dashboards` | `src/pages/DashboardsPage.jsx` | Q4 exec summary + 3 Tableau embeds + “About the Data” disclaimer |
| `/case-studies/:studyId?` | `src/pages/CaseStudiesPage.jsx` | 3 case studies; title, PDF download, optional hero |
| `/toolbox` | `src/pages/ToolBoxPage.jsx` | Demand Planning intro box + 4-column image grid |

## Key files

- `src/data/resume.js` — `siteConfig`, experience, skills, education, case studies, `tableauProjects`, `dashboardExecutiveSummary`
- `src/utils/analytics.js` — GA4 `resume_download` event, opt-out helpers
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

About · Experience · Skills · Dashboards · Case Studies · ~~Tool Box~~ (hidden) · Contact

Sticky dark header on all pages. About is active by default on home (no hash).

## Homepage hero (`siteConfig` in `resume.js`)

- **Name:** Nathaniel Nelson
- **Badge:** Supply Chain · Transformation
- **Title:** Supply Chain and Transformation Leader
- **Tagline:** 13+ years… $100M+ enterprise value… governance modernization… (full text in `resume.js`)
- **Email:** Nathan.Nelson.D@gmail.com
- **Phone:** (314) 566-4757
- **LinkedIn:** https://linkedin.com/in/NathanNel
- **Profile photo:** `/profile.png`
- **Resume PDF:** `public/resume.pdf` (source: `Desktop\2026 Applying\June 2026\Resume.pdf`)

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
| Forecast Accuracy (Dashboard 2) | Done, on site | `tableau-data-v2/supply_chain_sku_master.csv` |
| Fill Service Exception Queue (Dashboard 3) | Done, on site | `sku_dc_underperformer_summary.csv` |
| Inventory & Oversupply (Dashboard 4) | **Not started** | `sku_dc_oversupply_summary.csv` |

**On site today (3 dashboards + Q4 exec summary on `/dashboards`):**

1. **Supply Chain Executive Dashboard** — `SupplyChainDashboard_17813813310900/Dashboard1`
2. **Forecast Accuracy Dashboard** — `ForecastAccuracy_17814856522190/Dashboard1`
3. **Fill Service Exception Queue** — `FillServiceExceptionQue/Dashboard1`

- **Executive summary:** `resume.js` → `dashboardExecutiveSummary` (Q4 2025, 3 paragraphs)
- **Native embed size:** 1600 × 927

**About the Data** (on dashboards page): AI-generated sample data disclaimer.

## Case Studies

Three tabs in the **blue page hero**; direct URLs: `/case-studies`, `/case-studies/cpfr-planning`, `/case-studies/supply-planning`, `/case-studies/vendor-compliance`

| Button label | ID | Notes |
|--------------|-----|-------|
| Supplier Collaboration | `cpfr-planning` | Hero infographic + PDF |
| Supply Chain Planning | `supply-planning` | Hero infographic + PDF |
| Supplier Governance | `vendor-compliance` | **No hero image**; title + Download PDF; June 2026 VC PDF content ($20M value, chargeback platform) |

Each case study: Challenge → Approach → Results (+ `resultsIntro` where used) → Impact.

Source PDFs: `Desktop\Website\` or `Desktop\2026 Applying\June 2026\`

## Google Analytics

- **Tag:** `index.html` — loads `G-QKVHHVPKRD` unless localhost or `ga_opt_out=1`
- **Resume event:** `src/utils/analytics.js` → `resume_download` with `link_location` header/hero
- **Opt out (browser):** `localStorage.setItem('ga_opt_out','1'); location.reload()`
- **Opt in:** `localStorage.removeItem('ga_opt_out'); location.reload()`
- **Console:** https://analytics.google.com — Realtime for live; Engagement → Events for downloads; Home + date filter for trends (24–48 hr lag on new properties)

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
