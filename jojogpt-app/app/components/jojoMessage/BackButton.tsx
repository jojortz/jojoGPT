'use client';

import useConversationPostModal from "@/app/hooks/useConversationPostModal";
import { IoIosArrowBack } from "react-icons/io";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick
}) => {

  const conversationPostModal = useConversationPostModal();

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
      onClick={onClick}
    >
      <IoIosArrowBack
        size={20}
        className="stroke-1"
      />
    </div>
  )
};

export default BackButton;