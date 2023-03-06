import React, { useContext } from 'react'
import { FamilyContext } from '../context/FamilyContext'

    const style = {
        color: 'red',
        fontWeight: '900',
    }

function Child() {

    const data = useContext(FamilyContext);
    console.log('data', data)

  return (
    <div> 
        나는 이 집안의 막내다 
        <br />
        할아버지가 우리 집안의 이름은 <span style={style}>{data.houseName}</span> 라고 했다. 
        <br />
        게다가 용돈도 <span style={style}>{data.pocketMoney}</span> 원을 줬다.
    </div>
  )
}

export default Child