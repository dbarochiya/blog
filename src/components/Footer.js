import { Link } from 'gatsby';
import React from 'react';
import './footer.css';
export const Footer = () => (
  <div className='footer'>
    <Link to="/"> Home </Link>
    <Link to="/about"> About</Link>
  </div>
);