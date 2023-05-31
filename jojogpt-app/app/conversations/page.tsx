import getConversationPosts from "../actions/getConversationPosts";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import ConversationsClient from "./ConversationsClient";

const ConversationsPage = async () => {
  const currentUser = await getCurrentUser();
  const conversationPosts = await getConversationPosts({});



  return (
    <ClientOnly>
      <ConversationsClient conversationPosts={conversationPosts} currentUser={currentUser}/>
    </ClientOnly>
  )
};

export default ConversationsPage;