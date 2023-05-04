import getCurrentUser from "../actions/getCurrentUser";
import Button from "../components/Button";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import ConversationsClient from "./ConversationsClient";
import NoConversationsPage from "./NoConversationsPage";

const ConversationsPage = async () => {
  const conversations = true;
  const currentUser = await getCurrentUser();

  if (!conversations) {
    return (
      <ClientOnly>
        <NoConversationsPage loggedIn={currentUser !== null}/>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <ConversationsClient/>
    </ClientOnly>
  )
};

export default ConversationsPage;