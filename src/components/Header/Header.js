import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">HOME</Link>
                <Link to="/review">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blog">BLOGS</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;