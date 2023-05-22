'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
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
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40-vw]
            md:w-[150px]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {
                  router.push('/jojoMessage');
                  toggleOpen();
                }}
                  label="jojoMessage"
                />
                <MenuItem onClick={() => {
                  router.push('/conversations');
                  toggleOpen();
                }}
                  label="Conversations"
                />
                <MenuItem onClick={() => {
                    router.push('/');
                    toggleOpen();
                }}
                  label="About"
                />
                <hr />
                <MenuItem onClick={() => {
                  signOut({
                    callbackUrl: `${window.location.origin}`
                  });
                  toggleOpen();
                }}
                  label="Logout"
                />
              </>

            ) : (
              <>
                <MenuItem onClick={() => {
                  router.push('/conversations');
                  toggleOpen();
                }}
                  label="Conversations"
                />
                <MenuItem onClick={() => {
                  router.push('/');
                  toggleOpen();
                }}
                  label="About"
                />
                <hr />
                <MenuItem onClick={() => {
                  loginModal.onOpen();
                  toggleOpen();
                }}
                  label="Login"
                />
                <MenuItem onClick={() => {
                  registerModal.onOpen();
                  toggleOpen();
                }}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )
      }
    </div >
  )
};

export default UserMenu;