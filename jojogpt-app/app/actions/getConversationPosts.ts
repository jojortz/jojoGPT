import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export default async function getConversationPosts(
  params: IParams
) {
  try {
    const { userId } = params;
    const query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const conversationPosts = await prisma.post.findMany({
      where: query,
      include: {
        user: true
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    const safeConversationPosts = conversationPosts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      user: {
        ...post.user,
        createdAt: post.user.createdAt.toISOString(),
        updatedAt: post.user.updatedAt.toISOString(),
        emailVerified: post.user.emailVerified?.toISOString() || null,
      }
    }));

    return safeConversationPosts;
  } catch (error: any) {
    throw new Error(error)
  }
}