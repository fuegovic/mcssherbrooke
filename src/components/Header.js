import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png'; // Assuming there's a logo image in the icons folder

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="My Canadian Stock - Sherbrooke" />
                <h1>My Canadian Stock - Sherbrooke</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/map">Map</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;