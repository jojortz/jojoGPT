'use client';

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";
import useConversationPostModal from "@/app/hooks/useConversationPostModal";
import Image from "next/image";

const ConversationPostModal = () => {
  const conversationPostModal = useConversationPostModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/posts', {...data, imageSrc: conversationPostModal.photoUrl})
      .then((response) => {
        toast.success('Conversation Post created!')
        console.log('New post', response.data)
        reset();
        conversationPostModal.onClose();
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
        title="New Conversation Post"
        subtitle="Share your conversation with other JojoGPT users"
      />
      <div className="flex items-center justify-center">
      <Image
        alt='conversation picture'
        width={300}
        height={300}
        src={conversationPostModal.photoUrl}
        className="
          rounded-xl
        "
        />
      </div>
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="description"
        label="Description"
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
      isOpen={conversationPostModal.isOpen}
      title="New Conversation Post"
      actionLabel="Post"
      onClose={conversationPostModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
};

export default ConversationPostModal;