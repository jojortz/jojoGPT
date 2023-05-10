import getCurrentUser from "../actions/getCurrentUser";
import getUserConversations from "../actions/getUserConversations";
import ClientOnly from "../components/ClientOnly";
import useUserConversations from "../hooks/useUserConversations";
import JojoMessageClient from "./JojoMessageClient";

const JojoMessagePage = async () => {
  const currentUser = await getCurrentUser();
  const conversations = await getUserConversations({ userId: currentUser?.id});


  return (
    <ClientOnly>
      <JojoMessageClient currentUser={currentUser} conversations={conversations}/>
    </ClientOnly>
  )
};

export default JojoMessagePage;