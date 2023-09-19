import React, { useState, useEffect } from 'react';

const LearnHooks = (props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });
  const [countClick, setCountClick] = useState(0);
  const handleMove = (event) => {
    setCoords({
      ...coords,
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    const handleClick = () => {
      setCountClick((countClick) => countClick + 1);
      //setCountClick(countClick + 1);
    };
    console.log('add effect');
    document.body.addEventListener('click', handleClick); //setInterval() alert() fetch()
    return () => {
      console.log('cleanup effect');
      document.body.removeEventListener('click', handleClick); //clearInterval()
    };
  }, []);

  /*
  useEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input]);
*/

  return (
    <div
      style={{ border: '1px solid red' }}
      onMouseMove={handleMove}
      //onClick={handleClick}
    >
      <h2>
        coords: x = {coords.x}, y = {coords.y}
        <br /> count = {countClick}
      </h2>
    </div>
  );
};

export default LearnHooks;
