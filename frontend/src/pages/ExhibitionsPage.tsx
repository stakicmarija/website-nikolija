import { Link } from "react-router-dom";
import Top from "../components/Top";
import './ExhibitionsPage.css';

export default function ExhitibitionsPage() {
    return(
        <>
            <Top title="Exhibitions" />
            <div className="exhibitions-container has-top suisse-text pink">
                <div className="solo-exhibitions">
                    Solo Exhibitions:
                    <br />
                    <Link to="/exhibitions/2024" className="pink"> 2024 Exhibition - Lorem ipsum dolor sit amet consectetur. </Link> 
                    <br />
                    <Link to="/exhibitions/2023" className="pink"> 2023 Exhibition - Risus amet gravida mollis dis elementum velit mattis ultrices egestas. </Link> 
                </div>
                
                <div className="group-exhibitions">
                    Group Exhibitions:
                    <br />
                    <Link to="/exhibitions/2024" className="pink"> 2024 Exhibition - Lorem ipsum dolor sit amet consectetur. </Link> 
                    <br />
                    <Link to="/exhibitions/2023" className="pink"> 2023 Exhibition - Risus amet gravida mollis dis elementum velit mattis ultrices egestas. </Link> 
                </div>
            </div>
        </>
    )
}
