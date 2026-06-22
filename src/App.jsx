import { Routes, Route } from 'react-router-dom'
import { DEFAULT_PORTFOLIO_SLUG } from './portfolios'
import PortfolioLayout from './layouts/PortfolioLayout'
import PortfolioSlugLayout from './layouts/PortfolioSlugLayout'
import HomePage from './pages/HomePage'
import DashboardsPage from './pages/DashboardsPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import ToolBoxPage from './pages/ToolBoxPage'

export default function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayout slug={DEFAULT_PORTFOLIO_SLUG} basePath="" />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboards" element={<DashboardsPage />} />
        <Route path="/case-studies/:studyId?" element={<CaseStudiesPage />} />
        <Route path="/toolbox" element={<ToolBoxPage />} />
      </Route>

      <Route path="/portfolio/:slug" element={<PortfolioSlugLayout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboards" element={<DashboardsPage />} />
        <Route path="case-studies/:studyId?" element={<CaseStudiesPage />} />
        <Route path="toolbox" element={<ToolBoxPage />} />
      </Route>
    </Routes>
  )
}
