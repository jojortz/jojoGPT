import Avatar from "../Avatar";
import { useCallback } from "react";
import useUserConversations from "@/app/hooks/useUserConversations";
import DeleteConvoButton from "./DeleteConvoButton";
import useMessageView from "@/app/hooks/useMessageView";
import { shallow } from 'zustand/shallow';
import stringToIntHash from "@/app/helpers/stringToIntHash";

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
  const { setSelectedConvo } = useUserConversations();
  const { messageView, setMessageView } = useMessageView(
    (state) => ({ messageView: state.messageView, setMessageView: state.setMessageView }),
    shallow
  )

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedConvo(e?.currentTarget?.id);
    setMessageView();
  }, [setSelectedConvo, setMessageView]);

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
        ${selected && 'bg-imessage-conversation'}
        cursor-pointer
        group
      `}
    >
      <div className="w-[45px]">
        <Avatar src={`/images/profile_pic_${stringToIntHash(id, 6, 0)}.jpg`}/>
      </div>
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