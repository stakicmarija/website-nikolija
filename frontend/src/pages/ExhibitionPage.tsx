import { useParams } from 'react-router-dom'
import Top from '../components/Top'
import BottomNav from '../components/BottomNav'
import './ExhibitionPage.css'

export default function ExhibitionPage(){
  const { id } = useParams() as { id?: string }

  return (
    <>
      <Top title={`Exhibition ${id ?? ''}`} />
      <div className="exhibition-container has-top">
        <img src="/mockUp/taneMila.png" className='left-img' />
        <img src="/mockUp/vez.png" className='right-img' />
      </div>
      <BottomNav />
    </>
  )
}
