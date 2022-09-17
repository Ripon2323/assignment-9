import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div>
            <nav className='custom-link '>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/review">REVIEW</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blog">BLOG</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
                
            </nav>
        </div>
    );
};

export default Header;