import prisma from "@/app/libs/prismadb";

interface IParams {
  conversationPostId?: string;
}

export default async function getConversationPostById(
  params: IParams
) {
  try {
    const { conversationPostId } = params;
    const post = await prisma.post.findUnique({
      where: {
        id: conversationPostId
      },
      include: {
        user: true
      },
    });
    if (!post) return null;


    const safeConversationPost = {
      ...post,
      createdAt: post?.createdAt.toISOString(),
      user: {
        ...post?.user,
        createdAt: post?.user.createdAt.toISOString(),
        updatedAt: post?.user.updatedAt.toISOString(),
        emailVerified: post?.user.emailVerified?.toISOString() || null,
      }
    };

    return safeConversationPost;
  } catch (error: any) {
    throw new Error(error)
  }
}

// export default async function getConversationPostById(
//   params: IParams
// ) {
//   const conversations = await getConversationPosts();
//   const { conversationPostId } = params;
//   const conversation = conversations.find((convo) => convo.id === conversationPostId);

//   return conversation;
// }