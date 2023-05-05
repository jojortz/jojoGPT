'use client';

import useUserConversations from "@/app/hooks/useUserConversations";

interface RecipientsBarProps {
  title: string;
}

const RecipientsBar: React.FC<RecipientsBarProps> = ({
  title = "New Conversation"
}) => {
  const userConversations = useUserConversations();
  return (
    <div
      className="
        h-[80px]
        flex
        flex-row
        items-center
        pl-5
      "
    >
      {userConversations.conversations.find((item) => item.id === userConversations.selectedConvo)?.title}
    </div>
  )
};

export default RecipientsBar;