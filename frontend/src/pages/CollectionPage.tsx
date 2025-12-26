import { useParams } from 'react-router-dom'
import './CollectionPage.css'
import Top from '../components/Top'
import BottomNav from '../components/BottomNav'

export default function CollectionPage() {
    const { collection } = useParams() as { collection?: string }

    return (
        <>
            <Top title = { collection ?? '' } />
            <div className='collection-container has-top suisse-text'>
                <div className='image-title'>
                    <img src="/mockUp/stolica1.png" className='work-img' />
                    <div>Louise 2025 Satin, wire and plush</div>
                </div>
                <div className='image-title'>
                    <img src="/mockUp/stolica1.png" className='work-img' />
                    <div>Louise 2025 Satin, wire and plush</div>
                </div>
            </div>
            <BottomNav />
        </>
    )
}