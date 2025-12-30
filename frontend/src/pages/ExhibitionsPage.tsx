import { Link } from "react-router-dom";
import Top from "../components/Top";
import './ExhibitionsPage.css';
import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/client";
import { groupExhibitionsQuery, soloExhibitionsQuery } from "../sanity/queries";

interface Exhibition {
    _id: string
    title: string
    year: number
    gallery: string
    location: string
}

export default function ExhitibitionsPage() {
    const [soloExhibitions, setSoloExhibitions] = useState<Exhibition[]>([])
    const [groupExhibitions, setGroupExhibitions] = useState<Exhibition[]>([])

    useEffect(() => {
        sanityClient.fetch(soloExhibitionsQuery)
            .then(data => setSoloExhibitions(data))
            .catch(err => console.error(err));

        sanityClient.fetch(groupExhibitionsQuery)
            .then(data => setGroupExhibitions(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Top title="Exhibitions" />
            <div className="exhibitions-container has-top suisse-text pink">
                <div className="solo-exhibitions">
                    <strong>SOLO EXHIBITIONS</strong>
                    {soloExhibitions.map(ex => (
                        <div key={ex._id} className="exhibition-item">
                            <Link
                                to={`/exhibitions/${ex._id}`}
                                className="pink"
                            >
                                {ex.year} - "{ex.title}", {ex.gallery}, {ex.location}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="group-exhibitions">
                    <strong>GROUP EXHIBITIONS</strong>
                    {groupExhibitions.map(ex => (
                        <div key={ex._id} className="exhibition-item">
                            <Link
                                to={`/exhibitions/${ex._id}`}
                                className="pink"
                            >
                                {ex.year} - "{ex.title}", {ex.gallery}, {ex.location}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
