import styled from 'styled-components'

const message_ht = "40";

const MessageContainer = styled.div`
width: 100%;
height: ${message_ht*1.2}px;
display: flex;
flex-direction:  ${props => props.type === 'sent' ? "row-reverse" : "row"};
padding: 5px 10px;
`
const Message = styled.div`
width: fit-content;
height = ${message_ht}px;
position: relative;
background-color: ${props => props.type === 'sent' ? "blue" : "red"};
border-radius: ${message_ht/2}px;
padding: 10px;
`

const MessageBubble = ({ message }) => {
  return (
    <MessageContainer type={message.type}>
      <Message type={message.type}>Content: {message.text}| Type {message.type}</Message>
    </MessageContainer>
  )
}

export default MessageBubble;