import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BiographyPage from './pages/BiographyPage'
import ContactPage from './pages/ContactPage'
import ExhitibitionsPage from './pages/ExhibitionsPage'
import ExhibitionPage from './pages/ExhibitionPage'
import PortfolioPage from './pages/PortfolioPage'
import PublicationsPage from './pages/PublicationsPage'
import CollectionPage from './pages/CollectionPage'
function App() {

  return (
    <Router>
      <div className='page-wrapper'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/exhibitions" element={<ExhitibitionsPage />} />
          <Route path="/exhibitions/:id" element={<ExhibitionPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:collection" element={<CollectionPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
