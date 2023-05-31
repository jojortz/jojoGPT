import { create } from 'zustand';
import { SafePost } from '../types';

interface ConversationPostsStore {
  posts: SafePost[],
  setPosts: (newConversations: SafePost[]) => void;
}

const useConversationPosts = create<ConversationPostsStore>((set) => ({
  posts: [],
  setPosts: (newPosts: SafePost[]) => set({posts: newPosts})
}));

export default useConversationPosts;