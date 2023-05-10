'use client';

import useConversationModal from "@/app/hooks/useConversationModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";
import useUserConversations from "@/app/hooks/useUserConversations";

const ConversationModal = () => {
  const conversationModal = useConversationModal();
  const [isLoading, setIsLoading] = useState(false);
  const { conversations, setConversations, setSelectedConvo } = useUserConversations();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      title: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/conversations', data)
      .then((response) => {
        toast.success('Conversation created!')
        setConversations([response.data, ...conversations])
        setSelectedConvo(response.data.id)
        console.log('New convo', response.data)

        conversationModal.onClose();
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
        title="New Conversation"
        subtitle="Add a title."
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={conversationModal.isOpen}
      title="New Conversation"
      actionLabel="Create"
      onClose={conversationModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
};

export default ConversationModal;