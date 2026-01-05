import { useState } from "react";
import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
import BurgerMenu from "./BurgerMenu";
import { BurgerButton } from "./BurgerButton";
import './Navigation.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const showNav = location.pathname !== "/";

    return (
        <>
            {showNav &&
                <div className="burger-wrapper">
                    <BurgerButton isOpen={isOpen} toggle={toggle} />
                    <BurgerMenu isOpen={isOpen} onClose={closeMenu} />
                </div>}

            {showNav && <BottomNav />}
        </>
    );
}
