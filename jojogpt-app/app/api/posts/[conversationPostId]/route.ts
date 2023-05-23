import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

interface IParams {
  conversationPostId?: string;
}

export async function POST(
  request: Request,
  { params }: {params: IParams}
) {
  const body = await request.json();
  const { conversationPostId } = params;

  const {
    title,
    description
  } = body;

  if (!title || typeof title !== 'string') {
    throw new Error (`Invalid title: ${title}`);
  }
  if (!description || typeof description !== 'string') {
    throw new Error (`Invalid description: ${description}`);
  }
  if (!conversationPostId || typeof conversationPostId !== 'string') {
    throw new Error (`Invalid conversation ID: ${conversationPostId}`);
  }

  const post = await prisma.post.update({
    where: {
      id: conversationPostId
    },
    data: {
      title,
      description,
    }
  });

  return NextResponse.json(post);
}

export async function DELETE(
  request: Request,
  { params }: {params: IParams}
) {

  const { conversationPostId } = params;

  if (!conversationPostId || typeof conversationPostId !== 'string') {
    throw new Error (`Invalid conversation ID: ${conversationPostId}`);
  }

  const deleteConversationPost = await prisma.post.delete({
    where: {
      id: conversationPostId,
    }
  });

  return NextResponse.json(deleteConversationPost);
}