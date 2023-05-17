import { create } from 'zustand';

interface ConversationPostModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  photoUrl: string;
  setPhotoUrl: (url: string) => void;
}

const useConversationPostModal = create<ConversationPostModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true}),
  onClose: () => set({ isOpen: false}),
  photoUrl: '',
  setPhotoUrl: (url: string) => set({photoUrl: url}),
}));

export default useConversationPostModal;