import prisma from "@/app/libs/prismadb";


export default async function getConversationPosts() {
  try {
    const conversationPosts = await prisma.post.findMany({
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