import React from "react";
import Layout from "Layout";


//Children 용법


//children 기본 틀

// function App() {
//   return <User>안녕하세요!</User>;
// }

// function User(props) {
//   console.log('props', props)   //  {children: '안녕하세요!'}
//   return <div></div>;
// }

//////////////////////////////////

//응용방법 - 최상단에 import Layout from "Layout" 을 넣어 Layout.js 를 임포트


function App() {
  return (
    <Layout>
    <div>App 컴포넌트에서 보낸 값 입니다.</div>
  </Layout>
  );
}



export default App;
