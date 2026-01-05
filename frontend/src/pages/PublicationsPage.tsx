import Top from "../components/Top";
import './PublicationsPage.css';
import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/client";
import { publicationsQuery } from "../sanity/queries";

interface Publication {
  _id: string;
  label: string;
  link: string;
}

export default function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    sanityClient.fetch(publicationsQuery)
      .then((data) => setPublications(data))
      .catch(err => console.error(err));
  }, []);

  const mid = Math.ceil(publications.length / 2);
  const leftColumn = publications.slice(0, mid);
  const rightColumn = publications.slice(mid);

  return(
    <>
      <Top title="Publications" />
      <div className="publications-container has-top suisse-text">
        <div className="column-left">
          {leftColumn.map(pub => (
            <a key={pub._id} href={pub.link} target="_blank" rel="noopener noreferrer" className="pink">
              {pub.label}
            </a>
          ))}
        </div>
        <div className="column-right">
          {rightColumn.map(pub => (
            <a key={pub._id} href={pub.link} target="_blank" rel="noopener noreferrer" className="pink">
              {pub.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
