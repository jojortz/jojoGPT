'use client';

import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: Icon;
}

const MenuItem: React.FC<MenuItemProps> = ({
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
      flex
      flex-row
      justify-between
    "
      onClick={onClick}
    >
      <div>
        {label}
      </div>
      {/* {Icon && <Icon/>} */}
    </div>
  )
};

export default MenuItem;