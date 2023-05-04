import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import JojoMessageClient from "./JojoMessageClient";

const JojoMessagePage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <ClientOnly>
      <JojoMessageClient currentUser={currentUser}/>
    </ClientOnly>
  )
};

export default JojoMessagePage;