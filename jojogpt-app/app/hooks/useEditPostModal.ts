import { create } from 'zustand';

interface EditPostModalStore {
  isOpen: boolean;
  title: string;
  id: string;
  description: string;
  imageSrc: string;
  onOpen: () => void;
  onClose: () => void;
  setTitle: (newTitle: string) => void;
  setId: (id: string) => void;
  setDescription: (newDescription: string) => void;
  setImage: (newImageSrc: string) => void;
}

const useEditPostModal = create<EditPostModalStore>((set) => ({
  isOpen: false,
  title: "",
  id: "",
  description: "",
  imageSrc: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setTitle: (newTitle: string) => set({ title: newTitle }),
  setId: (newId: string) => set({ id: newId }),
  setDescription: (newDescription: string) => set({ description: newDescription }),
  setImage: (newImageSrc: string) => set({ imageSrc: newImageSrc }),
}));

export default useEditPostModal;