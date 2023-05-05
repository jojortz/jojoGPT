import NewConvoButton from "./NewConvoButton";

const ConversationsHeader = () => {

  return (
    <div
      className="
        flex
        flex-row
        justify-end
        h-[60px]
        items-center
        p-5
      "
    >
      <NewConvoButton/>
    </div>
  )
};

export default ConversationsHeader;