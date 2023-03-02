import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "남자 패딩 추천",
  ]);
  let [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {/* <button onClick={() => {
        let newTitle = [...title];
        newTitle[0] = '여자 코트 어쩌구저쩌구';
        setTitle(newTitle)
      }}>제목바꾸기</button>

      <button onClick={() => {
        let newTitle = [...title];
        setTitle(newTitle.sort())
      }}> 가나다 정렬 </button> */}

      <div className="list">
        <h4>
          {title[0]} <span onClick={() => setLikes(likes++)}>👍</span> {likes}{" "}
        </h4>
        <p>3월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>3월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>3월 2일 발행</p>
      </div>

      <Modal />

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
