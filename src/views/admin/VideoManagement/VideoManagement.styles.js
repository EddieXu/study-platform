import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const EmptyDataElement = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
