import styled from "styled-components"
import MessageBubble from "./MessageBubble.jsx"

const MessageBoxContainer = styled.div`
width: 100%;
border: 1pt solid red;
flex: 1 1 auto;
display: flex;
flex-direction: column-reverse;
overflow: scroll;
`
const MessageBox = () => {
  let messages = [
    {text: "a",
    type: "sent"},
    {text: "bbbbbb",
    type: "received"},
    {text: "ffffff",
    type: "sent"},
    {text: "a",
    type: "sent"},
    {text: "bbbbbb",
    type: "received"},
    {text: "ffffff",
    type: "sent"},
    {text: "a",
    type: "sent"},
    {text: "bbbbbb",
    type: "received"},
    {text: "ffffff",
    type: "sent"},
    {text: "a",
    type: "sent"},
    {text: "bbbbbb",
    type: "received"},
    {text: "ffffff",
    type: "sent"},
  ];
  return (
    <MessageBoxContainer>
      {messages.map((message, i) =>
        (<MessageBubble key={i} message={message}/>)
      )}
    </MessageBoxContainer>
  )
};

export default MessageBox;