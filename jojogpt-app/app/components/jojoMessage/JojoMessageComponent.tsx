'use client';

import { SafeUser } from "@/app/types";
import RecipientsBar from "./RecipientsBar";
import MessageContainer from "./MessageContainer";
import ComposeBar from "./ComposeBar";
import ConversationsBar from "./ConversationsBar";
import ConversationModal from "../modals/ConversationModal";
import DeleteConversationModal from "../modals/DeleteConversationModal";
import ConversationPostModal from "../modals/ConversationPostModal";
import useMessageView from "@/app/hooks/useMessageView";

interface JojoMessageComponentProps {
  currentUser: SafeUser | null;
}

const JojoMessageComponent: React.FC<JojoMessageComponentProps> = ({
  currentUser
}) => {
  const {messageView} = useMessageView();

  return (
    <div
      className="
        w-full
        border-[1px]
        rounded-xl
        sm:grid
        sm:grid-cols-[300px_minmax(400px,_1fr)]
        md:grid-cols-[400px_minmax(400px,_1fr)]
        mt-5
      "
    >
      <ConversationModal/>
      <DeleteConversationModal/>
      <ConversationPostModal/>
      <div className={`
        ${messageView && "hidden"}
        rounded-[inherit]
        sm:block
        sm:rounded-l-[inherit]
        sm:rounded-r-none
        bg-imessage-bg
        text-neutral-100
        h-[80vh]
        sm:h-[70vh]
        `}>
        <ConversationsBar />
      </div>
      <div
        className={`
        ${!messageView && "hidden"}
          sm:grid
          grid
          grid-rows-[50px_1fr_50px]
          h-[80vh]
          sm:h-[70vh]
          w-full
          bg-imessage-container
          rounded-[inherit]
          sm:rounded-r-[inherit]
          sm:rounded-l-none
          text-neutral-100
        `}
      >
        <RecipientsBar />
        <MessageContainer />
        <ComposeBar />
      </div>
    </div>
  )
};

export default JojoMessageComponent;