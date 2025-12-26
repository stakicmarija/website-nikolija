import BottomNav from "../components/BottomNav";
import Top from "../components/Top";
import './PublicationsPage.css';

export default function PublicationsPage() {
  return(
    <>
      <Top title="Publications" />
      <div className="publications-container has-top suisse-text">
        <div className="column-left pink">
          Publications content goes here.
        </div>
        <div className="column-right pink">
          More publications content.
        </div>
      </div>
      <BottomNav />
    </>
  )
}