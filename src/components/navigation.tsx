import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavLink to="/">Home</NavLink>
        </NavigationItem>

        <NavigationItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav`
  display: flex;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const NavigationItem = styled.li`
  list-style: none;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
