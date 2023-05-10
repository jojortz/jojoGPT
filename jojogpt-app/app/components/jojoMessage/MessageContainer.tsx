'use client';

import useMessages from "@/app/hooks/useMessages";
import useUserConversations from "@/app/hooks/useUserConversations";
import { SafeMessage } from "@/app/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Message from "./Message";

const MessageContainer = () => {
  const userConversations = useUserConversations();
  const { messages, setMessages } = useMessages();

  useEffect(() => {
    if (userConversations.selectedConvo.length > 0) {
      axios.get('/api/messages', {
        params: {
          conversationId: userConversations.selectedConvo
        }
      })
      .then((res) => {
        setMessages(res.data)
      })
      .catch((err) => {
        toast.error('Error retrieving messages.');
      })
      .finally(() => {

      })
    }
  }, [userConversations.selectedConvo])

  return (
    <div
      className="
        h-full
        border-y
        p-5
        flex
        flex-col-reverse
        justify-content
      "
    >
      {messages.length > 0 && (
        messages.map((message) => (
          <Message key={message.id} message={message}/>
        ))
      )}
    </div>
  )
};

export default MessageContainer;