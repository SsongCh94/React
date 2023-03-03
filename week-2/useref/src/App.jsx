import { useRef, useState } from "react";
import "./App.css";

const style = { border: "1px solid black", margin: "10px", padding: "10px" };

function App() {
  // const ref = useRef('초기값');
  // console.log('ref', ref);  // 객체형으로 { current : '초기값'} 으로 나온다.

  // ref.current = '변경값';
  // console.log('ref2', ref); // { current : '변경값'}

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusState = () => {
    setCount(count + 1);
  };
  const plusRef = () => {
    countRef.current++;
    console.log(countRef.current)
  };

  return (
    <>
      <div style={style}> 
        state 영역입니다. {count} <br />
        <button onClick={plusState}>state 증가</button>
      </div>
      <div style={style }>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRef}>ref 증가</button>
      </div>
    </>
  );
}

export default App;
