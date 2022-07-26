import styled from "styled-components";

export const header = styled.header`
  display: flex;
  height: 80px;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
`;

export const home = styled.a`
  font-weight: 700;
  font-size: 22px;
  cursor: pointer;

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;
