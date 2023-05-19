'use client';

import Container from "@/app/components/Container";
import ConversationPostHead from "@/app/components/conversations/ConversationPostHead";
import ConversationPostInfo from "@/app/components/conversations/ConversationPostInfo";
import { SafePost, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface ConversationPostClientProps {
  conversationPost: SafePost;
  currentUser: SafeUser | null;
}

const ConversationPostClient: React.FC<ConversationPostClientProps> = ({
  conversationPost,
  currentUser
}) => {
  const router = useRouter();
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div
          onClick={() => router.push('/conversations')}
          className="
            text-neutral-600
            cursor-pointer
            hover:text-neutral-400
            flex
            flex-row
            gap-1
            justify-end
            items-center
          "
        >
          <IoIosArrowBack/>Browse more conversations
          </div>
        <ConversationPostHead
          title={conversationPost.title}
          imgSrc={conversationPost.imageSrc}
        />
        <ConversationPostInfo
          author={currentUser?.name}
          likes={conversationPost.likeIds}
          description={conversationPost.description}
          currentUser={currentUser}
          conversationId={conversationPost.id}
        />
      </div>
    </Container>
  )
};

export default ConversationPostClient;