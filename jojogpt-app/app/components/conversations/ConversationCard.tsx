'use client';

import { ConversationPost } from "@/app/types";
import Image from "next/image";

interface ConversationCardProps {
  data: ConversationPost;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  data
}) => {
  return (
    <div
      onClick={() => console.log(`clicked convo card ${data.id}`)}
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
            src={data.imgSrc}
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

        <div className="text-neutral-500 text-lg">
          {data.likes.length}
        </div>
        </div>
        <div className="font-light text-neutral-500">
          {data.author}
        </div>
      </div>
    </div>
  )
};

export default ConversationCard;