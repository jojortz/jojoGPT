import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../types";

import useLoginModal from "./useLoginModal";

interface IUseLike {
  conversationPostId: string;
  currentUser?: SafeUser | null;
}

const useLike = ({
  conversationPostId,
  currentUser,
}: IUseLike) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = currentUser?.likeIds || [];

    return list.includes(conversationPostId);
  }, [currentUser, conversationPostId]);

  const toggleLike = useCallback(async (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasLiked) {
        request = () => axios.delete(`/api/likes/${conversationPostId}`)
      } else {
        request = () => axios.post(`/api/likes/${conversationPostId}`)
      }

      await request();
      router.refresh();
      toast.success(`${hasLiked ? 'Unliked' : 'Liked'}`);
    } catch (error) {
      toast.error('Something went wrong.')
    }
  }, [
    currentUser,
    hasLiked,
    conversationPostId,
    loginModal,
    router
  ]);

  return {
    hasLiked,
    toggleLike,
  }
}

export default useLike;