import { create } from 'zustand';

interface ConversationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useConversationModal = create<ConversationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false}),
}));

export default useConversationModal;