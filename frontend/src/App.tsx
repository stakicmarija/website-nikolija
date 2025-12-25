import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BiographyPage from './pages/BiographyPage'
import ContactPage from './pages/ContactPage'
import ExhitibitionsPage from './pages/ExhibitionsPage'
import PortfolioPage from './pages/PortfolioPage'
import PublicationsPage from './pages/PublicationsPage'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/exhibitions" element={<ExhitibitionsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
      </Routes>
    </Router>
  )
}

export default App
