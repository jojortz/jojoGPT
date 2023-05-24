import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import axios from "axios";
import { SafeMessage } from "@/app/types";
import getRandomMessage from "./getRandomMessage";

const convertMessageToHistory = (messages: SafeMessage[]) => {

  let messageHistory:string = "";
  messages.reverse().forEach((message) =>{
    if (message.sent) {
      messageHistory += "FROM:\n";
    } else {
      messageHistory += "TO:\n";
    }
    messageHistory += message.body + "\n";
  })
  return messageHistory + "TO:\n";
}

export async function POST(
  request: Request
) {
  const api_enabled = false;
  const body = await request.json();

  const {
    messages,
    conversationId
  } = body;

  const chatHistory = convertMessageToHistory(messages);

  const jojoURL = process.env.JOJO_MESSAGE_URL || "";
  console.log(chatHistory)

  if (process.env.JOJO_MESSAGE_ENABLED === "true") {
    return axios.post(jojoURL, {
      "chat_history": chatHistory
    })
    .then((response) => {
      const newMessages = response.data.new_message.split("\nTO:\n");
      return Promise.all(newMessages.map((text: string) => {
        return prisma.message.create({
          data: {
            body: text,
            sent: false,
            conversationId
          }
        })
      }))
    })
    .then((response) => {
      return NextResponse.json({ newJojoMessages: response.reverse() });
    })
    .catch((err) => {
      console.log('err');
    })
  } else {
    const body = getRandomMessage();
    let newJojoMessage = await prisma.message.create({
      data: {
        body,
        sent: false,
        conversationId
      }
    })
    return NextResponse.json({ newJojoMessages: [newJojoMessage] });
  }

}