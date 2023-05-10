import { create } from 'zustand';
import { SafeConversation, SafeMessage } from '../types';

interface MessageStore {
  messages: SafeMessage[],
  setMessages: (newMessage: SafeMessage[]) => void;
}

const useMessages = create<MessageStore>((set) => ({
  messages: [],
  setMessages: (newMessages: SafeMessage[]) => set({messages: newMessages})
}));

export default useMessages;