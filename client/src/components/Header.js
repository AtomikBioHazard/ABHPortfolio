import React from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header>
      <h1>ABH Portfolio</h1>
      <NavLinks />
    </header>
  );
}

export default Header;
