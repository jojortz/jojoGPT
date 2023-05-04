interface LinkProps {
  href: string;
  newTab: boolean;
  text: string
}

const Link: React.FC<LinkProps> = ({
  href,
  newTab,
  text
}) => {
  return (
    <div className="inline text-neutral-500 hover:text-neutral-400">
      <a href={href} target={ newTab ? "_blank" : ""}rel="noreferrer noopener"> {text} </a>
    </div>
  )
};

export default Link;