import React, { useState } from 'react';

const LearnHooks = (psops) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [isAdd, setIsAdd] = useState(true);
  console.log('render');
  const handleClick = () => {
    setCount((count) => (isAdd ? count + step : count - step));
  };
  const handleSwitch = () => {
    setIsAdd(!isAdd);
  };
  const handleChange = ({ target: { value } }) => {
    setStep(Number(value));
  };
  return (
    <div>
      <h2>LearnHooks</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>{isAdd ? '+' : '-'}</button>
      <button onClick={handleSwitch}>switch</button>
      <label>
        step: <input value={step} onChange={handleChange} />
      </label>
    </div>
  );
};

export default LearnHooks;
