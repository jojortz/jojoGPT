import { SafeUser } from "@/app/types";
import LikeButton from "../LikeButton";

interface ConversationPostInfoProps {
  author: string | null | undefined;
  description: string;
  likes: string[];
  conversationId: string;
  currentUser: SafeUser | null;
}

const ConversationPostInfo: React.FC<ConversationPostInfoProps> = ({
  author,
  description,
  likes,
  conversationId,
  currentUser,
}) => {
  return (
    <div className="flex flex-col gap-5 pt-5">
      <div className="flex flex-row items-center justify-between">
        <div className="font-semibold">
          Posted by {author}
        </div>
        <div className="flex flex-row gap-1 items-center">
          <LikeButton
            conversationId={conversationId}
            currentUser={currentUser}
            active
            />
            <div>
              {likes.length}
            </div>
        </div>
      </div>
      <div>{description}</div>
    </div>
  )
};

export default ConversationPostInfo;