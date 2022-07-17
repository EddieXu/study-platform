import styled from "styled-components";

export const PlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;
  svg {
    width: 40px;
    height: 40px;
    fill: white !important;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  :hover {
    cursor: pointer;
    ${PlayWrapper} {
      display: flex;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
