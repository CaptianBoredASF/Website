# Supply Chain Data & Tableau — Project Context

Use `@SUPPLY_CHAIN.md` or `@PROJECT.md` in a new Cursor chat to restore context.

**Last updated:** 2026-06-16  
**Synced with:** `../tableau-data-v2/PROJECT.md` (update both when status changes)

---

## Overview

| Item | Value |
|------|--------|
| **Data folder** | `c:\Users\CaptianBoredASF\OneDrive\Desktop\Cursor\tableau-data-v2\` |
| **Generator** | `tableau-data-v2\scripts\generate_supply_chain_data.py` |
| **Regenerate** | `python scripts/generate_supply_chain_data.py` |
| **Manifest** | `LAST_UPDATED.txt` (written on each generate) |
| **Resume site** | `../resume-site/` → https://www.nathanielnelsond.com |
| **GitHub (site)** | https://github.com/CaptianBoredASF/Website.git |

## Do NOT use

| Path | Why |
|------|-----|
| `tableau-data\` (no `-v2`) | Stale / no COVID shock |
| `tableau-data.zip` | Outdated archive |

---

## Data pack

| File | Grain | Use |
|------|-------|-----|
| `supply_chain_sku_master.csv` | Week × SKU × DC (~628K) | Forecast review, SKU/DC dashboards |
| `supply_chain_executive_rollup.csv` | Month × Category × Region (~900) | Executive dashboard |
| `sku_dc_underperformer_summary.csv` | SKU × DC (latest 4 wks) | **Dashboard 3** fill/service queue |
| `sku_dc_oversupply_summary.csv` | SKU × DC (latest 4 wks) | **Dashboard 4** oversupply queue |
| `supply_chain_kpi_scorecard.csv` | 27 network KPIs (wide) | **KPI scorecard** — Excel template |
| `supply_chain_kpi_scorecard_long.csv` | Metric × period (tidy) | Scorecard in Tableau |
| `network_kpi_weekly.csv` | Week (network rollup) | WoW scorecard trends |
| `network_kpi_monthly.csv` | Month (network rollup) | MoM scorecard trends |
| `sku_dc_forecast_offenders_top25.csv` | Top 25 SKU-DC × week | Optional; pre-ranked for Tableau Public |
| `dim_sku.csv`, `dim_dc.csv`, `dim_sku_planning.csv` | Dimensions | Joins |

**Scope:** 400 SKUs, 10 DCs, 157 weeks (Jan 2023 – Dec 2025)

### Narrative in data

- **2023:** COVID-style collapse (Smartphones ~24% fill, exec SL ~48%)
- **2024:** Recovery
- **2025:** Normal (~97% service, 5%+ category/region spreads)

### Q4 2025 executive metrics (Oct–Dec, for writeup)

| Metric | Q4 2025 | Q3 2025 | Q4 2024 |
|--------|---------|---------|---------|
| Fill Rate | 96.6% | 96.9% | 88.3% |
| Service Level | 96.6% | 96.8% | 88.9% |
| WAPE | 6.5% | 5.5% | 15.4% |
| Forecast Accuracy | 93.5% | 94.5% | 84.6% |
| Lost Sales | ~$45M | ~$37M | ~$230M |

### Sanity check — 2025-W52 (forecast)

| Metric | Value |
|--------|-------|
| Weighted WAPE | 6.2% |
| Avg Forecast Accuracy | 94.4% |
| SKU-DC pairs > 10% WAPE | 609 |
| Forecast vs Actual | +5.7% over-forecast |
| Top WAPE offender | Chicago IL \| Nova Accessory Plus 55 \| ACC-0055 — 22.3% WAPE |

### Sanity check — underperformer summary (Dashboard 3)

| Metric | Value |
|--------|-------|
| As-of week | 2026-W01 |
| Critical pairs | 1,321 |
| Watch pairs | 321 |
| Queue lost sales (4 wks) | ~$12.8M |
| Top row | Chicago IL \| Nova Smartphone 256GB 41 — 86.3% fill, ~$51K lost |
| Critical by region | Midwest ~550 (highest) |

### Sanity check — oversupply summary (Dashboard 4)

| Metric | Value |
|--------|-------|
| As-of week | 2026-W01 |
| Critical pairs | 2,485 |
| Watch pairs | 99 |
| Action queue excess (4 wks) | ~$1.93B |
| Total excess (all rows) | ~$2.06B |
| Expiry risk (Critical) | 1,155 |
| Top row | Los Angeles CA \| Nova Smartphone 256GB 17 — ~$5.8M excess, 156 DOS |
| Primary drivers (by $) | Reorder Point (~$1.77B), Shelf Life, Target DOS, MOQ |

### Sanity check — KPI scorecard (network)

| Metric | 2024 | 2025 |
|--------|------|------|
| Fill Rate | ~82% | ~96% |
| Lost Sales | ~$1.57B | ~$155M |
| Revenue | ~$5.6B | ~$7.6B |
| Excess Inventory (EOY) | ~$513M | ~$552M |

**Files:** `supply_chain_kpi_scorecard.csv` (Excel wide), `KPI_SCORECARD.md` (build guide)

---

## Dashboard status

| # | Title | Source | Status | Tableau Public |
|---|-------|--------|--------|----------------|
| 1 | Supply Chain Executive Dashboard | `supply_chain_executive_rollup.csv` | Done, on site | `SupplyChainDashboard_17813813310900/Dashboard1` |
| 2 | Forecast Accuracy Dashboard | `supply_chain_sku_master.csv` | Done, on site | `ForecastAccuracy_17814856522190/Dashboard1` |
| 3 | Fill Service Exception Queue | `sku_dc_underperformer_summary.csv` | **Done, on site** | `FillServiceExceptionQue/Dashboard1` |
| 4 | Inventory & Oversupply Queue | `sku_dc_oversupply_summary.csv` | **Guide ready — build in Tableau** | — |

**Site:** `resume-site/src/data/resume.js` → `tableauProjects` + `dashboardExecutiveSummary`  
**Page:** `/dashboards` — Q4 2025 executive summary above all embeds (`DashboardsPage.jsx`)

---

## Dashboard 1 — Executive (DONE)

- **Rules:** Fill Rate / Service Level / WAPE / FA = **AVG** not SUM; Year filter must apply to all sheets
- **Replace Data Source** (not Refresh) after regenerating CSVs

---

## Dashboard 2 — Weekly Forecast Review (DONE)

See calculated fields and layout in git history / prior sessions.

**Tableau Public lessons:** Flat `SKU-DC Label` on Rows; Year Week filter on category/region charts; no Top N on Public.

**Optional still:** Network WAPE trend, SKU drill trend, bias color on offenders.

---

## Dashboard 3 — Fill & Service Exception Queue (DONE)

**Title:** Fill & Service Exception Queue  
**Subtitle:** As of 2026-W01 · Trailing 4 weeks · Targets: 97% fill / 96% service

### Calculated fields

| Name | Formula |
|------|---------|
| `SKU-DC Key` | `[SKU ID] + [DC ID]` |
| `SKU-DC Label` | `[DC Name] + " \| " + [SKU Name] + " \| " + [SKU ID]` |
| `Critical Flag` | `[Priority Status] = "Critical"` |
| `Watch Flag` | `[Priority Status] = "Watch"` |
| `Action Queue Flag` | `[Priority Status] = "Critical" OR [Priority Status] = "Watch"` |
| `Critical Pair Count` | `COUNTD(IF [Critical Flag] THEN [SKU-DC Key] END)` |
| `Watch Pair Count` | `COUNTD(IF [Watch Flag] THEN [SKU-DC Key] END)` |
| `Fill Rate Gap` | `[Avg Fill Rate] - 0.97` |
| `Service Level Gap` | `[Avg Service Level] - 0.96` |

### Sheets

1. **KPI Critical Pairs** — Text, Critical Pair Count (~1,321)
2. **KPI Watch Pairs** — Watch Pair Count (~321)
3. **KPI Total Lost Sales** — SUM(Total Lost Sales) (~$12.8M with queue filter)
4. **KPI Avg Fill Rate** — AVG, target 97% in title (Analytics greyed out on text KPIs — no axis)
5. **KPI Avg Service Level** — AVG, target 96% in title
6. **Exception Queue table** — Rows: SKU-DC Label; Columns: Measure Names; Text: Measure Values; filter Action Queue Flag = True; sort Lost Sales desc; Color: Priority Status
7. **Lost Sales by Category** — bar, Action Queue filter
8. **Critical by Region** — bar, Critical Pair Count by Region

### Table lesson (Sheet F)

- **Wrong:** Measure Values on Columns → bar chart
- **Right:** Measure Names on Columns, Measure Values on Text, Marks = Text

---

## Dashboard 4 — Inventory & Oversupply (IN PROGRESS)

**Title:** Inventory & Oversupply Queue  
**Subtitle:** As of 2026-W01 · Trailing 4 weeks · Reduce DOS toward target / pause replenishment on forecast-driven excess

**Source:** `sku_dc_oversupply_summary.csv` (+ optional `dim_sku_planning.csv`)  
**Build guide:** `tableau-data-v2/DASHBOARD_4_GUIDE.md` (Sheet A onward)

### Calculated fields

| Name | Formula |
|------|---------|
| `SKU-DC Key` | `[SKU ID] + [DC ID]` |
| `SKU-DC Label` | `[DC Name] + " \| " + [SKU Name] + " \| " + [SKU ID]` |
| `Critical Flag` | `[Priority Status] = "Critical"` |
| `Watch Flag` | `[Priority Status] = "Watch"` |
| `Action Queue Flag` | `[Priority Status] = "Critical" OR [Priority Status] = "Watch"` |
| `Critical Pair Count` | `COUNTD(IF [Critical Flag] THEN [SKU-DC Key] END)` |
| `Watch Pair Count` | `COUNTD(IF [Watch Flag] THEN [SKU-DC Key] END)` |
| `Expiry Risk Flag (Calc)` | `[Expiry Risk Flag] = "Y"` |
| `DOS Gap Days` | `[Avg Days of Supply] - [Target Days of Supply]` |

### Sheets

1. **KPI Critical Pairs** — Text, Critical Pair Count (~2,485)
2. **KPI Watch Pairs** — Watch Pair Count (~99)
3. **KPI Total Excess Value** — SUM(Total Excess Value) (~$1.93B with queue filter)
4. **KPI Avg Days of Supply** — AVG, ~81 days on queue
5. **KPI Avg DOS Gap** — AVG days above target (~31 on queue)
6. **Oversupply Queue table** — Rows: SKU-DC Label; Text: DOS, excess value, driver, profile; filter Action Queue Flag; sort Excess Value desc; Color: Priority Status
7. **Excess by Category** — bar, Action Queue filter
8. **Critical by Region** — bar, Critical Pair Count by Region
9. **(Optional) Excess by Driver** — bar by Primary Oversupply Driver
10. **(Optional) Expiry Risk queue** — Expiry Risk Flag = Y + Action Queue

### Table lesson (Sheet F)

Same as Dashboard 3: use **Text** marks with measures on **Text**, not Measure Values on Columns.

---

## Executive writeup (on site)

**Location:** `resume.js` → `dashboardExecutiveSummary`  
**Title:** Executive Summary — Q4 2025 (Oct–Dec)  
**Tone:** Raw facts, outlier callouts, fix actions — not academic/vendor comparisons.

**Outlier callouts in writeup:**
- Forecast: ACC-0055 @ Chicago, 22.3% WAPE
- Fill/service: Nova Smartphone 256GB 41 @ Chicago, Midwest ~550 Critical
- Oversupply: ~$2.1B excess, MOQ/safety stock/forecast inflation drivers

**Update writeup** when Dashboard 4 is built or Q4 numbers change.

---

## Resume site (other context)

- **Hero:** Supply Chain and Transformation Leader (`siteConfig`)
- **Tool Box:** hidden (`showToolbox: false`) — restore via `.cursor/rules/restore-toolbox-tab.mdc`
- **GA4:** `G-QKVHHVPKRD` in `index.html`; `resume_download` event; opt-out via `localStorage ga_opt_out=1`
- **Case studies:** 3 tabs; Supplier Governance updated from June 2026 VC PDF
- **VC case study URL:** `/case-studies/vendor-compliance`

---

## Agent instructions

- **Update this file** and `tableau-data-v2/PROJECT.md` at end of significant sessions (keep in sync).
- **Do not commit** without user request.
- **Include git commands** for user to run manually when files change.
- CSVs stay local (too large for git).

## Regenerate data

```powershell
cd c:\Users\CaptianBoredASF\OneDrive\Desktop\Cursor\tableau-data-v2
python scripts/generate_supply_chain_data.py
```

Then in Tableau: **Data → Replace Data Source** → point at v2 CSVs.
