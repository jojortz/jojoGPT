import React from "react";
import getConversationPosts from "../actions/getConversationPosts";
import getCurrentUser from "../actions/getCurrentUser";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ConversationCard from "../components/conversations/ConversationCard";
import { SafePost, SafeUser } from "../types";
import NoConversationsPage from "./NoConversationsPage";

interface ConversationsClientProps {
  conversationPosts: SafePost[];
  currentUser: SafeUser | null;
}

const ConversationsClient: React.FC<ConversationsClientProps> = ({
  conversationPosts,
  currentUser
}) => {

  if (conversationPosts.length === 0) {
    return (<NoConversationsPage currentUser={currentUser}/>)
  }

  return (
    <Container>
      <Heading
        title="Conversations"
        subtitle="Browse, like, and post your favorite conversations with JojoGPT"
      />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {
          conversationPosts.map((post) => (
            <ConversationCard data={post} currentUser={currentUser}/>
          ))
        }
      </div>
    </Container>
  )
};

export default ConversationsClient;