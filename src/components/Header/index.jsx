import React from "react";
import { ThemeContext } from "../../contexts";
import cx from 'classnames';
import NavMenu from "../NavMenu";
import Avatar from "../Avatar";
import SwitchTheme from "../SwitchTheme";
import styles from "./Header.module.scss";
import {THEMES} from '../../constants'

const Header = () => {
  const renderFunc = ([theme]) => {
    const classes = cx(styles.container, {
      [styles.light]:theme===THEMES.LIGHT,
      [styles.dark]:theme===THEMES.DARK
    })
    return (
      <div className={classes}>
        <NavMenu />
        <Avatar />
        <SwitchTheme />
      </div>
    );
  };
  return <ThemeContext.Consumer>{renderFunc}</ThemeContext.Consumer>;
  // return (
  //   <div style={{display:'flex',justifyContent:'space-between'}}>
  //     <NavMenu />
  //     <Avatar />
  //     <SwitchTheme />
  //   </div>
  // );
};

export default Header;
