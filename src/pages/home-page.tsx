import { styled } from "styled-components";

import teddy from "../images/teddy.jpeg";
import { Header1, Header3, Text, TextLink } from "../components/text";
import { Image } from "../components/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    document.title = "About | Teddy Clark";
  }, []);

  useEffect(() => {
    if (!animationTriggered && !localStorage.getItem("animationTriggered")) {
      setAnimationTriggered(true);
      localStorage.setItem("animationTriggered", "true");
    }
  }, [animationTriggered]);

  return (
    <>
      <Header1>
        {!animationTriggered ? (
          <TypeAnimation
            sequence={["Hi!", 500, "Hi! I'm Teddy Clark"]}
            speed={32}
            repeat={0}
          />
        ) : (
          <>
            <span>Hi! I'm Teddy Clark</span>
            <TypeAnimation sequence={[""]} speed={32} repeat={0} />
          </>
        )}
      </Header1>

      <SummaryContainer>
        <TextContainer>
          <Text>
            I'm a software engineer based in New York City, and I'm looking for
            a new role in 2024.
          </Text>

          <Text>
            I have 2 years of experience at Bolt, where I helped build and scale
            Bolt's checkout product using React, TypeScript, and GoLang.
          </Text>

          <Text>
            I am pursuing a Master's Degree in Computer Science at New York
            University through part-time study. I received my Bachelor's Degree
            in Computer Science from the University of Virginia in 2021.
          </Text>
        </TextContainer>

        <ImageContainer>
          <Image src={teddy} alt="Teddy Clark" width={250} height={250} />
        </ImageContainer>
      </SummaryContainer>

      <ContactContainer>
        <Header3>Get in touch</Header3>

        <TextContainer>
          <Text>
            Connect with me on{" "}
            <TextLink
              target="_blank"
              href="https://www.linkedin.com/in/teddyclark/"
            >
              LinkedIn
            </TextLink>{" "}
            or check out my projects on{" "}
            <TextLink target="_blank" href="https://github.com/teddyclark/">
              GitHub
            </TextLink>
            . You can also reach out to me directly at{" "}
            <TextLink href="mailto:tedclark72@gmail.com">
              tedclark72@gmail.com
            </TextLink>
            .
          </Text>
        </TextContainer>
      </ContactContainer>
    </>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
`;

const TextContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  width: 54%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  padding: 18px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
