import React from "react";
import { ThemeContext } from "../../contexts";
import cx from "classnames";
import styles from "./Footer.module.scss";
import { THEMES } from "../../constants";



const Footer = () => {
  const renderFunc = ([theme]) => {
    const classes = cx(styles.container, {
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
    return <div className={classes}>&copy;2023</div>
  };

  return <ThemeContext.Consumer>{renderFunc}</ThemeContext.Consumer>;
};

export default Footer;
