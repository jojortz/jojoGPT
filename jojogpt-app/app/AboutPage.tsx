'use client';

import React from "react";
import { SafeUser } from "./types";
import Container from "./components/Container";
import Heading from "./components/Heading";
import Button from "./components/Button";
import useRegisterModal from "./hooks/useRegisterModal";
import Image from "next/image";
import Link from "./components/Link";
import useLoginModal from "./hooks/useLoginModal";

interface AboutPageProps {
  currentUser: SafeUser | null;
}

const AboutPage: React.FC<AboutPageProps> = ({
  currentUser
}) => {
  const loginModal = useLoginModal();

  return (
    <Container>
      <Heading
        title="Welcome to JojoGPT"
      />
      <div
        className="
          w-full
          h-[40vh]
          overflow-hidden
          rounded-xl
          relative
        "
      >
        <Image
          alt="chat"
          fill
          src="/images/about_jojogpt.gif"
          className="object-cover w-full"
        />
      </div>
      <div className="relative p-6 flex flex-col gap-6">
        <span>
          JojoGPT is my first foray into AI. The idea was sparked when I found
          <Link
            text="this video"
            href="https://www.youtube.com/watch?v=kCc8FmEb1nY"
            newTab={true}
          />
          by Andrej Karpathy, where he builds a nanoGPT from scratch and trains it on Shakespeare. I decided to follow that tutorial, but to train it on my texting. This is the result.
        </span>
        <span>
          To see some fun examples of conversations, check out the Conversations page.
          Once you've logged in, check out the JojoMessage, page to message JojoGPT.
        </span>
      </div>
      {!currentUser && (
        <Button
          label="Log in"
          onClick={() => { loginModal.onOpen() }}
        />
      )}
    </Container>
  )
};

export default AboutPage;