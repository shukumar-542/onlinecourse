import React from 'react';
import logo from '../../images/aaa.jpeg'
import './Header.css'

const Header = () => {
      return (
            <div className='header'>
                 <img src={logo} alt="" />
                 <nav>
                       <a href="home">Home</a>
                       <a href="teacher">Teachers</a>
                       <a href="about">About Us</a>
                 </nav>
            </div>
      );
};

export default Header;