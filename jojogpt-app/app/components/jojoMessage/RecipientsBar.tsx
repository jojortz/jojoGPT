'use client';

import useUserConversations from "@/app/hooks/useUserConversations";
import DeleteConvoButton from "./DeleteConvoButton";

const RecipientsBar = () => {
  const { conversations, selectedConvo } = useUserConversations();
  const convoTitle = conversations.find((item) => item.id === selectedConvo)?.title
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
      <div>
        {convoTitle}
      </div>
      {convoTitle &&
        <div>
          <DeleteConvoButton />
        </div>
      }
    </div>
  )
};

export default RecipientsBar;