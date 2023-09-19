import React from 'react';
import CardUser from '../../components/CardSection/CardUser';
import LearnHooks from '../../components/LearnHooks';
import StopWatchHooks from '../../components/StopWatchHooks';

const Home = () => {
  return (
    <div>
      <StopWatchHooks />
      <LearnHooks />
      <h1>'Home':'Домашня'</h1>
      <CardUser />     
    </div>
  );
};

export default Home;
