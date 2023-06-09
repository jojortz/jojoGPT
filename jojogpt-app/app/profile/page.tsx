import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import ProfileClient from "./ProfileClient";

const MyConversationsPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <ProfileClient currentUser={currentUser}/>
    </ClientOnly>
  )
};

export default MyConversationsPage;