import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink path="/" title="About" />
        </NavigationItem>

        <NavigationItem>
          <NavigationLink path="/projects" title="Projects" />
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

export const NavigationLink = ({
  title,
  path,
}: {
  title: string;
  path: string;
}) => {
  return (
    <NavLink
      to={path}
      style={({ isActive, isPending }) => {
        return {
          color: isPending ? "#59de8c" : "#fffef5",
          textDecoration: isActive ? "underline" : "none",
        };
      }}
    >
      {title}
    </NavLink>
  );
};

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: "IBMPlexMono-Bold", monospace;
  font-size: 20px;

  padding-top: 24px;
  padding-right: 10%;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const NavigationItem = styled.li`
  list-style: none;
  text-decoration: none;
`;
