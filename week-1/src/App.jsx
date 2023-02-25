import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const minusButtonClickHandler = () => {
    count--
    setCount(count)
  }

  let totalStyle = {
    backgroundColor: "beige",
    width: "300px",
    height: "300px",
    margin: "100px",

    border: "10px solid green",
    borderRadius: "50%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div
      style={totalStyle}
    >
      {count} <br />
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          onClick={() => {
            count++;
            setCount(count);
          }}
        >
          +1
        </button>
        <button
          onClick={minusButtonClickHandler}
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default App;


/////////

/// css 바꾸기는 아직 안배웠다..... state 로 변경이 안된단다...
// 그 뭐냐 useRef 를 써야한단다..... 나중에 다시 해보자



// import React, { useState } from "react";

// function App() {
//   let [count, setCount] = useState(0);
  // let totalStyle = {
  //   backgroundColor: "beige",
  //   width: "300px",
  //   height: "300px",
  //   margin: "100px",

  //   border: "10px solid green",
  //   borderRadius: "50%",

  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // }

//   let [totalStyle, setTotalStyle] = useState({
//     backgroundColor: "beige",
//     width: "300px",
//     height: "300px",
//     margin: "100px",

//     border: "10px solid green",
//     borderRadius: "10px",

//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   });

//   return (
//     <div
//       style={totalStyle}
//     >
//       {count} <br />
//       <div
//         style={{
//           display: "flex",
//         }}
//       >
//         <button
//           onClick={() => {
//             count++;
//             setCount(count);
//           }}
//         >
//           +1
//         </button>
//         <button
//           onClick={() => {
//             count--;
//             setCount(count);
//             totalStyle.borderRadius += 10
//             // totalStyle.borderRadius
//             let styleAdd = {totalStyle}
//             console.log(totalStyle.borderRadius)
//           }}
//         >
//           -1
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;