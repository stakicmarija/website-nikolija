import BottomNav from "../components/BottomNav";
import Top from "../components/Top";
import './ContactPage.css';

export default function ContactPage() {
  return(
    <>
    <Top title='Contact'/>
    <div className="contact-container has-top suisse-text">
      <img src="/images/nikiBio.jpeg" className="top-image" />
      <div className="social">
        <img src="/icons/gmail.png" className="icon" />
        <div className="username">nikolija.stanojevic@gmail.com</div>
      </div>
      <div className="social">
        <img src="/icons/telephone.png" className="icon" />
        <div className="username ">+43 667 7707544</div>
      </div>
      <div className="social">
        <img src="/icons/video.png" className="icon" />
        <div className="username">@nikolija_stanojevic</div>
      </div>
    </div>
    <BottomNav />
    </>
  )
}