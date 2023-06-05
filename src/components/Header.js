import React from 'react';
import './Header.css';

function Header(props) {

  const {
    onMenuSelect
  } = props;

  
return(
    <div className="app-header">
      <span className="header-title">Nike</span>
      <span onClick= {() => {
          onMenuSelect('Home');
      }}
      >Home</span>
      <span onClick= {() => {
          onMenuSelect('Usage');
      }}
      >Usage</span>
      <span onClick= {() => {
          onMenuSelect('Settings');
      }}
      >Settings</span>
      <span onClick= {() => {
          onMenuSelect('Log Out');
      }}
      >Log Out</span>
    </div>
);
}

export default Header;