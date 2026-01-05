import { useParams } from 'react-router-dom'
import './CollectionPage.css'
import Top from '../components/Top'
import { useEffect, useState } from 'react'
import { sanityClient } from '../sanity/client'
import { portfolioImagesQuery } from '../sanity/queries'
import type { ImageItem } from '../types/ImageItem'

export default function CollectionPage() {
    const { id } = useParams() as { id?: string }
    const [images, setImages] = useState<ImageItem[]>([])
    const [title, setTitle] = useState("")

    useEffect(() => {
        if (!id) return

        sanityClient
            .fetch(portfolioImagesQuery, { id })
            .then(data => {
                setImages(data?.images || [])
                setTitle(data?.title || "")
            })
            .catch(console.error)
    }, [id])

    return (
        <>
            <Top title={title} />
            <div className='collection-container has-top'>
                {images.map(img => (
                    <div key={img.asset._id} className="image-title">
                        <img src={img.asset.url} className="work-img" />
                        {img.description && <div>{img.description}</div>}
                    </div>
                ))}
            </div>
        </>
    )
}