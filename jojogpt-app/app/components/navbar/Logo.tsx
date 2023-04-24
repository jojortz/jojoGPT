'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <div className="
      flex
      flex-row
    ">
      <Image
        alt="Logo"
        className="block cursor-pointer"
        height="50"
        width="50"
        src="/images/logo.png"
      />
      <div className="hidden sm:block text-gray-800 text-2xl m-auto px-3">jojoGPT</div>
    </div>
  )
}
export default Logo;