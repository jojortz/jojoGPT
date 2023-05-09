'use client';

import useUserConversations from "@/app/hooks/useUserConversations";
import { SafeMessage } from "@/app/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const MessageContainer = () => {
  const userConversations = useUserConversations();
  const [messages, setMessages] = useState<SafeMessage[]>([]);

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
        //
      })
    }
  }, [userConversations.selectedConvo])

  return (
    <div
      className="
        h-full
        border-y
        p-5
      "
    >
      {messages.length > 0 && (
        messages.map((message) => (
          <div key={message.id}>{message.body}</div>
        ))
      )}
    </div>
  )
};

export default MessageContainer;