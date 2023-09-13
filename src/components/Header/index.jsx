import React from 'react';
import cx from 'classnames';
import NavMenu from '../NavMenu';
import Avatar from '../Avatar';
import SwitchTheme from '../SwitchTheme';
import styles from './Header.module.scss';
import { THEMES } from '../../constants';
import { withTheme } from '../HOCs';

const Header = (props) => {
  const { theme } = props;
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

// defaultProps
// propTypes

export default withTheme(Header);
