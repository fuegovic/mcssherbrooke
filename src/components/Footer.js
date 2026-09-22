import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for footer styles

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} My Canadian Stock - Sherbrooke</p>
                <div className="contact-info">
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@mycanadianstock.com</p>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com/mycanadianstock" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/mycanadianstock" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;