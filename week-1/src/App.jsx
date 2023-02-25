import React from 'react'

function App() {
  
  // hook
  // useState('initial Value');
  // --> [state, setState]

  // const [state, setState] = useState('initial Value');

  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
 

  return (
    <div>STATE에 대해서</div>
  )
}

export default App