import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}

export type Conversation = {
  id: string;
  title: string;
  messages: string;
}
export type ConversationPost = {
  id: string;
  title: string;
  author: string;
  imgSrc: string;
  likes: string[];
  description: string;
}