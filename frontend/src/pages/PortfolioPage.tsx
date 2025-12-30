import { Link } from "react-router-dom";
import "./PortfolioPage.css"
import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/client";
import { portfolioTitlesQuery } from "../sanity/queries";

interface PortfolioItem {
    _id: string;
    title: string;
}

export default function PortfolioPage() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

    useEffect(() => {
        sanityClient.fetch(portfolioTitlesQuery)
            .then((data) => { setPortfolioItems(data) })
            .catch((err) => { console.error(err) });
    }, [])

    return (
        <>
            <div className="portfolio-container">
                <div className="portfolio-links">
                    {
                        portfolioItems.map((item) => (
                            <Link
                                to={`/portfolio/${item._id}`}
                                key={item._id}
                                className="portfolio-link suisse-36"
                            >
                                {item.title}
                            </Link>

                        ))
                    }
                </div>
            </div>
        </>
    )
}