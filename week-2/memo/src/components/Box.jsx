import React from 'react'
import styled from 'styled-components'


  const StBox = styled.div`
        width: 200px;
        height: 200px;

        background-color: ${(props) => props.borderColor};
        border: 1px solid green;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
    `

function Box({BgColor, text}) {


  return (
    <StBox borderColor={BgColor}>{text}</StBox>
  )
}

export default Box