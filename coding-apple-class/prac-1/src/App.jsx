import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "남자 패딩 추천",
  ]);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);

  let clickLikes = (idx) => {
    let newLikes = [...likes];
    newLikes[idx]++;
    setLikes(newLikes);
  };

  let clickTitle = (idx) => {
    setModal(!modal);
    setModalTitle(idx)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {title.map((item, idx) => {
        return (
          <div className="list" key={idx}>
            <h4 onClick={()=>clickTitle(idx)}>
              {item}
              <span onClick={() => clickLikes(idx)}>👍</span> {likes[idx]}
            </h4>
            <p>3월 2일 발행</p>
          </div>
        );
      })}

      {modal ? <Modal title={title} modalTitle={modalTitle}/> : null}
    </div>
  );
}

function Modal({ title, modalTitle }) {
  return (
    <div className="modal">
      <h4>{title[modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
