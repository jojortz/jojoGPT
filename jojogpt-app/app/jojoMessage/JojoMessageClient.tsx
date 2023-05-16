'use client';

import { useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container"
import EmptyState from "../components/EmptyState";
import Heading from "../components/Heading";
import JojoMessageComponent from "../components/jojoMessage/JojoMessageComponent";
import useLoginModal from "../hooks/useLoginModal";
import useUserConversations from "../hooks/useUserConversations";
import { SafeConversation, SafeUser } from "../types";

interface JojoMessageClientProps {
  currentUser: SafeUser | null;
  conversations: SafeConversation[];
}

const JojoMessageClient: React.FC<JojoMessageClientProps> = ({
  currentUser,
  conversations
}) => {
  const loginModal = useLoginModal();
  const userConversations = useUserConversations();

  useEffect(() => {
    if (conversations.length > 0) {
      userConversations.setConversations(conversations);
      userConversations.setSelectedConvo(conversations[0].id)
    }
  }, [])

  if (!currentUser) {
    return (
      <Container>
        <EmptyState
          title="Not authorized"
          subtitle="Please log in to message JojoGPT."
        />
        <Button
          label="Log in"
          onClick={loginModal.onOpen}
        />
      </Container>
    )
  }

  return (
    <Container>
      <div
        className="
          flex
          flex-col
          h-[80vh]
          max-h-[80vh]
        "
      >
        <Heading
          title="jojoMessage"
          subtitle="Text and create new conversations with jojoGPT"
        />
        <JojoMessageComponent currentUser={currentUser}/>
      </div>
    </Container >

  )
};

export default JojoMessageClient;