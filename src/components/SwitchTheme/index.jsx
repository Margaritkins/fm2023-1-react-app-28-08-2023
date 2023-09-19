import React, { useContext } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeContext } from '../../contexts';
import { THEMES } from '../../constants';

const SwitchTheme = (props) => {
  const [theme, changeTheme] = useContext(ThemeContext);

  return (
    <div onClick={changeTheme}>
      {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
    </div>
  );
};

export default SwitchTheme;
