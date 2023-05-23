import getConversationPosts from "../actions/getConversationPosts";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import MyConversationsClient from "./MyConversationsClient";

const MyConversationsPage = async () => {
  const currentUser = await getCurrentUser();
  const conversationPosts = await getConversationPosts({ userId: currentUser?.id});

  return (
    <ClientOnly>
      <MyConversationsClient conversationPosts={conversationPosts} currentUser={currentUser}/>
    </ClientOnly>
  )
};

export default MyConversationsPage;