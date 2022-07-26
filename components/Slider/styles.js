import styled from "styled-components";

export const sliderWrapper = styled.div`
  width: ${(props) => props.width}px;
  overflow: hidden;
  position: relative;
  height: ${(props) => props.height}px;
`;

export const roller = styled.div`
  display: flex;
  position: absolute;
  width: ${(props) => props.width}px;
  transform: translateX(${(props) => -props.transfrom}px);
  transition: 0.5s;
`;

export const svg = styled.svg`
  transform: rotate(${(props) => `${props.rotate}deg`});
`;

export const btn = styled.button`
  position: absolute;
  width: 50px;
  height: 100%;
  ${(props) => (props.left ? `left: ${props.left}` : "")}
  ${(props) => (props.right ? `right: ${props.right}` : "")};
  cursor: pointer;
  background: none;
`;
