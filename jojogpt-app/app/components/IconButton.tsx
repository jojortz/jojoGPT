'use client';

import { IconType } from "react-icons";
interface IconButtonProps {
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  size?: number;
  stroke?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  size = 20,
  stroke = "1",
}) => {

  return (
    <div
      className="
        cursor-pointer
        text-neutral-400
        rounded-md
        hover:bg-neutral-100
        hover:bg-opacity-25
        w-[30px]
        h-[30px]
        flex
        flex-row
        items-center
        justify-center
      "
      onClick={onClick}
    >
      <Icon
        size={size}
        className={`stroke-${stroke}`}
      />
    </div>
  )
};

export default IconButton;