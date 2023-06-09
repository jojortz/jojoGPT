import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export async function PATCH(
  request: Request,
  { params }: {params: IParams}
) {
  const { userId } = params;
  const body = await request.json();


  const {
    name,
    imageSrc
  } = body;

  if (!name || typeof name !== 'string') {
    throw new Error (`Invalid name: ${name}`);
  }
  if (typeof imageSrc !== 'string') {
    throw new Error (`Invalid image: ${imageSrc}`);
  }

  let data;

  if (imageSrc.length > 0 ) {
    data = {
      name,
      image: imageSrc
    }
  } else {
    data = {
      name
    }
  }

  console.log('New name', name, 'New Image', imageSrc);
  const post = await prisma.user.update({
    where: {
      id: userId
    },
    data
  });

  return NextResponse.json(post);
}