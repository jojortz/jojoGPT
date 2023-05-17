import { create } from 'zustand';

interface DeleteConversationModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDeleteConversationModal = create<DeleteConversationModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false}),
}));

export default useDeleteConversationModal;