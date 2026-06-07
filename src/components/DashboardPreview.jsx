export default function DashboardPreview() {
  return (
    <div className="dashboard-preview" aria-hidden="true">
      <div className="dashboard-preview-header">
        <span className="dashboard-dot" />
        <span>Supply Chain Performance</span>
      </div>
      <div className="dashboard-preview-kpis">
        <div className="dashboard-kpi">
          <span className="dashboard-kpi-label">Service Level</span>
          <strong>98.6%</strong>
        </div>
        <div className="dashboard-kpi">
          <span className="dashboard-kpi-label">Forecast Accuracy</span>
          <strong>94.2%</strong>
        </div>
        <div className="dashboard-kpi">
          <span className="dashboard-kpi-label">Inventory Turns</span>
          <strong>12.4x</strong>
        </div>
      </div>
      <div className="dashboard-preview-chart">
        <div className="dashboard-chart-title">Demand vs Forecast</div>
        <div className="dashboard-bars">
          <span style={{ height: '55%' }} />
          <span style={{ height: '72%' }} />
          <span style={{ height: '48%' }} />
          <span style={{ height: '86%' }} />
          <span style={{ height: '64%' }} />
          <span style={{ height: '78%' }} />
          <span style={{ height: '92%' }} />
        </div>
      </div>
      <div className="dashboard-preview-footer">
        <div className="dashboard-donut" />
        <div className="dashboard-legend">
          <span>Dry Food</span>
          <span>Treats</span>
          <span>Pharmacy</span>
        </div>
      </div>
    </div>
  )
}
