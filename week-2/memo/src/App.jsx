import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Home>
        <h1>카운트 예제입니다!</h1>
        현재 카운트 : {count}
      <div>
        <Button onClick={() => setCount((item) => item + 1)}> + </Button>
        <Button onClick={() => setCount((item) => item - 1)}> - </Button>
      </div>
      <BoxList>
        <Box BgColor={"green"} text={"greenBox"} />
        <Box BgColor={"blue"} text={"blueBox"} />
        <Box BgColor={"red"} text={"redBox"} />
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
    width: 100%;
    height: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `;

  const Button = styled.button`
    width: 50px;
    height: 50px;
    margin-left: 20px;
  `


export default App;
