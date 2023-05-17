'use client';

import useConversationModal from "@/app/hooks/useConversationModal";
import { FiEdit } from "react-icons/fi"
const NewConvoButton = () => {
  const conversationModal = useConversationModal();

  return (
    <div
      className="
        cursor-pointer
        text-neutral-400
        rounded-md
        hover:bg-neutral-100
        hover:bg-opacity-25
        w-[30px]
        h-[30px]
        flex
        flex-row
        items-center
        justify-center
      "
      onClick={conversationModal.onOpen}
    >
      <FiEdit
        size={20}
        className="stroke-1"
      />
    </div>
  )
};

export default NewConvoButton;