'use client';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useUserConversations from "@/app/hooks/useUserConversations";
import useMessages from "@/app/hooks/useMessages";

const ComposeBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { selectedConvo, conversations, setConversations } = useUserConversations();
  const { messages, setMessages } = useMessages();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    data = {
      ...data,
      conversationId: selectedConvo
    }

    axios.post('/api/messages', data)
      .then((response) => {
        const { newMessage, newConversation } = response.data;
        const newMessages = [newMessage, ...messages];
        setMessages(newMessages);
        let newConversations = [...conversations];
        newConversations = newConversations.filter((conversation) => conversation.id !== newConversation.id);
        setConversations([newConversation, ...newConversations]);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong.');
      }).finally(() => {
        setIsLoading(false);
      })
  };

  useEffect(() => {
    if (messages.length > 0 && messages[0].sent) [
      axios.post('/api/jojoMessage', {
        messages,
        conversationId: selectedConvo
      })
        .then((response) => {
          const { newJojoMessages } = response.data;
          const newMessages = [...newJojoMessages, ...messages];
          setMessages(newMessages);
        })
        .catch((err) => {
          console.log(err);
          toast.error('Something went wrong.')
        })
        .finally(() => {

        })
    ]
  }, [messages])

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
    <div className="
      row-span-3
      h-[50px]
      flex
      flex-row
      items-center
      pl-5
      ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="body"
          disabled={isLoading}
          {...register("body", { required: true })}
          placeholder=" "
        />
        <input type="submit" />
      </form>
    </div>
  )
};

export default ComposeBar;