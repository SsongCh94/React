import React, { useState } from "react";

function App() {
  const [obj, setObj] = useState({
    name: "ssong",
    age: 30,
  });

  return (
    <div>
      <div>{obj.name}</div>
      <div>{obj.age}</div>
      <button onClick={() => {
        //새로운 객체를 만들어줘야 한다.
        // obj의 name값을 chulhwan 으로 먼저 바꿔준다.
        obj.name = 'chulhwan';
        obj.age = '20 으로 회춘';
        //새로운 주소값으로 obj1 과 같은 객체를 만들어준다.
        const obj2 = {...obj};
        setObj(obj2);

        // obj.name = 'chulhwan';
        // setObj(obj)
      }}>클릭!</button>
    </div>
  );
}

export default App;
