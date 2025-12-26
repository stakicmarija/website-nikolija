import { Link } from "react-router-dom";
import "./PortfolioPage.css"

export default function PortfolioPage() {
    return(
        <>  
            <div className="portfolio-container">
                <div className="portfolio-links">
                    <Link to="/portfolio/distortion" className="portfolio-link suisse-36">distortion</Link>
                    <Link to="/portfolio/private-zone" className="portfolio-link suisse-36">private zone</Link>
                    <Link to="/portfolio/soft-armour" className="portfolio-link suisse-36" >soft armour</Link>
                </div>
            </div>
        </>
    )
}