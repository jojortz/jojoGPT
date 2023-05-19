'use client';

import { SafePost, SafeUser } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LikeButton from "../LikeButton";

interface ConversationCardProps {
  data: SafePost;
  currentUser: SafeUser | null;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  data,
  currentUser
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/conversations/${data.id}`)}
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
            <LikeButton active={false} conversationId={data.id} currentUser={currentUser}/>
          </div>
        </div>
        <div className="font-light text-neutral-500">
          {currentUser?.name}
        </div>
      </div>
    </div>
  )
};

export default ConversationCard;