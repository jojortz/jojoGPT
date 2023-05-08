import getConversationPostsById from "@/app/actions/getConversationPostsById";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ConversationPostClient from "./ConversationPostClient";

interface IParams {
  conversationId?: string;
}

const ConversationPage = async ({ params }: {
  params: IParams
}) => {
  const conversation = getConversationPostsById(params);
  const currentUser = await getCurrentUser();
  if (!conversation) {
    return (
      <ClientOnly>
        <EmptyState
          title="Conversation not found"
          subtitle="Try selecting a different conversation"
        />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <ConversationPostClient
        conversation={conversation}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
};

export default ConversationPage;