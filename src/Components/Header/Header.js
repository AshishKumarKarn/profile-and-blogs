import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const header = () => {
return (<nav className="navwarapper">
    <div/>
    <NavLink className="navlink" to="/">Home</NavLink>
    <NavLink className="navlink"  to="/profile">Profile</NavLink>
    <NavLink className="navlink" to="/blog">Blog</NavLink>
    <NavLink className="navlink" to="/contact">Contact</NavLink>
    <div/>
    </nav>
    )
}
export default header;