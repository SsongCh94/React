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

  let clickLikes = (idx) => {
    let newLikes = [...likes];
    newLikes[idx]++
    setLikes(newLikes)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {title.map((item, idx) => {
        return (
          <div className="list" key={idx}>
            <h4 onClick={() => setModal(!modal)}>{item}            
            <span onClick={() => clickLikes(idx)}>👍</span> {likes[idx]}
            </h4>
            <p>3월 2일 발행</p>
          </div>
        );
      })}

      {modal ? <Modal title={title} setTitle={setTitle}/> : null}
    </div>
  );
}



function Modal(props) {

  const changeTitle = () => {
    let newTitle = [...props.title];
    newTitle[0] = props.title[1];
    props.setTitle(newTitle)
  }

  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={changeTitle}>글수정</button>
    </div>
  );
}

export default App;
