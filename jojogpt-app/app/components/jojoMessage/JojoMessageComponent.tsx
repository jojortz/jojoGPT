'use client';

import { Conversation, SafeUser } from "@/app/types";
import RecipientsBar from "./RecipientsBar";
import MessageContainer from "./MessageContainer";
import ComposeBar from "./ComposeBar";
import ConversationsBar from "./ConversationsBar";
import useUserConversations from "@/app/hooks/useUserConversations";
import { useEffect } from "react";

const test_conversations: Conversation[] = [
  {
    id: '1',
    title: "Convo1",
    messages: "FROM:\nHey what's up??"
  },
  {
    id: '2',
    title: "Convo2",
    messages: "FROM:\nI'll be home at 8 :)"
  },
  {
    id: '3',
    title: "Convo3",
    messages: "FROM:\nThat's a good idea!"
  },
]

interface JojoMessageComponentProps {
  currentUser: SafeUser | null;
}

const JojoMessageComponent: React.FC<JojoMessageComponentProps> = ({
  currentUser
}) => {
  const userConversations = useUserConversations();

  useEffect(() => {
    userConversations.setSelectedConvo(test_conversations[0].id);
    userConversations.setConversations(test_conversations);
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