'use client';
import Button from "../components/Button"
import Container from "../components/Container"
import EmptyState from "../components/EmptyState"
import useLoginModal from "../hooks/useLoginModal";

interface NoConversationsPageProps {
  loggedIn: boolean;
}

const NoConversationsPage: React.FC<NoConversationsPageProps> = ({
  loggedIn
}) => {
  const loginModal = useLoginModal();
  return (
    <>
      <EmptyState
        title="No conversations yet :("
        subtitle={loggedIn ? "Add the first conversation!" : "Log in to add a conversation"}
      />
      <Container>
        {loggedIn ? (
          <Button
            label="Add conversation"
            onClick={() => { console.log('add convo modal') }}
          />
        ) : (
          <Button
            label="Log in"
            onClick={loginModal.onOpen}
          />
        )}
      </Container>
    </>
  )
};

export default NoConversationsPage;