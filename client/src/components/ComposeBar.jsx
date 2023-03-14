import styled from 'styled-components'
import React, { useState } from 'react'

const inputHeight = 25;

const ComposeBarContainer = styled.div`
width: 100%;
height: 40px;
border-top: 1pt solid ${({ theme }) => theme.borderColor};
flex: 0 1 50px;
padding: 10px;
`
const Input = styled.input`
margin-left: 5px;
width:90%;
height: ${inputHeight}px;
border-radius: ${inputHeight / 2}px;
border: 1pt solid ${({ theme }) => theme.borderColor};
padding: 0 10px;
`

const ComposeBar = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  }

  return (
    <ComposeBarContainer>
      <form onSubmit={handleSubmit}>
        <Input value={message} onChange={e => {
            e.preventDefault();
            setMessage(e.target.value);
          }}/>
      </form>
    </ComposeBarContainer>
  )
};

export default ComposeBar;