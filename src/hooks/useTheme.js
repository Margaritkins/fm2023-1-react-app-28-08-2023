import { useState } from 'react';
import { THEMES } from '../constants';

const useTheme = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  return [theme, changeTheme ];
};

export default useTheme;
