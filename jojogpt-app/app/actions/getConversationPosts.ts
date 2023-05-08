import { ConversationPost } from "../types";

export default function getConversationPosts() {
  const test_conversations_posts: ConversationPost[] = [
    {
      id: '1',
      title: 'wtf',
      author: 'Jackie',
      imgSrc: '/images/conversation_placeholder.png',
      likes: ['Jackie', 'Joey'],
      description: 'When in rome'
    },
    {
      id: '2',
      title: 'wtf',
      author: 'Joey',
      imgSrc: '/images/conversation_placeholder.png',
      likes: ['Jackie'],
      description: 'This is how we dooooo it'
    },
    {
      id: '3',
      title: 'wtfffff',
      author: 'Jason',
      imgSrc: '/images/conversation_placeholder.png',
      likes: ['Jason', 'Joey', 'Johnston'],
      description: 'this is the best post everrr!!! LMAOOOOO',
    },
    {
      id: '4',
      title: 'wtffffff',
      author: 'Johnston',
      imgSrc: '/images/conversation_placeholder.png',
      likes: ['Jackie'],
      description: 'I had no idea what I was getting into',
    },
    {
      id: '5',
      title: 'wttttttttttf',
      author: 'Josiah',
      imgSrc: '/images/conversation_placeholder.png',
      likes: ['Jackie', 'Joey', 'Johnston', 'Jason'],
      description: 'I think that\'s enoughb JojoGPT for the week...',
    },
  ]

  return test_conversations_posts
}