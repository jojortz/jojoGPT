import { create } from 'zustand';

interface MessageViewStore {
  messageView: boolean;
  setMessageView: () => void;
  setConvoView: () => void;
}

const useMessageView = create<MessageViewStore>((set) => ({
  messageView: false,
  setMessageView: () => set({messageView: true}),
  setConvoView: () => set({messageView: false}),
}));

export default useMessageView;