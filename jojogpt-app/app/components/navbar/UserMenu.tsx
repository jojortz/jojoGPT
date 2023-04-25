'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useReducer, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
            console.log('click2');
            toggleOpen();
          }}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            cover:shadow-md
            transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[75px]
            md:w-[15vw]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            flex
            flex-col
            cursor-pointer
          "
        >
            <>
            <MenuItem onClick={() => console.log('Goto Login')}
            label="Login"
            />
            <MenuItem onClick={registerModal.onOpen}
            label="Sign up"
            />
            <MenuItem onClick={() => console.log('Goto About')}
            label="About"
            />
            </>
        </div>
      )}
    </div>
  )
};

export default UserMenu;