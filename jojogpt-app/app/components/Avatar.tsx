'use client';

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  dim?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, dim = 30 }) => {
  return (
    <div className={`h-[${dim}px] w-[${dim}px] relative`}>
      <Image
        src={src || "/images/placeholder.jpeg"}
        alt="Avatar"
        className={`rounded-full`}
        fill
        style={{objectFit: "cover"}}
      />
    </div>
  )
};

export default Avatar;