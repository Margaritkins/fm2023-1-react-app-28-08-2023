import React, { useContext } from 'react';
import CardUser from '../../components/CardSection/CardUser';
import LearnHooks from '../../components/LearnHooks';
import StopWatchHooks from '../../components/StopWatchHooks';
import { ThemeContext } from '../../contexts';
import { THEMES } from '../../constants';

const styleMap = {
  [THEMES.LIGHT]:{backgroundColor:'#eee', color: '#222'},
  [THEMES.DARK]:{backgroundColor:'#222', color: '#eee'},
}

const Home = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div style={styleMap[theme]}>
      <StopWatchHooks />
      <LearnHooks />
      <h1>'Home':'Домашня'</h1>
      <CardUser />
    </div>
  );
};

export default Home;
