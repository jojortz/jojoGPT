'use client';

import { FiEdit } from "react-icons/fi"
const NewConvoButton = () => {
  return (
    <div
      className="cursor-pointer text-neutral-500 hover:text-neutral-400"
      onClick={() => {console.log('New Convo')}}
    >
      <FiEdit
        size={20}
        className="stroke-1"
      />
    </div>
  )
};

export default NewConvoButton;