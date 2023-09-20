import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import CardUser from '../../components/CardSection/CardUser';
import LearnHooks from '../../components/LearnHooks';
import StopWatchHooks from '../../components/StopWatchHooks';
import { ThemeContext } from '../../contexts';
import { THEMES } from '../../constants';

const styleMap = {
  [THEMES.LIGHT]: { backgroundColor: '#eee', color: '#222' },
  [THEMES.DARK]: { backgroundColor: '#222', color: '#eee' },
};

const handleCalcValue = (value) => {
  for (let i = 0; i < 50000; i++) {
    for (let j = 0; j < 50000; j++) {
      const res = i * j;
    }
  }
  return value ** 120;
};

const Home = (props) => {
  const [valueInput, setValueInput] = useState(10);
  const [valueInput2, setValueInput2] = useState(100);
  const [theme] = useContext(ThemeContext);
  const handleValue = useCallback(({ target: { value } }) => {
    setValueInput(value);
  }, []);
  const handleValue2 = ({ target: { value } }) => {
    setValueInput2(value);
  };

  const handleLogValue = useCallback(() => {
    for (let i = 0; i < 50000; i++) {
      for (let j = 0; j < 5; j++) {
        const res = i * j;
      }
    }
    console.log(valueInput);
  }, [valueInput]);

  const showCalcValueInput = useMemo(
    () => handleCalcValue(valueInput),
    [valueInput]
  );

  console.log('render');

  useEffect(() => {
    console.log('create handleLogValue');
  }, [handleLogValue]);
  return (
    <div style={styleMap[theme]}>
      <h1>'Home':'Домашня'</h1>
      <h2>
        value = {valueInput}&nbsp;
        <input type="range" value={valueInput} onChange={handleValue} />
        &nbsp;
        <button onClick={handleLogValue}>log value</button>
        <p>calc value = {showCalcValueInput}</p>
      </h2>
      <input type="range" value={valueInput2} onChange={handleValue2} />
      <StopWatchHooks />
      <LearnHooks />
      <CardUser />
    </div>
  );
};

export default Home;
