const MessageBubble = ({ message }) => {
  return (
    <div>Content: {message.text}| Type {message.type}</div>
  )
}

export default MessageBubble;