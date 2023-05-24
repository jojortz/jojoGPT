'use client';

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import useUserConversations from "@/app/hooks/useUserConversations";
import useMessages from "@/app/hooks/useMessages";
import { BsEmojiWinkFill } from "react-icons/bs";

const ComposeBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedConvo, conversations, setConversations } = useUserConversations();
  const { messages, setMessages } = useMessages();
  const inputRef = useRef<null | HTMLInputElement>(null)

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
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong.');
      }).finally(() => {
        setIsLoading(false);
      })
  };


  const {
    handleSubmit,
    watch,
    register,
    formState: {
      errors,
    },
    reset,
    setFocus
  } = useForm<FieldValues>({
    defaultValues: {
      body: '',
    }
  });

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
          setTimeout(() => setFocus('body'), 300);
        })
    ]
  }, [messages, selectedConvo, setMessages, setFocus]);

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
        <div className="
          grid
          grid-cols-[minmax(300px,1200px)_50px]
          w-full
        "
        >
          <input
            autoFocus
            id="body"
            disabled={isLoading}
            {...register("body", { required: true })}
            placeholder=" "
            className="
              w-full
              rounded-full
              bg-imessage-container
              border-[1px]
              border-neutral-400
              outline-none
              px-3
              py-1
              col-span-1
              text-sm
              focus:border-neutral-300
            "
          />
          <div className="flex items-center justify-center text-neutral-400 cursor-pointer">
            <BsEmojiWinkFill size={20} className="stroke-0" />
          </div>
        </div>
      </form>
    </div>
  )
};

export default ComposeBar;