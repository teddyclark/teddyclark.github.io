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

  background: linear-gradient(
    180deg,
    rgba(14, 33, 21, 1) 25%,
    rgba(27, 88, 57, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;

  color: #fffef5;
`;

const ContentContainer = styled.div`
  width: 80%;
  max-width: 850px;
  align-items: center;
  justify-content: center;
  padding-bottom: 128px;
`;
