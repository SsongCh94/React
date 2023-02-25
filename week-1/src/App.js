import React from "react";

function App() {
  const number = 1;

  const pTagStyle = {
    color: 'red',
  };

  const arr = [1, 2, 3, 4, 5];
  const arr1 = arr.map(x => x+1);


  return (
    <div>
      <p style = {pTagStyle}>안녕하세요 리액트입니다.</p>
      {/* 주석을 사용하는 방법 */}
      {/* 삼항 연산자 사용 */}
      <p style ={pTagStyle}>
        {number > 10 ? number + "은 10보다 크다." : number + "은 10보다 작다."}
      </p>
      <p>{arr}</p>
      <p>{arr1}</p>
    </div>
  );
}

export default App;
