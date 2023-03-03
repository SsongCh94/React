import "./App.css";
import styled from "styled-components";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;

  background-color: ${(props)=>props.backgroundColor};
`;

function App() {
  return (
    <>
    <StBox borderColor='red' backgroundColor='beige'>빨간박스</StBox>
    <StBox borderColor='blue' backgroundColor='grey'>파란박스</StBox>
    <StBox borderColor='green' backgroundColor='yellow'>초록박스</StBox>
    </>
  );
}

export default App;
