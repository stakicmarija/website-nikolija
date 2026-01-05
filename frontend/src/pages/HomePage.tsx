import './HomePage.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-top">
        <div className="nikolija nikolija-large">
          Nikolija Stanojević
        </div>
      </header>

      <main className="home-center">
        <div className="center-links suisse-large">
          <Link to="/biography">biography</Link>
          <Link to="/portfolio" className="portfolio portfolio-large">
            portfolio
          </Link>
          <Link to="/publications">publications</Link>
          <Link to="/exhibitions">exhibitions</Link>
          <Link to="/contact" className="contact-mobile">contact</Link>
        </div>
      </main>

      <footer className="home-bottom">
        <Link to="/contact" className="contact-left suisse-large">
          contact
        </Link>
      </footer>
    </div>
  )
}
