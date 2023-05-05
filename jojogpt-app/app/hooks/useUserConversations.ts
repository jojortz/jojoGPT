import { create } from 'zustand';
import { Conversation } from '../types';

interface UserConversationsStore {
  selectedConvo: string;
  setSelectedConvo: (id: string) => void;
  conversations: Conversation[],
  setConversations: (newConversations: Conversation[]) => void;
}

const useUserConversations = create<UserConversationsStore>((set) => ({
  selectedConvo: "",
  setSelectedConvo: (id: string) => set({ selectedConvo: id}),
  conversations: [],
  setConversations: (newConversations: Conversation[]) => set({conversations: newConversations})
}));

export default useUserConversations;