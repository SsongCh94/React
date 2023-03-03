import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");


  //clean up 기능
  useEffect(() => {
    console.log(`hello useEffect! : ${value}`);

    return () => {
      console.log('나 사라져요')
    };
  },[value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
