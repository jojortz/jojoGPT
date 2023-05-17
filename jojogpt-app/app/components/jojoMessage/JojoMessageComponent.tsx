'use client';

import { SafeUser } from "@/app/types";
import RecipientsBar from "./RecipientsBar";
import MessageContainer from "./MessageContainer";
import ComposeBar from "./ComposeBar";
import ConversationsBar from "./ConversationsBar";
import ConversationModal from "../modals/ConversationModal";
import DeleteConversationModal from "../modals/DeleteConversationModal";
import ConversationPostModal from "../modals/ConversationPostModal";

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
        sm:grid
        sm:grid-cols-[200px_minmax(400px,_1fr)]
        md:grid-cols-[300px_minmax(400px,_1fr)]
        mt-5
      "
    >
      <ConversationModal/>
      <DeleteConversationModal/>
      <ConversationPostModal/>
      <div className="hidden sm:block rounded-l-[inherit] bg-imessage-bg text-neutral-100">
        <ConversationsBar />
      </div>
      <div
        className="
          grid
          grid-rows-[50px_1fr_50px]
          h-[70vh]
          w-full
          bg-imessage-container
          rounded-[inherit]
          sm:rounded-r-[inherit]
          sm:rounded-l-none
          text-neutral-100
        "
      >
        <RecipientsBar />
        <MessageContainer />
        <ComposeBar />
      </div>
    </div>
  )
};

export default JojoMessageComponent;