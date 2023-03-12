import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { __getTodos } from "./redux/modules/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  if {
    
  }

  return <div>{}</div>;
}

export default App;
