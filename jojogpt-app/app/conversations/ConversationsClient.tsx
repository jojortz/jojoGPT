import Container from "../components/Container";
import Heading from "../components/Heading";
import ConversationCard from "../components/conversations/ConversationCard";
import { ConversationPost } from "../types";

const test_conversations_posts: ConversationPost[] = [
  {
    id: '1',
    title: 'wtf',
    author: 'Jackie',
    imgSrc: '/images/conversation_placeholder.png',
    likes: ['Jackie', 'Joey'],
  },
  {
    id: '2',
    title: 'wtf',
    author: 'Joey',
    imgSrc: '/images/conversation_placeholder.png',
    likes: ['Jackie'],
  },
  {
    id: '3',
    title: 'wtfffff',
    author: 'Jason',
    imgSrc: '/images/conversation_placeholder.png',
    likes: ['Jason', 'Joey', 'Johnston'],
  },
  {
    id: '4',
    title: 'wtffffff',
    author: 'Johnston',
    imgSrc: '/images/conversation_placeholder.png',
    likes: ['Jackie'],
  },
  {
    id: '5',
    title: 'wttttttttttf',
    author: 'Josiah',
    imgSrc: '/images/conversation_placeholder.png',
    likes: ['Jackie', 'Joey', 'Johnston', 'Jason'],
  },
]

const ConversationsClient = () => {
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
          test_conversations_posts.map((post) => (
            <ConversationCard data={post}/>
          ))
        }
      </div>
    </Container>
  )
};

export default ConversationsClient;