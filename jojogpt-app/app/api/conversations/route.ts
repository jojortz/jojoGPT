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