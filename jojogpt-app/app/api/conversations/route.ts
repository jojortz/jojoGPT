import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    title,
  } = body;

  if (!title || typeof title !== 'string') {
    throw new Error (`Invalid title: ${title}`);
  }

  const conversation = await prisma.conversation.create({
    data: {
      title,
      userId: currentUser.id
    }
  });

  return NextResponse.json(conversation);
}

interface IParams {
  conversationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: {params: IParams}
) {

  const { conversationId } = params;
  console.log('Deleting this id', conversationId)

  if (!conversationId || typeof conversationId !== 'string') {
    throw new Error (`Invalid conversation ID: ${conversationId}`);
  }

  const deleteConversation = await prisma.conversation.delete({
    where: {
      id: conversationId,
    }
  });

  return NextResponse.json(deleteConversation);
}