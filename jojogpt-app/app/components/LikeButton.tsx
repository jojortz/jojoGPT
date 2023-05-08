'use client';

import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//import useFavorite from "../hooks/useFavorite";

interface LikeButtonProps {
  conversationId: string;
  currentUser?: SafeUser | null;
  active: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  conversationId,
  currentUser,
  active
}) => {
  // const {hasFavorited, toggleFavorite} = useFavorite({
  //   listingId,
  //   currentUser
  // });
  const hasFavorited = true;

  return (
    <>
    {
      active ? (
        <div
        onClick={() => { console.log('Liked!') }}
        className="
        hover:opacity-80
        transition
        cursor-pointer
        "
        >
          <AiOutlineHeart
            size={28}
            className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]
            "
            />
          <AiFillHeart
            size={24}
            className={
              hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'
            }
            />
        </div >
        ) : (
          <AiFillHeart
          size={24}
          className='fill-neutral-500/70'
          />
          )
        }
     </>
  )
};

export default LikeButton;