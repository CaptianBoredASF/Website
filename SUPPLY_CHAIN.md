# Supply Chain Data & Tableau — Project Context

Use `@SUPPLY_CHAIN.md` or `@PROJECT.md` in a new Cursor chat to restore context.

**Last updated:** 2026-06-13  
**Synced with:** `../tableau-data-v2/PROJECT.md` (update both when status changes)

---

## Overview

| Item | Value |
|------|--------|
| **Data folder** | `c:\Users\CaptianBoredASF\OneDrive\Desktop\Cursor\tableau-data-v2\` |
| **Generator** | `tableau-data-v2\scripts\generate_supply_chain_data.py` |
| **Regenerate** | `python scripts/generate_supply_chain_data.py` |
| **Manifest** | `LAST_UPDATED.txt` (written on each generate) |
| **Resume site** | this repo → https://www.nathanielnelsond.com |
| **GitHub** | https://github.com/CaptianBoredASF/Website.git |

## Do NOT use

| Path | Why |
|------|-----|
| `tableau-data\` (no `-v2`) | Stale / no COVID shock |
| `tableau-data.zip` | Outdated archive |

---

## Data pack

| File | Grain | Use |
|------|-------|-----|
| `supply_chain_sku_master.csv` | Week × SKU × DC (~628K) | **Forecast review, SKU/DC dashboards** |
| `supply_chain_executive_rollup.csv` | Month × Category × Region (~900) | Executive dashboard |
| `sku_dc_underperformer_summary.csv` | SKU × DC (latest 4 wks) | Fill/service exception queue |
| `sku_dc_oversupply_summary.csv` | SKU × DC (latest 4 wks) | Oversupply dashboard (future) |
| `sku_dc_forecast_offenders_top25.csv` | Top 25 SKU-DC × week | Optional; pre-ranked for Tableau Public |
| `dim_sku.csv`, `dim_dc.csv`, `dim_sku_planning.csv` | Dimensions | Joins |

**Scope:** 400 SKUs, 10 DCs, 157 weeks (Jan 2023 – Dec 2025)

### Narrative in data

- **2023:** COVID-style collapse (Smartphones ~24% fill, exec SL ~48%)
- **2024:** Recovery
- **2025:** Normal (~97% service, 5%+ category/region spreads)

### Sanity check — 2025-W52

| Metric | Value |
|--------|-------|
| Weighted WAPE | 6.2% |
| Avg Forecast Accuracy | 94.4% |
| SKU-DC pairs > 10% WAPE | 609 |
| Total unit error | 31,365 |
| Forecast vs Actual | 531,950 vs 503,341 (+5.7% over-forecast) |
| Worst offender | Chicago IL \| Nova Accessory Plus 55 \| ACC-0055 — 22.3% WAPE |

---

## Dashboard 1 — Executive (DONE)

- **Source:** `supply_chain_executive_rollup.csv`
- **Tableau Public:** `src/data/resume.js` → `tableauProjects`
- **Rules:** Fill Rate / Service Level / WAPE / FA = **AVG** not SUM; Year filter must apply to all sheets
- **Replace Data Source** (not Refresh) after regenerating CSVs

---

## Dashboard 2 — Weekly Forecast Review (DONE, on site)

**Tool:** Tableau Public (no Top N filter tab; table-calc sorts unreliable)

### Calculated fields

| Name | Formula |
|------|---------|
| `Weighted WAPE` | `SUM(ABS([Forecast Units]-[Actual Units])) / SUM([Actual Units])` |
| `High Error Flag` | `[WAPE] > 0.10` |
| `Worst Performer Flag` | `[WAPE] >= 0.05` |
| `Under-Forecast Flag` | `[Actual Units] > [Forecast Units]` |
| `Forecast Bias Direction` | `IF [Forecast Bias Pct] > 0.05 THEN "Over-Forecast" ELSEIF [Forecast Bias Pct] < -0.05 THEN "Under-Forecast" ELSE "On Target" END` |
| `SKU-DC Label` | `[DC Name] + " \| " + [SKU Name] + " \| " + [SKU ID]` |
| `Forecast vs Actual Gap %` | `(SUM([Forecast Units])-SUM([Actual Units])) / SUM([Actual Units])` |
| `SKUs Over 10% WAPE` | `COUNTD(IF [WAPE]>0.10 THEN [SKU ID]+[DC ID] END)` |
| `Abs Forecast Error (units)` | `ABS([Forecast Units] - [Actual Units])` |

### Sheets built

1. **KPI strip** (5 tiles): Weighted WAPE, Avg FA, SKUs-DC >10% WAPE, Total Unit Error, Forecast vs Actual + Gap %
2. **Forecast Offenders** — text table; `SKU-DC Label` on Rows; Forecast, Actual, WAPE; filters: Year Week + Worst Performer Flag; sort WAPE desc
3. **WAPE by Category** — bar, Weighted WAPE, **must filter Year Week** (all weeks = 20–46% WAPE)
4. **WAPE by Region** — duplicate, Region on columns

### Dashboard layout

```
[ Year Week filter ]
[ 5 KPIs ]
[ Forecast Offenders table — scroll ]
[ WAPE by Category ] [ WAPE by Region ]
```

### Tableau Public lessons

- Flat **`SKU-DC Label`** on Rows for network-wide WAPE sort (nested DC→SKU sorts within DC only)
- **Fit Width** + short column aliases on dashboard tables (Forecast, Actual, WAPE)
- Drop **Bias %** from table — use **Forecast Bias Direction** (color) instead
- Over-forecast: Bias = WAPE; Under-forecast: Bias negative, WAPE positive
- 2023 has zero under-forecast rows in generated data

### Still to build

- [ ] **Network WAPE Trend** — all weeks, exclude from single-week filter (2023 spike story)
- [ ] **SKU Forecast Trend** — dual line + filter action from offenders (SKU ID + DC ID)
- [ ] Color offenders by **Forecast Bias Direction**
- [x] Publish Forecast Review to Tableau Public + update `resume.js`
- **Published URL:** `https://public.tableau.com/views/ForecastAccuracy_17814856522190/Dashboard1`
- [ ] Optional: Dashboard 3 oversupply (`sku_dc_oversupply_summary.csv`)

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
