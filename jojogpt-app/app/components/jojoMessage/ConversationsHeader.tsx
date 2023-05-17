import useUserConversations from "@/app/hooks/useUserConversations";
import NewConvoButton from "./NewConvoButton";

const ConversationsHeader = () => {
  const {selectedConvo} = useUserConversations();
  return (
    <div
      className="
        flex
        flex-row-reverse
        justify-start
        gap-1
        h-[60px]
        items-center
        p-5
      "
    >
      <NewConvoButton/>
      {selectedConvo=== '' &&
      <div className="font-light text-neutral-300">
        Create a new conversation
      </div>
      }
    </div>
  )
};

export default ConversationsHeader;