import { styled } from "styled-components";

export const Image = styled.img`
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`;
