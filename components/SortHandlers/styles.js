import styled from "styled-components";
import { primaryBackground } from "../../styles/variables";

export const handlersWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  @media (min-width: 360px) {
    margin-top: 0;
  } ;
`;

export const handlerBtn = styled.button`
  background-color: ${primaryBackground};
  color: #fff;
  border: none;
  width: ${(props) => props.width};
  height: 40px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-left: ${(props) => props.left || 0};
`;

export const svg = styled.svg`
  transform: rotate(${(props) => (props.reverse ? "180deg" : 0)});
  opacity: ${(props) => (props.hidden ? 0 : 1)};
`;
