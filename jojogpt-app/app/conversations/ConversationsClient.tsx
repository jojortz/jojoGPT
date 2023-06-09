'use client';

import React, { useEffect } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ConversationCard from "../components/conversations/ConversationCard";
import { SafePost, SafeUser } from "../types";
import NoConversationsPage from "./NoConversationsPage";
import { useRouter } from "next/navigation";
import SortMenu from "../components/conversations/SortMenu";
import useConversationPosts from "../hooks/useConversationPosts";

interface ConversationsClientProps {
  conversationPosts: SafePost[];
  currentUser: SafeUser | null;
}

const ConversationsClient: React.FC<ConversationsClientProps> = ({
  conversationPosts,
  currentUser
}) => {
  const router = useRouter();
  const {posts, setPosts} = useConversationPosts();

  useEffect(() => {
    if (conversationPosts.length > 0) {
      setPosts(conversationPosts);
    }
  }, []);

  if (conversationPosts.length === 0) {
    return (<NoConversationsPage currentUser={currentUser} />)
  }

  return (
    <Container>
      <div  className="flex flex-row justify-between">
        <Heading
          title="Conversations"
          subtitle="Browse and like your favorite conversations with JojoGPT"
        />
        <SortMenu />
      </div>
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
          posts.map((post) => (
            <ConversationCard key={post.id} data={post} currentUser={currentUser} onClick={() => router.push(`/conversations/${post.id}`)} />
          ))
        }
      </div>
    </Container>
  )
};

export default ConversationsClient;