'use client';

import { useCallback } from "react";
import ConversationTab from "./ConversationTab";
import ConversationsHeader from "./ConversationsHeader";
import useUserConversations from "@/app/hooks/useUserConversations";

const ConversationsBar = () => {
  const userConversations = useUserConversations();

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    userConversations.setSelectedConvo(e?.currentTarget?.id);
  }, [userConversations.setSelectedConvo])

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
          <ConversationTab id={item.id} title={item.title} selected={userConversations.selectedConvo === item.id} onClick={onClick}/>
        ))
      }
    </div>
  )
};

export default ConversationsBar;