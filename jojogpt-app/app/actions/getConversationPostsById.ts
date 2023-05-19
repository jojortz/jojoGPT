import getConversationPosts from "./getConversationPosts";

interface IParams {
  conversationId?: string;
}

export default async function getConversationPostsById(
  params: IParams
) {
  const conversations = await getConversationPosts();
  const { conversationId } = params;
  const conversation = conversations.find((convo) => convo.id === conversationId);

  return conversation;
}