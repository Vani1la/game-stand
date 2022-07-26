import styled from "styled-components";
import { primaryBackground } from "../../styles/variables";

export const input = styled.input`
  height: 40px;
  border-radius: 12px;
  width: 60%;
  background: ${primaryBackground};
  color: #fff;
  padding: 15px;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;
