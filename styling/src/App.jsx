import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./components/User";


function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  //추가버튼 클릭
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 이놈 : { id: 1, age: 30, name: "송중기" }, 를 만든다.
    // 2. 배열에 더해준다.
    const newUser = {
      id: users.length + 1,
      age,
      name,
    };

    setUsers([...users, newUser]);
  };

  // 삭제 버튼 클릭(x)
  const clickRemoveButtonHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <div>
        이름 :&nbsp;
        <input value={name} onChange={nameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <Button clickAddButtonHandler = {clickAddButtonHandler}>추가</Button>
      </div>
      <div className="app-style">
        {users.map((item) => {
          return (
            <User
              key={item.id}
              item={item}
              removeFunction={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
};




export default App;
