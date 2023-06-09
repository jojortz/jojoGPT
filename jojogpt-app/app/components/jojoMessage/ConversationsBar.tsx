'use client';

import ConversationTab from "./ConversationTab";
import ConversationsHeader from "./ConversationsHeader";
import useUserConversations from "@/app/hooks/useUserConversations";

const ConversationsBar = () => {
  const userConversations = useUserConversations();

  return (
    <div
      className="
        w-full
        h-full
        sm:border-r
        sm:border-black
        flex
        flex-col
        pb-4
      "
    >
      <ConversationsHeader />
      <div className="overflow-y-auto flex-grow">
        {
          userConversations.conversations.map((item) => (
            <ConversationTab id={item.id} key={item.id} title={item.title} selected={userConversations.selectedConvo === item.id} />
          ))
        }
      </div>
    </div>
  )
};

export default ConversationsBar;