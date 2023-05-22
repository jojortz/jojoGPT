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
  return (
    <>
      <Heading
        title={title}
      />
      <div
        className="
            w-full
            h-[55vh]
            overflow-hidden
            rounded-xl
            relative
            border-[1px]
            shadow-md
          "
      >
        <Image
          alt="Image"
          src={imgSrc}
          fill
          className="object-contain rounded-xl"
        />
      </div>
    </>
  )
};

export default ConversationPostHead;