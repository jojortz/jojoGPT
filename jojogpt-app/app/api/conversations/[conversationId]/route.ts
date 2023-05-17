import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

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