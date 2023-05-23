'use client';
import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ConversationCard from "../components/conversations/ConversationCard";
import { SafePost, SafeUser } from "../types";
import NoConversationsPage from "../conversations/NoConversationsPage";
import useEditPostModal from "../hooks/useEditPostModal";
import EditPostModal from "../components/modals/EditPostModal";


interface MyConversationsClientProps {
  conversationPosts: SafePost[];
  currentUser: SafeUser | null;
}

const MyConversationsClient: React.FC<MyConversationsClientProps> = ({
  conversationPosts,
  currentUser
}) => {
  const editPostModal = useEditPostModal();
  if (conversationPosts.length === 0) {
    return (<NoConversationsPage currentUser={currentUser}/>)
  }

  const handleClick = (title: string, id: string, description: string, imageSrc: string) => {
    editPostModal.setId(id)
    editPostModal.setTitle(title);
    editPostModal.setDescription(description);
    editPostModal.setImage(imageSrc);
    editPostModal.onOpen();
  }


  return (
    <Container>
      <EditPostModal />
      <Heading
        title="My Conversations"
        subtitle="Browse and edit your conversation posts"
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
            <ConversationCard key={post.id} data={post} currentUser={currentUser} onClick={() => handleClick(post.title, post.id, post.description, post.imageSrc)}/>
          ))
        }
      </div>
    </Container>
  )
};

export default MyConversationsClient;