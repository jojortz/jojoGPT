import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export default async function getUserConversations(params: IParams) {
  try {
    const {userId } = params;
    const conversations = await prisma.conversation.findMany({
      where: {
        userId: userId
      },
      include: {
        user: true
      }
    });

    const safeConversations = conversations.map((conversation) => ({
      ...conversation,
      createdAt: conversation.createdAt.toISOString(),
      updatedAt: conversation.updatedAt.toISOString(),
      user: {
        ...conversation.user,
        createdAt: conversation.user.createdAt.toISOString(),
        updatedAt: conversation.user.updatedAt.toISOString(),
        emailVerified: conversation.user.emailVerified?.toISOString() || null,
      }
    }));

    return safeConversations;
  } catch (error: any) {
    throw new Error(error)
  }
}