'use client';

import useConversationModal from "@/app/hooks/useConversationModal";
import { FiEdit } from "react-icons/fi"
import IconButton from "../IconButton";
const NewConvoButton = () => {
  const conversationModal = useConversationModal();

  return (
    <IconButton
      icon={FiEdit}
      onClick={conversationModal.onOpen}
    />
  )
};

export default NewConvoButton;