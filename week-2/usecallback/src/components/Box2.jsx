import React from 'react'

function Box2() {
    console.log('Box2 컴포넌트가 렌더링되었습니다.');

    const style = {
        width: '200px',
        height: '200px',
        backgroundColor: '#4e93ed',
        color: 'white',
    }

  return (
    <div style={style}>Box1</div>
  )
}

export default React.memo(Box2);