import React, { useContext, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import cx from 'classnames';
import styles from './NavMenu.module.scss';
import { MenuContext } from '../../contexts';

const NavMenu = () => {
  const {
    state: { isMenuOpen },
    handleCloseMenu,
  } = useContext(MenuContext);
  const navClassNames = cx(styles.navmenu, {
    [styles.open]: isMenuOpen,
  });
  const navRef = useRef(null);
  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isMenuOpen && navRef.current.contains(target) === false) {
        handleCloseMenu();
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    }; //eslint-disable-next-line
  }, [isMenuOpen]);
  return (
    <nav className={navClassNames} ref={navRef}>
      <CancelPresentationIcon
        fontSize="large"
        className={styles.close}
        onClick={handleCloseMenu}
      />
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
        <li>
          <NavLink to="/anketa">anketa</NavLink>
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
