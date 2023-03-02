import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "남자 패딩 추천",
  ]);
  let [likes, setLikes] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {/* <div className="list">
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
        <h4 onClick={() => setModal(!modal)}>{title[2]}</h4>
        <p>3월 2일 발행</p>
      </div> */}

      {title.map((item, idx) => {
        return (
          <div className="list">
            <h4 onClick={() => setModal(!modal)}>{title[idx]}</h4>
            <p>3월 2일 발행</p>
          </div>
        );
      })}

      {modal ? <Modal /> : null}
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
