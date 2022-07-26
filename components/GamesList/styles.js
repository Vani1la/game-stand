import styled from "styled-components";
import { primaryBackground } from "../../styles/variables";

export const container = styled.div`
  width: 90%;
  max-width: 480px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 710px;
  }
`;

export const gameWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: ${primaryBackground};
  border-radius: 12px;
  padding-bottom: 15px;
`;

export const gameName = styled.a`
  outline: none;
  font-size: 28px;
  font-weight: 700;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

export const textSecondary = styled.span`
  color: hsla(0, 0%, 100%, 0.4);
`;

export const gameInfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;

export const loaderWrapper = styled.div`
  width: 100px;
  margin: 0 auto;
`;

export const handlersWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
