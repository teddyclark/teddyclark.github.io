import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Navigation } from "../components/navigation";

export const Root = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Navigation />

        <div style={{ paddingTop: "48px" }}>
          <Outlet />
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #0e2115;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  color: #fffef5;
`;

const ContentContainer = styled.div`
  width: 80%;
  max-width: 850px;
  align-items: center;
  justify-content: center;
`;
