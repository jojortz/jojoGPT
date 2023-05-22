'use client';

import useUserConversations from "@/app/hooks/useUserConversations";
import DeleteConvoButton from "./DeleteConvoButton";
import NewConvoPostButton from "./NewConvoPostButton";
import useMessageView from "@/app/hooks/useMessageView";
import BackButton from "./BackButton";

const RecipientsBar = () => {
  const { conversations, selectedConvo } = useUserConversations();
  const { messageView, setConvoView} = useMessageView();
  const convoTitle = conversations.find((item) => item.id === selectedConvo)?.title;
  return (
    <div
      className="
        row-span-1
        flex
        flex-row
        items-center
        justify-between
        px-5
        rounded-t-[inherit]
        sm:rounded-tl-none
        sm:rounded-tr-[inherit]
        bg-imessage-recipients
      "
    >
      <div className="flex flex-row items-center gap-1">
        { messageView && <div className="sm:hidden"><BackButton onClick={setConvoView}/></div>}
        {convoTitle}
      </div>
      {convoTitle && <NewConvoPostButton/>}
    </div>
  )
};

export default RecipientsBar;