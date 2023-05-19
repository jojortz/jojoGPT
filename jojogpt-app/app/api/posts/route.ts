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
    description,
    imageSrc
  } = body;

  if (!title || typeof title !== 'string') {
    throw new Error (`Invalid title: ${title}`);
  }
  if (!description || typeof description !== 'string') {
    throw new Error (`Invalid description: ${description}`);
  }
  if (!imageSrc || typeof imageSrc !== 'string') {
    throw new Error (`Invalid image: ${imageSrc}`);
  }

  const post = await prisma.post.create({
    data: {
      title,
      description,
      imageSrc,
      userId: currentUser.id
    }
  });

  return NextResponse.json(post);
}