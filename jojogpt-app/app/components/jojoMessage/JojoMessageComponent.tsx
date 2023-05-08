'use client';

import { Conversation, SafeUser } from "@/app/types";
import RecipientsBar from "./RecipientsBar";
import MessageContainer from "./MessageContainer";
import ComposeBar from "./ComposeBar";
import ConversationsBar from "./ConversationsBar";
import useUserConversations from "@/app/hooks/useUserConversations";
import { useEffect } from "react";
import getUserConversations from "@/app/actions/getUserConversations";

interface JojoMessageComponentProps {
  currentUser: SafeUser | null;
}

const JojoMessageComponent: React.FC<JojoMessageComponentProps> = ({
  currentUser
}) => {
  const userConversations = useUserConversations();
  const conversations = getUserConversations('1');

  useEffect(() => {
    userConversations.setSelectedConvo(conversations[0].id);
    userConversations.setConversations(conversations);
  }, [])

  return (
    <div
      className="
        w-full
        border-[1px]
        rounded-xl
        flex-auto
        sm:grid
        sm:grid-cols-[200px_minmax(400px,_1fr)]
        md:grid-cols-[300px_minmax(400px,_1fr)]
        mt-5
      "
    >
      <div className="hidden sm:block">
        <ConversationsBar />
      </div>
      <div
        className="
          flex
          flex-col
          h-full
          w-full
        "
      >
        <RecipientsBar title="Conversation 1"/>
        <MessageContainer />
        <ComposeBar />
      </div>
    </div>
  )
};

export default JojoMessageComponent;