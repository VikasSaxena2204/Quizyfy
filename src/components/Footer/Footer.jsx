import React from 'react';
import './Footer.css'; // Ensure this file is created and imported

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} All Rights Reserved to <strong>Vikas Saxena</strong> 🎉✨</p>
                <p>
                    Check out my work on 
                    <a 
                        href="https://github.com/VikasSaxena2204" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="github-link">
                         GitHub 🐱‍👤
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
