import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState("");
  const [contents, setContents] = useState("");
  // TODO: 조회 함수
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    console.log("data", todos);
    setTodos(data);
  };
  // TODO: 추가 함수
  const onSubmitHandler = async () => {
    axios.post("http://localhost:3001/todos", inputValue);
    // setTodos([...todos, inputValue]);
    fetchTodos();
  };
  // TODO: 삭제 함수
  const onDeleteButtonClickHandler = async (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };
  // TODO: 수정 함수
  const onUpdateButtonClickHandler = async () => {
    axios.patch(`http://localhost:3001/todos/${targetId}`, {
      title: contents,
    });

    setTodos(
      todos.map((item) => {
        if (item.id == targetId) {
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    // db로부터 값을 가져올 것이다.
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        {/* 수정 영역 */}
        <input
          type="text"
          placeholder="수정할 아이디"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
        />
        <input
          type="text"
          placeholder="수정할 내용"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button onClick={onUpdateButtonClickHandler}>수정</button>
        <br />
        <br />
      </div>
      <div>
        {/* input 영역 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler();
            // 버튼 클릭 시, input 에 들어있는 값(state) 를 이용하여 DB에 저장(post) 요청
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                title: e.target.value,
              });
            }}
          />
          <button>추가</button>
        </form>
      </div>
      <div>
        {/* 데이터 영역 */}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              &nbsp;
              <button onClick={() => onDeleteButtonClickHandler(item.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
