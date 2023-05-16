'use client';

import { SafeConversation, SafeUser } from "@/app/types";
import RecipientsBar from "./RecipientsBar";
import MessageContainer from "./MessageContainer";
import ComposeBar from "./ComposeBar";
import ConversationsBar from "./ConversationsBar";
import useUserConversations from "@/app/hooks/useUserConversations";
import { useEffect } from "react";
import getUserConversations from "@/app/actions/getUserConversations";
import ConversationModal from "../modals/ConversationModal";

interface JojoMessageComponentProps {
  currentUser: SafeUser | null;
}

const JojoMessageComponent: React.FC<JojoMessageComponentProps> = ({
  currentUser
}) => {

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
        text-neutral-100
      "
    >
      <ConversationModal/>
      <div className="hidden sm:block rounded-l-xl bg-imessage-bg">
        <ConversationsBar />
      </div>
      <div
        className="
          grid
          grid-rows-[50px_1fr_50px]
          h-[70vh]
          w-full
          bg-stone-700
          rounded-r-[inherit]
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