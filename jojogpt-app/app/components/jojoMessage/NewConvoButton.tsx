'use client';

import useConversationModal from "@/app/hooks/useConversationModal";
import { FiEdit } from "react-icons/fi"
const NewConvoButton = () => {
  const conversationModal = useConversationModal();

  return (
    <div
      className="cursor-pointer text-neutral-500 hover:text-neutral-400"
      onClick={() => {console.log('New Convo');
      conversationModal.onOpen();
    }}
    >
      <FiEdit
        size={20}
        className="stroke-1"
      />
    </div>
  )
};

export default NewConvoButton;