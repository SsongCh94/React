import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addNumber,
  minusNumber,
  __addNumber,
  __minusNumber,
} from "./redux/modules/counterSlice";

function App() {
  const globalNumber = useSelector((state) => state.counter.number);
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const onPlusButtonClickHandler = () => {
    // dispatch(addNumber(+number));
    dispatch(__addNumber(+number));
  };
  const onMinusButtonClickHandler = () => {
    // dispatch(minusNumber(+number));
    dispatch(__minusNumber(+number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <button onClick={onPlusButtonClickHandler}>더하기</button>
      <button onClick={onMinusButtonClickHandler}>빼기</button>
    </div>
  );
}

export default App;
