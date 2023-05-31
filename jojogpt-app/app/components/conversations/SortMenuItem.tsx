'use client';
import { IconType } from "react-icons";

interface SortMenuItemProps {
  onClick: () => void;
  label: string;
  icon?: IconType;
}

const SortMenuItem: React.FC<SortMenuItemProps> = ({
  onClick,
  label,
  icon: Icon
}) => {
  return (
    <div className="
      px-4
      py-3
      hover:bg-neutral-100
      transition
      font-semibold
      text-base
      flex
      flex-row
      gap-3
      justify-start
      align center
      text-neutral-700/70
    "
      onClick={onClick}
    >
      {Icon && (<Icon size={18}/>)}
      <div>
        {label}
      </div>
    </div>
  )
};

export default SortMenuItem;