import { User, Conversation, Post, Message } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}

export type SafeConversation = Omit<
  Conversation,
  "createdAt" | "updatedAt" | "user"
> & {
  createdAt: string;
  updatedAt: string;
  user: SafeUser;
}

export type SafePost = Omit<
  Post,
  "createdAt" | "user"
> & {
  createdAt: string;
  user: SafeUser;
}


export type SafeMessage = Omit<
  Message,
  "createdAt" | "conversation"
> & {
  createdAt: string;
  conversation: SafeConversation;
}
