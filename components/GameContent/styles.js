import styled from "styled-components";
import { primaryBackground } from "../../styles/variables";

export const container = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const sliderWrapper = styled.div`
  display: none;
  margin: 20px auto 0 auto;
  width: 480px;

  @media (min-width: 600px) {
    display: block;
  }
`;

export const title = styled.h2`
  font-size: 36px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 54px;
  }
`;

export const url = styled.a`
  color: #fff;
  text-align: center;
  display: block;
  margin: 0 auto;
  font-size: 22px;
`;

export const platformsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const platform = styled.div`
  background: ${primaryBackground};
  padding: 15px;
  margin-left: ${(props) => props.ml}px;
  font-size: 22px;
  font-weight: 400;
  margin-top: 20px;
`;

export const aboutTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-top: 40px;
`;

export const aboutText = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;
