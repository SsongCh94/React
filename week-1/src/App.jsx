import React, { useState } from "react";

// function App() {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div>
//       아이디 : <input
//       type={'text'}
//       value={id}
//       onChange={function(event){
//         setId(event.target.value)
//       }}
//       />
//       <br />
//       비밀번호 : <input
//       type={'password'}
//       value={password}
//       onChange={function(event){
//         setPassword(event.target.value)
//       }}
//       />
//       <br />
//       <button onClick={function (){
//         alert('입력된 아이디 {id} 입력된 비번 {password}')
//       }}>로그인</button>
//     </div>
//   );
// }

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };

  const onPwChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div>
        아이디 : <input type={"text"} value={id} onChange={onIdChangeHandler} />
      </div>
      <div>
        비밀번호 :{" "}
        <input
          type={"password"}
          value={password}
          onChange={onPwChangeHandler}
        />
      </div>

      <button
        onClick={() => {
          alert(`입력된 아이디 ${id}, 입력된 비번 ${password}`);
          setId('');
          setPassword('');
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default App;
