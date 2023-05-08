import Container from "@/app/components/Container";
import ConversationPostHead from "@/app/components/conversations/ConversationPostHead";
import ConversationPostInfo from "@/app/components/conversations/ConversationPostInfo";
import { ConversationPost, SafeUser } from "@/app/types";

interface ConversationPostClientProps {
  conversation: ConversationPost;
  currentUser: SafeUser | null;
}

const ConversationPostClient: React.FC<ConversationPostClientProps> = ({
  conversation,
  currentUser
}) => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
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