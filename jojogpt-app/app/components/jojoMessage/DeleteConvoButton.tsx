'use client';

import useDeleteConversationModal from "@/app/hooks/useDeleteConversationModal";
import { IoCloseSharp } from "react-icons/io5";
const DeleteConvoButton = () => {
  const deleteConversationModal = useDeleteConversationModal();

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
      onClick={deleteConversationModal.onOpen}
    >
      <IoCloseSharp
        size={20}
        className="stroke-1"
      />
    </div>
  )
};

export default DeleteConvoButton;