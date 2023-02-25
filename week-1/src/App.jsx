import React from 'react'
import Child from 'Child'

// function App() {
//   //구조분해할당!
  
//   const testObj = {
//     name: 'ssong',
//     age: '30',
//     company: 'Sparta'
//   }

//   const {name, age, company} = testObj;
  
//   console.log('name', name)
//   console.log('age', age)
//   console.log('company', company)

//   return <div>App</div>
// }

function App() {
  const name = 'test';

  return <Child age={30} name={name}>이름</Child>
}

export default App

