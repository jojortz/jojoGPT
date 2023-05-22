'use client';

import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiFillLike, AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import useLike from "../hooks/useLike";

interface LikeButtonProps {
  conversationPostId: string;
  currentUser?: SafeUser | null;
  active: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  conversationPostId,
  currentUser,
  active
}) => {
  const {hasLiked, toggleLike } = useLike({
    conversationPostId,
    currentUser
  });

  return (
    <>
    {
      active ? (
        <div
        onClick={toggleLike}
        className="
        hover:opacity-80
        transition
        cursor-pointer
        "
        >
          <AiOutlineLike
            size={28}
            className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]
            "
            />
          <AiFillLike
            size={24}
            className={
              hasLiked ? 'fill-theme-main' : 'fill-neutral-500/70'
            }
            />
        </div >
        ) : (
          <AiFillLike
          size={24}
          className='fill-neutral-500/70'
          />
          )
        }
     </>
  )
};

export default LikeButton;