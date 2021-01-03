import React from 'react';
import { Sidebar } from './Sidebar';
import './Layout.css';
//global styling 

export const Layout = ({ children }) => {
  return (
    <div>
      <div className='content-wrapper'> 
        <div className='sidebar-container'><Sidebar/></div>
        <div className='content-container'>{children}</div>
      </div>
    </div>
  );
};