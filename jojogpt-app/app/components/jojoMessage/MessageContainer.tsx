'use client';

import useUserConversations from "@/app/hooks/useUserConversations";

const MessageContainer = () => {
  const userConversations = useUserConversations();
  return (
    <div
      className="
        h-full
        border-y
        p-5
      "
    >
      {userConversations.conversations.find((item) => item.id === userConversations.selectedConvo)?.messages}
    </div>
  )
};

export default MessageContainer;