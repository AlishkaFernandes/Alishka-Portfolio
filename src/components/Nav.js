import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='nav'>
            {/* Show hamburger menu on mobile screens */}
            {isMobile && (
                <>
                    <div className="hamburgerMenu" onClick={toggleMenu}>
                        &#9776; {/* Unicode for hamburger menu icon */}
                    </div>
                    <ul className={`mobileNav ${isMenuOpen ? 'show' : ''}`}>
                        <li className='list'>
                            <NavLink exact to="/" activeClassName="active" className="navLink">
                                About
                            </NavLink>
                        </li>
                        <li className='list'>
                            <NavLink to="/portfolio" activeClassName="active" className="navLink">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className='list'>
                            <NavLink to="/contact" activeClassName="active" className="navLink">
                                Contact
                            </NavLink>
                        </li>
                        <li className='list'>
                            <a href='/resume.pdf' download='My_Resume.pdf' className="navLink btn">
                                Resume
                            </a>
                        </li>
                    </ul>
                </>
            )}

            {/* Show desktop navbar on larger screens */}
            {!isMobile && (
                <ul className='navBar'>
                    <li className='list'>
                        <NavLink exact to="/" activeClassName="active" className="navLink">
                            About
                        </NavLink>
                    </li>
                    <li className='list'>
                        <NavLink to="/portfolio" activeClassName="active" className="navLink">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className='list'>
                        <NavLink to="/contact" activeClassName="active" className="navLink">
                            Contact
                        </NavLink>
                    </li>
                    <li className='list'>
                        <a href='/resume.pdf' download='My_Resume.pdf' className="navLink btn">
                            Resume
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;
