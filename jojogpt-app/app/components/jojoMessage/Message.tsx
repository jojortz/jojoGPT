import { SafeMessage } from "@/app/types";

interface MessageProps {
  message: SafeMessage;
}

const Message: React.FC<MessageProps> = ({
  message
}) => {
  return (
    <div
      key={message.id}
      className={`
        flex
        p-1
        rounded-sm
        ${message.sent ? 'flex-row-reverse' : 'flex-row'}
        ${message.sent ? 'bg-red':'bg-white'}
      `}
    >
      {message.body}
    </div>
  )
};

export default Message;