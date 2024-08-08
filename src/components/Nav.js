import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='navBar'>
                <li className='list'>
                    <NavLink exact to="/" activeClassName="active">About</NavLink>
                </li>
                <li className='list'>
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li className='list'>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li className='list'>
                    <a href='/resume.pdf' download='My_Resume.pdf' className="navLink">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
