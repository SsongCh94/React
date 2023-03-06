import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

    // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다.
    // useSelector
    const counter = useSelector((state) => {
      return state.counter;
    });

    // dispatch를 가져와보자.
    const dispatch = useDispatch();

    console.log('counter ->', counter.number)

  return (
    <>
    <div>현재 카운트 : {counter.number}</div>
    <button onClick={()=> {
      // counter + 1 해주는 로직
      dispatch({
        type:'PLUS_ONE',
      })
    }}>+</button>
    <button onClick={()=>{
      dispatch({
        type:'MINUS_ONE',
      })
    }}>-</button>
    </>
    
  );
}

export default App;
