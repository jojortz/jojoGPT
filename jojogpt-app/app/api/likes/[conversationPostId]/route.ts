import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import getConversationPostById from "@/app/actions/getConversationPostById";

interface IParams {
  conversationPostId?: string;
}

export async function POST(
  request: Request,
  { params }: { params: IParams}
) {
  const { conversationPostId } = params;
  const currentUser = await getCurrentUser();
  const currentPost = await getConversationPostById(params);

  if (!currentUser) return NextResponse.error();


  if (!conversationPostId || typeof conversationPostId !== 'string') {
    throw new Error (`Invalid conversation ID ${conversationPostId}`);
  }

  let likeIds = [...(currentUser.likeIds || [])];
  likeIds.push(conversationPostId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      likeIds
    }
  });

  if (!currentUser.name || typeof currentUser.name !== 'string') {
    throw new Error (`Invalid username ${currentUser.name}`);
  }

  let likeUsers = [...(currentPost?.likeIds || [])];
  likeUsers.push(currentUser.id);

  const post = await prisma.post.update({
    where: {
      id: conversationPostId
    },
    data: {
      likeIds: likeUsers
    }
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  {params}: { params: IParams}
) {
  const currentUser = await getCurrentUser();
  const currentPost = await getConversationPostById(params);

  if (!currentUser) return NextResponse.error();

  const { conversationPostId } = params;

  if (!conversationPostId || typeof conversationPostId !== 'string') {
    throw new Error (`Invalid conversation ID ${conversationPostId}`);
  }

  let likeIds = [...(currentUser.likeIds || [])];

  likeIds = likeIds.filter((id) => id !== conversationPostId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id
    },
    data: {
      likeIds
    }
  });

  let likeUsers = [...(currentPost?.likeIds || [])];

  likeUsers = likeUsers.filter((username) => username !== currentUser.id);

  const post = await prisma.post.update({
    where: {
      id: conversationPostId
    },
    data: {
      likeIds: likeUsers
    }
  });

  return NextResponse.json(user);
}
