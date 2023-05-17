'use client';

import useConversationPostModal from "@/app/hooks/useConversationPostModal";
import { CiShare1 } from "react-icons/ci"
import axios from "axios";
import { toast } from "react-hot-toast";
import * as htmlToImage from 'html-to-image';

const NewConvoPostButton = () => {

  const conversationPostModal = useConversationPostModal();
  const captureShot = () => {
    const element: any = document.querySelector<HTMLElement>("#capture");
    htmlToImage.toPng(element).then((dataUrl) => {
      return axios.post('/api/images', {
          imageData: dataUrl,
        })
    })
    .then((result) => {
      console.log('uploaded image', result.data.secure_url);
      conversationPostModal.setPhotoUrl(result.data.secure_url);
      conversationPostModal.onOpen();
    })
    .catch((err) => toast.error('Something went wrong'))
};

  return (
    <div
      className="
        cursor-pointer
        text-neutral-400
        rounded-md
        hover:bg-neutral-100
        hover:bg-opacity-25
        w-[30px]
        h-[30px]
        flex
        flex-row
        items-center
        justify-center
      "
      onClick={captureShot}
    >
      <CiShare1
        size={20}
        className="stroke-1"
      />
    </div>
  )
};

export default NewConvoPostButton;