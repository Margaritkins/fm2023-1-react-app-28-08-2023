import React, { useState, useEffect } from 'react';

const StopWatchHooks = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(()=>{})
  return (
    <div style={{ border: '3px solid red', marginBottom: '10px', textAlign: 'center' }}>
      <h2>StopWatchHooks</h2>
      <h3>time: {time}</h3>
      <button>{isRunning ? 'stop' : 'start'}</button>
    </div>
  );
};

export default StopWatchHooks;
