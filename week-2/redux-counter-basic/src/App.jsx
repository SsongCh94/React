import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { plusN, minusN } from './redux/modules/counter';

function App() {
  const [number, setNumber] = useState(0);

  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
  // useSelector
  const counter = useSelector((state) => {
    return state.counter;
  });

  // dispatch를 가져와보자.
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          type='number'
          value={number}
          onChange={(event) => {
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>

      <button
        onClick={() => {
          dispatch(plusN(number));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
