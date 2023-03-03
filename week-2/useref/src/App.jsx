import React, { useEffect, useRef, useState } from 'react'

function App() {

  const idRef = useRef('');
  const pwRef = useRef('');

  const [id, setId] = useState('');

  //화면이 렌더링 될 때 어떤 작업을 하고싶다 : useEffect
  useEffect(() =>{
    idRef.current.focus();
    if (idRef.current.value.length > 10) pwRef.current.focus(); 

    // console.log(idRef.current.value.length)       
  },[id])

  // onChange 에서 직접적으로 if (id.length >= 10) pwRef.current.focus();
  // 를 넣어줄 수도 있지만, 이렇게 할 시 id.length가 11이 되는 순간
  // pw 로 포커스되는 것을 볼 수 있다.
  // onChange 에서 setId 로 state 값을 바꿔줬지만, 함수 내부에서는 아직
  // state의 변화가 반영되기 전이라 그렇다.
  // 이러한 배치업데이트 방식을 염두에 두고 코드를 짜자.

  return (
    <>
    <div>
      아이디 : <input type="text" ref={idRef} value={id} onChange={(e)=>setId(e.target.value)} />
    </div>
    <div>
      비밀번호 : <input type="password" ref={pwRef}/>
    </div>
    </>
    
  )
}

export default App