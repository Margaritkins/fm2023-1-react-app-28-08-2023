import { useState, useEffect } from 'react';

const useClicker = (initialCount=0) => {
  //стан для рахунку
  const [count, setCount] = useState(initialCount);

  //ефект для кліку на вікні
  useEffect(() => {
    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);
  //повертати рахунок
  return count;
};

export default useClicker;
