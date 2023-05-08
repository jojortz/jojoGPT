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
        border-r
      "
    >
      <ConversationsHeader/>
      {
        userConversations.conversations.map((item) => (
          <ConversationTab id={item.id} title={item.title} selected={userConversations.selectedConvo === item.id}/>
        ))
      }
    </div>
  )
};

export default ConversationsBar;