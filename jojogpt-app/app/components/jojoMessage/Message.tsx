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
        ${message.sent ? 'flex-row-reverse' : 'flex-row'}
        ${message.sent ? 'pl-[100px]' : 'pr-[100px]'}
        p-1
        text-neutral-100
      `}
    >
        <div
      key={message.id}
      className={`
        px-5
        py-3
        rounded-3xl
        w-fit
        h-fit
        ${message.sent ? 'bg-imessage-sent':'bg-imessage-received'}
        text-white
      `}
    >

      {message.body}
    </div>
    </div>
  )
};

export default Message;