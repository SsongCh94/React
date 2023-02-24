import React from "react";

function GrandFather() {
  return (
    <div>
      <div>자식 부른 아빠 부른 할아버지다.</div>
      <Father />
    </div>
  );
}

function Father() {
  return (
    <div>
      <div>자식 부른 아빠다.</div>
      <Son />
    </div>
  );
}

function Son() {
  return <button>자식이다.</button>;
}

function App() {
  return (
    <div>
      <GrandFather />
    </div>
  );
}

export default App;
