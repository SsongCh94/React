import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { plusOne, minusOne } from './redux/modules/counter';


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
      dispatch(plusOne()) 
    }}>+</button>

    <button onClick={()=>{
      dispatch(minusOne())
    }}>-</button>
    
    </>
    
  );
}

export default App;
