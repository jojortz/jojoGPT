'use client';

import Container from "@/app/components/Container";
import ConversationPostHead from "@/app/components/conversations/ConversationPostHead";
import ConversationPostInfo from "@/app/components/conversations/ConversationPostInfo";
import { ConversationPost, SafeUser } from "@/app/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ConversationPostClientProps {
  conversation: ConversationPost;
  currentUser: SafeUser | null;
}

const ConversationPostClient: React.FC<ConversationPostClientProps> = ({
  conversation,
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
          "
        >
          {'<'} Back to Conversations
          </div>
        <ConversationPostHead
          title={conversation.title}
          imgSrc={conversation.imgSrc}
        />
        <ConversationPostInfo
          author={conversation.author}
          likes={conversation.likes}
          description={conversation.description}
          currentUser={currentUser}
          conversationId={conversation.id}
        />
      </div>
    </Container>
  )
};

export default ConversationPostClient;