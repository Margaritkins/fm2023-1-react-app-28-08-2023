import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">sign-up</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">sign-in</NavLink>
        </li>
        <li>
          <NavLink to="/callback">callback</NavLink>
        </li>
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
        <li>
          <NavLink to="/loader">loader</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
