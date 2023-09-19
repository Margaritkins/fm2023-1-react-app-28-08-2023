import React, {useContext} from 'react';
import cx from 'classnames';
import NavMenu from '../NavMenu';
import Avatar from '../Avatar';
import SwitchTheme from '../SwitchTheme';
import styles from './Header.module.scss';
import { THEMES } from '../../constants';
import { ThemeContext } from '../../contexts';

const Header = (props) => {
  const  [theme]  = useContext(ThemeContext);
  const classes = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <div className={classes}>
      <NavMenu />
      <Avatar />
      <SwitchTheme />
    </div>
  );
};

export default Header;
