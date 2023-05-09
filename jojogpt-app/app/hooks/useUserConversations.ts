import { create } from 'zustand';
import { SafeConversation } from '../types';

interface UserConversationsStore {
  selectedConvo: string;
  setSelectedConvo: (id: string) => void;
  conversations: SafeConversation[],
  setConversations: (newConversations: SafeConversation[]) => void;
}

const useUserConversations = create<UserConversationsStore>((set) => ({
  selectedConvo: "",
  setSelectedConvo: (id: string) => set({ selectedConvo: id}),
  conversations: [],
  setConversations: (newConversations: SafeConversation[]) => set({conversations: newConversations})
}));

export default useUserConversations;