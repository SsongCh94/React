import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { __getTodos } from "./redux/modules/todoSlice";

function App() {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return <div> Thunk Self</div>;
}

export default App;
