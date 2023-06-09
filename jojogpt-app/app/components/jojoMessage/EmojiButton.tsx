import IconButton from "../IconButton";
import { BsEmojiWinkFill } from "react-icons/bs";

interface EmojiButtonProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const EmojiButton: React.FC<EmojiButtonProps> = ({
  onClick
}) => {
  return (
    <IconButton icon={BsEmojiWinkFill} onClick={onClick} stroke={"0"} />
  )
};

export default EmojiButton;