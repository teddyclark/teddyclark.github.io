import styled from "styled-components";
import { Header1, Header3, Text, TextLink } from "../components/text";
import { Image } from "../components/image";

import scream from "../images/scream.png";
import film_search from "../images/film-search.png";
import rowingGame from "../images/rowinggame.png";
import website from "../images/website.png";
import java from "../images/java-svgrepo-com.svg";
import unity from "../images/unity-svgrepo-com.svg";
import react from "../images/react-svgrepo-com.svg";
import typescript from "../images/typescript-official-svgrepo-com.svg";
import csharp from "../images/c-sharp-svgrepo-com.svg";
import chatgpt from "../images/chatgpt.svg";
import tmdb_logo from "../images/tmdb-logo.svg";

import { ReactNode, useEffect } from "react";

export const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects | Teddy Clark";
  }, []);

  return (
    <>
      <Header1>Projects</Header1>

      <ProjectsContainer>
        <Project
          imageSrc={film_search}
          imageAlt="film mood search"
          title="Film Mood Search"
          logos={[react, typescript, chatgpt, tmdb_logo]}
          description={
            <>
              <Text>
                A web app that gives movie recommendations based off of whatever
                the user is currently in the mood for. Uses APIs from OpenAI and
                the TMDb movie database. View the code on{" "}
                <TextLink
                  href="https://github.com/teddyclark/film-vibe-search"
                  target="_blank"
                >
                  GitHub
                </TextLink>
                , and visit the web app{" "}
                <TextLink
                  href="https://film-vibe-search.vercel.app/"
                  target="_blank"
                >
                  here
                </TextLink>
                .
              </Text>
            </>
          }
        />

        <Project
          imageSrc={scream}
          imageAlt="vr interactive museum"
          title="VR Interactive Museum"
          logos={[unity, csharp]}
          description={
            <>
              <Text>
                An interactive art museum that I built using the Google
                Cardboard XR Plugin for Unity. The user can explore the museum
                and interact with the art using a gaze-based UI. View the code
                on{" "}
                <TextLink
                  href="https://github.com/teddyclark/unity-xr-vr-museum"
                  target="_blank"
                >
                  GitHub
                </TextLink>
                .
              </Text>
            </>
          }
        />

        <Project
          imageSrc={rowingGame}
          imageAlt="rowing game"
          title="Rowing Game"
          logos={[java]}
          description={
            <>
              <Text>
                A simple infinite runner made with Java. The player must avoid
                obstacles in order to get as far as possible, and the boat
                speeds up as the player gets further. View the code on{" "}
                <TextLink
                  href="https://github.com/teddyclark/rowing-game"
                  target="_blank"
                >
                  GitHub
                </TextLink>
                .
              </Text>
            </>
          }
        />

        <Project
          imageSrc={website}
          imageAlt="personal website"
          title="Personal Website"
          logos={[react, typescript]}
          description={
            <>
              <Text>
                This personal website is made to showcase a bit of what I've
                been working on. View the code on{" "}
                <TextLink
                  href="https://github.com/teddyclark/personal-website"
                  target="_blank"
                >
                  GitHub
                </TextLink>
                .
              </Text>
            </>
          }
        />
      </ProjectsContainer>
    </>
  );
};

export const Project = ({
  imageSrc,
  imageAlt,
  title,
  description,
  logos,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: ReactNode;
  logos: string[];
}) => {
  return (
    <ProjectContainer>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={250}
        height={250}
        style={{ marginTop: "24px", objectFit: "cover" }}
      />

      <Summary>
        <TextContainer>
          <Header3>{title}</Header3>

          {description}
        </TextContainer>

        <LogoRow>
          {logos.map((logo) => {
            if (logo === tmdb_logo) {
              return (
                <Logo
                  src={logo}
                  alt={logo}
                  style={{ width: "64px", height: "32px" }}
                />
              );
            }

            return <Logo src={logo} alt={logo} />;
          })}
        </LogoRow>
      </Summary>
    </ProjectContainer>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 16px;

  @media (max-width: 768px) {
    padding-top: 0;
    gap: 48px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 54%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: "flex";
  flex-direction: "column";
`;

const LogoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 8px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;
