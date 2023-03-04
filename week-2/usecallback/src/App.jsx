import { useCallback, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";


function App() {
  console.log('App 컴포넌트가 렌더링되었습니다.');
  const [count, setCount] = useState(0);

  // 1 증가
  const onPlusButtonClickHandler = () => {
    setCount((value) => value + 1)
  };

  // 1 감소
  const onMinusButtonClickHandler = () => {
    setCount((value) => value - 1)
  };

  // count를 초기화해주는 함수
  const initCount = useCallback(() => {
    console.log(`${count} 에서 0으로 변경되었습니다.`)
    setCount((value) => value = 0)
  }, [count]);

  return (
    <Home>
        <h1>카운트 예제입니다!</h1>
        <p>현재 카운트 : {count}</p>
      <div>
        <Button onClick={onPlusButtonClickHandler}> + </Button>
        <Button onClick={onMinusButtonClickHandler}> - </Button>
      </div>
      <BoxList>
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </BoxList>

    </Home>
  );
}


  const BoxList = styled.div`
    width: 800px;
    height: 500px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border: 6px solid black;
    border-radius: 20px;
  `;

  const Home = styled.div`
    width: 900px;
    height: 800px;

    margin: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    border: 6px solid green;
    border-radius: 20px;
  `;

  const Button = styled.button`
    width: 50px;
    height: 50px;
    margin-left: 20px;
  `


export default App;
