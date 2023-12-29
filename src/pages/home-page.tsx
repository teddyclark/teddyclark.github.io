import { styled } from "styled-components";

import teddy from "../images/teddy.jpeg";
import { Header1, Header3, Text } from "../components/text";
import { Image } from "../components/image";

export const HomePage = () => {
  return (
    <>
      <Header1>Hi! I'm Teddy Clark</Header1>

      <ContentContainer>
        <TextContainer>
          <Text>
            I'm a software engineer based in New York City, and I'm looking for
            a new role in 2024.
          </Text>

          <Text>
            I have 2 years of experience at Bolt, where I helped build and scale
            scale Bolt's checkout product using React, TypeScript, and GoLang.
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
      </ContentContainer>

      <ContactContainer>
        <Header3>Get in touch</Header3>
      </ContactContainer>
    </>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-top: 48px;
`;

const TextContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  width: 54%;
`;

const ImageContainer = styled.div`
  padding: 18px;
`;
