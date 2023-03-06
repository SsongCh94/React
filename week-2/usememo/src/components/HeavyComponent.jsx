import React, { useMemo, useState } from "react";

function HeavyComponent() {

    const [count, setCount] = useState(0);

    const heavyWork = () => {
        for(let i = 0; i < 10000000; i++) {}
        return 100;
    };

    const value = useMemo(() => heavyWork(), []);
    console.log(`value는 ${value} 입니다.`)

  return (
    <>
      <p>나는 엄청 무거움 컴포넌트다.</p>
      <button onClick={() => setCount(count + 1)}>누르면 아래 count가 올라간다.</button><br />
      {count}
    </>
  );
}

export default HeavyComponent;
