import React from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { THEMES } from '../../constants';
import { withTheme } from '../HOCs';

const SwitchTheme = (props) => {
  const { theme, changeTheme } = props;
  return (
    <div onClick={changeTheme}>
      {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
    </div>
  );
};

export default withTheme(SwitchTheme);
