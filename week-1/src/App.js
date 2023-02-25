import React from "react";


//props 라는 이름으로 input 을 받아서 위에서 내려온 데이터를 전달받는다.
//props 를 객체 형태로 전달받게 된다.
function Son(props) {
  console.log('props', props)
  return <button>{props.gfName}의 손자이다.</button>;
}

//부모컴포넌트에서 자식컴포넌트로 데이터를 전달했다.
function Father(p) {
  const name = '송아빠';
  const gfName = p.grandFatherName;
  console.log('p', p)
  return <Son gfName={gfName}/>;
}

function GrandFather() {
  const name = '송할배';
  return <Father grandFatherName={name}/>;
}

function App() {
  return (
    <div>
      <GrandFather />
    </div>
  );
}

export default App;
