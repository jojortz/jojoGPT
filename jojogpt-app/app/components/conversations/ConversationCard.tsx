'use client';

import { SafePost, SafeUser } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LikeButton from "../LikeButton";
import Avatar from "../Avatar";

interface ConversationCardProps {
  data: SafePost;
  currentUser: SafeUser | null;
  onClick?: () => void;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  data,
  currentUser,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="
        col-span-1 cursor-pointer group
      "
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square
            w-full
            relative
            overflow-hidden
            rounded-xl
          "
        >
          <Image
            fill
            alt="Listing"
            src={data.imageSrc}
            className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="font-semibold text-lg">
            {data.title}
          </div>

          <div className="flex flex-row gap-1">
            <div className="text-neutral-500 text-lg">
              {data.likeIds.length}
            </div>
            <LikeButton active={false} conversationPostId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Avatar src={data.user.image} />
          <div className="font-light text-neutral-500">
            {data.user.name}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ConversationCard;