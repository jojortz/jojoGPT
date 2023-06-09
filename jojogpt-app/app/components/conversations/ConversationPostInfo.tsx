import { SafeUser } from "@/app/types";
import LikeButton from "../LikeButton";
import Avatar from "../Avatar";

interface ConversationPostInfoProps {
  author: string | null | undefined;
  image: string | null | undefined;
  description: string;
  likes: string[];
  conversationPostId: string;
  currentUser: SafeUser | null;
}

const ConversationPostInfo: React.FC<ConversationPostInfoProps> = ({
  author,
  image,
  description,
  likes,
  conversationPostId,
  currentUser,
}) => {
  return (
    <div className="flex flex-col gap-5 pt-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="font-semibold">
            Posted by {author}
          </div>
          <Avatar src={image}/>
        </div>
        <div className="flex flex-row gap-1 text-lg">
          <div>
            {likes.length}
          </div>
          <LikeButton
            conversationPostId={conversationPostId}
            currentUser={currentUser}
            active
          />
        </div>
      </div>
      <div>{description}</div>
    </div>
  )
};

export default ConversationPostInfo;