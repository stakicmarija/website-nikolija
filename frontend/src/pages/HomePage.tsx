import './HomePage.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='home-container'>
      <div className='nikolija nikolija-large'>
        Nikolija Stanojević
      </div>
      <div className='center-links suisse-large'>
        <Link to="/biography">biography</Link>
        <Link to="/portfolio" className='portfolio portfolio-large'>portfolio</Link>
        <Link to="/publications">publications</Link>
        <Link to="/exhibitions">exhibitions</Link>
      </div>
      <div className='contact suisse-large'>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  )
}