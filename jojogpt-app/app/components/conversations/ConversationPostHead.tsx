import Image from "next/image";
import Heading from "../Heading";

interface ConversationPostHeadProps {
  title: string;
  imgSrc: string;
}

const ConversationPostHead: React.FC<ConversationPostHeadProps> = ({
  title,
  imgSrc
}) => {
  console.log('new image', imgSrc);
  return (
    <>
      <Heading
        title={title}
      />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
        "
      >
        <Image
          alt="Image"
          src={imgSrc}
          fill
          className="object-cover w-full"
        />
        </div>
    </>
  )
};

export default ConversationPostHead;