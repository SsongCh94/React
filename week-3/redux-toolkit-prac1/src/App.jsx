import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addNumber, minusNumber } from "./redux/modules/counter";

function App() {
  const { number } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onPlusButtonClickHandler = () => {
    dispatch(addNumber(1));
  };
  const onMinusButtonClickHandler = () => {
    dispatch(minusNumber(1));
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
    </>
  );
}

export default App;
