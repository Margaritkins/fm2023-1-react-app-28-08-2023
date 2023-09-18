import React, { useState } from 'react';

const LearnHooks = (psops) => {
  const [state, setState] = useState({ x: 0, y: 0, count: 0 });
  const handleMove = (event) => {
    // console.log(event.clientX, event.clientY);
    // console.log(event.nativeEvent.offsetX);
    setState({
      ...state,
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleClick = () => {
    setState((state) => ({ ...state, count: state.count + 1 }));
  };
  return (
    <div
      style={{ border: '1px solid red' }}
      onMouseMove={handleMove}
      onClick={handleClick}
    >
      <h2>
        coords: x = {state.x}, y = {state.y}
        <br /> count = {state.count}
      </h2>
    </div>
  );
};

export default LearnHooks;
