'use client';
import { useRouter } from "next/navigation";
import Button from "../components/Button"
import Container from "../components/Container"
import EmptyState from "../components/EmptyState"
import useLoginModal from "../hooks/useLoginModal";
import { SafeUser } from "../types";

interface NoConversationsPageProps {
  currentUser: SafeUser | null;
}

const NoConversationsPage: React.FC<NoConversationsPageProps> = ({
  currentUser
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  let loggedIn = true;
  if (!currentUser) {
    loggedIn = false;
  }
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
            onClick={() => router.push('/jojoMessage')}
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