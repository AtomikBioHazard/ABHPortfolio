import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
]

const NavLinks = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => {
          <li key={link.path}>
            <NavLink activeClassName='active' to={link.path}>
              {link.name}
            </NavLink>
          </li>
        })}
      </ul>
    </nav>
  );
}

export default NavLinks;
