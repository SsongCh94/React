import React from 'react'

function Box3() {
    console.log('Box3 컴포넌트가 렌더링되었습니다.');

    const style = {
        width: '200px',
        height: '200px',
        backgroundColor: '#c491be',
        color: 'white',
    }

  return (
    <div style={style}>Box1</div>
  )
}

export default React.memo(Box3);