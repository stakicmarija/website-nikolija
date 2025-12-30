import { useParams } from 'react-router-dom'
import Top from '../components/Top'
import './ExhibitionPage.css'
import { useEffect, useState } from 'react';
import { sanityClient } from '../sanity/client';
import { exhibitionImagesQuery } from '../sanity/queries';
import type { ImageItem } from '../types/ImageItem';

export default function ExhibitionPage() {
  const { id } = useParams() as { id?: string }
  const [images, setImages] = useState<ImageItem[]>([])
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (!id) return;

    sanityClient
      .fetch(exhibitionImagesQuery, { id })
      .then((data) => {
        setImages(data.images || []);
        setTitle(data.title);
      })
      .catch(console.error);
  }, [id])

  return (
    <>
      <Top title={title} />
      <div className="exhibition-container has-top">
        {images.map((img, index) => (
          <img
            key={img.asset._id}
            src={img.asset.url}
            className={index % 2 === 0 ? "left-img" : "right-img"}
            alt={img.description || ""}
          />
        ))}
      </div>
    </>
  )
}
