import { ConversationPost } from "../types";
import getConversationPosts from "./getConversationPosts";

interface IParams {
  conversationId?: string;
}

export default function getConversationPostsById(
  params: IParams
) {
  const conversations = getConversationPosts();
  const { conversationId } = params;
  const conversation = conversations.find((convo) => convo.id === conversationId);

  return conversation;
}