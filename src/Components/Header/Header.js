import React, {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export default function Header() {
    const [bgcolor,setBgcolor] = useState(null);
    
    const listenScrollEvent = e => {
        if (window.scrollY > 200) {
          setBgcolor('#252b29e3');
     }else{
        setBgcolor(null);
     }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
return (
    <nav className="navwarapper" style={{backgroundColor:bgcolor}}>
    <div/>
    <NavLink className="navlink" to="/">Home</NavLink>
    <NavLink className="navlink"  to="/profile">Profile</NavLink>
    <NavLink className="navlink" to="/blog">Blog</NavLink>
    <NavLink className="navlink" to="/contact">Contact</NavLink>
    <div/>
    </nav>
    );
}
