import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: calc(100% - 240px);
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40000;
  backdrop-filter: blur(5px);
`;
