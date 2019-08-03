import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navbar = () => {
    return (
        <nav className='Navbar'>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={{ pathname: '/new-post' }}>New Post</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default navbar;