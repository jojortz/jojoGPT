'use client';

import useMessages from "@/app/hooks/useMessages";
import useUserConversations from "@/app/hooks/useUserConversations";
import { SafeMessage } from "@/app/types";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Message from "./Message";

const MessageContainer = () => {
  const userConversations = useUserConversations();
  const { messages, setMessages } = useMessages();
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


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
        border-t
        border-black
        p-5
        overflow-y-auto
        flex
        flex-col-reverse
      "
    >
      <div ref={messagesEndRef} />
        {messages.length > 0 && (
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))
        )}
    </div>
  )
};

export default MessageContainer;