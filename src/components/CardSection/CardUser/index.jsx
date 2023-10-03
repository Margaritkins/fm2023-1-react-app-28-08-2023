import React from 'react';
import cx from 'classnames'
import PropTypes from 'prop-types';
import { UserContext, ThemeContext } from '../../../contexts';
import styles from './CardUser.module.scss'
import { THEMES } from '../../../constants';

const CardUser = () => {

  const render=([theme])=>{
    const classes=cx(styles.container, {
      [styles.light]:theme===THEMES.LIGHT,
      [styles.dark]:theme===THEMES.DARK
    })
    return <UserContext.Consumer>{({
      user: { id, firstName, lastName, isSelect, avatar},
      selectorUser,
    }) => {
      const selectHandle = () => {
        selectorUser(id);
      };
      const stylesSelect = { backgroundColor: isSelect ? 'pink' : 'gray' };
      
      const imgStyles = { with: "70px", height: "70px", borderRadius: "50%" };
      return (
        <article onClick={selectHandle} className={classes} >
          <h3 style={stylesSelect}>
            {firstName} {lastName}
          </h3>
          <img src={avatar} alt="avatar" style={imgStyles}/>
        </article>
      );
    }}</UserContext.Consumer>
  }

  
  return<ThemeContext.Consumer>{render}</ThemeContext.Consumer>
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelect: PropTypes.bool,
});

CardUser.propTypes = {
  user: userShape.isRequired,
  selectorUser: PropTypes.func.isRequired,
};

export const defaultUser = {
  id: 0,
  firstName: 'noname',
  lastName: 'noname',
};

CardUser.defaultProps = {
  user: defaultUser,
  selectorUser: () => {},
};

export default CardUser;
