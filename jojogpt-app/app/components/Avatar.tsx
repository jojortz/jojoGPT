'use client';

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  dim?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, dim = 30 }) => {
  return (
    <div className={`rounded-full h-[${dim}px] w-[${dim}px] overflow-hidden`}>
    <Image
      className="object-cover"
      height={dim}
      width={dim}
      alt="Avatar"
      src={src ||"/images/placeholder.jpeg"}
      />
      </div>
  )
};

export default Avatar;