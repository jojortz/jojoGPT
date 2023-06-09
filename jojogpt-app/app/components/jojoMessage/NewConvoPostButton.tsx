'use client';

import useConversationPostModal from "@/app/hooks/useConversationPostModal";
import { CiShare1 } from "react-icons/ci"
import axios from "axios";
import { toast } from "react-hot-toast";
import * as htmlToImage from 'html-to-image';
import IconButton from "../IconButton";

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
    <IconButton
      icon={CiShare1}
      onClick={captureShot}
    />
  )
};

export default NewConvoPostButton;