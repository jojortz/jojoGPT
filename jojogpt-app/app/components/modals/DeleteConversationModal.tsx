'use client';

import useDeleteConversationModal from "@/app/hooks/useDeleteConversationModal";
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";
import useUserConversations from "@/app/hooks/useUserConversations";
import useMessages from "@/app/hooks/useMessages";

const DeleteConversationModal = () => {
  const deleteConversationModal = useDeleteConversationModal();
  const [isLoading, setIsLoading] = useState(false);
  const { conversations, selectedConvo, setConversations, setSelectedConvo } = useUserConversations();
  const {setMessages} = useMessages();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
  })

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setIsLoading(true);
    console.log('Deleting convo');
    axios.delete(`/api/conversations/${selectedConvo}`)
      .then((response) => {
        toast.success('Conversation deleted!');
        const newConversations = conversations.filter((convo) => convo.id !== selectedConvo);
        if (newConversations.length > 0) {
          setConversations(newConversations)
          setSelectedConvo(newConversations[0].id)
        } else {
          setConversations([]);
          setSelectedConvo('');
          setMessages([]);
        }
        console.log('Deleted convo')
        deleteConversationModal.onClose();
      })
      .catch((err) => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Delete Conversation"
      />
      <div className="flex flex-row text-lg gap-1">Are you sure you want to delete <div className="font-semibold">
        {conversations.find((item) => item.id === selectedConvo)?.title}
        </div>
        ?
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={deleteConversationModal.isOpen}
      title="Delete Conversation"
      actionLabel="Delete"
      secondaryActionLabel="Cancel"
      secondaryAction={deleteConversationModal.onClose}
      onClose={deleteConversationModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      toDelete={true}
    />
  )
};

export default DeleteConversationModal;