import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Navigation } from "../components/navigation";

export const Root = () => {
  return (
    <PageContainer>
      <div>
        <h1>Root</h1>
        <Navigation />
      </div>
      <div>
        <Outlet />
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
