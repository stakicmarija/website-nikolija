import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import "./PortfolioPage.css"

export default function PortfolioPage() {
    return(
        <>  
            <div className="portfolio-container">
                <div className="portfolio-links">
                    <Link to="/" className="portfolio-link suisse-36">distortion</Link>
                    <Link to="/" className="portfolio-link suisse-36">private zone</Link>
                    <Link to="/" className="portfolio-link suisse-36" >soft armour</Link>
                </div>
            </div>
            <BottomNav />
        </>
    )
}