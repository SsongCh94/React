import React from 'react'

function Box1({initCount}) {
    console.log('Box1 컴포넌트가 렌더링되었습니다.'); 

    const style = {
        width: '200px',
        height: '200px',
        backgroundColor: '#01c49f',
        color: 'white',
    }

  return (
    <div style={style}>
      <button onClick={() => {
        initCount()
      }}>초기화</button>
    </div>
  )
}

export default React.memo(Box1);