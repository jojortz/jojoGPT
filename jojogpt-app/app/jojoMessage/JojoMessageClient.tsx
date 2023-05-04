import getCurrentUser from "../actions/getCurrentUser";
import Container from "../components/Container"
import Heading from "../components/Heading";
import { SafeUser } from "../types";

interface JojoMessageClientProps {
  currentUser: SafeUser;
}

const JojoMessageClient: React.FC<JojoMessageClientProps> = ({
  currentUser
}) => {
  return (
    <Container>
      <Heading
        title="jojoMessage"
        subtitle="Text and create new conversations with jojoGPT"
      />
    </Container>
  )
};

export default JojoMessageClient;