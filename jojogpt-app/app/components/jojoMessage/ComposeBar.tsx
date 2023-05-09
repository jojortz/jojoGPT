'use client';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useUserConversations from "@/app/hooks/useUserConversations";

const ComposeBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const userConversations = useUserConversations();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    data = {
      ...data,
      conversationId: userConversations.selectedConvo
    }
    console.log('message data', data)

    axios.post('/api/messages', data)
    .then(() => {
      toast.success('Message Created!');
      router.refresh();
    })
    .catch((err) => {
      console.log(err);
      toast.error('Something went wrong.');
    }).finally(() => {
      setIsLoading(false);
    })
  }

  const {
    handleSubmit,
    watch,
    register,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      body: 'New message',
    }
  });

  const body = watch('body');

  return (
    <div className="h-[100px]">
      <form onSubmit={handleSubmit(onSubmit)}>
       <input
             id="body"
             disabled={isLoading}
             {...register("body", { required: true })}
             placeholder=" "
      />
      <input type="submit"/>
      </form>
    </div>
  )
};

export default ComposeBar;