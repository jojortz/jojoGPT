import Container from "../components/Container"
import Heading from "../components/Heading";
import JojoMessageComponent from "../components/jojoMessage/JojoMessageComponent";
import { SafeUser } from "../types";

interface JojoMessageClientProps {
  currentUser: SafeUser | null;
}

const JojoMessageClient: React.FC<JojoMessageClientProps> = ({
  currentUser
}) => {
  return (
    <Container>
      <div
        className="
          flex
          flex-col
          h-[80vh]
        "
      >
        <Heading
          title="jojoMessage"
          subtitle="Text and create new conversations with jojoGPT"
        />
        <JojoMessageComponent currentUser={currentUser} />
      </div>
    </Container>
  )
};

export default JojoMessageClient;