import React, {useState} from "react";
import logo from '../images/Logo .svg';

const Nav = () => {
    const [MenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!MenuOpen);
    }

    return (
        <nav className={`navbar ${MenuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
            <img src={logo} alt="logo" />
            </a>

            {/* mobile navbar */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* navbar items */}
            <ul className={`nav-links ${MenuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;