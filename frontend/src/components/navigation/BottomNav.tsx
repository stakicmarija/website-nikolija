import { NavLink } from "react-router-dom"
import './BottomNav.css'

export default function BottomNav() {
    return(
        <nav className="bottom-nav suisse-16">
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>home</NavLink>
            <NavLink to="/biography" className={({isActive}) => isActive ? 'active' : ''}>biography</NavLink>
            <NavLink to="/portfolio" className={({isActive}) => isActive ? 'active' : ''}>portfolio</NavLink>
            <NavLink to="/exhibitions" className={({isActive}) => isActive ? 'active' : ''}>exhibitions</NavLink>
            <NavLink to="/publications" className={({isActive}) => isActive ? 'active' : ''}>publications</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>contact</NavLink>
        </nav>
    )
}