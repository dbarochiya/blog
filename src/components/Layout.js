import React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Sidebar } from './Sidebar';
import './Layout.css';
//global styling 

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <div className='content-wrapper'>
        <div className='sidebar-container'><Sidebar/></div>
        <div className='content-container'>{children}</div>
      </div>
      <div className='footer'>
        I am footer
      </div>
    </div>
  );
};