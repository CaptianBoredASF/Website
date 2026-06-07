import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardsPage from './pages/DashboardsPage'
import CaseStudiesPage from './pages/CaseStudiesPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboards" element={<DashboardsPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
    </Routes>
  )
}
