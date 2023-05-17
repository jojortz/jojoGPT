import { NextResponse } from "next/server";
import cloudinary from "@/app/utils/cloudinary";



export async function POST(
  request: Request
) {

  const body = await request.json();

  const {
    imageData,
  } = body;

  if (!imageData || typeof imageData !== 'string') {
    throw new Error (`Invalid image: ${imageData}`);
  }

  return cloudinary.uploader.upload(imageData, {
    folder: 'JojoGPT'
  })
  .then(result => {
      return NextResponse.json(result);
  })
  .catch((err) => {
    return NextResponse.json({'error': err});
  })
}