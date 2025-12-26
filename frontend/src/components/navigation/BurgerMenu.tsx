import { NavLink } from "react-router-dom";
import './BurgerMenu.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BurgerMenu({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="menu-overlay">
      <nav className="menu-links suisse-text">
        <NavLink to="/" onClick={onClose}>home</NavLink>
        <NavLink to="/biography" onClick={onClose}>biography</NavLink>
        <NavLink to="/portfolio" onClick={onClose}>portfolio</NavLink>
        <NavLink to="/exhibitions" onClick={onClose}>exhibitions</NavLink>
        <NavLink to="/publications" onClick={onClose}>publications</NavLink>
        <NavLink to="/contact" onClick={onClose}>contact</NavLink>
      </nav>
    </div>
  );
}
