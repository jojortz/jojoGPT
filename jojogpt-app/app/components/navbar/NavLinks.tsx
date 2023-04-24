const NavLinks = () => {
  return (
    <div
      className="
          flex
          flex-row
          items-center
          justify-between
        "
    >
      <div
        className="
         text-sm
         font-semibold
         px-6
        "
      >
        Home
      </div>
      <div
        className="
          text-sm
          font-semibold
          px-6
          border-x-[1px]
          flex-1
          text-center
        "
      >
        Message
      </div>
      <div
        className="
          text-sm
          font-semibold
          px-6
        "
      >
        Forum
      </div>
    </div>
  )
};

export default NavLinks;