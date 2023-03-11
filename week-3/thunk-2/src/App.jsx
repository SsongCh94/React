import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { __getTodos } from "./redux/modules/todoSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
}

export default App;
