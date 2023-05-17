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
        ${message.sent ? 'md:pl-[150px]' : 'md:pr-[150px]'}
        ${message.sent ? 'lg:pl-[200px]' : 'lg:pr-[200px]'}
        ${message.sent ? 'xl:pl-[300px]' : 'xl:pr-[300px]'}
        ${message.sent ? '2xl:pl-[400px]' : '2xl:pr-[400px]'}
        p-1
        text-neutral-100
        w-max-[300px]
      `}
    >
        <div
      key={message.id}
      className={`
        p-3
        rounded-3xl
        w-fit
        h-fit
        ${message.sent ? 'bg-imessage-sent':'bg-imessage-received'}
        text-sm
        text-white
      `}
    >

      {message.body}
    </div>
    </div>
  )
};

export default Message;