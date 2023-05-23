'use client';

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";

import Image from "next/image";
import useEditPostModal from "@/app/hooks/useEditPostModal";
import { useRouter } from "next/navigation";

const EditPostModal = () => {
  const editPostModal = useEditPostModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset,
    setValue,
  } = useForm<FieldValues>({});

  useEffect(() => {
    setValue('title', editPostModal.title);
    setValue('description', editPostModal.description)
  }, [editPostModal.title, editPostModal.description, setValue])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post(`/api/posts/${editPostModal.id}`, data)
       .then((response) => {
         toast.success('Conversation Post updated!')
         console.log('New post', response.data)
         reset();
         editPostModal.onClose();
       })
      .catch((err) => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
         setIsLoading(false);
         router.refresh();
      })
  }

  const onDelete = () => {
    setIsLoading(true);
    axios.delete(`/api/posts/${editPostModal.id}`)
       .then((response) => {
         toast.success('Conversation Post delete!')
         reset();
         editPostModal.onClose();
       })
      .catch((err) => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
        router.refresh();
      })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Edit Conversation Post"
      />
      <div className="flex items-center justify-center">
      <Image
        alt='conversation picture'
        width={300}
        height={300}
        src={editPostModal.imageSrc}
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
      isOpen={editPostModal.isOpen}
      title="Edit Conversation Post"
      actionLabel="Update"
      secondaryAction={onDelete}
      secondaryActionLabel="Delete"
      onClose={editPostModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
};

export default EditPostModal;