import prisma from "@/app/libs/prismadb";

interface IParams {
  conversationId?: string;
}

export default async function getUserConversationById(params: IParams) {
  try {
    const { conversationId } = params;
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId
      },
    });

    const safeConversation = {
      ...conversation,
      createdAt: conversation?.createdAt.toISOString(),
      updatedAt: conversation?.updatedAt.toISOString()
    };

    return safeConversation;
  } catch (error: any) {
    throw new Error(error)
  }
}

