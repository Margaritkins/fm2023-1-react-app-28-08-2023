import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './CardUser.module.scss';
import { THEMES } from '../../../constants';
import { ThemeContext, UserContext } from '../../../contexts';

const CardUser = (props) => {
  const [theme] = useContext(ThemeContext);
  const {
    user: { id, firstName, lastName, isSelect, avatar },
    selectorUser,
  } = useContext(UserContext);

  const classes = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  const selectHandle = () => {
    selectorUser(id);
  };
  const stylesSelect = { backgroundColor: isSelect ? 'pink' : 'grey' };

  return (
    <article onClick={selectHandle} className={classes}>
      <h3 style={stylesSelect}>
        {firstName} {lastName}
      </h3>
      <img src={avatar} alt="" />
    </article>
  );
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
