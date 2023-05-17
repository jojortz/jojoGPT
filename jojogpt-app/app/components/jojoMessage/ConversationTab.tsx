import Avatar from "../Avatar";
import { useCallback } from "react";
import useUserConversations from "@/app/hooks/useUserConversations";
import DeleteConvoButton from "./DeleteConvoButton";

interface ConversationTabProps {
  id: string,
  title: string;
  selected: boolean;
}

const ConversationTab: React.FC<ConversationTabProps> = ({
  id,
  title,
  selected,
}) => {
  const userConversations = useUserConversations();

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    userConversations.setSelectedConvo(e?.currentTarget?.id);
  }, [userConversations.setSelectedConvo]);

  return (
    <div
      onClick={onClick}
      id={id}
      className={`
        h-[50px]
        px-5
        m-2
        flex
        flex-row
        items-center
        align-center
        gap-5
        rounded-md
        ${ selected && 'bg-imessage-conversation'}
        cursor-pointer
        group
      `}
    >

      <Avatar />

      <div
        className={`
          ${!selected && 'border-b'}
          border-neutral-400
          pl-5
          w-full
          h-full
          flex
          items-center
        `}
      >
        {title}
      </div>
      {selected && <DeleteConvoButton />}
    </div >
  )
};

export default ConversationTab;