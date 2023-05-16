import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import useUserConversations from "@/app/hooks/useUserConversations";
import { useSearchParams } from "next/navigation";

export async function POST(
  request: Request
) {
  const content = await request.json();

  const {
    body,
    conversationId
  } = content;
  const data = {
    body,
    sent: true,
    conversationId
  };

  const newConversation = await prisma.conversation.update({
    where: {
      id: conversationId
    },
    data: {
      updatedAt: new Date()
    }
  });

  const newMessage = await prisma.message.create({
    data: {
      body,
      sent: true,
      conversationId
    }
  });

  return NextResponse.json({ newMessage, newConversation});
}

export async function GET(
  request: Request
) {
  try {
    const { url } = request;
    const conversationId = url.split('conversationId=')[1]

    if (!conversationId) {
      return NextResponse.error();
    }

    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId
      },
      include: {
        conversation: false
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeMessages = messages.map((message) => ({
      ...message,
      createdAt: message.createdAt.toISOString(),
    }))

    return NextResponse.json(safeMessages);
  } catch (error: any) {
    throw new Error(error);
  }
}